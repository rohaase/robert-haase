# Evidence: Agents

20 of 114 entries in the collection “Evidence” by Robert Haase, as of 23 September 2026.

Page: https://robert-haase.de/en/evidence.html · Overview of all claims: https://robert-haase.de/en/evidence.md · JSON: https://robert-haase.de/en/evidence.json · Deutsch: https://robert-haase.de/belege-agenten.md

License: CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). Please cite the primary source, not this page.

This file is generated from the page. Where the two differ, the page applies.

## How this collection is built

Every figure is traced back to the body that measured it, not to the article citing it. On their way through the retellings, figures lose their denominator first, then their caveat, and finally their origin. Where a figure is only accessible through a third party, that intermediary is named in the source line. Own measurements carry their method with them; they have not been independently verified yet.

**The limit belongs to the number.** The most common error is not the wrong number but the right one carrying a claim that reaches further than the evidence. That is why every entry has two parts, and the second one matters more. Above each figure sits what kind of evidence it is, from verified study to single case. That decides how far it carries.

What does not survive the check does not get in, or gets taken out, my own articles included. One of them claimed that 44 percent of US online shoppers begin their purchase journey in a language model, attributed to Bain. Bain gives two other figures, 17 percent and 30 to 45 percent, which had merged into one along the way. Both are here now; the 44 is not.

This page ages. Every entry carries its date; superseded numbers get replaced, not quietly deleted. If you find an error, [write to me](mailto:hallo@robert-haase.de) and I will correct it and note the date.

The collection does not map the state of the research, only the figures I needed for my own texts. Free to use with attribution. When in doubt, link the primary source rather than this page.

## Grades in this topic

+ Verified study, vendor documentation, or court decision (14) → leere-buttons, javascript, lighthouse, a11y-tree, dax-zutritt, dax-benennung, dax-landmarken, dax-bilder, verlage-robots, marken-robots, agenten-erfolg, rechtsvorbehalt-kommentar, lighthouse-agent-discovery, content-signal-selten
+ Preliminary: prototype, single test, forecast, or vendor figure (5) → agent-ready, a11y-cua, klarna-700, abruf-kuerzung, robots-sperre-chatbots
+ Status, case report, or market observation (1) → aipref

---

## leere-buttons

**Claim:** On 30.6 percent of one million home pages surveyed, buttons had no accessible name; on 51 percent, form fields had no label.

**What the numbers do not say:** They come from an accessibility survey, not an agent test. The connection holds nonetheless: a button without a name carries no label in the accessibility tree, and agents that work from that tree cannot name it. Home pages were measured, not entire sites, and both shares count pages with at least one such fault, not the share of all buttons or all form fields. **For form fields that is the decisive distinction:** the same survey counts separately 33.1 percent of all form fields without a label, one field in three. What was checked is the state of the page after JavaScript has run, so what a rendering agent finds. WebAIM records that an automated tool does not find every violation: the values are more likely too low than too high, and an absent finding does not establish accessibility.

