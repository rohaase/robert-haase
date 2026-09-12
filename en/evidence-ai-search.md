# Evidence: AI search

16 of 92 entries in the collection “Evidence” by Robert Haase, as of 12 September 2026.

Page: https://robert-haase.de/en/evidence.html · Overview of all claims: https://robert-haase.de/en/evidence.md · JSON: https://robert-haase.de/en/evidence.json · Deutsch: https://robert-haase.de/belege-ki-suche.md

License: CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). Please cite the primary source, not this page.

This file is generated from the page. Where the two differ, the page applies.

## How this collection is built

Every figure is traced back to the body that measured it, not to the article citing it. On their way through the retellings, figures lose their denominator first, then their caveat, and finally their origin. Where a figure is only accessible through a third party, that intermediary is named in the source line. Own measurements carry their method with them; they have not been independently verified yet.

**The limit belongs to the number.** The most common error is not the wrong number but the right one carrying a claim that reaches further than the evidence. That is why every entry has two parts, and the second one matters more. Above each figure sits what kind of evidence it is, from verified study to single case. That decides how far it carries.

What does not survive the check does not get in, or gets taken out, my own articles included. One of them claimed that 44 percent of US online shoppers begin their purchase journey in a language model, attributed to Bain. Bain gives two other figures, 17 percent and 30 to 45 percent, which had merged into one along the way. Both are here now; the 44 is not.

This page ages. Every entry carries its date; superseded numbers get replaced, not quietly deleted. If you find an error, [write to me](mailto:hallo@robert-haase.de) and I will correct it and note the date.

The collection does not map the state of the research, only the figures I needed for my own texts. Free to use with attribution. When in doubt, link the primary source rather than this page.

## Grades in this topic

+ Verified study, vendor documentation, or court decision (9) → llmstxt-abrufe, llmstxt-wirkung, google-leitfaden, mentions-vs-backlinks, inkonsistenz, pew-klicks, aio-klickrate, seer-klickrate, ebu-nachrichten
+ Preliminary: prototype, single test, forecast, or vendor figure (6) → json-ld-test, reddit-zitate, geo-40-prozent, aio-top10-uneinig, markenstatur-sichtbarkeit, zitier-position
+ Status, case report, or market observation (1) → llmstxt-nutzen

---

## llmstxt-abrufe

**Claim:** Of roughly 38,000 domains that have an llms.txt, 97 percent saw no request for the file at all in May 2026.

**What the number does not say:** It measures requests, not effect. The file remains useful for coding and browser agents. What is refuted is only the claim that AI search reads llms.txt for its recommendations. **Mind the denominator:** the 97 percent refer to the roughly 38,000 domains that have a file, not to all 137,210 studied. And the sample is not a cross-section of the web but the domains of one analytics vendor that had traffic in May.

