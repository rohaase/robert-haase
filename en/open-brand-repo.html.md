---
title: "Open Brand Repo: Brand Rules Belong in a Repository"
description: "Switzerland prepared its writing rules for language models and its corporate design as a PDF. Why the brand specification belongs in a public, versioned repository."
author: "Robert Haase"
datePublished: 2026-07-21
dateModified: 2026-09-28T22:30:00+02:00
inLanguage: en
url: https://robert-haase.de/en/open-brand-repo.html
translation: https://robert-haase.de/open-brand-repo.html.md
keywords: ["Open Brand Repo", "Machine Readable Brands", "Brand Infrastructure", "brand guidelines", "design system", "versioning", "transparency", "brand management", "Agent Authority"]
---
# Open Brand Repo: Brand Rules Belong in a Repository.

## Two Ways of Being Open

**The Swiss Federal Chancellery has prepared its official writing rules so that language models can apply them directly. The federal corporate design is public too. As a PDF.**

Since 2024, Switzerland has had a [law](https://interoperable-europe.ec.europa.eu/collection/open-source-observatory-osor/news/new-open-source-law-switzerland): software developed by the federal government must be disclosed. The Federal Chancellery runs the [github.com/swiss](https://github.com/swiss) account and publishes code from across the federal administration there. On 5 September 2026 it held 57 public repositories, from the federal design system to the API guidelines. One of them stands apart. In [swiss-federal-writing-guidelines](https://github.com/swiss/swiss-federal-writing-guidelines), the Chancellery's writing rules sit in a form that ChatGPT or Claude can work with directly: structured rules for German, French, Italian and British English, the official PDFs alongside as the source, and every finding under the Chancellery rules referenced back to the rule it came from. In the German edition that reference is the paragraph number of the official directive.

The [federal corporate design](https://www.bk.admin.ch/bk/de/home/dokumentation/cd-bund.html) has existed since 2007. Logo, coat of arms, layout grids, all freely available. As a manual to download.

Same authority, two kinds of openness. The language rules are built for machines. The brand is for people to look things up in. Brands so far have only the PDF.

## The Line Runs at Meaning

**The objection comes immediately: brand books have long been public. True. Just not in a form a system can work with.**

What brands disclose is the execution layer. IBM has developed its design system [Carbon](https://github.com/carbon-design-system/carbon) openly on GitHub since 2015, Porsche and [Deutsche Bahn](https://github.com/db-ux-design-system) do the same. Since October 2025 there has even been a [standard](https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/) for how design tokens are exchanged between tools. Up to this point everything is open.

From here the picture gets uneven. Deutsche Bahn releases the code of its design system under Apache 2.0 and ties fonts, icons and trademarks to a separate licence that only its own contractors may use. Its brand positioning, including its purpose and brand values, sits in the marketing portal without a login, though as a chapter page in a content management system. Of 33 pages checked in the brand and design section, 13 require a login, among them the communication patterns, the best practices and the font downloads. GitHub publishes its [brand guidelines](https://brand.github.com/) openly on the web: a toolkit of chapter pages, a Figma file, and a PDF that runs to 89 pages in the 2026 edition.

And the layer beneath, positioning, values, the logic behind the decisions, is closed almost everywhere. Deutsche Bahn shows where the difference lies: readable yes, but as a chapter page with no history and no file you can retrieve. [GitLab](https://gitlab.com/gitlab-com/content-sites/handbook) goes further: positioning, brand voice, naming and trademark rules, and the company's own values sit there as versioned files in a public repository, every change with a date and a named author. There is an entire industry whose product consists of putting brand guidelines into protected portals.

The closer you get to meaning, the more closed it becomes.

## Why Nobody Minded Until Now

**That layer only ever had human readers. A person looks something up in a brand book, and a PDF is fine for that.**

That has changed. Agents read specifications, not brochures. They filter, compare, and recommend based on what they can process. What exists only as layout barely exists for them.

The usual arguments against disclosure do not hold up. Competitors would know the positioning: they know it anyway, every campaign gives it away. You would lose control: that is long gone, every organisation has a file circulating called Brand_Guidelines_V3_FINAL_final.pdf. What is really behind it is less comfortable. A version history shows that a brand iterated, corrected itself, and got things wrong. Brands prefer to show that they always knew who they were.

## Open Brand Repo

**The brand specification as a public, versioned repository. Not all of it, and that is precisely the point.**

What belongs in public is what is meant to be read: who the brand is, what it stands for, how it speaks, which facts apply, how it looks. That is what external agents need in order to select the brand at all. What stays internal is what an agent may promise in the brand's name, where the boundary runs, and where a human takes over. Publishing that means negotiating against yourself, as I described in [Agent Authority](https://robert-haase.de/en/agent-authority.html).

The difference from the brand book is not accessibility. It is form. A repository has a history. Every rule sits there with a date, a reason, and the name of whoever decided it.

> A commit is an accountable decision you cannot forget.

The tool therefore handles something that otherwise stays a matter of intention in brand work. In [Taste & Accountability](https://robert-haase.de/en/taste-accountability.html) I described what remains of brand work once machines take over execution: the documented decision with a sender. A repository enforces exactly that, without anyone having to remember it.

## The Objections

**The most common one: disclosing your brand makes life easy for counterfeiters.**

The opposite applies. Brands are already cloned pixel by pixel without anyone needing a specification. The takedown provider Netcraft says it disrupted around [1.3 million phishing sites](https://www.netcraft.com/guide/phishing-website-detection-disruption) between March 2024 and March 2025, imitating more than 16,000 organisations. That is one slice of the picture, since by its own account Netcraft handles about a third of the world's takedowns. None of the sources checked says how much of that content was AI-generated. The clone exists. What is missing is a way to recognise the original. A [signed](https://git-scm.com/book/en/v2/Git-Tools-Signing-Your-Work), public repository is exactly that: the reference against which what is genuine can be checked.

Two other risks are real. The first is neglect. Roughly [sixteen percent](https://arxiv.org/abs/1906.08058) of popular projects on GitHub are considered abandoned. Audi kept its UI repository public for years; sometime between November 2025 and May 2026 it disappeared. A dead repository is a worse signal than none at all.

The second is inconsistency. Everlane made radical transparency part of its brand and published the cost structure of every T-shirt. In 2020 the company laid off 42 of the 57 members of its remote customer experience team, [four days after they had asked for recognition of their union](https://www.thefashionlaw.com/bernie-sanders-calls-out-everlane-for-union-busting-amid-layoffs/). In May 2026 Everlane was [acquired by Shein](https://fashionista.com/2026/05/shein-acquires-everlane). Openness raises the drop. Whoever claims it and does not deliver falls further than someone who never promised anything.

Tony's Chocolonely shows how it can work. The company publishes every year how many cases of child labour it found in its own supply chain. The number is [rising](https://nl.tonyschocolonely.com/en/blogs/news/annual-fair-report-2024-2025-article), from a few hundred to more than three thousand. That is not a failure. It is proof that someone is looking.

## Where to Start

**The brand book already exists. Running it as a repository is not a new project, it is a change of format.**

The first step is the separation: what is meant to be read becomes public. What an agent may promise stays internal. The second is the form: every rule gets a date, a reason, and a sender, the way software has done it for decades. The third is the uncomfortable one: maintain it or leave it. A repository nobody has touched in two years says more about a brand than it would like.

The Federal Chancellery made its writing rules machine-readable because it wanted them applied. The thought is no bigger than that. A brand that wants systems to represent it correctly has to give them something to work with. In [Brand Infrastructure](https://robert-haase.de/en/brand-infrastructure.html) I described why brands must become machine-readable. The Open Brand Repo is the form in which that happens.

And because this text is a recommendation too, what I called for in [The Analysis Is No Longer the Product](https://robert-haase.de/en/the-bet.html) applies to it: it needs a signal at which it fails. GitLab already runs its brand definition this way. The change to its brand personality on 22 May 2025 sits there as a commit, with a date and the name of the brand manager who decided it. My signal: if by 21 July 2028 none of the 100 brands in Interbrand's Best Global Brands 2026, software vendors excluded, keeps its positioning, brand voice and values as a public repository with version history, this was an idea without traction. I will check all 100 individually, on the company's own brand pages and in its public GitHub and GitLab accounts, and publish the result here, even if the list stays empty.

---

*This file is generated from the page: https://robert-haase.de/en/open-brand-repo.html. If the two ever differ, the page is authoritative.*
