<div align="center">
  <h1>Alchemyst-ai Docs</h1>
  <p><strong>The central hub for all Alchemyst-ai documentation.</strong></p>

  <p>
    <a href="https://github.com/Alchemyst-ai/docs/stargazers"><img src="https://img.shields.io/github/stars/Alchemyst-ai/docs?style=social" alt="GitHub stars"></a>
    <a href="https://github.com/Alchemyst-ai/docs/network"><img src="https://img.shields.io/github/forks/Alchemyst-ai/docs?style=social" alt="GitHub forks"></a>
    <a href="https://github.com/Alchemyst-ai/docs/graphs/contributors"><img src="https://img.shields.io/github/contributors/Alchemyst-ai/docs" alt="Contributors"></a>

  </p>
</div>

---

## 📜 Table of Contents

* [✅ Project Overview](#-project-overview)
* [🚀 Features](#-features)
* [📦 Tech Stack](#-tech-stack)
* [📁 Folder Structure](#-folder-structure)
* [🛠️ Getting Started](#️-getting-started)
* [🧑‍💻 Contributing](#-contributing)
* [📄 License](#-license)

---

## ✅ Project Overview

Welcome to the official documentation repository for `Alchemyst-ai`! This monorepo is the single source of truth for all documentation related to our projects, APIs, and tools. We believe in the power of clear, concise, and accessible information, and this repository is our commitment to empowering our users and developers.

Our documentation is primarily written in **MDX**, allowing us to combine the readability of Markdown with the power and interactivity of JSX components, creating a rich and engaging learning experience.

---

## 🚀 Features

* **Comprehensive Guides:** Detailed walkthroughs for getting started and mastering advanced concepts.
* **API Reference:** Fully documented endpoints and models for seamless integration.
* **Interactive Examples:** Live code blocks and demos to see our tools in action.
* **Centralized Knowledge:** One place to find all official information about the Alchemyst-ai ecosystem.

---

## 📦 Tech Stack

This documentation site is built with modern, developer-friendly technologies:

* **[MDX](https://mdxjs.com/):** For writing content that combines Markdown and JSX.
* **[React.js](https://react.dev/):** For building interactive UI components within the documentation.
* **[Next.js](https://nextjs.org/):** As the framework for our static and server-rendered documentation site.
* **[Node.js](https://nodejs.org/):** For the development environment and server-side logic.

---

## 📁 Folder Structure

Here is a basic overview of the directory layout in this monorepo:

```bash
├── .github/              # Community health files (e.g., CODE_OF_CONDUCT.md)
├── developer-docs/
├─ README.md
├─ docs.json
├─ index.mdx
├─ quickstart.mdx
├─ development.mdx
├─ api-reference/
│  ├─ introduction.mdx
│  ├─ openapi.json
│  └─ endpoint/api/v1/
│     └─ context/
│        ├─ add/post.mdx
│        ├─ delete/post.mdx
│        ├─ search/post.mdx
│        ├─ traces/{traceId}/delete/delete.mdx
│        └─ view/
│           ├─ get.mdx
│           └─ docs/get.mdx
├─ ai-context/
│  ├─ what-is-ai-context.mdx
│  ├─ why-you-need-ai-context.mdx
│  └─ how-alchemyst-works.mdx
├─ essentials/
│  ├─ code.mdx
│  ├─ images.mdx
│  ├─ markdown.mdx
│  ├─ navigation.mdx
│  ├─ reusable-snippets.mdx
│  └─ settings.mdx
├─ integrations/
│  ├─ introduction.mdx
│  ├─ sdk/
│  │  ├─ typescript-sdk.mdx
│  │  └─ python-sdk.mdx
│  └─ third-party/
│     ├─ agnoagi/python.mdx
│     ├─ aisdk/js.mdx
│     ├─ langchain/{js,python}.mdx
│     └─ llamaindex/{js,python}.mdx
├─ example-projects/
│  ├─ introduction.mdx
│  └─ team/
│     ├─ syllabai.mdx
│     └─ zendocs.mdx
├─ mcps/
│  ├─ introduction.mdx
│  ├─ mcps.mdx
│  ├─ cursor.mdx
│  ├─ claude-desktop.mdx
│  └─ visual-studio-code.mdx
├─ snippets/
│  └─ snippet-intro.mdx
├─ images/
│  └─ ...
├─ logo/
│  └─ ...
├─ action.js
└─ ctx.js
```

---

## 🛠️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js (v18 or higher recommended)
* npm or yarn

### Installation

1.  Clone the repo:
    ```sh
    git clone [https://github.com/Alchemyst-ai/docs.git](https://github.com/Alchemyst-ai/docs.git)
    ```
2.  Navigate to the project directory:
    ```sh
    cd docs
    ```
3.  Install NPM packages:
    ```sh
    npm install
    ```
4.  Run the development server:
    ```sh
    npm run dev
    ```

---

## 🧑‍💻 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

To ensure a welcoming and inclusive environment, we have a **Code of Conduct** that all contributors are expected to follow. Please read it [here](https://github.com/Alchemyst-ai/docs/blob/main/.github/CODE_OF_CONDUCT.md).

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---
