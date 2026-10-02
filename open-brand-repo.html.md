---
title: "Open Brand Repo: Markenregeln gehören ins Repository"
description: "Die Schweiz hat ihre Schreibregeln für Sprachmodelle aufbereitet und ihr Corporate Design als PDF. Warum die Marken-Spezifikation als öffentliches, versioniertes Repository geführt gehört."
author: "Robert Haase"
datePublished: 2026-07-21
dateModified: 2026-09-28T22:30:00+02:00
inLanguage: de
url: https://robert-haase.de/open-brand-repo.html
translation: https://robert-haase.de/en/open-brand-repo.html.md
keywords: ["Open Brand Repo", "Machine Readable Brands", "Brand Infrastructure", "Markenrichtlinien", "Design System", "Versionierung", "Transparenz", "Markenführung", "Agent Authority"]
---
# Open Brand Repo: Markenregeln gehören ins Repository.

## Zwei Arten, offen zu sein

**Die Schweizer Bundeskanzlei hat ihre amtlichen Schreibregeln so aufbereitet, dass Sprachmodelle sie direkt anwenden können. Das Corporate Design des Bundes ist auch öffentlich. Als PDF.**

Seit 2024 gilt in der Schweiz ein [Gesetz](https://interoperable-europe.ec.europa.eu/collection/open-source-observatory-osor/news/new-open-source-law-switzerland): Software, die der Bund entwickelt, muss offengelegt werden. Die Bundeskanzlei verwaltet das Konto [github.com/swiss](https://github.com/swiss) und veröffentlicht dort Code aus der Bundesverwaltung. Am 5. September 2026 lagen dort 57 öffentliche Repositories, vom Designsystem des Bundes bis zu den API-Richtlinien. Eines fällt aus der Reihe. In [swiss-federal-writing-guidelines](https://github.com/swiss/swiss-federal-writing-guidelines) stehen die Schreibweisungen der Bundeskanzlei in einer Form, mit der ChatGPT oder Claude direkt arbeiten können: strukturierte Regeln für Deutsch, Französisch, Italienisch und britisches Englisch, die amtlichen PDFs als Quelle daneben, und jeder Befund nach den Kanzleiregeln mit Verweis auf die Regelstelle, aus der er stammt. In der deutschen Fassung ist das die Randziffer der amtlichen Weisung.

Das [Corporate Design des Bundes](https://www.bk.admin.ch/bk/de/home/dokumentation/cd-bund.html) gibt es seit 2007. Logo, Wappen, Gestaltungsraster, alles frei abrufbar. Als Handbuch zum Herunterladen.

Dieselbe Behörde, zwei Arten von Offenheit. Die Sprachregeln sind für Maschinen gebaut. Die Marke ist für Menschen zum Nachschlagen. Marken haben bisher nur das PDF.

## Die Grenze verläuft am Sinn

**Der Einwand kommt sofort: Brand Books sind doch längst öffentlich. Stimmt. Nur nicht in einer Form, mit der ein System arbeiten kann.**

Was Marken offenlegen, ist die Ausführungsschicht. IBM entwickelt sein Designsystem [Carbon](https://github.com/carbon-design-system/carbon) seit 2015 offen auf GitHub, Porsche und die [Deutsche Bahn](https://github.com/db-ux-design-system) machen es genauso. Seit Oktober 2025 gibt es sogar einen [Standard dafür](https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/), wie Design Tokens zwischen Werkzeugen ausgetauscht werden. Bis hierhin ist alles offen.

Ab hier wird das Bild uneinheitlich. Die Deutsche Bahn stellt den Code ihres Designsystems unter Apache 2.0 und bindet Schriften, Icons und Markenzeichen an eine eigene Lizenz, die nur Auftragnehmern der DB die Nutzung erlaubt. Ihre Markenpositionierung samt Purpose und Markenwerten steht im Marketingportal ohne Anmeldung, allerdings als Kapitelseite eines Redaktionssystems. Von 33 geprüften Seiten des Bereichs Marke und Design verlangen 13 eine Anmeldung, darunter die Kommunikationsmuster, die Best Practices und die Schrift-Downloads. GitHub veröffentlicht seine [Brand Guidelines](https://brand.github.com/) offen im Netz: ein Toolkit mit Kapitelseiten, eine Figma-Datei und ein PDF, das in der Ausgabe 2026 auf 89 Seiten kommt.

Und die Schicht darunter, Positionierung, Werte, die Logik hinter den Entscheidungen, ist fast überall geschlossen. Die Deutsche Bahn zeigt, wo der Unterschied liegt: lesbar ja, aber als Kapitelseite ohne Verlauf und ohne abrufbare Datei. Weiter geht [GitLab](https://gitlab.com/gitlab-com/content-sites/handbook): Positionierung, Markenstimme, Namens- und Markenregeln und die eigenen Werte liegen dort als versionierte Dateien in einem öffentlichen Repository, jede Änderung mit Datum und namentlichem Autor. Es gibt eine ganze Industrie, deren Produkt darin besteht, Markenrichtlinien in geschützte Portale zu bringen.

Je näher man dem Sinn kommt, desto geschlossener wird es.

## Warum das bisher niemanden störte

**Für diese Schicht gab es nur menschliche Leser. Ein Mensch schlägt im Brand Book nach, und dafür reicht ein PDF.**

Das hat sich geändert. Agenten lesen Spezifikationen, keine Broschüren. Sie filtern, vergleichen und empfehlen auf Basis dessen, was sie verarbeiten können. Was nur als Layout existiert, existiert für sie kaum.

Die üblichen Gründe gegen eine Offenlegung halten dem nicht stand. Der Wettbewerb kenne dann die Positionierung: Er kennt sie ohnehin, jede Kampagne verrät sie. Man verliere die Kontrolle: Die ist längst weg, in jeder Organisation kursiert eine Datei namens Brand_Guidelines_V3_FINAL_final.pdf. Was wirklich dahintersteckt, ist unbequemer. Ein Versionsverlauf zeigt, dass eine Marke iteriert, korrigiert und sich geirrt hat. Marken zeigen lieber, dass sie immer schon wussten, wer sie sind.

## Open Brand Repo

**Die Marken-Spezifikation als öffentliches, versioniertes Repository. Nicht alles davon, und genau das ist der Punkt.**

Öffentlich gehört, was gelesen werden soll: wer die Marke ist, wofür sie steht, wie sie spricht, welche Fakten gelten, wie sie aussieht. Das ist, was fremde Agenten brauchen, um die Marke überhaupt auswählen zu können. Intern bleibt, was ein Agent im eigenen Namen zusagen darf, wo die Grenze verläuft und wo ein Mensch übernimmt. Wer das veröffentlicht, verhandelt gegen sich selbst, wie ich in [Agent Authority](https://robert-haase.de/agent-authority.html) beschrieben habe.

Der Unterschied zum Brand Book ist nicht die Zugänglichkeit. Es ist die Form. Ein Repository hat eine Geschichte. Jede Regel steht dort mit Datum, mit Begründung und mit dem Namen dessen, der sie entschieden hat.

> Ein Commit ist eine verantwortete Entscheidung, die man nicht vergessen kann.

Damit erledigt das Werkzeug etwas, das in der Markenarbeit sonst Vorsatz bleibt. In [Taste & Accountability](https://robert-haase.de/taste-accountability.html) habe ich beschrieben, was von der Markenarbeit übrig bleibt, wenn Maschinen die Ausführung übernehmen: die dokumentierte Entscheidung mit einem Absender. Ein Repository erzwingt genau das, ohne dass jemand daran denken muss.

## Die Einwände

**Der häufigste: Wer seine Marke offenlegt, macht es Fälschern leicht.**

Das Gegenteil trifft zu. Marken werden längst pixelgenau geklont, ohne dass jemand eine Spezifikation braucht. Der Takedown-Anbieter Netcraft gibt an, zwischen März 2024 und März 2025 rund [1,3 Millionen Phishing-Seiten](https://www.netcraft.com/guide/phishing-website-detection-disruption) gestört zu haben, die mehr als 16.000 Organisationen nachahmten. Das ist ein Ausschnitt, denn nach eigener Angabe entfällt auf Netcraft rund ein Drittel der Abschaltungen weltweit. Wie hoch der Anteil KI-erzeugter Inhalte daran ist, weist keine der geprüften Quellen aus. Der Klon existiert. Was fehlt, ist ein Weg, das Original zu erkennen. Ein [signiertes](https://git-scm.com/book/en/v2/Git-Tools-Signing-Your-Work), öffentliches Repository ist genau das: die Referenz, gegen die sich prüfen lässt, was echt ist.

Zwei andere Risiken sind real. Das erste ist Verwahrlosung. Etwa [sechzehn Prozent](https://arxiv.org/abs/1906.08058) der populären Projekte auf GitHub gelten als aufgegeben. Audi hatte sein UI-Repository jahrelang öffentlich, irgendwann zwischen November 2025 und Mai 2026 verschwand es. Ein totes Repository ist ein schlechteres Signal als gar keines.

Das zweite ist Inkonsistenz. Everlane hat radikale Transparenz zur Marke gemacht und die Kostenstruktur jedes T-Shirts veröffentlicht. 2020 entließ das Unternehmen 42 der 57 Mitglieder seines remote arbeitenden Kundenservice-Teams, [vier Tage nachdem dieses die Anerkennung seiner Gewerkschaft verlangt hatte](https://www.thefashionlaw.com/bernie-sanders-calls-out-everlane-for-union-busting-amid-layoffs/). Im Mai 2026 wurde Everlane [von Shein übernommen](https://fashionista.com/2026/05/shein-acquires-everlane). Offenheit erhöht die Fallhöhe. Wer sie behauptet und nicht liefert, fällt tiefer als jemand, der nie etwas versprochen hat.

Wie es anders geht, zeigt Tony's Chocolonely. Das Unternehmen veröffentlicht jedes Jahr, wie viele Fälle von Kinderarbeit es in der eigenen Lieferkette gefunden hat. Die Zahl [steigt](https://nl.tonyschocolonely.com/en/blogs/news/annual-fair-report-2024-2025-article), von einigen hundert auf über dreitausend. Das ist kein Versagen. Es ist der Beweis, dass hingesehen wird.

## Wo man anfängt

**Das Brand Book existiert bereits. Es als Repository zu führen ist kein neues Projekt, sondern ein Formatwechsel.**

Der erste Schritt ist die Trennung: Was gelesen werden soll, wird öffentlich. Was ein Agent zusagen darf, bleibt intern. Der zweite ist die Form: Jede Regel bekommt ein Datum, eine Begründung und einen Absender, so wie es bei Software seit Jahrzehnten selbstverständlich ist. Der dritte ist der unbequeme: pflegen oder es lassen. Ein Repository, das seit zwei Jahren niemand angefasst hat, sagt über eine Marke mehr aus, als ihr lieb sein kann.

Die Bundeskanzlei hat ihre Schreibregeln maschinenlesbar gemacht, weil sie wollte, dass sie angewendet werden. Mehr ist der Gedanke nicht. Eine Marke, die möchte, dass Systeme sie richtig darstellen, muss ihnen etwas geben, womit sie arbeiten können. In [Brand Infrastructure](https://robert-haase.de/brand-infrastructure.html) habe ich beschrieben, warum Marken maschinenlesbar werden müssen. Das Open Brand Repo ist die Form, in der das stattfindet.

Und weil auch dieser Text eine Empfehlung ist, gilt für ihn, was ich in [Die Analyse ist nicht mehr das Produkt](https://robert-haase.de/the-bet.html) gefordert habe: Er braucht ein Signal, an dem er scheitert. GitLab führt seine Markendefinition bereits so. Die Änderung der Markenpersönlichkeit vom 22. Mai 2025 steht dort als Commit, mit Datum und mit dem Namen der Brand Managerin, die sie entschieden hat. Mein Signal: Wenn bis zum 21. Juli 2028 keine der 100 Marken aus Interbrands Best Global Brands 2026, Softwarehersteller ausgenommen, ihre Positionierung, Markenstimme und Werte als öffentliches Repository mit Versionsverlauf führt, war das hier eine Idee ohne Anschluss. Ich sehe die 100 einzeln nach, auf der Markenseite des Unternehmens und in seinen öffentlichen Konten bei GitHub und GitLab, und veröffentliche das Ergebnis hier, auch wenn die Liste leer bleibt.

---

*Diese Datei wird aus der Seite erzeugt: https://robert-haase.de/open-brand-repo.html. Weichen beide voneinander ab, gilt die Seite.*
