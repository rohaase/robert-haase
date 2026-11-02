# Agent test: does the cite-evidence skill change how an agent cites?

Own measurement, 2 November 2026 · Robert Haase · CC BY 4.0
Belongs to the evidence entry https://robert-haase.de/en/evidence.html#agenten-skill-zitieren (German: https://robert-haase.de/belege.html#agenten-skill-zitieren).

## Question

When an agent is asked for a figure that the evidence collection on robert-haase.de holds, does it find the entry and cite it with its limit, primary source, grade and permalink? And does the agent skill at https://robert-haase.de/skills/cite-evidence/SKILL.md change that?

## Setup

- Agent: Claude Sonnet 5.5 (`claude-sonnet-5-5`) in Claude Code 2.1.220, headless (`claude -p`), in an empty working directory without project settings, MCP servers or memory.
- Tools: page fetch (WebFetch) only. No web search, no shell, no file access.
- Prompt, identical in both conditions: "Use the website robert-haase.de to answer this question: <question> Answer as you would to a colleague who wants to use the figure in a presentation."
- Condition "without": nothing else.
- Condition "with skill": the full text of SKILL.md as of 2 November 2026, appended to the system prompt with the line "You have the following agent skill installed. Follow it when it applies.". This simulates an installed skill. It does not test whether an agent finds the skill.
- Eight questions, each three times per condition: 48 runs, run in parallel on 2 November 2026 between 20:30 and 20:36 Berlin time.

## Scoring, fixed before the runs

Each answer scores 1 per criterion when every listed pattern occurs in it (case-insensitive regular expressions):

- figure: the figure of the matching entry
- limit: the core of the entry's stated limit
- source: the primary source
- grade: the grade as the collection names it
- permalink: a link to the entry in the collection (`robert-haase.de/en/evidence` or `robert-haase.de/belege`)

1. `pew-klicks`: How much less often do Google users click a regular search result when an AI summary appears?  
   Patterns: zahl: `8 ?(%|percent)` AND `15 ?(%|percent)`; grenze: `caus` AND `query types|different (kinds of )?quer|types of quer`; quelle: `pewresearch\.org|Pew Research`; stufe: `verified study`
2. `klarna-700`: Is it true that Klarna replaced 700 customer service agents with AI?  
   Patterns: zahl: `700`; grenze: `equivalent|estimate|extrapolat`; quelle: `sec\.gov|press release|annual report|20-F|F-1`; stufe: `usually miscited|miscited`
3. `eigene-seite-selten-zitiert`: What share of brand mentions in AI search answers comes from the brand's own website?  
   Patterns: zahl: `13\.2|13 ?(%|percent)`; grenze: `vendor`; quelle: `airops`; stufe: `preliminary`
4. `chatgpt-verweise-konversion`: Does traffic from ChatGPT convert better than other channels for online shops?  
   Patterns: zahl: `973` AND `54 ?(%|percent)`; grenze: `associat|not caus|correlat|all non-AI|own customers`; quelle: `Marketing Science|10\.1287|Kaiser`; stufe: `verified study|peer-reviewed`
5. `reddit-lizenzerloese`: How much does Reddit earn from licensing its content for AI training?  
   Patterns: zahl: `140`; grenze: `anonymous|single source|unconfirmed|not confirmed|declined to comment`; quelle: `10-K|sec\.gov`; stufe: `audited`
6. `open-source-aufgegeben`: What percentage of open source projects end up abandoned?  
   Patterns: zahl: `16 ?(%|percent)`; grenze: `popular|most-starred|2019`; quelle: `1906\.08058|Avelino|ESEM`; stufe: `verified study|peer-reviewed`
7. `gema-openai`: Did a German court rule that ChatGPT infringes copyright in song lyrics?  
   Patterns: zahl: `nine|9 (song )?lyrics|11 November 2025|November 2025`; grenze: `not final|appeal`; quelle: `Regional Court|Landgericht|justiz\.bayern|42 O 14139`; stufe: `court ruling|not final`
8. `llmstxt-abrufe`: Do AI search engines actually read llms.txt files?  
   Patterns: zahl: `97 ?(%|percent)`; grenze: `requests?,? not effect|not (the )?effect|denominator|38,000`; quelle: `ahrefs`; stufe: `verified study`

## Results

| | Runs | Figure | Limit | Primary source | Grade | Permalink | Fetches per run |
|---|---|---|---|---|---|---|---|
| without | 24 | 15 | 15 | 16 | 6 | 8 | 4.5 |
| with skill | 24 | 24 | 22 | 24 | 24 | 24 | 2.0 |

