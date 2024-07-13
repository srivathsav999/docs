---
description: >-
  The mission, vision, and creating the next gen-AI digital employees ft.
  technology.
---

# Technical Summary

## The mission

> **We’re Not Building AI Bots. We’re Not Building AI Agents. We’re Building Alchemysts.**

There are 100s of companies creating faceless AI agents/tools to automate specific tasks – we're building it differently. Alchemysts act as additional team members, taking over where they’re able to and calling in human help when needed. We envision a world in which humans & Alchemysts work alongside one another to propel humanity forward and drive economic growth that benefits everybody.

## The vision

Alchemyst AI envisions to build an entire ecosystem of gen-AI digital employees which can interact with each other and perform highly intelligent functional components in B2B early stage to mid-sized enterprises.\
\
We aim to build Alchemysts as force multipliers within teams across various industries. Starting with Maya, our first Alchemyst for Sales Development. We would soon be horizontally scaling to other roles as well.

### What are Alchemysts?

Alchemysts can be thought of as virtual AI-based personas that can execute workflows throughout the day, across the company’s different verticals, supplementing your workforce and enabling teams to be 50x more productive. So in cases where you have understaffed teams, Alchemysts can bolster the teams upto the necessary level of bandwidth required. With multilingual and multimodal capabilities, they are not just another additional tool for your team, but way more than that - think of intelligent interns/junior employees who can bear the brunt of laborious work, while your teams can free up bandwidth for more creativity-oriented tasks.

## The execution

> _“Do one thing, do it well”_ \
> \~ The Linux Motto

Since inception, we are taking a bottom-up approach for building our platform as opposed to a top-down approach usually seen in SaaS products - keeping the client experience first.\
\
We are building functional units that can be customised to the utmost possible degree. Each unit is logically independent, and is clearly delineated from the other units through interfaces and facades. This lets users take full advantage of almost all capabilities from any vertical. Think of it like Lego blocks - you can mix-and-match almost any component with another one, you just need to retrofit them with the respective interface requirements of the components you want to use. The virtual personas will be built from these lego bricks, to allow us to prototype fast and improve even faster.

A birds-eye view of the coupling of the components looks as follows:

While keeping the user in a loop, the tech looks something like this:\


<figure><img src="https://lh7-us.googleusercontent.com/docsz/AD_4nXdZ-P23HNq4QLjVALUWsls-9X6x6kf5Z7MicpGkKsRjNT2Rrsqw5WY8olg4V3CBChb634IENCSzgMK5fjgh1Gflk0UICnAIkVrCyauKbrql_ORbXpdORbvVGrh6oz9ya8MtgTz32f536px_m4CZnoBNXFBC?key=GpwUDRtVHlzYbr-sqt0rVg" alt=""><figcaption></figcaption></figure>

\


In the next section, we deep dive into the meaning of these diagrams - how we make so much flexibility possible without trading off on performance.

## Technical Summary

The Alchemyst platform is a “platform” in its true sense, serving as a launchpad for AI-native workflow executions across teams, as opposed to the hardcoded agent-based workflows. As such, we decided to build our platform from the ground up, keeping customizability for end users in mind. So we have divided our entire platform into 4 major segments, which are loosely linked enough to accommodate most, if not all, of the technical requirements that users might have.

