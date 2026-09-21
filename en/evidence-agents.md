# Evidence: Agents

34 of 103 entries in the collection “Evidence” by Robert Haase, as of 21 September 2026.

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

+ Verified study, vendor documentation, or court decision (24) → leere-buttons, javascript, lighthouse, a11y-tree, astryx-agenten, designsysteme-maschinenschnittstelle, dax-zutritt, dax-benennung, dax-landmarken, dax-bilder, verlage-robots, marken-robots, agenten-erfolg, frontify-mcp, canva-mcp, mcp-tool-poisoning, pulumi-brand-mcp, statista-mcp, rechtsvorbehalt-kommentar, google-ads-textregeln, microsoft-brand-kit, muse-connectors, adobe-markenpruefung, markup-ai-stilpruefung
+ Preliminary: prototype, single test, forecast, or vendor figure (7) → agent-ready, a11y-cua, klarna-700, monotype-mcp, veeva-mlr, abruf-kuerzung, olivares-access-map
+ Status, case report, or market observation (3) → gitlab-markenrepo, aipref, mcp-primitive

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

## astryx-agenten

**Claim:** Meta open-sourced its design system in June 2026, after eight years of internal growth, and justifies how it is built expressly by agents: design systems were historically made for human consumption, and as more code is written by agents, their structure has to be rethought. The system is operated from the command line or over MCP.

**What this does not say:** These are vendor figures, not independently audited. The reach of more than 13,000 applications refers to Meta’s own estate, not to the market, and the system is labelled beta. **The second figure, the one that travels, needs placing:** the 95 percent drop in the weekly insertion rate from the accompanying Figma library is an internal observation at Meta, not an industry value. And the library was not abandoned but published in August as an experiment, built and kept current by a cron job connected to the Figma MCP.

