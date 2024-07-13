---
description: Looking into the tech that powers Alchemysts to beyond Turing Test levels
---

# Workflow Planner

## Motivation

Pushing Alchemysts to pass the [Turing test](https://en.wikipedia.org/wiki/Turing\_test) and mimic human-level behaviour, especially in a context-intensive way, is what we always do. But as human-like as AI responses might seem, getting tasks done fully through generative AI at one go is still a far cry. This is exactly where our Workflow Planner comes in.

## Background

We take a page out of the organizational behaviour to get work done: to collaborate, reflect, iterate and improve. For example, in most teams, work usually gets done through multiple iterations, as shown in the diagram below:

<figure><img src="../../.gitbook/assets/image (2).png" alt=""><figcaption></figcaption></figure>

In an iteration in a team, we have the following steps:

1. The Junior (henceforth referred as _J_) receives the work.
2. _J_ does an iteration of the work
3. _J_ sends the work to a senior (henceforth referred as _S_) for review.
4. _S_ reviews the work and sends it back to _J_. This also includes any feedback&#x20;
5. _J_ receives the review done by _S_.&#x20;
6. If the review approves for _J_'s work to be sent, _J_ stops iterating further, otherwise he goes back to step 2 again.
7. _J_ sends the work.

A pseudocode for a review iterations can be essentially thought of as:

{% code overflow="wrap" lineNumbers="true" fullWidth="false" %}
```python
def doWork(goal, previous_state, approved) -> output:
    if approved:
        return previous_state
    else:
        # Logic to reiterate

def senior(goal, output) -> approved_or_not: # The review process done by the senior
    if isOptimal(goal, output) return None # Optimality check  
    else:
        return feedback(goal, output)  

def workflow(goal, MAX_RETRIES) -> work:
    initial_work = doWork(goal, previous_state=None, approved=False)
    work = initial_work
    
    while not senior(goal, work) and MAX_RETRIES > 0: # Do it until the senior approves or MAX_RETRIES exhaust, whichever comes first
        work = doWork(goal, work, False)
        MAX_RETRIES -= 1 # Reduce the number of MAX_RETRIES
    
    rememberWork(goal, work) # Remembers the output
    return work
    
```
{% endcode %}

Well of course it's not as easy as it looks - these functionalities span across multiple segments throughout our tech stack, as shown as a high-level overview in the below figure:&#x20;



<figure><img src="../../.gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>

The Alchemyst C1 and X1 models are the first iterations of our Alchemyst C and Alchemyst X model families respectively. You can read more about them [here](alchemyst-model-family.md).

## Results

An example of how different an Alchemyst's output is from a simple model query to ChatGPT is shown below. Here, we are using Maya The SDR, our first Alchemyst. Click on the picture to open it in fullscreen.

<figure><img src="../../.gitbook/assets/image (3).png" alt=""><figcaption></figcaption></figure>

## Conclusion

### What this means for us

This means that we don't suffer from third-party vendor lock-ins. This implies that we can serve you results from the best models and context processing techniques as soon as they come out with better performance - you can rest assured that you will be having the latest innovations on AI directly served to you as an AI employee.

### What this means for you

The adaptive and automated nature of this incremental self-learning has quite a few ramifications:

1. **Bolster your understaffed team**: You can think of Alchemysts as a junior in your team - but those that iterate and adaptively learn fast, incrementally over time.&#x20;
2. **Scale productivity at the speed of thought**: This also essentially implies that the more data you have to provide to Alchemyst, the more easily it will adapt to your tasks. Our usage based pricing model allows you to scale your usage trivially.
3. **Incremental RoI over time**: The more you scale and use Alchemysts, the better the Return of Investment (RoI) gets on every task.
4. **Data Privacy**: All data you send to an Alchemyst stays between us, since we have our own in-house models.

### Comparison

The prices for the GPT models has been taken directly from [**OpenAI Pricing Page**](https://openai.com/api/pricing/) as of 20th June, 2024.

<table data-full-width="false"><thead><tr><th width="146">Parameter</th><th width="139">GPT-3.5</th><th width="143">GPT-4o</th><th width="142">GPT-4 Turbo</th><th>Alchemyst C1</th></tr></thead><tbody><tr><td>Follows Instructions</td><td><span data-gb-custom-inline data-tag="emoji" data-code="26a0">⚠️</span></td><td><span data-gb-custom-inline data-tag="emoji" data-code="2705">✅</span></td><td><span data-gb-custom-inline data-tag="emoji" data-code="2705">✅</span></td><td><span data-gb-custom-inline data-tag="emoji" data-code="2705">✅</span></td></tr><tr><td>Can reason through complex tasks</td><td><span data-gb-custom-inline data-tag="emoji" data-code="26a0">⚠️</span></td><td><span data-gb-custom-inline data-tag="emoji" data-code="26a0">⚠️</span></td><td><span data-gb-custom-inline data-tag="emoji" data-code="2705">✅</span></td><td><span data-gb-custom-inline data-tag="emoji" data-code="2705">✅</span></td></tr><tr><td>Context Window Size</td><td>16K</td><td>128K</td><td>128K</td><td>128K**</td></tr><tr><td>Gets context</td><td><span data-gb-custom-inline data-tag="emoji" data-code="274c">❌</span></td><td><span data-gb-custom-inline data-tag="emoji" data-code="26a0">⚠️</span></td><td><span data-gb-custom-inline data-tag="emoji" data-code="26a0">⚠️</span></td><td><span data-gb-custom-inline data-tag="emoji" data-code="2705">✅</span></td></tr><tr><td>Multilingual</td><td><span data-gb-custom-inline data-tag="emoji" data-code="26a0">⚠️</span>Shaky at best</td><td><span data-gb-custom-inline data-tag="emoji" data-code="2705">✅</span></td><td><span data-gb-custom-inline data-tag="emoji" data-code="2705">✅</span></td><td><span data-gb-custom-inline data-tag="emoji" data-code="2705">✅</span>Natively multilingual, further bolstered using Indic models by AI4Bharat</td></tr><tr><td>Multimodal</td><td><span data-gb-custom-inline data-tag="emoji" data-code="274c">❌</span></td><td><span data-gb-custom-inline data-tag="emoji" data-code="2705">✅</span></td><td><span data-gb-custom-inline data-tag="emoji" data-code="26a0">⚠️</span>Using extensions</td><td><span data-gb-custom-inline data-tag="emoji" data-code="2705">✅</span></td></tr><tr><td>Adaptive Learning</td><td><span data-gb-custom-inline data-tag="emoji" data-code="274c">❌</span></td><td><span data-gb-custom-inline data-tag="emoji" data-code="26a0">⚠️</span>Partly through the memory feature</td><td><span data-gb-custom-inline data-tag="emoji" data-code="26a0">⚠️</span>Partly through the memory feature</td><td><span data-gb-custom-inline data-tag="emoji" data-code="2705">✅</span></td></tr><tr><td>Data Privacy</td><td><span data-gb-custom-inline data-tag="emoji" data-code="26a0">⚠️</span>Through opaque data retention agreements</td><td><span data-gb-custom-inline data-tag="emoji" data-code="26a0">⚠️</span>Through opaque data retention agreements</td><td><span data-gb-custom-inline data-tag="emoji" data-code="26a0">⚠️</span>Through opaque data retention agreements</td><td><span data-gb-custom-inline data-tag="emoji" data-code="2705">✅</span> You have full control of the data through configurable data policies</td></tr><tr><td>Cost (Input + Output)</td><td>$4/1M tokens</td><td>$20/1M tokens</td><td>$40/1M tokens</td><td>$3/1M tokens**</td></tr></tbody></table>



{% hint style="info" %}
\*\* - The current costs for running our Alchemyst C1 Model, this would decrease as we scale up and keep on getting more customers.
{% endhint %}

## TL;DR

* Alchemyst models are cheaper on a dollar-to-dollar basis than the GPT models
* They can also take in much more information in their context than similarly priced models.
* They are multilingual and multimodal.
* They can learn adaptively.