* **User Platform:** It all starts here - users enter our platform through the User Platform (early prototype deployed [here](https://platform.alchemyst-ai.vercel.app)). The user signs up, and surfs through the platform, adjusting the Alchemysts along the way. Yep, this is your playground, with facilities for API Keys to be set up too. We also have tools for Alchemysts here, integrating them with a chat user interface for a cohesive experience. For example, we have the Leads Prospector for Maya here.\

* **Integrations**: Our integrations let you make full use of the corresponding platforms. Each integration lets users take advantage of the platform, and bridges with the Core segment (mentioned below) - they are built keeping in mind that they should have the maximum possible coverage of our platform - so that you can seamlessly have a workflow, no matter what the platform is. We try to leverage the full power of the respective platform-specific SDKs here. They are mostly built out in Python/JS.\
  \
  Additionally, we plan to expose a few generic APIs to Enterprise consumers in case they want further control of how data goes in and out of their workflows, or in case they want integrations for a platform that we don’t support yet.\

* **Core Segment:** This is where most of the heavy-lifting (or should we say, alchemy 🤪) occurs. Before we move on, let’s clear out a few terminologies that we will be using henceforth:\

  * _deterministic task_: Tasks that can be defined/ingested/used by hard-coded logic covering use cases like agents dispatching, information retrieval, etc (a.k.a, the good old software engineering). You know that a particular set of inputs would result in a particular set of outputs at any time. Think of it as a surjective mapping.
  * _non-deterministic task_: Tasks that cannot be defined by hard coded logic.. For example, consider instructions in natural language, like “Do X for Y” or “Do X in Y” (yeah we don’t want to try listing all use-cases, deciphering the Caesar Cipher back in 9th Century was easier 😵)\
    \
    Determining whether the task is a non-deterministic task or a deterministic one is something that can be defined by structure - deterministic tasks have a defined structure, while the non-deterministic ones don’t have it. Finding this out is easy if you can define a Pydantic schemas for every type of inputs and outputs in case of deterministic tasks.\
    \
    For the tech, we use Python coupled with web frameworks like FastAPI mostly. Other respective libraries and tools are used accordingly. The DevOps starts coming seriously here.\
    \
    From a technical perspective, you can think of the Core as the place where most of the deterministic tasks related to co-ordinations occur. The non-deterministic tasks (and a few deterministic ones) are left to the Microservices Segment discussed below.\
    \


<figure><img src=".gitbook/assets/image.png" alt=""><figcaption><p>Diagram showing a surjective function. Set A denotes inputs, Set B denotes outputs.</p></figcaption></figure>

*   **Microservices Segment**:  All data analysis/deep-learning/prompt engineering/recommendation systems happen here. The responses that make Alchemysts force multipliers and not just another tool are cooked here. DevOps kicks in here at full force, and we have dashboards, monitors, etc setup for the vast workloads these microservices are being made to handle. Our LLMs and other tools are hosted in this layer.\
    \
    When it comes to the tech - it’s almost too many to count. DevOps stuff like hosting LLMs, scaling servers and EC2 instances, etc. require stuff like Docker, Kubernetes, Terraform, Python, C++, etc. For the business logic of these microservices, we write the code in whatever languages/tech suits each individual use case well, and we default to Python/JavaScript/TypeScript.\


    * Python can handle most Data Processing/Prompt Engineering tasks
    * JS/TS are well-suited for tasks that involve the web - eg., web scraping/API calls/serverless stuff.


* **Database and Message Broker**: A single source of truth and coordinator for us, respectively. All data we use stays in the MongoDB Database which allows us to prototype and iterate fast, and communications are passed around with the help of the Message Broker, which is wired to all of our segments with standardized internal messaging formats. We are using Redis as a message broker here, which can also act as a cache (in a separate instance though).

## The X-Factor(s)

At Alchemyst, our technical edge lies in the following:

* The Dynamic Workflow Planner
* The Context Lake (aka Context Processor)
* Our in-house LLM and LAM models

### The Dynamic Workflow Planner

The Dynamic Workflow Planner is based on the ever-familiar review loop in teams, summarised by the diagram below.

<figure><img src="https://lh7-us.googleusercontent.com/docsz/AD_4nXf9YXXA5QU5wZq9C5NF-taKncklYfz9TRnvZ-6MvTT2k8LKknbFE4JdqOtvZ-g38MsmERvcXUASod2cfP_yyrHB5Uv30LJ4YPp7GOy1K9jOtRtslP4vGbux_l2i7woELixapQShWIRiMxKIgiOHQFCFOdpq?key=GpwUDRtVHlzYbr-sqt0rVg" alt=""><figcaption></figcaption></figure>

Except the fact that both the critique and the generation is done by AI. Humans can optionally come in for the critique and review stage as well. This leads to better alignment of results with time, as the Alchemyst automatically learns to be more aligned with the role it has been assigned to in the organization.

The following image is a birds-eye overview of how the Alchemyst Dynamic Workflow Planner works:

<figure><img src="https://lh7-us.googleusercontent.com/docsz/AD_4nXcRV23iPbDvg05CA1OeQZTcIqZ7ftvlxQ72gdYrGl-E_ClvFUHY-G3eK-LoeCdTo7NZRwmbw9cf1Xrqftp3TUNqryTkvHU4ST-OM4OGxu0bYYGVxe976QI-cVdjqZZ90dAfODgv9h_1saVNjnTWKL2zSzPJ?key=GpwUDRtVHlzYbr-sqt0rVg" alt=""><figcaption></figcaption></figure>

This leads to better alignment of outputs, as evident below:

<figure><img src="https://lh7-us.googleusercontent.com/docsz/AD_4nXc6_s1S1J_O3jmdX90Yb84qhz7nuofNQQszyaaveKNkptFl7oo2seeVrqapzkHHkUcMi8BE_7KecrvwCiGK4zGqwa7QTpcglLeqxD8lEn80ww3Q44a4Ya21YBrqLGFS_A7sJ5leSHMk1kl26ojhD2acJ8Wc?key=GpwUDRtVHlzYbr-sqt0rVg" alt=""><figcaption></figcaption></figure>

So what makes the Alchemyst do the alchemy? Enter the Context Processor (aka Context Lake) and our in-house models, Alchemyst C1 and Alchemyst X1.

### Context Lake

The Context Lake is akin to the contextual memory of the human brain. It’s where all the information is stored, and retrieved as per their relevance to the context. We built it from the scratch up, so that it beats plain text-based search or naive vector similarity search. We create “context pathways” so that the most relevant contextual information for any task an Alchemyst is given. For example, a context pathway in the above example of sending a warmup email is as follows:

<figure><img src="https://lh7-us.googleusercontent.com/docsz/AD_4nXfVVpvb7LHoFls5gxRjvuem8J6UTCnuSac5-YwQpLIDEVBSAtMtc_SZRvc-3nr-EPk1UI6grTn1yPU40gP81-aVtyEruZc8tj65EzLbR6DtZxuykH7AlH0HKBjDVeQM5uOXgZ7x4OJL2rOjXHxv7rq0dS_e?key=GpwUDRtVHlzYbr-sqt0rVg" alt=""><figcaption><p>A context pathway for sending a warmup email</p></figcaption></figure>

In the above diagram, we can clearly see how the relevant data points are being connected while generating the context. The arrows represent the pathways and the yellow boxes represent the context points. This is roughly mimicking how the human brain processes information to do a particular task - something that none of our competitors seem to do yet. This is achieved through combining multiple cutting-edge publicly available and in-house techniques that we use.&#x20;

### Alchemyst Family of Models

The Alchemyst Family of Models are a set of Large Models developed in-house by Alchemyst - optimised for [large-scale cost-efficient](https://gist.github.com/jerzydziewierz/3b4a169c8d7cba89e18f613b32c3f52b) deployments, following instructions, and generating authentic and concise outputs. They enable us to stay at the top of our game even when [others are down](https://www.calcalistech.com/ctechnews/article/rjair32er). You can rely on Alchemysts getting your work done when other traditional LLM Providers may be down - simply because all of our language-based tasks are done in-house, rather than wrapping an [API call to OpenAI’s GPT models](https://learnprompting.org/blog/2024/2/4/gpt\_wrappers).

<figure><img src="https://lh7-us.googleusercontent.com/docsz/AD_4nXd4niQo9tLjcG4MTxYUrBzZXSJzsMfmq9ZxpWXzuwCtjo7sZzD5AnzeAXYAd-GFmpqXBCEfTsExD8eSDATZqGfyvbJmSwKVA-Gh1KH9IjDl2RVNpO_waqvBt3wAwJZfrCL9ltckEuS7cgU7FVwISYgH1_CF?key=GpwUDRtVHlzYbr-sqt0rVg" alt=""><figcaption><p>Alchemyst C1 model on its private HuggingFace repository.</p></figcaption></figure>

We have two types of models:

1. **Alchemyst C models**: These are traditional Large Language Models for content generation and review tasks for our clients to see. The first of this family, Alchemyst C1, is based on the Phi3-Vision-128k model released in public domain by Microsoft AI Research, fine tuned on our own proprietary dataset. \
   \
   We extend the abilities of Alchemyst C1 by adding the capabilities of IndicLM models by AI4Bharat. IndicLM models [demonstrate better multilingual capabilities](https://ai4bharat.iitm.ac.in/indic-trans2/) than Google Translate. This allows multilingual capabilities to be directly delivered to our clients.\

2. **Alchemyst X models**: These are Large Action Models that our users won’t be able to directly interact with, but will experience the benefits of it. This will mainly be powering the segments in our tech stack that are related to context processing and workflow planning. The first version of this family of models, Alchemyst X1, is based on the Gorilla-openfunctions-v2 model released in public domain by UC Berkeley. We have further fine tuned on a proprietary dataset containing API calls to our own internal APIs and infrastructure.
