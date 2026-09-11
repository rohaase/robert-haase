# Evidence: Judgement

18 of 90 entries in the collection “Evidence” by Robert Haase, as of 10 September 2026.

Page: https://robert-haase.de/en/evidence.html · Overview of all claims: https://robert-haase.de/en/evidence.md · JSON: https://robert-haase.de/en/evidence.json · Deutsch: https://robert-haase.de/belege-urteil.md

The limit belongs to the number: every entry has two parts, the claim and its limit, and the second one matters more.

License: CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). Please cite the primary source, not this page.

This file is generated from the page. Where the two differ, the page applies.

---

## metr-selbsteinschaetzung

**Claim:** Experienced developers took 19 percent *longer* with AI tools — while believing they had been 20 percent faster. Beforehand they had expected a 24 percent speed-up. Between measured and perceived effect lie 43 percentage points, with the sign reversed.

**What the number does not say:** 16 developers, 246 tasks, exclusively in repositories they had known for five years on average. That familiarity explains part of the result — anyone who holds their own project in their head gains less from assistance. It does not transfer to unfamiliar code or other knowledge work, and the tools date from early 2025. **What holds:** the gap between measurement and self-assessment. It is the reason to distrust any productivity figure based on asking people.

**Source:** METR, randomised controlled trial, July 2025 · 16 experienced open-source developers, 246 tasks · [to the study](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/)

**Grade:** Controlled trial · Group: Verified study, vendor documentation, or court decision

**Permalink:** https://robert-haase.de/en/evidence.html#metr-selbsteinschaetzung

---

## jagged-frontier

**Claim:** In a preregistered experiment with 758 management consultants, AI users completed 12.2 percent more tasks, worked 25.1 percent faster and delivered more than 30 percent higher quality, as long as the task fell inside the model's capability. On a task placed just outside it, they were 19 percentage points more likely to be wrong than the group without AI.

**What the number does not say:** Where the boundary runs was not visible to participants — the tasks looked alike. That is both the core finding and its limit: *one* deliberately out-of-range task was measured, not how often such cases occur in daily work. The experiment used GPT-4; where the frontier sits today is open. And consulting is not all knowledge work.

**Source:** Dell'Acqua et al., “Navigating the Jagged Technological Frontier”, field experiment with Boston Consulting Group · Organization Science, published online 11 March 2026, DOI 10.1287/orsc.2025.21838 · 758 consultants, 18 realistic tasks · the 2023 working paper still put the quality gain at more than 40 percent · [to the peer-reviewed version](https://www.hbs.edu/ris/Publication%20Files/dell-acqua-et-al-2026-navigating-the-jagged-technological-frontier_5c589c8c-fbb5-458f-b285-c944746cd717.pdf)

**Grade:** Controlled trial · Group: Verified study, vendor documentation, or court decision

**Permalink:** https://robert-haase.de/en/evidence.html#jagged-frontier

---

## homogenisierung

**Claim:** 293 participants each wrote a short story, some of them with starting ideas from GPT-4, and 600 readers rated them. Stories written with an AI idea were judged more novel, up 5.4 percent with access to one idea and up 8.1 percent with access to up to five. At the same time they converged: a story’s similarity to the mean of the others in its group rose by 0.871 points on a scale from 0 to 100, which the authors report as 10.7 percent of the range the group without AI spanned.

**What the number does not say:** the 0.871 points apply to access to one idea. With up to five ideas the convergence was smaller, 0.718 points and 8.9 percent, and the creativity gain larger. Reading it as “more AI, more sameness” reads against the data. **What is measured is access, not use:** in the one-idea condition 82 of 100 requested an idea at all; in the second, 2.55 on average, and only 24.5 percent asked for all five. **The more striking number is the softer one:** the 10.7 percent is a share of the 8.10 points between the highest and lowest value among the stories without AI, so it hangs on two extreme values. The same 10.7 percent appears a second time in the paper, as a novelty gain among the least creative writers, unrelated to this one. What is measured is the cosine similarity of text embeddings within one group, not whether results are worse. “More creative” is the judgement of lay readers; in the writers’ own assessment there was no statistically significant difference. Eight sentences, no dialogue with the model, British Prolific participants rather than professional writers: short stories are not strategy papers.