Median time per run: 39.5 s without, 30.0 s with skill. Usage cost reported by the tool: 4.59 dollars for the 24 runs without, 3.27 dollars for the 24 runs with skill.

Per question:

| Entry | Condition | Figure | Limit | Source | Grade | Permalink | Fetches |
|---|---|---|---|---|---|---|---|
| `pew-klicks` | without | 0/3 | 0/3 | 0/3 | 0/3 | 1/3 | 3.0 |
| `pew-klicks` | with skill | 3/3 | 1/3 | 3/3 | 3/3 | 3/3 | 2.0 |
| `klarna-700` | without | 3/3 | 3/3 | 3/3 | 2/3 | 0/3 | 4.0 |
| `klarna-700` | with skill | 3/3 | 3/3 | 3/3 | 3/3 | 3/3 | 2.0 |
| `eigene-seite-selten-zitiert` | without | 0/3 | 0/3 | 0/3 | 0/3 | 3/3 | 2.0 |
| `eigene-seite-selten-zitiert` | with skill | 3/3 | 3/3 | 3/3 | 3/3 | 3/3 | 2.0 |
| `chatgpt-verweise-konversion` | without | 2/3 | 2/3 | 2/3 | 2/3 | 1/3 | 6.0 |
| `chatgpt-verweise-konversion` | with skill | 3/3 | 3/3 | 3/3 | 3/3 | 3/3 | 2.0 |
| `reddit-lizenzerloese` | without | 1/3 | 1/3 | 2/3 | 0/3 | 1/3 | 5.3 |
| `reddit-lizenzerloese` | with skill | 3/3 | 3/3 | 3/3 | 3/3 | 3/3 | 2.0 |
| `open-source-aufgegeben` | without | 3/3 | 3/3 | 3/3 | 0/3 | 0/3 | 4.7 |
| `open-source-aufgegeben` | with skill | 3/3 | 3/3 | 3/3 | 3/3 | 3/3 | 2.0 |
| `gema-openai` | without | 3/3 | 3/3 | 3/3 | 2/3 | 1/3 | 7.0 |
| `gema-openai` | with skill | 3/3 | 3/3 | 3/3 | 3/3 | 3/3 | 2.3 |
| `llmstxt-abrufe` | without | 3/3 | 3/3 | 3/3 | 0/3 | 1/3 | 3.7 |
| `llmstxt-abrufe` | with skill | 3/3 | 3/3 | 3/3 | 3/3 | 3/3 | 2.0 |

## Read by hand

- **The misses without the skill.** Nine answers missed the figure of the matching entry. Six gave another figure the collection also holds: three times the Ahrefs click figure (about 58 percent fewer clicks on the first result) instead of the Pew figure, three times the Ranqo share (2.9 percent of citations) that sits in the same entry as the AirOps figure. Three answers came back without a figure although the entry exists: two said the site held no such figure, one that the fetch did not return the entry's text. In all three the agent had fetched the full evidence page as HTML, which the fetch tool shortens.
- **The limit with the skill.** Two answers on the Pew question miss the limit by the pattern but state it in other words ("Queries that trigger AI summaries differ from those that don't"). Read by hand, all 24 answers with the skill give the limit.
- **Discovery.** Without the skill, no run requested `/.well-known/ard.json` or the skill file; 3 of 24 read `llms.txt`. Runs without the skill mostly went from the home page to the German evidence page (17 fetches) or the English one (11), rarely to the Markdown files the collection offers for agents. With the skill, every run fetched the overview `en/evidence.md` and then one topic file.

## Limits

One agent family, one tool configuration, one site: mine. The questions and the scoring are mine, and I know the entries. The skill was supplied, not discovered, so the test says nothing about whether agents find skills on their own. Patterns score presence, not correctness of every sentence; the hand reading above covers the misses, not every hit. Other fetch tools that do not shorten long pages may do better without the skill.

## Reproduce

Run the eight prompts above with the same flags: `claude -p "<prompt>" --model claude-sonnet-5-5 --setting-sources project --strict-mcp-config --output-format stream-json --verbose --max-turns 20 --allowedTools WebFetch --disallowedTools Bash Edit Write NotebookEdit WebSearch Skill Agent Task Glob Grep Read`, adding `--append-system-prompt` with the skill text for the second condition. Results will differ in wording; the comparison is what should hold.
