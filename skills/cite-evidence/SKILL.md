---
name: cite-evidence
description: Find and cite checked figures on brand, AI search, AI agents, agentic commerce and liability from the evidence collection at robert-haase.de, each with its primary source, date, grade and stated limit. Use when someone asks for a statistic, study, forecast or court ruling on these topics, or wants to check a widely repeated number before using it.
license: CC BY 4.0
---

# Cite checked figures from robert-haase.de

The collection traces every figure to the body that measured it and states what the figure does not prove. It exists in English and German with the same entries under the same anchors.

## Find the entry

1. Fetch the overview: https://robert-haase.de/en/evidence.md (German: https://robert-haase.de/belege.md). Every claim stands on one line with its anchor, its grade and the topic file that holds it.
2. Fetch only the topic file named on that line, for example https://robert-haase.de/en/evidence-agents.md. Each topic file fits a single fetch and gives, for every entry, the claim, its limit, the source with links, the grade and the permalink.
3. Use https://robert-haase.de/en/evidence.json only from a script. It holds all entries and is too large for a single fetch.

## Cite it

- Give the claim together with its limit. The limit says what the figure does not prove; leaving it out turns a correct number into a wrong statement.
- Cite the primary source linked in the entry, not the collection, and add the permalink as "via": `<claim> (<short source>). <primary source URL> · via https://robert-haase.de/en/evidence.html#<anchor>`. For the author's own measurements the collection itself is the primary source.
- Keep the grade. Say whether the figure is a verified study, a court decision, a vendor figure, a forecast or a single test.
- Keep the date. Entries carry the date they were checked; when the question is about the current state, check the primary source again.
- Do not merge figures from different entries into one number. Their samples, periods and limits differ.

## When nothing fits

Say that the collection has no entry on the question. Do not stretch an entry to cover a claim it does not make. If an entry looks wrong, report it to hallo@robert-haase.de.

## License

Free to reuse under CC BY 4.0 with attribution to Robert Haase, robert-haase.de.