**Source:** Astryx by Meta, “Introducing Astryx”, 18 June 2026, and “Who needs a Figma Library?”, 5 August 2026 · repository under MIT licence · [Source](https://astryx.atmeta.com/blog/introducing-astryx)

**Grade:** Vendor documentation · Group: Verified study, vendor documentation, or court decision

**Permalink:** https://robert-haase.de/en/evidence.html#astryx-agenten

---

## designsysteme-maschinenschnittstelle

**Claim:** Of 21 open-source design systems surveyed, 18 ship a first-party MCP server, 18 official agent skills and 15 an llms.txt. The survey sums it up: “Nobody is still arguing about whether to ship a machine interface.”

**What the number does not say, and this is the first stumbling block when you check:** The survey carries two series. The essay counts first-party, official offerings only and arrives at 18, 18 and 15; the systems table on the landing page counts community offerings too and arrives at 20, 19 and 15. Both are correct, they measure different things. Anyone quoting the narrower figure has to say “first-party”. The figure moves: on 10 September 2026 the site still listed 20 systems with 17, 17 and 14, on 17 September 21. **The weightier caveat:** what was measured are *design systems*, so components and code for developers, not brand guidelines. The survey says nothing about brands outside the software industry. It is also a three-day snapshot and the work of a single person, not an institute.

**Source:** Kaelig Deloumeau-Prigent, 21 open-source design systems, data collected 26 to 28 July 2026 according to the site, list extended since · report 1 September 2026 · CC BY 4.0 · the narrower figures sit in the essay section of the site · retrieved 17 September 2026 · [Source](https://state-of-ai-in-design-systems.netlify.app/)

**Grade:** Verified study · Group: Verified study, vendor documentation, or court decision

**Permalink:** https://robert-haase.de/en/evidence.html#designsysteme-maschinenschnittstelle

---

## gitlab-markenrepo

**Claim:** GitLab keeps brand voice, naming rules, trademark guidelines, values and mission as Markdown files in a public repository. Every change carries a date, a real name and a written justification. One example: on 22 May 2025 the three brand personality traits were rewritten, in a single commit of four inserted and five deleted lines, filed by Senior Brand Manager Betsy Bula, justified by aligning the definitions with current communication and the FY26 company plan.

**The form is established, the effect is not:** that brand rules sit version-controlled and in the open is shown. Whether language models describe GitLab more accurately because of it is measured nowhere. It is also a single company, and a software vendor for which a public repository is the house style anyway. **Nobody reviewed it:** merge request 13766 came from the same person and was merged by her, without a comment, just under 16 minutes later. **Two versions stand side by side:** the official brand guidelines are not in the handbook but on design.gitlab.com, and there the same three traits still carry the wording from before 22 May 2025, last changed in substance on 20 December 2024. The contradiction has stood for more than fifteen months. A version history produces traceability, not agreement. **The opening also runs backwards:** the vision moved into the internal handbook on 10 February 2025, the strategy page disappeared on 17 July 2025. Positioning in the marketing sense is still public there, one message house per use case with a row of its own, “Positioning Statement”. **Every file has its own beginning:** repository 23 January 2023, values 2 May 2023, trademark guidelines 16 November 2023, brand voice 21 December 2023, naming rules only 6 February 2025. Dating the case by the age of the repository is off by up to two years.

**Source:** GitLab Handbook, public repository gitlab-com/content-sites/handbook, checked 10 September 2026 · brand voice with the three traits in content/handbook/marketing/brand-experience/content-style-guide.md, naming rules in naming.md, trademark guidelines in trademark-guidelines.md, values in content/handbook/values/\_index.md, mission in content/handbook/company/mission.md · commit e692ba4b of 22 May 2025, 17:11 UTC, merge request 13766 · diverging version of the same traits in the design system repository gitlab-org/gitlab-services/design.gitlab.com, contents/brand-messaging/brand-voice.md ([design system repository](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com)) · [Commit](https://gitlab.com/gitlab-com/content-sites/handbook/-/commit/e692ba4bade85fa0f35552cecc7d69abba3779a1)

**Grade:** Documented single case · Group: Status, case report, or market observation

**Permalink:** https://robert-haase.de/en/evidence.html#gitlab-markenrepo

---

## aipref

**Claim:** A common standard for how websites permit or refuse AI use of their content still does not exist.

**How far the work has come:** The IETF working group AIPREF is developing two building blocks, a vocabulary and an attachment mechanism. On 10 September 2026 both are in IESG state “I-D Exists”, so not yet submitted, no RFC. From 4 September to 3 November 2025 they were in working group last call and returned to “WG Document”. Since April 2026 the vocabulary draft carries a note that its content does not reflect working group consensus, and marks two of its sections as not yet agreed; the attachment draft carries no such note. **The group has missed its own schedule twice:** due in August 2025, moved on 23 September 2025 to 31 August 2026, and that date too passed without submission and has not been re-dated. **What this entry does not say:** whether such a standard is coming or when, and how well today’s workarounds hold, robots.txt and vendor-specific tokens. It measures the state at the IETF, not at other bodies or vendors. Eight further individual drafts on the same subject sit with the working group, none adopted. The Datatracker lists 18 August 2026 because it renders US Pacific time; the drafts themselves are dated 19 August 2026.

**Source:** IETF, AI Preferences working group (aipref), state “Active” · draft-ietf-aipref-vocab-07 and draft-ietf-aipref-attach-05, both of 19 August 2026, IESG state “I-D Exists”, WG state “WG Document”, intended status Proposed Standard, no RFC · milestones for both blocks moved on 23 September 2025 from August 2025 to 31 August 2026 and unchanged since ([working group history](https://datatracker.ietf.org/group/aipref/history/)) · full text of the vocabulary draft with the consensus note ([draft text](https://www.ietf.org/archive/id/draft-ietf-aipref-vocab-07.txt)) · checked 10 September 2026 · [Working group](https://datatracker.ietf.org/wg/aipref/about/)

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

**What the number does not say:** only images Chrome exposes in the accessibility tree are counted, ones correctly marked as decorative are absent from numerator and denominator alike. On a test page with six images only four appeared and the rate came out at 50 percent, although two of six were faulty: marking up cleanly shrinks your own denominator. About the share of all images on a page the rate says nothing. **The split names the element type, not the purpose:** a linked corporate logo that would need a name and an ornamental icon sit in the same 86 percent, and the share of cases with an actual consequence lies between the 13 percent and an unknown higher value. **Two further limits:** the base of the 86 and 13 percent is the inspected subset, capped at 80 nodes per page, not the 1,662; whether it bound can no longer be established, the raw data were not kept, and an average of 12.3 unnamed images per page argues against it; and the two shares come to 99 rather than 100 percent because the tool knows exactly two element types. And 1,662 out of 3,979 is a sum across all pages without a median or a split by index: the median for interactive elements stands at 1.0 percent, far below the pooled rate of 3.4 percent, where a few outliers carry it; whether the same holds for images is open. A linked logo without a name also counts as an unnamed interactive element, so the two figures must not be added. This measurement has no independent replication, nor do the three other own ones.

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

**Claim:** Across 300 tasks on 136 real websites, the success rate of the best web agents rose from 61 to 97.7 percent in ten months. When the benchmark was first evaluated in October 2025, one agent reported 89 percent for itself and scored 30 when measured; most did not beat a simple agent from early 2024. By August 2026 the leading entry solves even the hardest tasks — those needing eleven steps or more — completely.

**What the number does not say:** The current figures come from *four* leaderboard entries, submitted by the agents' own vendors and checked by the benchmark team — not an independent survey. **And a warning sits on the leaderboard itself:** the tasks have been public since April 2025, and the team explicitly asks that they not be used as training data. Whether the scores show capability or familiarity with known tasks is therefore undecided. What is measured is whether a task was completed, not how well — and not whether the brand was represented correctly along the way.

**Source:** Xue et al., “An Illusion of Progress? Assessing the Current State of Web Agents”, COLM 2025 (arXiv:2504.01382) for the baseline · Online-Mind2Web leaderboard, human evaluation, as of 4 August 2026, for the current figures · 300 tasks, 136 websites · [to the leaderboard](https://huggingface.co/spaces/osunlp/Online_Mind2Web_Leaderboard) · [Source](https://arxiv.org/abs/2504.01382)

**Grade:** Verified study · Group: Verified study, vendor documentation, or court decision

**Permalink:** https://robert-haase.de/en/evidence.html#agenten-erfolg

---

## frontify-mcp

**Claim:** Frontify opens its brand portal through an MCP server it runs itself. On 17 September 2026 it lists 53 tools one by one in ten packs, graded from read-only to full administrative access; on 10 September it was 54. The read-only Discovery pack holds 24 tools, the Admin pack all 53, two of them flagged as destructive.

**What the number does not say:** 53 is a snapshot, and it moves: 54 on 10 September 2026, 53 a week later. The help centre has dropped the beta label from its title since September 2026. The vendor’s documentation says 52 in two places and 25 rather than 24 for the read-only pack: anyone quoting 52 is quoting the documentation, not the counted system. None of the four Frontify sources gives a reason. The pack figures are overlapping subsets of the 53 and must not be added up. The Frontify guide’s headline announces the server with ten tools, meaning ten packs, off by more than fivefold. **What this entry does not establish:** what is established is a vendor’s own account of its own product, independently verified nowhere: the size of an interface, not its spread, its use, its effect or the quality of the brand rules it serves. No tool decides a claim, the packs read, write and administer. An access log is not evidenced: “Audit trail of AI interactions” is a selection criterion for buyers at Frontify, and the word audit does not appear in the repository, the server pages or the help centre. The server is not on by default. Since mid-September 2026 account admins switch it on themselves, at no additional cost and without customer support according to the help centre; on 10 September access still ran through customer support, free with pricing subject to change. Frontify is now also listed as an official connector in Claude’s directory. Frontify states that it does not control how the connected AI provider processes the data.

**Source:** Frontify, MCP server overview and pack pages (/mcp/packs/admin and /mcp/packs/discovery), tools listed individually and counted, 53 and 24 entries respectively with unique names on 17 September 2026 (54 and 24 on 10 September) · repository with the table of ten packs, MIT licence ([repository](https://github.com/Frontify/mcp-servers)) · help centre “Frontify MCP” (titled Beta until early September), as of 17 September 2026, gives 52 tools and 25 for Discovery and states that account admins enable the server at no additional cost ([help centre](https://help.frontify.com/en/articles/14787214-frontify-mcp-beta)) · guide “Choosing a DAM for the AI era”, published 22 May 2026, last changed 30 July 2026, also gives 52 ([guide](https://www.frontify.com/en/guide/dam-mcp)) · [Server](https://mcp.frontify-integrations.com/)

**Grade:** Vendor documentation · Group: Verified study, vendor documentation, or court decision

**Permalink:** https://robert-haase.de/en/evidence.html#frontify-mcp

---

## canva-mcp

**Claim:** Canva runs an official MCP server and documents 33 tools for it. 27 are available on every plan, among them creating and exporting designs. Four require at least Canva Pro, among them listing brand kits and using brand templates. Two are reserved for Enterprise: autofilling a template with data and reading the associated dataset. Every user authenticates individually, and an agent holds the permissions of the human signed in.

**Where the plan boundary lies:** the overview page appears to put the brand-related part on Enterprise; the tool list governs, and “Pro and above” there means Pro, Business and Enterprise. **What this entry does not establish:** a vendor’s own statements, with no independent check. It establishes the existence and scope of the interface, not its spread, its use or its effect. No tool checks a claim against brand rules; brand kits are read and filled in. Export runs on every plan, but free plans only at standard quality, and premium elements can make it fail on any plan with license_required. **Shelf life:** the 33 holds as of the retrieval date, and the documentation carries no version stamp. The server itself needs only a Canva account on any plan; your own integration needs clearance from Canva.

**Source:** Canva, “MCP tools and rate limits”, tool catalogue with plan tiers and legend, 33 entries counted individually · Canva, “Canva Model Context Protocol (MCP)”, server address mcp.canva.com/mcp, authentication and plan overview ([server documentation](https://www.canva.dev/docs/mcp/)) · both retrieved 10 September 2026 · [Tool catalogue](https://www.canva.dev/docs/mcp/tools/)

**Grade:** Vendor documentation · Group: Verified study, vendor documentation, or court decision

**Permalink:** https://robert-haase.de/en/evidence.html#canva-mcp

---

## klarna-700

**Claim:** Klarna’s most-quoted AI number is an estimate, not a headcount: the press release of February 2024 states “the equivalent work of 700 full-time agents”. The same measure appears as over 700 in the IPO prospectus of September 2025, and in the annual report of February 2026 still at over 700 in the business section and at over 850 in the operating review of that same report. The headcount sits beside it: approximately 5,527 full-time employees at the end of 2022, approximately 2,831 at the end of 2025.

**What the number actually is:** an extrapolation from the average monthly drop in chat and telephone conversations, based on 2024 in the prospectus and in the business section of the report, on 2025 in the operating review. The two values therefore do not contradict each other, they simply stand side by side without comment: the older figure in the present tense, the newer one as a statement about the year 2025. **Not a retreat from AI:** Klarna calls it a “dual-track approach”, kept the human option open as early as 2024, and expects employee numbers to keep falling according to both filings. Citing the case as a return to humans cites against the source.

**Source:** Klarna Group plc, company statements in a press release, the IPO prospectus (Form F-1/A) and the annual report (Form 20-F) filed with the SEC · 27 February 2024 to 26 February 2026 · [Source](https://www.sec.gov/Archives/edgar/data/2003292/000200329226000007/klar-20251231.htm)

**Grade:** Usually miscited · Group: Preliminary: prototype, single test, forecast, or vendor figure

**Permalink:** https://robert-haase.de/en/evidence.html#klarna-700

---

## mcp-primitive

**Claim:** The Model Context Protocol defines three server building blocks, each with an intended controlling party: tools are invoked by the model, resources are steered by the application, prompt templates are selected by the user. That is not binding. All three chapters carry the same trailing clause: the protocol itself does not mandate any specific user interaction model. In the tools chapter a SHOULD rule follows immediately: a human should always be able to deny a tool invocation.

**The triad is in the overview, not in the rules:** The table with Model, Application, User appears in the explainer “Understanding MCP servers” and again in the specification overview “Server Features”. Neither page carries MUST or SHOULD rules; in the three chapters that do, resources are “application-driven”. No server has to offer all three: “Servers offer any of the following features to clients”. **And it ages fast:** since 5 November 2024 there have been five revisions, two of them since November 2025. Methods get replaced: resources/subscribe appears twice in the resources chapter of 2025-06-18 and 2025-11-25, and not once in 2026-07-28, which uses subscriptions/listen three times.

**Source:** Model Context Protocol, stewarded by Model Context Protocol a Series of LF Projects, LLC, specification revision 2026-07-28, chapters Tools, Resources and Prompts, each the section “User Interaction Model”, plus the overview pages /specification/2026-07-28, section Features, and /specification/2026-07-28/server, section Server Features, and the explainer “Understanding MCP servers” · revision list and method change from own path and text sampling · 10 September 2026 · [Source](https://modelcontextprotocol.io/specification/2026-07-28/server/tools)

**Grade:** State of standardization · Group: Status, case report, or market observation

**Permalink:** https://robert-haase.de/en/evidence.html#mcp-primitive

---

## mcp-tool-poisoning

**Claim:** Instructions hidden inside a tool description make an agent read the user’s private SSH key and pass it to a foreign server through a parameter named “sidenote”; the confirmation dialog shows only the name of an addition tool. A benchmark built on 45 live MCP servers with 353 tools measures a 36.5 percent average attack success rate across 20 model settings, 72.8 percent at most.

**What this does not say:** The user still clicks. Only the content of the approval is hidden, Cursor conceals the key even inside the dialog. No server was compromised, the poisoned tool sits in the system prompt. **Success is narrowly defined:** it counts only when the agent misuses a second, legitimate tool; if it calls the poisoned tool itself, the paper scores that as a failure. What is scored is the model’s tool call in a single turn, nothing is executed. The 36.5 percent are measured against valid outputs, not against the 1,348 test cases. The remainder is no defence rate, even the most refusal-prone model, Claude-3.7-Sonnet, refused in under 3 percent. Invariant sells agent security tools and published ten days before its own scanner.

**Source:** Invariant Labs (now Snyk), Luca Beurer-Kellner and Marc Fischer, two experiments with the MCP client Cursor, 1 April 2025, updates 7 and 11 April 2025 · Zhiqiang Wang and eight others (University of Science and Technology of China, Beihang University), “MCPTox”, 45 MCP servers, 353 tools, 1,348 test cases, 20 model settings, figures from section 4.2 and table 2, AAAI-26, Proceedings of the AAAI Conference on Artificial Intelligence 40(42), pages 35811 to 35819, 14 March 2026, doi:10.1609/aaai.v40i42.40895, preprint arXiv:2508.14925v1, 19 August 2025 · [Peer-reviewed version](https://doi.org/10.1609/aaai.v40i42.40895) · [Source](https://invariantlabs.ai/blog/mcp-security-notification-tool-poisoning-attacks)

**Grade:** Peer-reviewed benchmark and vendor test · Group: Verified study, vendor documentation, or court decision

**Permalink:** https://robert-haase.de/en/evidence.html#mcp-tool-poisoning

---

## monotype-mcp

**Claim:** Monotype announced a beta of its Enterprise MCP Connector on 15 July 2026. It links AI tools to a customer’s font library, its licensing information and its production approvals: it matches AI-generated drafts against the library, reviews referenced fonts against the production font list, and returns CSS in chat when the project fonts are part of the library. It runs on the Model Context Protocol, initially in Claude and Claude Design.

**What the statement does not say:** it comes from the vendor, and no report to be found checks anything itself. The check flags, it does not refuse: the product page says unapproved fonts are flagged, and the Labs post expressly denies that the connector replaces brand, legal or production review. **The customer is the one who approves:** the prerequisite is approved production fonts configured in the customer’s own instance, which the connector merely enforces. The object is a typeface, not a claim. Web and HTML are the first stage, access is limited to selected enterprise Monotype Fonts customers, and there are no figures on use or effect.

**Source:** Monotype Labs, “Bringing font governance into AI-native content creation”, the beta workflow in seven steps, 15 July 2026 · press release “Monotype Introduces Enterprise Connector Beta, Exploring How Brand Governance Works Inside AI-Native Workflows”, Woburn, Massachusetts, 15 July 2026 · product page “Monotype Enterprise Connector” carrying the status “Now in BETA” and the access prerequisites, retrieved 10 September 2026 · negative check against the press release listing, 15 July to 10 September 2026 with no change of status · [Source](https://www.monotype.com/resources/monotype-labs/bringing-font-governance-ai-native-content-creation)

**Grade:** Vendor statement, beta · Group: Preliminary: prototype, single test, forecast, or vendor figure

**Permalink:** https://robert-haase.de/en/evidence.html#monotype-mcp

---

## pulumi-brand-mcp

**Claim:** Pulumi publishes its own brand guidelines as an MCP server at brand.pulumi.com/mcp. On 10 and again on 17 September 2026 it answered without any login and listed the same 13 resources, one template, 11 tools and 3 prompts; the resources include brand voice, writing style and the binding product names. One resource governs generative AI in plain language, addressed to the human: “never ship raw model output as a finished piece”, “never publish anything without a human reviewing it first”.

**What the numbers do not say:** What was measured is availability and scope, not usage, effect, or whether anyone follows the rules. The content is one software company’s unverified account of its own brand. **What the server does decide:** Three prompts promise a structured evaluation of copy, image and design, but the vendor states they are user-invoked and expand into a prepared model request. In the request of 17 September the prompt for copy (review_copy) returned exactly one such request of 32,957 characters, carrying the guidelines in full and no verdict; all eleven tools are flagged read-only. The server itself computes two judgements: colour contrast against published APCA thresholds, Lc 86.4 for violet-700 on white in our test, and the nearest brand colour together with a replacement recommendation. A human judges whether a statement is any good, and the rule text demands it.

**Source:** Own request to the Pulumi Brand MCP Server, version 0.1.0, session protocol 2025-06-18 (client-chosen; the server names 2025-11-25), via JSON-RPC over Streamable HTTP · methods initialize, resources/list, resources/templates/list, tools/list, prompts/list, resources/read on brand://guidelines and tools/call on check_color_accessibility and find_nearest_brand_color · all calls HTTP 200 without an authentication header, no list carrying nextCursor, counts repeated three times and stable · brand://guidelines in full, 3,053 characters, text/markdown · vendor documentation brand.pulumi.com/mcp-server for the classification of the prompts · retrieved 10 September 2026, again on 17 September 2026 with the same counts, plus prompts/get on review_copy (context marketing, one message, 32,957 characters) · [Source](https://brand.pulumi.com/mcp-server/)

**Grade:** Own measurement, reproducible · Group: Verified study, vendor documentation, or court decision

**Permalink:** https://robert-haase.de/en/evidence.html#pulumi-brand-mcp

---

## statista-mcp

**Claim:** Statista runs an MCP server at api.statista.ai/v1/mcp with six documented tools. Every call is metered individually in credits, tiered by the kind of answer: a search costs 0 or 1 credit, retrieving the figures themselves 10 to 15. Without a key the server replies 401 Unauthorized.

**What the tiering does not say:** What a credit costs in money appears nowhere in the documentation; the only pricing page gives ratios. It shows what is expensive, not how expensive. Four of the six tools cover Market and Consumer Insights, market forecasts and survey data rather than the statistics catalogue; only two of them return data, the other two return search hits. **What this entry does not prove:** Vendor statements about a vendor’s own product. The only independent measurement is that the endpoint answers and refuses without a key, nothing about reach or use. The stock figures from the press release of 20 November 2025 are unused: over one million statistics is the share reachable through MCP there, 1.5 million the full database, both vendor figures without a counting rule.

**Source:** Statista, developer documentation MCP Server and Credit Logic, six tools and credit costs counted individually · own request to the endpoint without a key · press release of 20 November 2025 · retrieved 10 September 2026 · [Press release](https://www.statista.com/press/p/statista_next_ai_leap/) · [Source](https://docs.platform.statista.ai/pricing/credit-logic)

**Grade:** Vendor documentation · Group: Verified study, vendor documentation, or court decision

**Permalink:** https://robert-haase.de/en/evidence.html#statista-mcp

---

## veeva-mlr

**Claim:** In the regulated pharmaceutical approval process, machine pre-checking of brand rules is a shipping product. On 3 December 2025 Veeva announced a Quick Check Agent that scans content against editorial, brand, market, channel and compliance guidelines before the MLR review itself begins. On 23 June 2026 Veeva acquired the vendor Copli and launched it as Falcon MLR, with the stated potential to eliminate 70 per cent or more of manual MLR labour within five years.

**What this entry does not establish:** any effect. The 70 per cent is an intention filed under a forward-looking disclaimer. Every statement comes from the vendor, and all that is verified is that the vendor makes it. The agent checks against stored rules and decides nothing; approval here is a regulator-driven process, so the transfer to other brands remains an analogy. **The marketing number will not carry it:** Veeva advertises 57 per cent shorter review cycles on its product page today, with no sample, no baseline and no method; the same wording already appears in a datasheet dated 2 May 2017 and the same figure in one dated 21 March 2016, at least nine years before the first agent, in documents that never once mention AI.

**Source:** Veeva Systems, press releases on the availability of the Veeva AI Agents and on the Copli acquisition, both read in full · 3 December 2025 and 23 June 2026 · the 57 per cent is advertised by Veeva today on the product page Veeva PromoMats Review and Approve, accessed 10 September 2026 · age of the figure: Veeva datasheet “Ensuring End-to-End Commercial Content Compliance” (PromoMats for EU), PDF created 2 May 2017, veeva.com/eu/wp-content/uploads/2017/05/PromoMats-for-EU-Datasheet.pdf, the same figure in the version with PDF created 21 March 2016, veeva.com/eu/wp-content/uploads/2012/07/PromoMats-for-EU-Datasheet-1.pdf · [Product page](https://www.veeva.com/products/veeva-promomats/mlr-review/) · [Source](https://www.veeva.com/resources/veeva-ai-agents-now-available-to-increase-productivity-and-customer-centricity/)

**Grade:** Vendor press releases · Group: Preliminary: prototype, single test, forecast, or vendor figure

**Permalink:** https://robert-haase.de/en/evidence.html#veeva-mlr

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

## google-ads-textregeln

**Claim:** In Google Ads, brand rules can be stored in plain language, in Performance Max campaigns and in Search campaigns with AI Max: up to 25 term exclusions and up to 40 restrictions naming concepts, associations or styles to avoid, each per campaign. Both are exclusions, they prescribe nothing, and they apply only to automatically customized text assets, not to images. On the same help page Google warns that unsuitable guidelines may remove a large number of good text assets and hurt performance.

**What the figures do not say:** These are product limits, not a measurement. The feature runs as an "experimental beta", Google itself notes possible limitations, and both the caps and the behaviour can change. The rules sit with the campaign, not with the brand: ten campaigns mean ten sets of rules, and outside Google Ads they do not apply. Whether the generated text follows the guidelines is not documented; the page only states that the guidelines are taken into account.

**Source:** Google Ads Help, "Use text guidelines with Performance Max and Search campaigns (beta)", retrieved 17 September 2026 · beta access extended to all advertisers worldwide per the Google blog of 26 February 2026 · [Source](https://support.google.com/google-ads/answer/16489313)

**Grade:** Vendor documentation · Group: Verified study, vendor documentation, or court decision

**Permalink:** https://robert-haase.de/en/evidence.html#google-ads-textregeln

---

## microsoft-brand-kit

**Claim:** Microsoft’s Copilot learns a brand from exactly one PDF. A brand manager uploads the guidelines, Copilot extracts colour palettes, styles, brand voice and the rules for logo and typography. Only a single guideline document is supported: to add a new one the existing one has to be removed, and the uploaded guidelines override the values already in the brand kit, brand voice included.

**What this entry does not establish:** these are the vendor’s statements about its own product, independently verified nowhere. What is established is what the documentation describes, not how well the extraction works. **No start date:** Microsoft gives none. One partner publication dates worldwide availability to late June 2026, another lists the PDF import as available in spring; anyone quoting a date is quoting third parties. **Conditions:** the feature requires a Copilot licence, accepts PDF only and expects the General sensitivity label. Since mid-September 2026 presentation skills can be added as Markdown as well; the rules from the guidelines still come from that one PDF alone.

**Source:** Microsoft, support page “Use guidelines to manage brand kits in the Microsoft Copilot app”, the sections on uploading and overriding and the question “How many pdf guidelines can be uploaded?” · retrieved 17 September 2026 · [Page on role and licence](https://support.microsoft.com/en-us/microsoft-365-copilot/create-and-manage-official-brand-kits-in-the-microsoft-365-copilot-app) · [Source](https://support.microsoft.com/en-us/microsoft-365-copilot/use-guidelines-to-manage-brand-kits-in-the-microsoft-365-copilot-app)

**Grade:** Vendor documentation · Group: Verified study, vendor documentation, or court decision

**Permalink:** https://robert-haase.de/en/evidence.html#microsoft-brand-kit

---

## muse-connectors

**Claim:** Meta launched its personal agent Muse in the US on 8 September 2026. People choose which apps it connects to and how much access it gets, and it checks back before sensitive steps such as sending an email or making a purchase. Businesses can submit their own connectors for Muse: Meta tests them against functional, security and legal requirements, after which people find them in Muse.

**What this entry does not establish:** reach, use or revenue. These are the vendor’s statements about its own product on launch day. **The technology stays open:** neither page names the protocol behind the connectors, and MCP does not appear there. **So does the reach:** as of the cut-off date Muse is limited to the US and to adults, and how many businesses have submitted a connector is stated nowhere.

**Source:** Meta, newsroom “Introducing Muse”, 8 September 2026, for the launch, the access decision and the check-back before sensitive steps; submission, review against functional, security and legal requirements and the directory on the platform page · both retrieved 19 September 2026 · [Muse platform page](https://muse.ai/platform) · [Source](https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/)

**Grade:** Vendor documentation · Group: Verified study, vendor documentation, or court decision

**Permalink:** https://robert-haase.de/en/evidence.html#muse-connectors

---

## olivares-access-map

**Claim:** There is software for the permissions of AI agents. Olivares discovers agents, sessions, models, MCP servers, tools and identities running in an organisation, keeps a map of read and write access and sets it against what was actually observed. Rules are enforced deny-closed at four points, one of them a gate on MCP tool calls. Budgets can deny or throttle spend, and every operation lands in a hash-chained, Ed25519-signed ledger.

**What this entry does not establish:** effect, reach or use. The description comes from the vendor’s own repository, version v26.9.1, marked there explicitly as “beta, in active development”, with no customer figures. **The subject is a different one:** what gets checked is access, tools and spend. Whether a statement may be made in a brand’s name is not what this tool decides.

**Source:** Olivares, repository olivaresai/olivares, README with inventory, access map, four enforcement points, budgets and signed ledger; core under AGPL-3.0, SDK and connectors under Apache-2.0, self-hosted · retrieved 20 September 2026 · [Source](https://github.com/olivaresai/olivares)

**Grade:** Vendor statement, beta · Group: Preliminary: prototype, single test, forecast, or vendor figure

**Permalink:** https://robert-haase.de/en/evidence.html#olivares-access-map

---

## adobe-markenpruefung

**Claim:** Adobe checks campaign drafts against stored brand guidelines and shows the result as a percentage. It is the share of guidelines a draft passes out of the guidelines tested. Added to it are pass-or-fail results for channel guidelines such as Meta and LinkedIn and for ADA accessibility. The value is recalculated after every edit.

**What this entry does not establish:** an effect. These are the vendor’s statements about its own product, independently verified nowhere, with no sample and no indication of how well the check performs. **What the percentage does not say:** it counts rules, it does not weigh them. A failed logo rule counts the same in that number as a failed comma rule. **And what it does not prevent:** the documentation describes the panel as pointing to opportunities for improvement and names no block; the individual checks can also be switched off. Who decided a rule and since when it applies is in none of these answers.

**Source:** Adobe, documentation “Brand Validation in Adobe GenStudio for Performance Marketing” (Experience League), the sections on how the score is calculated, on the three kinds of check and on rechecking · retrieved 20 September 2026 · [Source](https://experienceleague.adobe.com/en/docs/genstudio-for-performance-marketing/user-guide/guidelines/brand-validation)

**Grade:** Vendor documentation · Group: Verified study, vendor documentation, or court decision

**Permalink:** https://robert-haase.de/en/evidence.html#adobe-markenpruefung

---

## markup-ai-stilpruefung

**Claim:** Markup AI checks content against a brand’s own voice and style rules, and is itself reachable over MCP. The tool flags what does not fit, explains why and supplies wording to apply in place; every text is also scored against the stored standards. The vendor runs an MCP server at api.markup.ai that assistants such as Claude or Cursor connect to, for instance with a prompt asking it to check a paragraph for brand-voice drift.

**What this entry does not establish:** effect, reach or hit rate. The description comes from the vendor, and the overview page does not name the scale of the score. **The connection is not open:** the MCP server requires authentication, by key or OAuth, unlike Pulumi’s public brand server. **And the subject is a different one:** what gets checked is a style guide. The tool flags and suggests, it approves nothing, and who decided a rule does not appear in its answers. By its own account the company was born out of the research and technology of the text checker Acrolinx.

**Source:** Markup AI, own site and documentation: checking content against brand voice and style rules with flag, reason and suggestion, scoring against the stored standards, origin in Acrolinx · connection and authentication from the MCP server guide ([MCP server guide](https://docs.markup.ai/mcp/vscode-mcp)) · retrieved 20 September 2026 · [Source](https://markup.ai/)

**Grade:** Vendor documentation · Group: Verified study, vendor documentation, or court decision

**Permalink:** https://robert-haase.de/en/evidence.html#markup-ai-stilpruefung

---

End of file: 34 of 34 entries on Agents. Last entry: markup-ai-stilpruefung.
