// fetch_agents.js
import fs, { readdirSync, statSync } from "fs";
import fetch from "node-fetch";
import path from "path";

const REPO_OWNER = "alchemyst-ai";
const REPO_NAME = "awesome-saas";
const TARGET_DIR = "developer-docs/example-projects/community";

const headers = { Accept: "application/vnd.github.v3+json" };

// Fetch repo tree (recursive) from GitHub API
async function fetchRepoTree() {
  const res = await fetch(
    `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/git/trees/main?recursive=1`,
    { headers }
  );
  if (!res.ok) {
    console.error("❌ Failed to fetch repo tree:", res.status, await res.text());
    process.exit(1);
  }
  return res.json();
}

// Fetch file content directly from raw.githubusercontent
async function fetchFileContent(filePath) {
  const res = await fetch(
    `https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/main/${filePath}`
  );
  if (!res.ok) {
    console.error(`❌ Failed to fetch file ${filePath}:`, res.status);
    return null;
  }
  return await res.text();
}

async function run() {
  console.log("🚀 Fetching agent READMEs from awesome-saas...");
  const tree = await fetchRepoTree();

  const readmes = tree.tree.filter((item) =>
    item.path.match(/^agents\/[^/]+\/README\.md$/)
  );

  if (readmes.length === 0) {
    console.log("⚠️ No README files found under agents/*/");
    return;
  }

  fs.mkdirSync(TARGET_DIR, { recursive: true });

  for (const file of readmes) {
    const match = file.path.match(/^agents\/([^/]+)\/README\.md$/);
    if (!match) continue;

    const agentName = match[1];
    const content = await fetchFileContent(file.path);
    if (!content) continue;

    const outPath = path.join(process.cwd(), TARGET_DIR, `${agentName}.mdx`);
    fs.writeFileSync(outPath, content, "utf-8");

    console.log(`✅ Saved ${agentName}.mdx`);
  }

  console.log("🎉 Done! All community agent READMEs fetched as .mdx files.");
}

const walk = (dir, fileList = []) => {
  const files = readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = statSync(filePath);
    if (stat.isDirectory()) {
      walk(filePath, fileList);
    } else if (file.endsWith(".mdx")) {
      fileList.push(filePath);
    }
  });
  return fileList;
};

function modifyDocsJson() {
  const docs = fs.readFileSync('./developer-docs/docs.json', { encoding: "utf-8" });
  try {
    let docsJson = JSON.parse(docs) ?? {};
    let navigationGuidesTab = ((docsJson.navigation ?? {}).tabs ?? [])
      .filter(tab => !!tab)
      .filter(tab => tab.tab === "Guides").pop();

    if (!navigationGuidesTab) return;
    let sampleProjectsGroup = (navigationGuidesTab.groups ?? [])
      .filter(group => group.group.toLowerCase() === "sample projects").pop();

    if (!sampleProjectsGroup) {
      console.error("Sample Projects group not found!");
      return;
    };

    let communityGroup = (sampleProjectsGroup.pages ?? [])
      .filter(group => typeof group !== "string")
      .filter(group => group.group === "By our community")
      .pop();

    if (!communityGroup) { console.log("Community group not found."); return };

    communityGroup.pages = walk("./developer-docs/example-projects/community")
      .map(page => page.replace(".mdx", ""))
      .map(page => page.replace(
        "example-projects/community/developer-docs/",
        ""
      ).replace("developer-docs/example-projects", "example-projects"));

    console.log(navigationGuidesTab.groups
      .map(group => Object.keys(group)));

    const navigationGuidesGroups = [
      ...navigationGuidesTab.groups
        .filter(group => group.group.toLowerCase() !== "sample projects"),
      {
        ...sampleProjectsGroup,
        pages: [
          ...sampleProjectsGroup.pages
            .filter(page => typeof page === "string" || page.group !== "By our community"),
          communityGroup
        ]
      }];

    console.log(docsJson.navigation.tabs
      .filter(tab => tab.tab.toLowerCase() !== "guides"))
    const reconstructedDocsJson = {
      ...docsJson,
      "navigation": {
        ...docsJson.navigation,
        tabs: [
          {
            ...navigationGuidesTab,
            groups: navigationGuidesGroups
          },
          ...docsJson.navigation.tabs
            .filter(tab => tab.tab.toLowerCase() !== "guides"),
        ]
      }
    }

    console.log(reconstructedDocsJson.navigation.tabs.map(tab => tab.tab))

    fs.writeFileSync("./developer-docs/docs.json", JSON.stringify(reconstructedDocsJson, null, 2));

  } catch (err) {
    console.error("Error happened while trying to modify docs.json...")
    console.error(err);
  }
}


run().catch((err) => {
  console.error("❌ Error:", err);
  process.exit(1);
}).then(modifyDocsJson);
