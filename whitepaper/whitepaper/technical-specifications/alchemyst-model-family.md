---
description: >-
  A deep dive into the models that we've created at Alchemyst - for content and
  action generation.
---

# Alchemyst Model Family

## Introduction

At Alchemyst, context-aware content generation and personalization play a core role at setting us apart from our competitors. Our in-house workflow planner relies on our models to create the impact by generating outputs and workflows.

As a result, we've tinkered with diverse varieties of models - starting with pre-trained Open Source models and later shifting to finetuning them to create our own variants. Our AI team is involved on a daily basis on benchmarking models and fine-tuning them for best performing inference in an ultra-economical and scalable manner.

## Scalability vs Performance

The scalability and economical viability of an LLM and its performance are, more often that not, tradeoffs that stem from the fact that LLMs with more parameters (i.e., bigger models) are proven to better generalize over a given training set, which contains multitudes of possible tasks for a huge variety of possible use cases for the LLM.

This often leads to cases of varying performance across different LLMs. To make an LLM particularly suited for a use case, we can modify their weights further by more training on a high quality dataset with data suited to our given use case. We call this LLM finetuning.

A [report by Predibase](https://predibase.com/fine-tuning-index) shows that smaller LLMs that have been fine tuned on a particular use case with high quality data can beat much larger LLMs for that use case.

## Why Alchemyst models?

The Alchemyst Family of Models are a set of Large Models developed in-house by Alchemyst - optimised for [large-scale cost-efficient](https://gist.github.com/jerzydziewierz/3b4a169c8d7cba89e18f613b32c3f52b) deployments, following instructions, and generating authentic and concise outputs. They enable us to stay at the top of our game even when [others are down](https://www.calcalistech.com/ctechnews/article/rjair32er). You can rely on Alchemysts getting your work done when other traditional LLM Providers may be down - simply because all of our language-based tasks are done in-house, rather than wrapping an [API call to OpenAI’s GPT models](https://learnprompting.org/blog/2024/2/4/gpt\_wrappers).

We have two families of models that we use internally at Alchemyst:

1. C Family - For Content Generation
2. X Family - For Action Generation

### Alchemyst C Family

These are traditional Large Language Models for content generation and review tasks for our clients to see. Alchemyst C models sit at the bottom of the stack, to generate outputs from the given context and steps, if any. These are the models that directly differentiate the style of the outputs of Alchemysts from our competitors.

The first of this family, Alchemyst C1, is based on the Phi3-Vision-128k model released in public domain by Microsoft AI Research, fine tuned on our own proprietary dataset for the C Models. The dataset covers the following areas:

1. **Content Generation**: Given external information, how well can the model create new sentences based on it.
2. **Instruction following**: Given a set of steps, how well can the model follow those steps and arrive at a particular solution.
3. **Summarization**: Given external information, how well can the model summarize the most important points in the context.
4. **Paraphrasing**: Given external information, how well can the model create equivalent-meaning sentences that differ in structure.
5. **Reasoning**: Given a goal at hand, how well can the model reason about accomplishing the goal.

This is how the training dataset distribution across various tasks looks like for Alchemyst C1:

<figure><img src="../../.gitbook/assets/newplot.png" alt=""><figcaption></figcaption></figure>

We extend the abilities of Alchemyst C1 by adding the capabilities of IndicLM models by AI4Bharat. IndicLM models [demonstrate better multilingual capabilities](https://ai4bharat.iitm.ac.in/indic-trans2/) than Google Translate. This allows multilingual capabilities to be directly delivered to our clients.

### Alchemyst X Family

The Alchemyst X Family of models present a new paradigm of software architecture - the _**AI-Native Tech Stack**_.&#x20;

### What is the AI-Native Tech Stack?

An AI Native Tech stack is a new software architecture where orchestration is powered by Natural Language, wherein we have a Large Action Model (LAM) - a Large Language Model oriented to perform actions as the main generator of business logic oriented towards the user queries.

Let's have a quick look at the following diagram that shows how an LAM (in this case, Gorilla LAM) works. (Image Credits: [🦍 Gorilla: Large Language Model Connected with Massive APIs](https://gorilla.cs.berkeley.edu/)):&#x20;

<figure><img src="https://gorilla.cs.berkeley.edu/assets/img/blog_post_1_teaser.gif" alt=""><figcaption><p>Illustration of the working of Gorilla Large Action Model (LAM)</p></figcaption></figure>

### Why the AI-Native Tech Stack?

We realized that the current state of AI-enabled tech stack that is marketed so heavily by different organizations is essentially the following flow:

* Create a natural language interface
* Convert it into API calls using mostly "convert this to JSON with the following examples" type of instructions
* Send the generated JSON as the body of API calls

At Alchemyst, we realized that this workflow is brittle by design. Let's take the following cases:

* What if the user's query generates something that's invalid or worse, an edge case that is not covered by the concerned API?
* What if the user's query isn't given in one of the LLM call's "Example Input-Output" pairs?
* What if we use more tokens than that can be covered by context window length of the LLM?

There are loads of more questions, but this should give a gist of it.

#### How Alchemyst X1 solves it

_The short answer:_&#x20;

We essentially fine tune the model to align with our coding practices at Alchemyst - essentially ingraining the coding "metapatterns" in our codebase into it.

_The long answer_

We do that by training the model on the patterns of our codebase, along with few-shot RAG at inference time. Our codebase is segmented and stored in chunks in the database used for RAG. Relevant entries are updated as soon as there are any changes in our git tree. This also means that the database can act as a potential cache in case of failure events (e.g., overload, inference delays, etc).

This enables us to build a fully AI-powered job orchestrator that we can safely deploy our features in a fully Natural Language-powered way.

### Where does X1 come in the AI-Native Tech Stack?

The Alchemyst X models will mainly be powering the segments in our tech stack that are related to context processing and workflow planning. The first version of this family of models, Alchemyst X1, is based on the Gorilla-openfunctions-v2 model released in public domain by UC Berkeley. We have further fine tuned on a proprietary dataset containing API calls to our own internal APIs and infrastructure. The dataset covers the following areas:

1. **Code Generation**: Given the goal, generate a code that completes the goal, referring to the internal codebase at Alchemyst.
2. **Instruction following**: Given a set of steps, how well can the model follow those steps and arrive at a particular solution.
3. **Reasoning**: Given a goal at hand, how well can the model reason about accomplishing the goal.

This is how the training dataset distribution across various tasks looks like for Alchemyst X1:

<figure><img src="../../.gitbook/assets/training data - x1.png" alt=""><figcaption></figcaption></figure>

## TL;DR

* We have two families of Alchemyst Models, Alchemyst C and Alchemyst X.

{% tabs %}
{% tab title="Alchemyst C" %}
* Oriented for content generation and instruction following
* Based on Phi3-Vision-128k model
* Consumer-facing
* Multimodal
{% endtab %}

{% tab title="Alchemyst X" %}
* Oriented for business logic code generation and instruction following
* Based on Gorilla-openfunctions-v2 model
* Internal; cannot be seen by user
* Text-based Query-to-code model
{% endtab %}
{% endtabs %}
