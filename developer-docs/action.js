const { fetchOpenApiJson, PLATFORM_BASE_URLS } = require("./ctx.js");
const { readFileSync, writeFileSync, mkdirSync } = require("fs");

const path = require("path");

const openApiJsonPath = path.join(__dirname, "api-reference", "openapi.json");

const apiReferenceEndpointsDir = path.join(
	__dirname,
	"api-reference",
	"endpoint",
);

/**
 * Updates the OpenAPI documentation by fetching the latest OpenAPI JSON from the specified branch
 * and merging it with the current OpenAPI JSON.
 *
 * @param {string} [branch="main"] - The branch from which to fetch the OpenAPI JSON.
 * @returns {Promise<Object>} The updated OpenAPI JSON object.
 */
const updateDocsOpenApi = async (branch = "main") => {
	console.log("Updating OpenAPI docs");

	const currentOpenApiJson = JSON.parse(readFileSync(openApiJsonPath, "utf8"));
	const fetchedOpenApiJson = await fetchOpenApiJson(branch);

	if (!fetchedOpenApiJson) return currentOpenApiJson;

	const openApiJson = { ...currentOpenApiJson, ...fetchedOpenApiJson };

	writeFileSync(openApiJsonPath, JSON.stringify(openApiJson));

	return openApiJson;
};

/**
 * Creates an MDX file for the API reference endpoint based on the provided OpenAPI specification and path.
 *
 * @param {Record<string, any>} openApiSpec - The OpenAPI specification object.
 * @param {string} endPointPath - The path of the API endpoint.
 * @returns {Promise<string>}
 */
const createApiReferenceMdxFiles = (openApiSpec, endPointPath) => {
	pathData = openApiSpec["paths"][endPointPath];

	const directoryToWrite = endPointPath
		.split("/")
		.filter((entry) => entry.length > 0);

	mkdirSync(path.join(apiReferenceEndpointsDir, ...directoryToWrite), {
		recursive: true,
	});

	const methods = Object.keys(pathData);

	const filesContent = methods.map((method) => {
		const content = `---
title: ${pathData[method].summary ?? endPointPath}
openapi: '${method.toUpperCase()} ${endPointPath}'
---`;
		return content;
	});

	methods.forEach((method, idx) => {
		const filePath = path.join(
			apiReferenceEndpointsDir,
			...directoryToWrite,
			`${method.toLowerCase()}.mdx`,
		);
		console.log(`Writing content for ${method} ${endPointPath} to ${filePath}`);
		writeFileSync(filePath, filesContent[idx]);
	});
};

/**
 * Generates MDX files for API reference endpoints by updating the OpenAPI JSON and processing endpoints.
 *
 * @param {string} [branch="main"] - The branch from which to fetch the OpenAPI JSON.
 * @returns {Promise<void>}
 */
const generateMdx = async (branch = "main") => {
	console.log(`Generating MDX files for ${branch} branch`);
	const updatedOpenApiJson = await updateDocsOpenApi(branch);

	Object.keys(updatedOpenApiJson["paths"]).forEach((path) => {
		createApiReferenceMdxFiles(updatedOpenApiJson, path);
	});
};

generateMdx();