**Source:** Doshi and Hauser, “Generative AI enhances individual creativity but reduces the collective diversity of novel content”, Science Advances, vol. 10, issue 28, eadn5290, 12 July 2024, DOI 10.1126/sciadv.adn5290 · pre-registered, 293 writers and 600 raters on Prolific, 3,519 individual ratings, ideas from GPT-4 · the publisher site science.org refuses automated requests, so the check ran on the open full text at Europe PMC · [to the full text](https://europepmc.org/article/MED/38996021)

**Grade:** Controlled experiment · Group: Verified study, vendor documentation, or court decision

**Permalink:** https://robert-haase.de/en/evidence.html#homogenisierung

---

## strategie-trendslop

**Claim:** Seven language models were put to seven strategic trade-offs, each as an either-or. On six of the seven they picked the same side across all vendors, differentiation over cost leadership and augmentation over automation among them. Only on exploration versus exploitation did they diverge. Two follow-up studies on ChatGPT-5, each with more than 15,000 runs, barely moved the bias: for differentiation and augmentation, better prompting lowered the share of biased responses by less than 2 percent, and additional company context shifted it by 11 percent on average across the whole follow-up study, in both directions. The authors call this “strategy trendslop”: the most socially desirable answer of the internet average.

**Corrected on 10 September 2026:** until then this entry said “differentiation in 96 percent of cases, augmentation in 93”. Neither figure appears anywhere in the article; the full text gives no share at all, only shifts from baseline, and the numbers come from blog summaries, most likely read off a chart. Also corrected: the more than 15,000 runs do not apply to the seven models. Both 15,000-run blocks are follow-up studies on a single model, ChatGPT-5; the seven-model measurement rests on 50 runs per model and question, and the authors give no total for it. **What the numbers do not say:** the insensitivity holds for only two of the seven questions; on the other five, better prompting moved responses by 22 percent on average in both directions, and the order of the options mattered most, at 19 percent. Whether the preferred answer is wrong is not what the finding says; what is measured is insensitivity to context alone. **On the source:** an HBR Digital Article without peer review, and there is no separate paper; one repository lists it as peer reviewed, which is a catalogue artefact. The paywalled page ships the full text in its structured data, character-identical in archive copies of 17 March and 14 July 2026.

**Source:** Angelo Romasanta, Llewellyn D. W. Thomas and Natalia Levina, “Researchers Asked LLMs for Strategic Advice. They Got ‚Trendslop‘ in Return.”, Harvard Business Review, 16 March 2026, HBR Digital Article H093GG · models tested: ChatGPT, Claude, DeepSeek, GPT-5 via the API, Gemini, Grok and Mistral, 50 runs per model and question; the two blocks of more than 15,000 runs ran on ChatGPT-5 alone · full text of 15,613 characters from the structured data of the page, cross-checked against two archive copies · [to the article](https://hbr.org/2026/03/researchers-asked-llms-for-strategic-advice-they-got-trendslop-in-return)

**Grade:** Editorially reviewed · Group: Status, case report, or market observation

**Permalink:** https://robert-haase.de/en/evidence.html#strategie-trendslop

---

## sykophanz

**Claim:** Agreement is rewarded in the training signal. In an analysis of 15,000 response pairs from Anthropic’s own feedback data, matching the user’s beliefs is consistently among the strongest predictors of human preference; any single feature shifts the probability of preference by at most about 6 percentage points. In April 2025 OpenAI rolled back a GPT-4o update because the model had become excessively agreeable, naming as its early assessment three changes acting together, among them an additional reward signal from users’ thumbs-up and thumbs-down feedback.

**What the number does not say:** the study comes from Anthropic, two of the five assistants tested and the reward model analysed are its own, and every model dates from 2023. Truthfulness is a rewarded feature too, and depending on the condition, matching beliefs is not the strongest one. The paper tests factual questions and free-text tasks, not strategy advice. What is measured is what the data reward, not how often an assistant flatters in production; the OpenAI rollback shows only that the effect can occur there and be noticed, not how strong it is today. **Care with the most-quoted figure:** in the sub-experiment on 266 misconceptions the agreeing responses were produced deliberately: a model was instructed to deceive subtly, and the most convincing of 4,096 samples was selected. The 95 percent is the judgement of the Claude 2 preference model, not of humans, measured against the best of three short human-written objections, chosen by that same model. For the human raters the paper gives no figure; they mostly preferred the correcting response and did so less reliably as difficulty rose, read off the chart at roughly 3 percent on the easiest and roughly 21 percent on the hardest level. That is the majority of several lay readers without reference material; the average individual rater sits higher. The authors call the dataset a proof of concept.

**Source:** Sharma, Tong et al., “Towards Understanding Sycophancy in Language Models”, arXiv:2310.13548v4 of 10 May 2025, first version 20 October 2023, peer reviewed and accepted as a poster at ICLR 2024 · key figure from section 4.1: 15,000 randomly drawn response pairs from the helpfulness subset of Anthropic’s hh-rlhf dataset, 23 features, Bayesian logistic regression, holdout accuracy 71.3 percent · models tested: Claude 1.3, Claude 2, GPT-3.5, GPT-4 and LLaMA 2 · plus OpenAI, “Sycophancy in GPT-4o”, 29 April 2025, and “Expanding on what we missed with sycophancy”, 2 May 2025; update of 25 April, rollback from 28 April ([OpenAI statement](https://openai.com/index/sycophancy-in-gpt-4o/)) · [to the paper](https://arxiv.org/abs/2310.13548)

**Grade:** Controlled experiment and vendor documentation · Group: Verified study, vendor documentation, or court decision

**Permalink:** https://robert-haase.de/en/evidence.html#sykophanz

---

## markenspezifikation-wirkung

**Claim:** Whether a brand as a specification produces more brand-compliant AI output than a brand book is settled by no publicly verifiable measurement; the search finds no public benchmark for it. Neighbouring fields have such benchmarks: guideline adherence in medicine since December 2024, rule adherence in support dialogues since early 2026.

**What the finding does not say:** that nothing exists. Searched on 10 September 2026 with 24 phrase queries; Semantic Scholar (HTTP 429), the ACL Anthology, subscription databases and unpublished vendor studies remain unchecked. **Against our own thesis:** the general form question has been measured. A benchmark of 31 July 2026 stacks 24 machine-checkable instructions, one of them a fixed tone of voice, and tests whether the same instructions are followed better in compiled form: up to 11 percentage points more adherence on the weakest model, practically nothing on strong ones, and by its own account never compared against a competently hand-written prompt. So the question is not wide open. **No neighbour measures brand:** the three closest benchmarks measure rule adherence in support dialogues and the detection of violations by a model acting as judge. All three datasets are machine-generated, CompliBench is a preprint, and two of its eight authors work for a contact-centre software vendor. Adobe’s brand-compliance score is a product feature, not open to inspection. The opposite is measured no better.

**Source:** Own research, 10 September 2026: arXiv API with 24 phrase queries, among them brand voice, brand guidelines, brand consistency, brand compliance, machine-readable brand, brand book, style guide, tone of voice and corporate identity; plus OpenAlex, general web search, and the vendor pages of Adobe, Frontify, Jasper and Writer · closest measured work on the form question: “Instruction Stacking Collapse”, arXiv:2608.02639, 31 July 2026, 24 verifier-checked instructions, three models ([to the paper](https://arxiv.org/abs/2608.02639)) · closest benchmarks on rule adherence: CompliBench, arXiv:2604.12312, 14 April 2026, preprint, 318 machine-generated dialogues ([CompliBench](https://arxiv.org/abs/2604.12312)), PluralisticBehaviorSuite, arXiv:2511.05018, 300 behavioural guidelines across 30 industries, and JourneyBench, arXiv:2601.00596, 703 conversations · for comparison in medicine: AMEGA, npj Digital Medicine 7:358, 12 December 2024, and CPGBench, arXiv:2603.25196, 26 March 2026, 3,418 guideline documents

**Grade:** Negative finding of a documented search · Group: Status, case report, or market observation

**Permalink:** https://robert-haase.de/en/evidence.html#markenspezifikation-wirkung

---

## cowan-standards

**Claim:** A century of household technology did not reduce time spent on housework. The appliances mainly replaced work done by men, children and servants; the time saved went into rising standards of cleanliness and care. The expectation that automation frees up time has a documented precedent in which precisely that failed to happen.

**What the study does not say:** It concerns households between the open hearth and the microwave, not knowledge work and not AI. Transferring it draws an analogy, not a proof. **It serves as a corrective, not a forecast:** it shows that labour saving through technology is an assumption that has historically failed once — not that it will fail again.

**Source:** Ruth Schwartz Cowan, “More Work for Mother: The Ironies of Household Technology from the Open Hearth to the Microwave”, 1983 · awarded the Dexter Prize of the Society for the History of Technology, 1984 · [to the overview](https://hss.sas.upenn.edu/content/more-work-mother-ironies-household-technology-open-hearth-microwave)

**Grade:** Historical study · Group: Verified study, vendor documentation, or court decision

**Permalink:** https://robert-haase.de/en/evidence.html#cowan-standards

---

## foresight-performance

**Claim:** Corporations whose future preparedness was rated strong in 2008 reached 16 percent profitability by 2015, against 12 percent for the industry average — 33 percent more. On market capitalisation growth over the same seven years they stood at 75 percent against an average of 25. Firms with identified deficiencies came in 37 to 44 percent below average.

**What the widely cited figure omits:** of 83 corporations surveyed, matching against performance data left **70 for profitability and only 42 for market capitalisation growth**. The authors themselves call this an important limitation. The “200 percent additional growth” circulating in the foresight industry therefore rests on 42 companies. **And it is a correlation, not a cause:** corporations that can afford futures work differ in other ways from those that cannot.

**Source:** Rohrbeck and Kum, “Corporate foresight and its impact on firm performance: A longitudinal analysis”, Technological Forecasting & Social Change 129, 2018 · preparedness measured 2008, performance 2015 · [to the study](https://www.sciencedirect.com/science/article/pii/S0040162517302287)

**Grade:** Longitudinal study · Group: Status, case report, or market observation

**Permalink:** https://robert-haase.de/en/evidence.html#foresight-performance

---

## prognose-mensch-maschine

**Claim:** On the ForecastBench tournament leaderboard, the median of human superforecasters sits fourth at 68.8, behind three Google DeepMind entries allowed to use tools and extra context. On the base leaderboard, without tools, the human median leads at 67.8 against the best model at 62.6.

**What the leaderboard does not say:** the machines’ lead is not established. Its own significance column finds no difference for the three top places, at p values of 0.71, 0.60 and 0.57, and the confidence intervals almost fully overlap. The Brier Index is not a hit rate despite the percent sign, and the conversion is non-linear. **A best-of-many result:** Google DeepMind holds 50 of 334 entries and all three places ahead of the humans, whose comparison group is a single row. The questions differ too: the humans were last surveyed in July 2024, 578 questions against 790 and 1,165. **On parity:** the operators record parity reached on 7 June 2026 for the tournament evaluation and project it for the tool-free one to February 2028, interval July 2026 to December 2030, which reflects only the uncertainty of the line fit. And forecasting dated events is not a strategic judgement about a brand.

**Source:** ForecastBench, Forecasting Research Institute, tournament and base leaderboards, retrieved 10 September 2026 · entries appear only 50 days after submission, so the leaderboard is not a same-day state · [to the leaderboard](https://www.forecastbench.org/leaderboards/)

**Grade:** Ongoing measurement · Group: Status, case report, or market observation

**Permalink:** https://robert-haase.de/en/evidence.html#prognose-mensch-maschine

---

## prognose-assistenz

**Claim:** 991 participants answered six forecasting questions, some with access to a language model. The assistance improved accuracy by 24 to 28 percent against the control group. The comparison within the groups is the notable part: an assistant deliberately tuned to be overconfident and noisy also helped substantially.

**What the result suggests but does not prove:** That the poor assistant also worked points to part of the gain coming from the act of consulting rather than the quality of the machine's answer — but that is not established. The authors themselves note that outliers affect the picture and robustness remains to be tested. Six questions are a narrow base, and this is a preprint.

**Source:** Schoenegger, Park, Karger, Trott and Tetlock, “AI-Augmented Predictions: LLM Assistants Improve Human Forecasting Accuracy”, preregistered, arXiv, February 2024 · 991 participants · [to the study](https://arxiv.org/abs/2402.07862)

**Grade:** Preregistered experiment · Group: Status, case report, or market observation

**Permalink:** https://robert-haase.de/en/evidence.html#prognose-assistenz

---

## abbott-zustaendigkeit

**Claim:** According to Andrew Abbott's study, occupations compete not over performing their work but over its *definition*. Whoever determines what counts as a problem, and who is responsible for it, has already settled the competition. Abbott's finding on how this happens: jurisdictions are claimed when they fall vacant — not by filling an occupied one better.

**What the study does not say:** It dates from 1988 and treats classical professions — medicine, law, accountancy — not consulting and not AI. Applying it to today's occupations is an interpretation. **And it does not explain how a jurisdiction is won**, only what the competition is about. It serves as evidence for what definitional power means, not as a manual.

**Source:** Andrew Abbott, “The System of Professions: An Essay on the Division of Expert Labor”, University of Chicago Press, 1988 · [to the publisher](https://press.uchicago.edu/ucp/books/book/chicago/S/bo5965590.html)

**Grade:** Standard reference · Group: Status, case report, or market observation

**Permalink:** https://robert-haase.de/en/evidence.html#abbott-zustaendigkeit

---

## esposito-kommunikation

**Claim:** The sociologist Elena Esposito considers the analogy between algorithms and human intelligence misleading and proposes a different term: artificial *communication*. In her words: if machines contribute to social intelligence, it will not be because they have learned to think like us, but because we have learned to communicate with them.

**What the book is not:** not a measurement but a theoretical proposal from systems theory. It supports no figure and cannot be refuted like an experiment. **And it is not about brands:** Esposito's examples are recommendation lists, profiling and the right to be forgotten. Applying it to whether a brand is legible to machines is an interpretation — a plausible one, but not one the book makes.

**Source:** Elena Esposito, “Artificial Communication: How Algorithms Produce Social Intelligence”, MIT Press, 24 May 2022 · 200 pages, open access edition available · [to the publisher](https://mitpress.mit.edu/9780262046664/artificial-communication/)

**Grade:** Scholarly book · Group: Status, case report, or market observation

**Permalink:** https://robert-haase.de/en/evidence.html#esposito-kommunikation

---

## drei-arbeitsweisen

**Claim:** A field study of 244 management consultants found three ways of working with generative AI — differing not in the tool but in *who steers the workflow*. Those who involve the AI throughout acquire new AI capability. Those who use it selectively for individual steps, keeping the problem definition themselves, deepen their existing domain expertise. Those who hand over the whole process build **neither**.

**What the study does not say:** it does *not* compare the quality of outputs. The abstract makes no claim about which mode produces more accurate recommendations — **summaries in circulation that say otherwise go beyond the source.** What is measured is capability building, not results. Also: a working paper in draft form, not peer reviewed, and all respondents come from a single consultancy.

**Source:** Randazzo, Lifshitz, Kellogg, Dell'Acqua, Mollick, Candelon and Lakhani, “Cyborgs, Centaurs and Self-Automators”, Harvard Business School Working Paper 26-036, 2025 · 244 Boston Consulting Group consultants · [to the working paper](https://www.hbs.edu/ris/Publication%20Files/26-036_e7d0e59a-904c-49f1-b610-56eb2bdfe6f9.pdf)

**Grade:** Field study, working paper · Group: Status, case report, or market observation

**Permalink:** https://robert-haase.de/en/evidence.html#drei-arbeitsweisen

---

## kompetenz-nivellierung

**Claim:** Among 5,179 customer support agents at a large firm, issues resolved per hour rose 14 percent on average with an AI assistant. The average hides the point: **novice and low-skilled workers gained 34 percent, while the effect on experienced and highly skilled workers was “minimal”.** The authors suspect the model disseminates the practices of abler workers to newer ones.

**What the number does not say:** Customer support is highly structured work with recurring cases — transfer to strategy or design is open. **And it is a working paper**, explicitly not peer reviewed per its cover page. What was measured is volume, not quality: issues resolved per hour, not how well — though customer sentiment improved alongside.

**Source:** Brynjolfsson, Li and Raymond, “Generative AI at Work”, NBER Working Paper 31161, April 2023, revised November 2023 · 5,179 customer support agents · [to the working paper](https://www.nber.org/papers/w31161)

**Grade:** Field experiment · Group: Verified study, vendor documentation, or court decision

**Permalink:** https://robert-haase.de/en/evidence.html#kompetenz-nivellierung

---

## aufwand-statt-koennen

**Claim:** In a preregistered experiment with 444 college-educated professionals, time spent on writing tasks fell by 0.8 standard deviations while quality rose by 0.4. Here too the gap between participants narrowed — weaker performers gained more. The authors' reading: the tool mostly substitutes for *effort* rather than complementing *skill*, shifting work away from rough drafting towards idea generation and editing.

**On the figures:** these are from the verified working paper of March 2023, which states it is not peer reviewed. **The peer-reviewed version appeared later in *Science* with differing numbers** — 453 participants and “40 percent time saved” circulate; that version sits behind a paywall and was not inspected. **What the figures do not say:** these were short, isolated writing tasks, not projects spanning weeks.

**Source:** Noy and Zhang, “Experimental Evidence on the Productivity Effects of Generative Artificial Intelligence”, MIT, working paper of 2 March 2023 · peer-reviewed version in Science 381, 2023, pp. 187–192 · [to the publication](https://www.science.org/doi/10.1126/science.adh2586)

**Grade:** Preregistered experiment · Group: Status, case report, or market observation

**Permalink:** https://robert-haase.de/en/evidence.html#aufwand-statt-koennen

---

## boussioux-neuheit-wert

**Claim:** In an ideas contest on the circular economy, 300 screened evaluators each rated 13 of 234 solutions, 3,900 ratings in total: 54 from people, 180 from GPT-4 with human-guided prompts. The human ones were judged more novel (the machine ones minus 0.140 on a scale of 1 to 5), the machine ones more strategically viable, more valuable environmentally and financially, and better overall (plus 0.088 to 0.160). At the top end the picture flips: AI solutions received the top novelty mark 7.9 percentage points less often, and their value advantage vanished there across all four dimensions.

**What the numbers do not say:** The comparison was not human against machine but the crowd against human-guided AI with purpose-built prompts. When the model was iteratively told to differentiate, the gap was no longer detectable on average (minus 0.056) and remained only at the top mark. **What they rest on:** Judgements about texts, not realised ideas. All evaluators are based in the United States. GPT-4 as of mid-2023, a single task domain, ten AI against three human solutions per block. Two of the five authors are listed with the AI firm involved; co-author Jacimovic founded it.

**Source:** Boussioux, Lane, Zhang, Jacimovic and Lakhani, “The Crowdless Future? Generative AI and Creative Problem-Solving”, Organization Science 35(5), pp. 1589–1607 · 234 solutions evaluated, 300 evaluators, 3,900 ratings, contest 30 January to 15 May 2023 · received 30 November 2023, revised 23 January, 14 May and 20 June 2024, accepted 26 June 2024, online 16 August 2024, September/October 2024 issue · [Source](https://doi.org/10.1287/orsc.2023.18430)

**Grade:** Controlled test · Group: Verified study, vendor documentation, or court decision

**Permalink:** https://robert-haase.de/en/evidence.html#boussioux-neuheit-wert

---

## mintzberg-muster

**Claim:** Henry Mintzberg defined strategy in 1978 as “a pattern in a stream of decisions”: a strategy has formed once a sequence of decisions shows consistency over time. That opens to research the strategies which came about despite intentions, or with no intention at all. He showed it on two long-run cases, Volkswagenwerk and the United States in Vietnam from 1950 to 1973.

**What the paper does not measure:** It forms concepts and describes. Nowhere does it show that a strategy which grew produces better results than a planned one. Mintzberg does attack planning theory, its split between formulation and implementation resting on two assumptions that often prove false. He did not test that. **The foundation is larger than what is shown:** The general conclusions rest on four funded major studies and over twenty student papers; only two of the four are documented in the text, the rest are not. Both cases shown are historical, lie outside brand management, and were reconstructed in hindsight by the same research group that set what counts as a pattern.

**Source:** Henry Mintzberg, “Patterns in Strategy Formation”, Management Science, Vol. 24, No. 9, pp. 934 to 948 · four major studies funded by the Canada Council and over twenty student papers, two of them presented: Volkswagenwerk 1934 to 1974 per the abstract and 1920 to 1974 per the section heading, the United States in Vietnam 1950 to 1973 · manuscript received 19 April 1976, printed May 1978 · [Source](https://doi.org/10.1287/mnsc.24.9.934)

**Grade:** Exploratory case studies, concept-forming · Group: Status, case report, or market observation

**Permalink:** https://robert-haase.de/en/evidence.html#mintzberg-muster

---

## wahrgenommene-differenzierung

**Claim:** Across 17 product categories in Australia and the UK, an average of 11 percent of a brand’s current users consider it different and 10 percent consider it unique; 17 percent name at least one of the two. They buy the brand anyway. The authors recommend distinctiveness instead.

**What the figure does not say:** It does not show that buyers see no differences at all. On average 54 percent credit at least one brand in the category with one of the two, and 76 percent for soft drinks in the UK. The per-brand score is low because each respondent names only one or two brands, and each names different ones; across categories, 8 to 36 percent. Only users were surveyed; that they buy the brand anyway follows from that, not from the measurement. **Who collected the data and who paid:** The accessible text gives no sample sizes. Most data, and the measure itself, come from the advertising agency Young & Rubicam, collected in 1999; the institute lists Coca-Cola, Mars and Nielsen among its funders. The paper says nothing about machine selection, it predates every agent.

**Source:** Jenni Romaniuk, Byron Sharp and Andrew Ehrenberg, Ehrenberg-Bass Institute, Australasian Marketing Journal 15 (2), pages 42 to 54 · survey of current brand users across 17 product categories, the Australian ones by telephone, the UK ones from the Young & Rubicam Brand Asset Valuator, collected 1999 · 2007 · [Source](https://web.archive.org/web/20251015044426/https://marketingscience.info/wp-content/uploads/staff/2015/08/different.pdf)

**Grade:** Survey · Group: Status, case report, or market observation

**Permalink:** https://robert-haase.de/en/evidence.html#wahrgenommene-differenzierung

---

End of file: 18 of 18 entries on Judgement. Last entry: wahrgenommene-differenzierung.