**Source:** Ahrefs, 137,210 domains, 28 percent of them with an llms.txt · June 2026 · [Source](https://ahrefs.com/blog/llmstxt-study/)

**Grade:** Verified study · Group: Verified study, vendor documentation, or court decision

**Permalink:** https://robert-haase.de/en/evidence.html#llmstxt-abrufe

---

## llmstxt-wirkung

**Claim:** Across nearly 300,000 domains studied, no relationship was found between having an llms.txt and how often a domain appeared as a source in AI answers.

**What the number does not say:** No relationship is not a measurement of effect. The study compares, it does not experiment, and it limits itself to the model and dataset tested. The comparison group is also smaller than the headline number suggests: only 10.13 percent of the domains had a file at all. Its weight comes from being the second independent study with the same result as the finding above.

**Source:** SE Ranking, nearly 300,000 domains, 10.13 percent of them with an llms.txt · November 2025 · [Source](https://seranking.com/blog/llms-txt/)

**Grade:** Verified study · Group: Verified study, vendor documentation, or court decision

**Permalink:** https://robert-haase.de/en/evidence.html#llmstxt-wirkung

---

## google-leitfaden

**Claim:** Google explicitly states that llms.txt, special markup, and custom chunking are not needed for AI search.

**What the statement does not say:** It applies to Google Search including its generative features, explicitly not to other systems — for services that do use such files, the same text calls them harmless. And on structured data Google does not say "useless" but keeps recommending it, because it qualifies pages for rich results in classic search. From Google’s perspective, optimizing for AI search is still SEO.

**Source:** Google Search Central, official guide · as of 10 July 2026 · [Source](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)

**Grade:** Vendor documentation · Group: Verified study, vendor documentation, or court decision

**Permalink:** https://robert-haase.de/en/evidence.html#google-leitfaden

---

## json-ld-test

**Claim:** 1,885 pages that added JSON-LD barely moved against 4,000 control pages: no effect distinguishable from zero in ChatGPT and Google AI Mode, and a statistically significant 4.6 percent decline in AI Overviews.

**What the test does not say:** Only pages that were **already heavily cited** by AI were studied — each had over a hundred AI Overview citations in February 2025. The study says nothing about pages that do not appear at all, and the authors explicitly allow that markup may help there. It is an observational study with matched controls, not an experiment. For rich results in classic search the markup remains uncontested.

**Source:** Ahrefs, 1,885 pages against 4,000 matched controls, markup added between August 2025 and March 2026 · May 2026 · [Source](https://ahrefs.com/blog/schema-ai-citations/)

**Grade:** Single test · Group: Preliminary: prototype, single test, forecast, or vendor figure

**Permalink:** https://robert-haase.de/en/evidence.html#json-ld-test

---

## mentions-vs-backlinks

**Claim:** Third-party mentions correlate with visibility in AI answers far more strongly than the classic metrics of a brand’s own site: 0.66 to 0.74 against 0.27 to 0.33 for domain authority and 0.19 for the number of pages.

**What the number does not say:** Correlation is not causation. Large brands are mentioned more often and cited more often without one causing the other. What holds is the ranking: what third parties write weighs more than your own technique. **On the range:** it combines two factors, mentions on YouTube (0.737) and mentions elsewhere on the web (0.656 to 0.709 depending on the system). The sample is also established brands with a domain rating above 40, not a cross-section.

**Source:** Ahrefs, correlation analysis across 75,000 brands in ChatGPT, Google AI Mode, and AI Overviews · December 2025 · [Source](https://ahrefs.com/blog/ai-brand-visibility-correlations/)

**Grade:** Verified study · Group: Verified study, vendor documentation, or court decision

**Permalink:** https://robert-haase.de/en/evidence.html#mentions-vs-backlinks

---

## inkonsistenz

**Claim:** Ask the identical question twice and the chance of getting the same list of brands is under one in a hundred.

**What follows and what does not:** Anyone measuring AI visibility with a single run is mostly measuring noise. The study explicitly does not conclude that measuring is pointless: across dozens to hundreds of prompts, run repeatedly, it considers a visibility share a reasonable metric. Citing it as "tracking is useless" goes further than the evidence.

**Source:** SparkToro with Gumshoe.ai, 600 participants, 12 prompts, 2,961 runs across ChatGPT, Claude, and Google AI · January 2026 · [Source](https://sparktoro.com/blog/new-research-ais-are-highly-inconsistent-when-recommending-brands-or-products-marketers-should-take-care-when-tracking-ai-visibility/)

**Grade:** Verified study · Group: Verified study, vendor documentation, or court decision

**Permalink:** https://robert-haase.de/en/evidence.html#inkonsistenz

---

## pew-klicks

**Claim:** When an AI summary appears, users click a traditional search result on 8 percent of visits. Without a summary it is 15 percent.

**What the number does not say:** It establishes no cause. Queries that trigger an AI summary are systematically different from those that do not, so the comparison runs between query types, not within the same query. It also shows no revenue loss and says nothing about commercial queries. **The harder number sits beside it:** a link *inside* the summary was clicked on one percent of visits. And the mix of sources in the summaries resembled ordinary search, which contradicts the popular story about concentration on Reddit and Wikipedia.

**Source:** Pew Research Center, passive browser tracking of 900 US adults, 68,879 Google searches in March 2025 · July 2025 · [Source](https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/)

**Grade:** Verified study · Group: Verified study, vendor documentation, or court decision

**Permalink:** https://robert-haase.de/en/evidence.html#pew-klicks

---

## aio-klickrate

**Claim:** Where an AI summary sits above the results, the click-through rate of the first organic position is about 58 percent lower. At position 2 it is 50.8 percent, at position 3 46.4 percent.

**What the number does not say:** Two different keyword sets are compared, not two states of the same query. That establishes no cause. The comparison also spans two years, December 2023 against December 2025, so every other change to search is folded in. Ahrefs sells search engine optimization tools. **The self-limitation is worth noting:** the authors point to competing studies with diverging results, among them Seer Interactive, Kevin Indig and Authoritas. Their own earlier study from April 2025 still put position 1 at 34.5 percent.

**Source:** Ahrefs, Ryan Law, 300,000 keywords, 150,000 with and 150,000 without an AI summary, data from December 2025 · 4 February 2026 · [Source](https://ahrefs.com/blog/ai-overviews-reduce-clicks-update/)

**Grade:** Verified study · Group: Verified study, vendor documentation, or court decision

**Permalink:** https://robert-haase.de/en/evidence.html#aio-klickrate

---

## seer-klickrate

**Claim:** For informational queries carrying an AI summary, the organic click-through rate fell from 1.76 to 0.61 percent, a drop of 61 percent. For queries without a summary it fell from 2.74 to 1.62 percent over the same period, a drop of 41 percent.

**What the number does not say:** The second half is the more important one and is almost always dropped when the figure is quoted. Even without an AI summary the click-through rate collapsed by 41 percent. The decline therefore cannot be attributed to the summaries alone; search behaviour is shifting as a whole. Seer itself writes that no proof of cause is possible, and reports standard deviations of 0.8 to 1.2 percentage points between individual queries. Only informational queries were studied, no commercial ones; the paid sample, at 1.1 million impressions, is much smaller than the organic one.

**Source:** Seer Interactive, 3,119 search terms across 42 organizations, 25.1 million organic and 1.1 million paid impressions, June 2024 to September 2025 · 4 November 2025 · [Source](https://www.seerinteractive.com/insights/aio-impact-on-google-ctr-september-2025-update)

**Grade:** Verified study · Group: Verified study, vendor documentation, or court decision

**Permalink:** https://robert-haase.de/en/evidence.html#seer-klickrate

---

## reddit-zitate

**Claim:** Reddit’s share of the sources ChatGPT cites fell from 3.83 to 0.52 percent within a few days. On 8 August 2026 ChatGPT’s use of the site: operator jumped from 0.37 to 16.8 percent of its derived search queries. A second vendor panel counts a drop in daily Reddit citations from 497 to 132 over the same window, with total citation volume up by 3.5 percent.

**What the numbers do not say:** Both vendors sell visibility tools. Promptwatch does not rule out a collection error in its own data and calls the size of the drop provisional. Otterly calls its 73.4 percent a conservative floor: the before-window contains the break of 8 August, the after-window covers only four days. **The two figures do not form a range:** Promptwatch measures a share of all citations, Otterly absolute citations per day against a total volume that grew. Derived from Otterly’s own numbers, the starting level is 1.38 against 3.83 percent, a factor of 2.8 apart. Direction and timing are reliable, the decimal place and the level are not. Promptwatch discloses its denominator, the composition of the panel it does not. **What the case does show:** on Google’s AI surfaces Reddit fell by only 11 and 30 percent over the same period. The explanation that Reddit removed content is refuted: other engines keep citing the same posts. No vendor has evidenced the cause. A comparable collapse a year earlier was attributed to Google switching off the num=100 parameter, not to OpenAI.

**Source:** Promptwatch, Klaas Foppen, data page “Reddit Citations Are Dropping in ChatGPT”, 18 August 2026: daily share of reddit.com in all sources returned by ChatGPT Search, counting only responses with at least one citation, comparing 18 July to 7 August against 14 to 17 August 2026 · the site: operator comes from the same series, its own data page of 10 August 2026 ([site: operator data page](https://promptwatch.com/data/chatgpt-site-operator-fanouts)) · narrative version of both findings on the blog of 20 August 2026, last changed 8 September 2026, reported by Axios on the day of publication ([blog version](https://promptwatch.com/blog/chatgpt-stop-citing-reddit)) · second panel: Otterly.ai, 27 August 2026, 16 brand reports across 14 industries in the US market, before-window 6 to 13 August, after-window 14 to 17 August 2026, daily means ([second measurement](https://otterly.ai/blog/chatgpt-reddit-citations/)) · [Data page](https://promptwatch.com/data/reddit-citations-are-dropping-in-chatgpt)

**Grade:** Vendor measurement, preliminary · Group: Preliminary: prototype, single test, forecast, or vendor figure

**Permalink:** https://robert-haase.de/en/evidence.html#reddit-zitate

---

## geo-40-prozent

**Claim:** The most quoted figure in the AI visibility business, "up to 40 percent more visibility", comes from a lab setup running a since-retired model and measures a purpose-built metric.

**What the number actually covers:** It measures a position-weighted share of words a source occupies in a generated answer. The "generative engine" was a two-stage build of the authors’ own: fetch the top five Google results, then generate an answer with GPT-3.5. No commercial product, no current model. "Up to 40 percent" is also a maximum across the best-performing methods, not an average. It does not evidence more clicks, more revenue, or more mentions in ChatGPT or Google. The paper itself is careful and states its limits; the overreach happens in the citing.

**Source:** Aggarwal et al., GEO: Generative Engine Optimization, arXiv 2311.09735, KDD 2024 · submitted November 2023 · [Source](https://arxiv.org/abs/2311.09735)

**Grade:** Usually miscited · Group: Preliminary: prototype, single test, forecast, or vendor figure

**Permalink:** https://robert-haase.de/en/evidence.html#geo-40-prozent

---

## ebu-nachrichten

**Claim:** 45 percent of answers from four AI assistants to news questions had at least one significant issue. In 31 percent it concerned the handling of sources.

**What the number does not say:** What was tested was **news content, not brands**. Citing it as evidence for how often AI misrepresents companies transfers it illegitimately. The assessments came from journalists at the participating organisations, so not an independent body, and the models date from mid-2025. **The sourcing finding is the brand-relevant part:** almost a third of answers attributed statements to a source that does not support them. That is precisely the mechanism by which a brand gets miscited too.

**Source:** European Broadcasting Union and BBC, 22 media organisations across 18 countries and 14 languages (including ARD, ZDF, Deutsche Welle, and SRF), over 3,000 answers assessed · October 2025 · [Source](https://www.ebu.ch/news/2025/10/ai-s-systemic-distortion-of-news-is-consistent-across-languages-and-territories-international-study-by-public-service-broadcaste)

**Grade:** Verified study · Group: Verified study, vendor documentation, or court decision

**Permalink:** https://robert-haase.de/en/evidence.html#ebu-nachrichten

---

## aio-top10-uneinig

**Claim:** How many of the sources cited in Google’s AI Overviews also rank in the organic top 10 is measured incompatibly by the two large vendors: BrightEdge around 17 percent on average from February 2025 to February 2026, Ahrefs 37.1 percent in its study of 2 March 2026. In the one month both report a figure for, the gap is widest: for July 2025 BrightEdge reports around 16.6 percent, Ahrefs 76.1 percent in its study from the same month.

**Where the gap comes from:** not from the time offset. In 2025 Ahrefs counted only the three most visible citations per overview, in 2026 more of them by its own account, with parsing it says itself was changed. The drop from 76 to 37 is therefore a method artefact to an unknown degree, not a trend. Ahrefs counts URLs; BrightEdge calls its unit only sources. **What stays open:** BrightEdge publishes monthly figures only through July 2025, though its stated tracking period runs to February 2026, and does not disclose the size of its keyword set. Ahrefs states no collection period, and none of the three states language or country. Both measure on their own indexes, and none of the figures says whether a citation brings visits or revenue.

**Source:** Ahrefs, Louise Linehan, 863,000 keyword SERPs and 4 million cited URLs, organic figure 37.1 percent, headline 37.9 percent including ads and SERP features, no collection period stated · published 2 March 2026 · same series, 1.9 million citations from 1 million overviews, top three most visible per overview only · published 21 July 2025 · BrightEdge, AI Catalyst and Generative Parser, weekly measurement, sample size not disclosed, stated tracking period February 2025 to February 2026, published overlap table only February to July 2025 · published 12 February 2026 · [BrightEdge source](https://www.brightedge.com/resources/weekly-ai-search-insights/ai-overviews-one-year-presence-size-citing) · [Ahrefs source](https://ahrefs.com/blog/ai-overview-citations-top-10/)

**Grade:** Vendor measurements, not comparable · Group: Preliminary: prototype, single test, forecast, or vendor figure

**Permalink:** https://robert-haase.de/en/evidence.html#aio-top10-uneinig

---

## llmstxt-nutzen

**Claim:** Across 20 documentation sites, two coding agents worked markedly leaner once their pages pointed to their llms.txt at the very top. Claude Code took on average 25.4 seconds instead of 30.8 and 175,000 tokens instead of 215,000 per task; Codex took 45.1 seconds instead of 57.1 and 115,000 instead of 156,000. That is 18 to 26 percent less.

**What the numbers do not say:** They prove nothing for brand websites. What was measured is developer documentation the vendor serves and sells itself. And the gain is efficiency, not correctness: accuracy barely moves across all four variants, 94 to 99 percent. These are means over right-skewed distributions; at the median the gain is 9 to 15 percent. **And the comparison is manufactured:** the good variant is the unchanged delivery, the poor one only comes into being once the test rig cuts out the pointer and blocks llms.txt with an artificial 404. What is measured is a removal. Only dead ends and fetch counts were tested for significance, not time and tokens. The proxy logs the source calls committed are missing from the repository.

**Source:** Mintlify, Docs URL Discovery Bench · 20 documentation sites, 5 questions each, 4 serving formats, 2 agents, 3 runs, 2,400 scored attempts at n=300 per cell · Claude Code on claude-sonnet-5, Codex CLI on gpt-5.5 · July 2026 · [Source](https://github.com/mintlify/docs-url-discovery-bench)

**Grade:** Vendor-run controlled test, result data open · Group: Status, case report, or market observation

**Permalink:** https://robert-haase.de/en/evidence.html#llmstxt-nutzen

---

## markenstatur-sichtbarkeit

**Claim:** Ask an AI search engine a category question without naming the brand, and globally known brands appear on average in 72.9 percent of answers on the first tracking run, established mid-market and regional brands in 43.6 percent, small and niche brands in 11.4 percent. Of all 149,912 citations counted, 2.9 percent point at the brand’s own website and 75.2 percent at those of other companies in the same category.

**What the numbers do not say:** They establish no cause. The three tiers were hand-coded from Wikipedia article, press coverage and funding round, that is from proxies for web prominence; what is then measured is a visibility fed by the web. The author names this circularity himself. The three figures average over the 11, 36 and 55 brands in a tier, not over all answers; the 95 percent interval of the lowest runs from 4.2 to 20.3 percent. **Who did the measuring:** The author is a co-founder of Ranqo and holds equity in it, the brands studied are the platform’s customers, and the text is a preprint without peer review. Reading the often-quoted 78 percent corporate pages as proof that a brand’s own site carries its visibility inverts the finding.

**Source:** Pratyush Kumar (co-founder of Ranqo), Generative Engine Optimization at Scale: Measuring Brand Visibility Across AI Search Engines, arXiv:2606.20065v1, preprint without peer review, 14 pages · 102 brands, 3,508 completed tracking runs, 102,025 prompt responses from five engines (ChatGPT, Gemini, Perplexity, Claude, Grok), 149,912 citations drawn from mention-bearing prompts, collected on the Ranqo platform between March and May 2026 · submitted 18 June 2026 · [Source](https://arxiv.org/abs/2606.20065)

**Grade:** Vendor measurement, preprint without peer review · Group: Preliminary: prototype, single test, forecast, or vendor figure

**Permalink:** https://robert-haase.de/en/evidence.html#markenstatur-sichtbarkeit

---

## zitier-position

**Claim:** Of 18,012 citations ChatGPT drew from web pages, 44.2 percent come from the first 30 percent of the text. The middle section, the widest at 40 percent of the text, carries 31.1 percent, the closing section 24.7 percent. In a second analysis of 11,022 citations, cited introductions reached a proper-noun density of 20.6 percent, against the 5 to 8 percent the author derives from standard corpora (Brown Corpus, Penn Treebank), with no arithmetic shown.

**What the numbers do not say:** They record where ChatGPT cited from. Whether a rewritten text gets cited more often is untested. At paragraph level the rule does not hold: in a separate analysis of 1,000 heavily cited pieces, 53 percent of citations come from the middle of the paragraph, only 24.5 percent from the first sentence. No collection period and no model version are given, and the source says nothing about the language of the material; only the reference corpora are English. **Where the data comes from:** the sole source is the vendor Gauge, which sells AI-visibility software; the same methodology section, two paragraphs on, offers a 75 percent discount on its sales call. Which sentence was cited is estimated from text vectors.

**Source:** Kevin Indig, Growth Memo, data from Gauge · 18,012 citations for the positional analysis, 11,022 for the linguistic analysis, isolated from a body of 1.2 million that the source labels three different ways (search results, ChatGPT responses, verified citations); Gauge supplied roughly 3 million answers with 30 million citations · 16 February 2026 · original paywalled; the research section and methodology are readable in the Internet Archive, the extra material for paying subscribers is missing · [Source](http://web.archive.org/web/20260218205224/https://www.growth-memo.com/p/the-science-of-how-ai-pays-attention)

**Grade:** Vendor measurement, preliminary · Group: Preliminary: prototype, single test, forecast, or vendor figure

**Permalink:** https://robert-haase.de/en/evidence.html#zitier-position

---

End of file: 16 of 16 entries on AI search. Last entry: zitier-position.