**Source:** WebAIM Million, eighth edition: WAVE evaluation of one million home pages from the Tranco ranking · data from February 2026, page last changed 30 March 2026 · previous year 29.6 percent for buttons and 48.2 percent for form fields · [Source](https://webaim.org/projects/million/)

**Grade:** Verified study · Group: Verified study, vendor documentation, or court decision

**Permalink:** https://robert-haase.de/en/evidence.html#leere-buttons

---

## agent-ready

**Claim:** In a controlled experiment, three browser agents reached a strict success rate of 89.3 percent on the agent-friendly version against 49.3 percent on the original.

**What the experiment does not say:** What varied was machine clarity, not accessibility, and these are two versions of a purpose-built shop prototype, not a real website. The authors state explicitly that this is a proof of concept whose results "should not be generalized to all domains, websites, or agent systems". The figure quoted is also the stricter of two success rates measured. It is the best available indication, not a proof.

**Source:** Elnaffar and Rashidi, Designing Agent-Ready Websites, arXiv 2607.12056, 300 runs across three models · July 2026 · [Source](https://arxiv.org/abs/2607.12056)

**Grade:** Preliminary, prototype · Group: Preliminary: prototype, single test, forecast, or vendor figure

**Permalink:** https://robert-haase.de/en/evidence.html#agent-ready

---

## a11y-cua

**Claim:** The widely cited drop in agent success from 78 to 42 percent comes from a study that changed no website at all.

**What actually varied:** how the agent operates, not the accessibility of the pages. The study took the agent’s mouse away, restricting it to the keyboard. As evidence that accessible websites help agents it does not hold, although it is cited for exactly that everywhere. A clean comparison of accessible against inaccessible is still missing. **The numbers are narrower than their citations too:** they describe a single model (Claude Sonnet 4.5, precisely 78.33 to 41.67 percent), and the tasks span desktop applications, not only websites. A second, open model fell from 20 to 0 percent.

**Source:** A11y-CUA, arXiv 2602.09310, presented at CHI 2026 · February 2026 · [Source](https://arxiv.org/abs/2602.09310)

**Grade:** Usually miscited · Group: Preliminary: prototype, single test, forecast, or vendor figure

**Permalink:** https://robert-haase.de/en/evidence.html#a11y-cua

---

## javascript

**Claim:** Seven widely used US AI assistants execute no JavaScript on a user-triggered fetch and read only the raw HTML. Five others do execute it.

**What the test shows and what it does not:** The setup put a decoy value in the raw HTML and the real value behind JavaScript. ChatGPT, Claude, Gemini, Perplexity, Meta AI, Copilot, and Grok returned the decoy; DeepSeek, ERNIE, Qwen, Kimi, and Mistral returned the real value. **The dividing line runs by vendor, not by technology** — it is a decision, not a limit. The finding covers the direct fetch, not content that reaches an answer through the Google index. An earlier test in December 2025 still measured Gemini as the only system that rendered, so the picture moves.

**Source:** Search Engine World, 12 assistants compared · June 2026 · earlier test: searchVIU, December 2025 · [Source](https://www.searchengineworld.com/do-ai-assistants-actually-render-your-javascript-when-grounding-we-put-it-to-the-test)

**Grade:** Controlled test · Group: Verified study, vendor documentation, or court decision

**Permalink:** https://robert-haase.de/en/evidence.html#javascript

---

## lighthouse

**Claim:** Since version 13.3.0 of 7 May 2026, Lighthouse ships an "Agentic Browsing" category in its default configuration.

**What the score does not say:** Google labels the category explicitly as experimental and based on proposed standards; it requires Chrome 150 or later, and the WebMCP audits require registering for the origin trial. It reports a pass rate, not a 0-to-100 score like performance or SEO. It measures agent readiness, explicitly not visibility in Google Search. What is notable is the direction: machine readability turns from a claim into a measured property.

**Source:** Lighthouse release 13.3.0 of 7 May 2026, category in the default config · [Google’s documentation](https://developer.chrome.com/docs/lighthouse/agentic-browsing/scoring) · [Source](https://github.com/GoogleChrome/lighthouse/releases/tag/v13.3.0)

**Grade:** Vendor documentation · Group: Verified study, vendor documentation, or court decision

**Permalink:** https://robert-haase.de/en/evidence.html#lighthouse

---

## a11y-tree

**Claim:** Google names three ways agents perceive a page: screenshots, raw HTML, and the accessibility tree. Modern agents combine them.

**What does not follow:** that agents work from the accessibility tree alone. That shortcut is exactly what circulates. Google describes the tree as a high-fidelity map that ignores visual noise, but says in the same text that agents cross-reference tree and DOM with a visual rendering. For practice this changes little: an element without an accessible name is missing from two of the three routes.

**Source:** Google, Build agent-friendly websites (web.dev) · as of 1 April 2026 · [Source](https://web.dev/articles/ai-agent-site-ux)

**Grade:** Vendor documentation · Group: Verified study, vendor documentation, or court decision

**Permalink:** https://robert-haase.de/en/evidence.html#a11y-tree

---

## aipref

**Claim:** A common standard for how websites permit or refuse AI use of their content still does not exist.

**How far the work has come:** The IETF working group AIPREF is developing two building blocks, a vocabulary and an attachment mechanism. On 21 September 2026 both are in IESG state “I-D Exists”, so not yet submitted, no RFC. From 4 September to 3 November 2025 they were in working group last call and returned to “WG Document”. Since April 2026 the vocabulary draft carries a note that its content does not reflect working group consensus, and marks two of its sections as not yet agreed; the attachment draft carries no such note. **The group has missed its own schedule twice:** due in August 2025, moved on 23 September 2025 to 31 August 2026, and that date too passed without submission and has not been re-dated. **What this entry does not say:** whether such a standard is coming or when, and how well today’s workarounds hold, robots.txt and vendor-specific tokens. It measures the state at the IETF, not at other bodies or vendors. Eight further individual drafts on the same subject sit with the working group, none adopted. The Datatracker lists both drafts a day earlier, 13 September and 18 August 2026, because it renders US Pacific time; the drafts themselves are dated 14 September and 19 August 2026.

**Source:** IETF, AI Preferences working group (aipref), state “Active” · draft-ietf-aipref-vocab-08 of 14 September 2026 and draft-ietf-aipref-attach-05 of 19 August 2026, IESG state “I-D Exists”, WG state “WG Document”, intended status Proposed Standard, no RFC · milestones for both blocks moved on 23 September 2025 from August 2025 to 31 August 2026 and unchanged since ([working group history](https://datatracker.ietf.org/group/aipref/history/)) · full text of the vocabulary draft with the consensus note ([draft text](https://www.ietf.org/archive/id/draft-ietf-aipref-vocab-08.txt)) · checked 21 September 2026 · [Working group](https://datatracker.ietf.org/wg/aipref/about/)

**Grade:** State of standardization · Group: Status, case report, or market observation

**Permalink:** https://robert-haase.de/en/evidence.html#aipref

---

## dax-zutritt

**Claim:** Of 160 home pages requested, 12 reject an automated retrieval with active bot defence, or 7.5 percent. It comes from Akamai or Cloudflare on ten of the twelve pages, and from Amazon CloudFront at Siemens and Hannover Rück. On 18 of 22 pages checked at HTTP level the same rejection came regardless of the browser string; there the detection works from the TLS fingerprint and the order of the HTTP headers. On the two CloudFront pages the browser string alone decides.

**What the number does not say:** It measures the rejection of a retrieval tool, not reachability for agents. **A regular, remote-controlled Chrome got through several of these sites without trouble** — the defence separates tool from browser, not human from machine. An agent driving a real browser would likely get further; this was not tested, because testing it would have meant circumventing the detection. **Not counted here are 13 further failures with other causes:** four stale addresses in the directory, four technical errors, two country selectors instead of home pages, two empty responses, one unstable result. An earlier version of this figure said 30 percent and lumped all of that together.

**Source:** Own measurement, 30 August 2026 · cause checked per site at HTTP level, with an ordinary and with an automated browser string · same response on 18 of 22 pages

**Grade:** Own survey, reproducible · Group: Verified study, vendor documentation, or court decision

**Permalink:** https://robert-haase.de/en/evidence.html#dax-zutritt

---

## dax-benennung

**Claim:** Across 135 home pages of German listed companies from the DAX, MDAX and SDAX, 456 of 13,527 controls carry no name in the accessibility tree, or 3.4 percent. The rate barely differs between the three indices: DAX 3.1, MDAX 3.8, SDAX 3.3 percent.

**What the number does not say:** It measures what an agent finds, not whether it completes its task. These are home pages as delivered, consent dialog included — not checkout flows or signed-in areas, where the picture may differ. **The comparison with WebAIM's 30.6 percent of empty buttons does not hold:** that comes from one million home pages worldwide; this is 135 listed companies. **The distribution is uneven:** 57 of the 135 pages have no gap at all, 15 exceed 10 percent, the worst reaches 30.6. And nearly all gaps follow one pattern — logos and icons serving as links or buttons: brand and partner logos, social network icons, carousel arrows, play buttons.

**Source:** Own measurement, 30 August 2026 · 160 home pages from DAX, MDAX and SDAX requested, selection and address taken from Wikidata · Chrome's own accessibility tree · two passes, 135 of 136 pages with identical results

**Grade:** Own survey, reproducible · Group: Verified study, vendor documentation, or court decision

**Permalink:** https://robert-haase.de/en/evidence.html#dax-benennung

---

## dax-landmarken

**Claim:** 52 of 135 home pages of German listed companies have no main-content landmark. For a program reading the page, the marker for where content begins and navigation ends is missing.

**What the number does not say:** A missing landmark does not render a page unusable — headings and text structure remain readable, and browsers partly infer a substitute structure. It indicates the care taken over markup, not a fault with immediate consequences. Home pages only, no subpages.

**Source:** Own measurement, 30 August 2026 · counted the role “main” in Chrome's accessibility tree · two passes with identical results

**Grade:** Own survey, reproducible · Group: Verified study, vendor documentation, or court decision

**Permalink:** https://robert-haase.de/en/evidence.html#dax-landmarken

---

## dax-bilder

**Claim:** Across 135 home pages of German listed companies from DAX, MDAX and SDAX, 1,662 of the 3,979 images Chrome exposes in the accessibility tree carry no name, so 41.8 percent. Among the unnamed images then inspected by element type, 86 percent are inline SVG graphics and 13 percent classic img elements.

**What the number does not say:** only images Chrome exposes in the accessibility tree are counted, ones correctly marked as decorative are absent from numerator and denominator alike. On a test page with six images only four appeared and the rate came out at 50 percent, although two of six were faulty: marking up cleanly shrinks your own denominator. About the share of all images on a page the rate says nothing. **The split names the element type, not the purpose:** a linked corporate logo that would need a name and an ornamental icon sit in the same 86 percent, and the share of cases with an actual consequence lies between the 13 percent and an unknown higher value. **Two further limits:** the base of the 86 and 13 percent is the inspected subset, capped at 80 nodes per page, not the 1,662; whether it bound can no longer be established, the raw data were not kept, and an average of 12.3 unnamed images per page argues against it; and the two shares come to 99 rather than 100 percent because the tool knows exactly two element types. And 1,662 out of 3,979 is a sum across all pages without a median or a split by index: the median for interactive elements stands at 1.0 percent, far below the pooled rate of 3.4 percent, where a few outliers carry it; whether the same holds for images is open. A linked logo without a name also counts as an unnamed interactive element, so the two figures must not be added. This measurement has no independent replication, nor do the three other own DAX measurements.

**Source:** Own measurement, 30 August 2026 · 160 home pages from DAX, MDAX and SDAX requested, 135 evaluable, selection and address from Wikidata · Chrome’s own accessibility tree, counting non-ignored nodes of role “image” without a name · breakdown by element type capped at 80 nodes per page · two runs, 135 of 136 pages with identical results

**Grade:** Own measurement, reproducible · Group: Verified study, vendor documentation, or court decision

**Permalink:** https://robert-haase.de/en/evidence.html#dax-bilder

---

## verlage-robots

**Claim:** Of 76 assessable German-language news and trade media, 44 block at least one training crawler in their robots.txt, or 57.9 percent. 38 of them block GPTBot, exactly half, 40 block CCBot and 36 Bytespider. Far fewer block the same provider’s search bot: OAI-SearchBot appears on 8 outlets’ lists, or 10.5 percent. 11 outlets block training without blocking a single AI search bot or user-triggered fetch.

**What the number does not say:** robots.txt forbids nothing, it asks. What is measured is a declaration of intent, not access control: RFC 9309 expressly leaves compliance optional, and OpenAI itself writes that the rules may not apply to user-triggered retrieval. **Blocking training therefore says nothing about visibility in AI answers** while the search bots stay open. **Open does not mean permitted here:** what is measured is the absence of a block, not a stated permission; exactly 2 of the 76 outlets write an express allow for an AI bot into the file. **Three of the names counted are not crawlers at all:** Google-Extended, Applebot-Extended and Webzio-Extended fetch no page, they only govern what may happen to data already fetched. At Apple and Microsoft, search and AI cannot be separated technically, neither runs a separate name for it. **And the name has to be exact:** one trade title blocks “ChatGPT”, a token OpenAI does not run, so the rule does not apply. **And the sample is disclosed but not representative:** 14 of the 77 titles come from an external ranking, the rest follow stated rules. The news agencies are missing, and they are the strongest objection: dpa, AFP, epd, APA and Keystone-SDA together block not a single AI crawler, because their content is protected by contract rather than by this file.

**Source:** Own survey, 12 September 2026 · 77 titles requested, 76 assessable · news part per the “Weekly reach online” chart on the Germany page of the Reuters Institute Digital News Report 2026, trade media and the Austrian and Swiss titles by a stated rule · evaluated per RFC 9309 against 51 bot names documented by their operators, what counts is access to the home page · requested first with an own user agent, on rejection with an ordinary browser string, needed for 3 titles · two runs with identical verdicts

**Grade:** Own survey, reproducible · Group: Verified study, vendor documentation, or court decision

**Permalink:** https://robert-haase.de/en/evidence.html#verlage-robots

---

## marken-robots

**Claim:** Of 148 assessable home pages of the companies in DAX, MDAX and SDAX, 10 block at least one training crawler, or 6.8 percent; 4 block GPTBot. 138 block no AI access at all, among them 14 that serve no robots.txt whatsoever. 7 companies write an express permission for an AI crawler into the file, 6 of which block none at the same time: there are almost as many invitations as blocks. The only reservation of text and data mining rights to be found in the index sits with an academic publisher, and that publisher blocks no crawler at all.

**What the number does not say:** It measures a request, not access control; how many of the same pages technically reject an automated retrieval is a separate entry on this page. **Of the ten blocks, eight are by name.** One page blocks everything unnamed and expressly admits the large providers, one blocks every crawler including Google, which is no decision about AI, and one counts only because an AI crawler sits in an inherited list of 139 unwanted bots. **A missing block is not a decision for AI:** 14 pages have no file at all and have therefore decided nothing. **Twelve pages were not assessable**, six reject the retrieval and six do not answer; which way that moves the rate is open, because under RFC 9309 an unreachable robots.txt counts as permission. What is measured is the home page: anyone setting different rules deeper in the site appears open here. **The rights reservation was sought only in technical form**, in the file provided for it, in the response header and in the page source; 134 of the 160 pages answered that clearly. A reservation in the terms of use, the form common in Germany, is therefore not covered.

**Source:** Own survey, 12 September 2026 · the same list as the survey of 30 August, 160 home pages from DAX, MDAX and SDAX, index membership from Wikipedia, address from Wikidata · evaluated per RFC 9309 against 51 bot names documented by their operators, what counts is access to the home page · requested first with an own user agent, on rejection with an ordinary browser string, needed for 2 pages · two runs, 160 of 160 pages with identical verdicts

**Grade:** Own survey, reproducible · Group: Verified study, vendor documentation, or court decision

**Permalink:** https://robert-haase.de/en/evidence.html#marken-robots

---

## agenten-erfolg

**Claim:** Across 300 tasks on 136 real websites, the success rate of the best web agents rose from 61 to 97.7 percent in just over 16 months. When the benchmark was first evaluated in March 2025, one agent reported 89 percent for itself and scored 30 when measured; most did not beat a simple agent from early 2024. By August 2026 the leading entry solves even the hardest tasks — those needing eleven steps or more — completely.

**What the number does not say:** The current figures come from *four* leaderboard entries, submitted by the agents' own vendors and checked by the benchmark team — not an independent survey. **And a warning sits on the leaderboard itself:** the tasks have been public since April 2025, and the team explicitly asks that they not be used as training data. Whether the scores show capability or familiarity with known tasks is therefore undecided. What is measured is whether a task was completed, not how well — and not whether the brand was represented correctly along the way.

**Source:** Xue et al., “An Illusion of Progress? Assessing the Current State of Web Agents”, COLM 2025 (arXiv:2504.01382) for the baseline · Online-Mind2Web leaderboard, human evaluation, as of 4 August 2026, for the current figures · 300 tasks, 136 websites · [to the leaderboard](https://huggingface.co/spaces/osunlp/Online_Mind2Web_Leaderboard) · [Source](https://arxiv.org/abs/2504.01382)

**Grade:** Verified study · Group: Verified study, vendor documentation, or court decision

**Permalink:** https://robert-haase.de/en/evidence.html#agenten-erfolg

---

## klarna-700

**Claim:** Klarna’s most-quoted AI number is an estimate, not a headcount: the press release of February 2024 states “the equivalent work of 700 full-time agents”. The same measure appears as over 700 in the IPO prospectus of September 2025, and in the annual report of February 2026 still at over 700 in the business section and at over 850 in the operating review of that same report. The headcount sits beside it: approximately 5,527 full-time employees at the end of 2022, approximately 2,831 at the end of 2025.

**What the number actually is:** an extrapolation from the average monthly drop in chat and telephone conversations, based on 2024 in the prospectus and in the business section of the report, on 2025 in the operating review. The two values therefore do not contradict each other, they simply stand side by side without comment: the older figure in the present tense, the newer one as a statement about the year 2025. **Not a retreat from AI:** Klarna calls it a “dual-track approach”, kept the human option open as early as 2024, and expects employee numbers to keep falling according to both filings. Citing the case as a return to humans cites against the source.

**Source:** Klarna Group plc, company statements in a press release, the IPO prospectus (Form F-1/A) and the annual report (Form 20-F) filed with the SEC · 27 February 2024 to 26 February 2026 · [Source](https://www.sec.gov/Archives/edgar/data/2003292/000200329226000007/klar-20251231.htm)

**Grade:** Usually miscited · Group: Preliminary: prototype, single test, forecast, or vendor figure

**Permalink:** https://robert-haase.de/en/evidence.html#klarna-700

---

## rechtsvorbehalt-kommentar

**Claim:** Of 77 German-language news and trade media, 20 declare a reservation of rights against text and data mining in their robots.txt, as a comment line: 16 name section 44b of the German Copyright Act explicitly, four others invoke Austrian or European law or state the reservation without naming a section. Among the home pages of the DAX, MDAX and SDAX companies, not a single one does. One machine-readable form, the *TDM-policy* line in the same file, appears in none of the files examined.

**What the figures do not say:** A comment is not a rule. Crawlers do not evaluate comment lines; the line declares a reservation, it does not enforce one. Whether this form meets the machine-readable reservation required by section 44b(3) of the German Copyright Act is a legal question, and the measurement does not answer it. **Two further media** prohibit automated extraction in a comment without invoking a reservation of rights; they are not counted. Two of the 16 reserve rights explicitly for third-party material only, content from dpa and Picture-Alliance, not for their own. Only the robots.txt of the home page was measured: reservations in the terms of use, in the imprint, in the page metadata or in the file /.well-known/tdmrep.json are not covered here; the only reservation found in the index at all sits exactly there and is described in an entry of its own. Of the 160 index home pages, 14 did not answer, 15 in the second run; they may carry a reservation.

**Source:** Own survey, 17 September 2026 · same lists as the two robots.txt entries of 12 September, whose composition and limits are stated there: 77 media titles, all readable, and 160 home pages from DAX, MDAX and SDAX, 146 of them readable in the first run and 145 in the second · searched the robots.txt as served for comments naming section 44b, for the wording text and data mining, and for a TDM-policy line · fetched first with an own identifier, on refusal with an ordinary browser identifier · two runs, 77 of 77 media identical, one index page differing because it did not answer in the second run

**Grade:** Own survey, reproducible · Group: Verified study, vendor documentation, or court decision

**Permalink:** https://robert-haase.de/en/evidence.html#rechtsvorbehalt-kommentar

---

## abruf-kuerzung

**Claim:** An agent’s standard fetch tool read only the front part of a page with 128,000 characters of visible text. A probe by hand the same morning found the cut at entry 65 of 90; the tool itself reported “about 80” entries and put the cut between 100,000 and 115,000 characters. In an acceptance test with ten fixed questions, each asked twice, it pointed out the truncation for only three of them, although a visible sentence on the page named exactly the marker for detecting it. With an anchor card, questions about a specific entry led to the right file in 6 of 6 cases, counting questions in 4 of 4. For conceptual questions it kept answering from the truncated text without mentioning the cut.

**One tool, one page:** what was tested is the fetch tool of a Claude agent on a single page, not the market. ChatGPT, Gemini and Perplexity were not tested, and a browser agent that renders the page reads differently. **The two probes disagree:** entry 65 amounts to roughly 92,000 characters, while the tool’s own account says 100,000 to 115,000. The probe by hand is the harder figure, the tool’s own the more favourable one. **The 6 of 6 is an acceptance test, not a field finding:** the anchor card and the fixed count were built that same morning in response to the first fetch, and the 11:05 run was their acceptance; our own repair met our own criterion. What is measured there is that the tool names the right file, not that its answer is correct: in one run it took an anchor from the card and invented its content. **The object keeps changing:** the page has grown since, so the truncation bites earlier with every new entry. The sentence the three out of ten refer to is gone; it was removed after the test because it did not do its job. **In our own cause:** the page tested is our own, build and test ran in the same workshop; the evaluation was done by a second agent that did not know the build. The test measures the behaviour of the tool, not the quality of the page, and says nothing about whether truncated answers are cited less often.

**Source:** Own measurement, 11 September 2026, 08:10 and 11:05 · fetch tool of a Claude agent on robert-haase.de/belege.html, 128,000 characters of visible text without scripts · ten questions fixed in advance, each asked twice, stopping rules set before the run · evaluated by a second agent with no knowledge of the build

**Grade:** Own test, one tool · Group: Preliminary: prototype, single test, forecast, or vendor figure

**Permalink:** https://robert-haase.de/en/evidence.html#abruf-kuerzung

---

## lighthouse-agent-discovery

**Claim:** Since version 13.5.0 of 18 September 2026, Google’s audit tool Lighthouse also checks whether a website’s catalogue for agents conforms to the “Agentic Resource Discovery” specification, and groups this check with the llms.txt check under a group of its own, “Agent Discoverability”. According to the release, this ships in the DevTools of Chrome 156 and in PageSpeed Insights within two weeks.

**What this entry does not establish:** that agents read these files. An audit tool measures whether something is present and valid, not whether it is used. The llms.txt check has existed since version 13.3.0; for Google Search, Google declares the same file unnecessary, as an entry of its own on the Google Search guide documents. **The specification is a proposal:** ARD stands at version 0.91 of 26 August 2026 with the status “Proposal”, and its authors include people from Google and Hugging Face; it is not a standards-body specification. **And tool and specification diverge:** the specification requires the path /.well-known/ard.json, while Lighthouse still looks for the predecessor name /.well-known/ai-catalog.json.

**Source:** Google, Lighthouse release 13.5.0 of 18 September 2026 with the audit “Agent Resource Discovery” and the group “Agent Discoverability”, lookup path /.well-known/ai-catalog.json per the audit’s source code · Agentic Resource Discovery, specification v0.91 of 26 August 2026, status “Proposal” ([to the specification](https://github.com/ards-project/ard-spec/blob/main/spec/ard.md)) · retrieved 21 September 2026 · [Source](https://github.com/GoogleChrome/lighthouse/releases/tag/v13.5.0)

**Grade:** Vendor documentation · Group: Verified study, vendor documentation, or court decision

**Permalink:** https://robert-haase.de/en/evidence.html#lighthouse-agent-discovery

---

## content-signal-selten

**Claim:** Cloudflare’s machine-readable declaration “Content-Signal”, with which a robots.txt allows or refuses search, AI input and AI training, appears at none of the 77 German-language news and trade media. Among the 139 robots.txt files served by home pages of the DAX, MDAX and SDAX companies, exactly one carries it, that of Heidelberg Materials, and it allows all three uses.

**What the figure does not say:** It counts the occurrence of the line in the files retrieved on 17 September 2026, not its effect. The signals are declared preferences without a technical block; Cloudflare declares restrictions expressed in them a reservation of rights under Article 4 of Directive (EU) 2019/790, and whether it holds as one is open. **The sample speaks only for these lists:** Cloudflare cites over 3.8 million domains whose robots.txt the service manages and said it would extend with the declaration. Of the 160 index home pages, 139 served a robots.txt, 7 had none and 14 did not answer; those 14 could carry the line.

**Source:** Own survey, 17 September 2026 · the same files as the entry on the reservation of rights in robots.txt: 77 media titles, all with a robots.txt, and 160 home pages from DAX, MDAX and SDAX, 139 of them with a robots.txt · searched for a Content-Signal line in any spelling · on the declaration itself: Cloudflare, “Giving users choice with Cloudflare’s new Content Signals Policy”, 24 September 2025 ([to the declaration](https://blog.cloudflare.com/content-signals-policy/))

**Grade:** Own survey, reproducible · Group: Verified study, vendor documentation, or court decision

**Permalink:** https://robert-haase.de/en/evidence.html#content-signal-selten

---

## robots-sperre-chatbots

**Claim:** A block in robots.txt does little to stop chatbots from serving content they have already collected. Researchers put 20 websites of their own online, gave every scraper its own canary tokens and queried 22 chatbots. Of 18 that could be evaluated, 12 went on returning the content, both for sites that had been taken offline and for sites whose robots.txt blocked all bots; only Duck.ai stopped in both cases. 10 of the 18 returned tokens that only the search crawlers of Google, Bing or Brave had received.

**What the experiment does not establish:** whether a block prevents new collection. The block came only after two months of crawling; what is measured is whether content already collected keeps being served, not where the chatbot gets it from. It is a preprint without peer review with 20 websites, and four of the 22 chatbots returned too few tokens to be evaluated. **What follows for robots.txt:** it asks, it does not forbid. This collection’s own surveys of media and DAX companies count who makes that request; this experiment shows how little it achieves for content already collected. And whoever gives a search crawler access may be giving it to a chatbot as well.

**Source:** Seiden, Ren, Zhang, Kim, Liu and Wenger (Duke University, University of Pittsburgh, Carnegie Mellon University), “Identifying AI Web Scrapers Using Canary Tokens”, arXiv 2605.13706, version 2 of 3 September 2026, first version of 13 May 2026, preprint without peer review · 20 websites, two months of crawling before the block, 22 chatbots, 18 of them evaluable · full text read 23 September 2026 · [Source](https://arxiv.org/abs/2605.13706)

**Grade:** Controlled experiment, preprint without peer review · Group: Preliminary: prototype, single test, forecast, or vendor figure

**Permalink:** https://robert-haase.de/en/evidence.html#robots-sperre-chatbots

---

End of file: 20 of 20 entries on Agents. Last entry: robots-sperre-chatbots.
