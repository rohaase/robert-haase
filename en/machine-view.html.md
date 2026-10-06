---
title: "Machine View"
description: "This page reads itself: on the left the page for humans, on the right the same page as AI search and browser agents process it. Read live from the source, not mocked up."
author: "Robert Haase"
datePublished: 2026-07-21
dateModified: 2026-10-06T19:56:06+02:00
inLanguage: en
url: https://robert-haase.de/en/machine-view.html
translation: https://robert-haase.de/maschinensicht.html.md
keywords: ["machine readability", "Machine Readable Brands", "Brand Infrastructure", "accessibility tree", "structured data", "browser agents", "AI search"]
---
# Machine View

**I tried to see my own website the way a machine sees it.** The result is below: on the left, a page as a human knows it. On the right, what a machine gets from it. None of it is mocked up, the apparatus opens the real page and reads its source.

Hover a line on the right and the matching spot on the left lights up. And the other way round. Some lines never light up, because the other side simply never receives them. Those spots are what this is about.

[Interactive view: available only in the HTML version, https://robert-haase.de/en/machine-view.html]

## What this page shows

**Five views, five ways of reading. Whether a page is machine-readable depends on which machine is reading.**

- **AI search:** the source code as ChatGPT or Claude receive it on a direct fetch. No JavaScript. Whatever a script writes onto the page later is missing here.
- **Structured data:** what the page says about itself, in machine-readable form. Whether that buys anything is covered below.
- **Agent · tree:** roles and names instead of layout. This is how browser agents read, programs that remote-control a browser and carry out tasks. Screen readers depend on the same tree.
- **Agent · HTML:** trimmed HTML, only the operable elements. More complete than the tree, and better or worse depending on the model.
- **Agent briefing:** llms.txt, a file meant to tell AI systems what this site is about. Whether it gets read at all: more on that below.

The most important point: the big US assistants do not run JavaScript on a direct fetch. In one test a decoy internal reference number sat in the source code and the real one only appeared via script. ChatGPT and Claude reported the decoy. For those two, three tests since late 2025 arrive at the same result. For the other systems the line keeps moving, and always in the same direction: Gemini was the only system to find the script-loaded value in December 2025 and rendered nothing in either later test, while Copilot and Grok still rendered in January 2026 and no longer did in June. In the most recent test all seven US assistants examined read raw HTML only, and five systems from China and Europe ran the script. All three tests are single measurements. Scope and limits are on the [evidence page](https://robert-haase.de/en/evidence.html#javascript). The route via a search index does render. Only the direct fetch does not.

## How the apparatus works

**Everything happens in the browser, no server.**

On the left sits the real page, loaded in a frame. The apparatus reads its source, its structured data, and the llms.txt, and sets them against the five views. The tree and HTML views reproduce formats that are in real use. The tree follows the output of Playwright, the most common tool for remote-controlling a browser. The HTML view follows the format of Stagehand and Skyvern, two tools built specifically for AI agents. Which tool is most widely used for building browser agents cannot be measured cleanly from public sources. The mapping between left and right comes from text matching and is fuzzy at the edges. To verify: open the source, find the same data.

## Why the tree matters

**An element without a name does not exist for an agent.**

Google says it plainly: agents rely on the accessibility tree, the same tree screen readers use. Since spring 2026, Lighthouse, Google's website testing tool, checks it in a category of its own. A button that consists only of an icon has no name in this tree until someone gives it one. The agent can neither see it nor use it.

This is not an edge case. A survey of one million home pages found empty buttons on 30.6 percent, and on half of them form fields lack labels. The average website reads to an agent like a half-labelled form.

## Observations, not proof

**Four claims circulate on this topic. None is as solid as it sounds.**

**Structure beats pixels?** The studies disagree: sometimes the text-based variant wins clearly, sometimes the one with screenshots. What can be shown is the tool layer: Playwright and Stagehand, two widely used kits for building browser agents, work through the accessibility tree by default and switch screenshots on only on request. Finished agents are a different matter. Google describes them as reconciling the tree, the DOM and a visual rendering, as recorded on the [evidence page](https://robert-haase.de/en/evidence.html#a11y-tree).

**Accessibility helps agents?** The number cited everywhere for this, success falling from 78 to 42 percent, comes from a study that did not change a single website. It took the mouse away from the agent. **The comparison I announced here is still outstanding.** What I built on 29 August 2026 is something smaller: an illustration. Two versions of the same page, generated from one content definition and identical to within eight of 1,265 pixels in height — [one properly marked up](https://robert-haase.de/zwillingstest/klar.html), [the other built as div soup](https://robert-haase.de/zwillingstest/unklar.html). In the first, each of the eight controls carries a role and a name; in the second, none of seven does, and where the first offers eight elements to the keyboard, the second offers one. The second version works perfectly well: trigger its buttons programmatically and they do exactly the same thing.

**Why this is not evidence.** I left the markup out myself and then measured that it is missing. The result was fixed by the blueprint; anyone who knows how an accessibility tree is built could have predicted it. A self-built case says nothing about the world, which is why it deliberately does not appear on the [evidence page](https://robert-haase.de/en/evidence.html). What it shows is the mechanism alone: that two pages can be identical for people and not for a machine. **So on the same day I measured real pages** instead of building more of my own.

**The survey: 160 home pages from the DAX, MDAX and SDAX.** Not a selection of mine — the companies come from three indices, the addresses from Wikidata. What was measured is Chrome's own accessibility tree, twice; 135 of 136 evaluable pages returned the same result both times, down to the element.

**The result contradicts what I expected.** Of 13,527 controls, 456 carry no name: **3.4 percent**. And the rate does not deteriorate among mid-caps: DAX 3.1, MDAX 3.8, SDAX 3.3 percent. The suspicion that smaller companies without accessibility teams fare markedly worse does not survive measurement. **Fifty-seven of the 135 pages have no gap at all.** The common story of a machine-unreadable web does not hold for German listed companies.

**Where gaps remain, they are almost always logos and icons** serving as links or buttons: Talanx links its six group brands as unnamed logos, GFT its partners, Atoss its social profiles. Add carousel arrows and play buttons. Fix that, and most of the gaps close with a single measure. One case shows how narrowly you can miss: MBB links its subsidiaries with a carefully maintained title attribute — but because the link text is a non-breaking space, the link stays nameless in the tree.

**Structure is the weaker point:** 52 of the 135 pages have no main-content landmark, so the marker for where content begins and navigation ends is missing. And of 3,979 images, 1,662 carry no name, or 41.8 percent. By element type, 86 percent of them are inline SVG graphics and 13 percent are classic img elements. What is measured is the element type, not the purpose: a linked corporate logo without a text alternative and a purely ornamental icon are indistinguishable in this count. How many of the 86 percent are without consequence is open.

**On admission, where I had to correct myself:** twelve of the 160 pages reject automated retrieval, 7.5 percent. That is commercial bot defence, from Akamai or Cloudflare on ten of the pages and from Amazon CloudFront on two. It mostly detects from the TLS fingerprint and the order of the HTTP headers that no ordinary browser is asking; at Siemens and Hannover Rück the browser string alone is enough. A regular, remote-controlled Chrome got through several of these sites: the defence separates tool from browser, not human from machine. An earlier version of this page said a third, lumping together bot defence, stale addresses, country selectors and technical errors.

**What this survey does not answer either:** whether an agent completes its task. It measures what it finds, not what it achieves. The original question remains open: does better markup improve success? The figures from this survey are on the [evidence page](https://robert-haase.de/en/evidence.html) with their limits, apart from the image figure, whose limit is stated above.

**Structured data creates visibility?** Ahrefs tracked 1,885 pages that added JSON-LD between August 2025 and March 2026 and compared them with 4,000 control pages at a similar citation level. In ChatGPT and Google's AI mode the effect was indistinguishable from zero. In AI Overviews the pages that added markup lost 4.6 percent against the controls. The study looked only at pages that were already heavily cited, each with more than a hundred mentions in AI Overviews. For pages that do not appear at all it says nothing, and the authors expressly allow for a benefit there. I keep the markup because it keeps the foundation clean. The figures and their limits are on the [evidence page](https://robert-haase.de/en/evidence.html#json-ld-test).

**There are rules everyone follows?** Google, OpenAI, Perplexity, and Meta explicitly exempt their user-triggered fetches from robots.txt; Anthropic is the exception. Blocking AI crawlers blocks training and search. The agents keep running. And the standard meant to settle this has been stuck in a working group for over a year.

And the promised answer on llms.txt: it is here because it exists. 97 percent of these files get not a single request, server logs across 137,000 domains show. The format was invented for tool documentation, not for visibility. Where it works, it saves agents time. That is shown for documentation sites: in a [test across 20 of them and 2,400 runs](https://www.mintlify.com/blog/llms-txt-agent-benchmark), response time and token use fell by about a fifth once the pages pointed to their llms.txt, measured against the same pages in markdown without that pointer. The measurement comes from Mintlify, a vendor that serves such documentation itself and has published the set-up along with the [raw data](https://github.com/mintlify/docs-url-discovery-bench). I know of no independent measurement. For brand websites, nothing is shown.

## The easiest case

**This website is the easiest case there is.**

About thirty pages, static, no CMS, a single external script. On a grown brand site with a tag manager, a consent layer, and three agencies involved, the right-hand column would look different. What is handcraft here becomes a question of ownership and process there.

And clean structure is only the entry ticket. My own measurements show both sides: ask about me, and two of three systems name this website as the most-cited source. In Google's AI mode, since late August, the trade publication I write for leads instead. Ask whom to hire for this topic, and my name does not come up, in four measurements since July not once. Between those two results lies no technical problem. What lies there is what third parties write, and that correlates with visibility in AI answers [far more strongly than the classic metrics of one's own site](https://robert-haase.de/en/evidence.html#mentions-vs-backlinks). That was measured on established brands; applying it to a query about a person is a transfer.

## Sources

- **JavaScript on direct fetch:** three tests, [searchviu](https://www.searchviu.com/en/schema-markup-and-ai-in-2025-what-chatgpt-claude-perplexity-gemini-really-see/) (2025), [Resoneo](https://think.resoneo.com/sentinel/geo-llm-crawler-report.html) (2026), and [Search Engine World](https://www.searchengineworld.com/do-ai-assistants-actually-render-your-javascript-when-grounding-we-put-it-to-the-test) (2026, the decoy phone number test).
- **Agents read the tree:** [Google on its own agent](https://developers.google.com/crawling/docs/crawlers-fetchers/google-agent) and the [Lighthouse "Agentic Browsing" category](https://developer.chrome.com/docs/lighthouse/agentic-browsing/scoring).
- **30.6 percent empty buttons:** [WebAIM Million 2026](https://webaim.org/projects/million/), a survey of one million home pages.
- **78 to 42 percent:** [A11y-CUA](https://arxiv.org/abs/2602.09310) (CHI 2026). The study changes how the agent operates, not the websites.
- **89 versus 49 percent:** [Designing Agent-Ready Websites](https://arxiv.org/abs/2607.12056) (2026), a prototype with two versions of the same page.
- **JSON-LD test:** [Ahrefs](https://ahrefs.com/blog/schema-ai-citations/) (2026), 1,885 pages against 4,000 control pages.
- **The stuck standard:** the [IETF working group AIPREF](https://datatracker.ietf.org/wg/aipref/about/).
- **97 percent with zero requests:** [Ahrefs](https://ahrefs.com/blog/llmstxt-study/) (May 2026), server logs across 137,210 domains; reported by [PPC Land](https://ppc.land/llms-txt-adoption-rises-8-8x-but-97-of-files-get-zero-ai-requests/).
- **Google uses no special files:** [Optimizing for generative AI features on Google Search](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) (Google Search Central, as of July 2026) — llms.txt, special markup, and chunking explicitly not needed; from Google's perspective, optimizing for AI search is still SEO.

These figures, and the others I have checked for my writing, are laid out one by one on the [Evidence](https://robert-haase.de/en/evidence.html) page: each with its primary source, sample size, date, and what it explicitly does not prove. Made for citing.

## A short glossary

- **Accessibility tree:** the structure the browser computes from every page: all elements with role and name, no layout. The basis for screen readers and agents.
- **Browser agent:** software that operates a browser the way a human does: reads, clicks, types, and carries out tasks.
- **Crawler:** a program that fetches websites automatically, for a search index or for AI training.
- **JSON-LD:** an invisible block in the source code where a page states facts about itself: who, what, when. The "structured data" in this text.
- **Lighthouse:** Google's website testing tool, built into the Chrome browser.
- **llms.txt:** a text file at a fixed address meant to tell AI systems, in short form, what a website is about.
- **Playwright:** the most common tool programs use to remote-control a browser. Many browser agents are built on it.
- **robots.txt:** a text file in which a website declares which crawlers may access it. A convention, not a law.
- **Screen reader:** software that reads a page aloud, for blind and visually impaired people.
- **Source code:** the HTML text the server delivers before the browser does anything with it.
- **Stagehand:** a newer tool of the same kind as Playwright, built specifically for AI agents.

---

*This file is generated from the page: https://robert-haase.de/en/machine-view.html. If the two ever differ, the page is authoritative.*
