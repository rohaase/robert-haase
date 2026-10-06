---
title: "Maschinensicht"
description: "Diese Seite liest sich selbst aus: links die Seite für Menschen, rechts dieselbe Seite so, wie KI-Suche und Browser-Agenten sie verarbeiten. Live aus dem Quelltext, nicht nachgebaut."
author: "Robert Haase"
datePublished: 2026-07-21
dateModified: 2026-10-06T19:56:06+02:00
inLanguage: de
url: https://robert-haase.de/maschinensicht.html
translation: https://robert-haase.de/en/machine-view.html.md
keywords: ["Maschinenlesbarkeit", "Machine Readable Brands", "Brand Infrastructure", "Accessibility Tree", "strukturierte Daten", "Browser-Agenten", "KI-Suche"]
---
# Maschinensicht

**Ich habe versucht, meine eigene Website so zu sehen, wie eine Maschine sie sieht.** Das Ergebnis steht unten: links eine Seite, wie ein Mensch sie kennt. Rechts, was eine Maschine davon bekommt. Nichts ist nachgebaut, der Apparat öffnet die echte Seite und liest ihren Quelltext.

Beim Überfahren einer Zeile rechts wird die zugehörige Stelle links markiert. Und umgekehrt. Manches leuchtet nie, weil es auf der anderen Seite gar nicht ankommt. Genau um diese Stellen geht es.

[Interaktive Ansicht: Sie gibt es nur in der HTML-Fassung, https://robert-haase.de/maschinensicht.html]

## Was hier zu sehen ist

**Fünf Ansichten, fünf Arten zu lesen. Ob eine Seite maschinenlesbar ist, hängt davon ab, welche Maschine liest.**

- **KI-Suche:** der Quelltext, so wie ChatGPT oder Claude ihn beim direkten Abruf bekommen. Ohne JavaScript. Was erst ein Skript auf die Seite schreibt, fehlt hier.
- **Strukturierte Daten:** das, was die Seite über sich selbst sagt, in maschinenlesbarer Form. Ob das etwas bringt, steht weiter unten.
- **Agent · Baum:** Rollen und Namen statt Layout. So lesen Browser-Agenten, also Programme, die einen Browser fernsteuern und Aufgaben erledigen. Auf denselben Baum sind Screenreader angewiesen.
- **Agent · HTML:** gekürztes HTML, nur die bedienbaren Elemente. Vollständiger als der Baum, und je nach Modell besser oder schlechter.
- **Agenten-Briefing:** die llms.txt, eine Datei, die KI-Systemen sagen soll, worum es auf dieser Website geht. Ob sie überhaupt gelesen wird, dazu unten mehr.

Der wichtigste Punkt dabei: Die großen US-Assistenten führen beim direkten Abruf kein JavaScript aus. In einem Test stand eine falsche interne Referenznummer im Quelltext, die echte kam erst per Skript auf die Seite. ChatGPT und Claude meldeten die falsche. Für diese beiden Systeme kommen drei Tests seit Ende 2025 zum selben Ergebnis. Bei den anderen Systemen verschiebt sich die Linie, und immer in dieselbe Richtung: Gemini fand im Dezember 2025 als einziges System den per Skript nachgeladenen Wert und rendert in den beiden späteren Tests nicht mehr, Copilot und Grok renderten im Januar 2026 noch, im Juni nicht mehr. Im jüngsten Test lasen alle sieben geprüften US-Assistenten nur rohes HTML, fünf Systeme aus China und Europa führten das Skript aus. Alle drei Tests sind Einzelmessungen. Umfang und Grenzen stehen auf der [Belege-Seite](https://robert-haase.de/belege.html#javascript). Der Weg über den Suchindex rendert dagegen sehr wohl, nur der Direkt-Abruf nicht.

## Wie der Apparat arbeitet

**Alles passiert im Browser, ohne Server.**

Links liegt die echte Seite, in einem Rahmen geladen. Der Apparat liest ihren Quelltext, ihre strukturierten Daten und die llms.txt und stellt sie den fünf Ansichten gegenüber. Baum- und HTML-Ansicht bilden Formate nach, die real benutzt werden. Der Baum folgt der Ausgabe von Playwright, dem verbreitetsten Werkzeug zur Fernsteuerung von Browsern. Die HTML-Ansicht folgt dem Format von Stagehand und Skyvern, zwei Werkzeugen, die eigens für KI-Agenten gebaut sind. Welches Werkzeug beim Bau von Browser-Agenten am weitesten verbreitet ist, lässt sich öffentlich nicht sauber messen. Die Zuordnung zwischen links und rechts entsteht durch Textabgleich und ist an den Rändern unscharf. Wer es prüfen will: Quelltext öffnen, dieselben Daten finden.

## Warum der Baum zählt

**Ein Element ohne Namen existiert für einen Agenten nicht.**

Google schreibt es selbst: Agenten stützen sich auf den Accessibility-Baum, denselben Baum, den Screenreader nutzen. Seit Frühjahr 2026 prüft Lighthouse, Googles Prüfwerkzeug für Websites, das in einer eigenen Kategorie. Ein Button, der nur aus einem Symbol besteht, hat in diesem Baum keinen Namen, solange ihm niemand einen hinterlegt. Der Agent kann ihn weder sehen noch benutzen.

Das ist kein Randproblem. Eine Erhebung über eine Million Startseiten fand auf 30,6 Prozent leere Buttons, und auf der Hälfte fehlen Beschriftungen an Formularfeldern. Die durchschnittliche Website liest sich für einen Agenten wie ein halb beschriftetes Formular.

## Beobachtungen, keine Beweise

**Vier Behauptungen kursieren zu diesem Thema. Keine ist so solide, wie sie klingt.**

**Struktur schlägt Pixel?** Die Studien widersprechen sich: Mal gewinnt die Text-Variante deutlich, mal die mit Screenshots. Belegbar ist die Werkzeugebene: Playwright und Stagehand, zwei verbreitete Baukästen für Browser-Agenten, arbeiten im Normalbetrieb über den Accessibility-Baum und schalten Bildschirmfotos nur auf Wunsch zu. Bei den fertigen Agenten liegt es anders. Google beschreibt, dass sie Baum, DOM und eine visuelle Darstellung miteinander abgleichen, nachzulesen auf der [Belege-Seite](https://robert-haase.de/belege.html#a11y-tree).

**Barrierefreiheit hilft Agenten?** Die Zahl, die dafür überall zitiert wird, Erfolg fällt von 78 auf 42 Prozent, stammt aus einer Studie, die keine einzige Website verändert hat. Sie hat dem Agenten die Maus weggenommen. **Der Vergleich, den ich hier angekündigt hatte, steht weiterhin aus.** Was ich am 29. August 2026 gebaut habe, ist etwas Kleineres: eine Anschauung. Zwei Fassungen derselben Seite, aus einer Inhaltsdefinition erzeugt und bis auf acht von 1.265 Pixeln Höhe deckungsgleich: [die eine sauber ausgezeichnet](https://robert-haase.de/zwillingstest/klar.html), [die andere als Div-Suppe](https://robert-haase.de/zwillingstest/unklar.html). In der ersten trägt jedes der acht Bedienelemente eine Rolle und einen Namen, in der zweiten keines von sieben; per Tastatur erreichbar sind acht Elemente gegen eines. Technisch funktioniert die zweite Fassung einwandfrei: Löst man ihre Schaltflächen programmatisch aus, tun sie exakt dasselbe.

**Warum das kein Beleg ist.** Ich habe die Auszeichnung selbst weggelassen und danach gemessen, dass sie fehlt. Das Ergebnis stand mit dem Bauplan fest; wer weiß, wie ein Accessibility-Baum entsteht, hätte es vorhersagen können. Als Beleg über die Wirklichkeit taugt ein selbstgebauter Fall nicht, und auf der [Belege-Seite](https://robert-haase.de/belege.html) steht er deshalb bewusst nicht. Was er zeigt, ist allein der Mechanismus: dass zwei Seiten für Menschen identisch sein können und für eine Maschine nicht. **Deshalb habe ich am selben Tag echte Seiten gemessen**, statt weiter eigene zu bauen.

**Die Erhebung: 160 Startseiten aus DAX, MDAX und SDAX.** Keine Auswahl von mir: Die Unternehmen kommen aus drei Indizes, die Adressen aus Wikidata. Gemessen wurde Chromes eigener Accessibility-Baum, zweimal; 135 von 136 auswertbaren Seiten lieferten beide Male dasselbe Ergebnis auf das Element genau.

**Das Ergebnis widerspricht dem, was ich erwartet hatte.** Von 13.527 Bedienelementen tragen 456 keinen Namen, **3,4 Prozent**. Und die Quote kippt im Mittelstand nicht: DAX 3,1, MDAX 3,8, SDAX 3,3 Prozent. Der Verdacht, dass kleinere Unternehmen ohne Barrierefreiheits-Abteilung deutlich schlechter dastehen, hält der Messung nicht stand. **57 der 135 Seiten haben keine einzige Lücke.** Die verbreitete Erzählung vom maschinen-unlesbaren Web trifft auf deutsche Börsenunternehmen so nicht zu.

**Wo Lücken bleiben, sind es fast immer Logos und Symbole**, die als Link oder Schaltfläche dienen: Talanx verlinkt seine sechs Konzernmarken als namenlose Logos, GFT seine Partner, Atoss seine Profile in sozialen Netzwerken. Dazu Karussellpfeile und Abspielknöpfe. Wer das behebt, schließt den Großteil seiner Lücken mit einer einzigen Maßnahme. Ein Fall zeigt, wie knapp man vorbeizielen kann: MBB verlinkt seine Töchter mit einem sorgfältig gepflegten Titel-Attribut, aber weil der Linktext aus einem geschützten Leerzeichen besteht, bleibt der Link im Baum trotzdem namenlos.

**Deutlicher ist die Lage bei der Struktur:** 52 der 135 Seiten haben keine Hauptinhalt-Landmarke, es fehlt also die Angabe, wo der Inhalt beginnt und die Navigation endet. Und bei Bildern tragen 1.662 von 3.979 keinen Namen, also 41,8 Prozent. Nach Elementart sind davon 86 Prozent inline eingebundene SVG-Grafiken und 13 Prozent klassische img-Elemente. Gemessen ist damit die Elementart und nicht der Zweck: Ein verlinktes Konzernlogo ohne Textalternative und ein reines Ziersymbol sind in dieser Zählung nicht unterscheidbar. Wie viele der 86 Prozent folgenlos bleiben, ist offen.

**Zum Zutritt, und hier musste ich mich korrigieren:** Zwölf der 160 Seiten weisen den automatisierten Abruf ab, 7,5 Prozent. Das ist kommerzielle Bot-Abwehr, bei zehn Seiten von Akamai oder Cloudflare, bei zweien über Amazons CloudFront. Sie erkennt meist am TLS-Fingerabdruck und an der Reihenfolge der HTTP-Header, dass kein gewöhnlicher Browser anfragt. Bei Siemens und der Hannover Rück genügt dafür schon die Browser-Kennung. Ein regulärer, ferngesteuerter Chrome kam bei mehreren dieser Seiten durch: Die Abwehr trennt Werkzeug von Browser, nicht Mensch von Maschine. Eine frühere Fassung dieser Seite sprach von einem Drittel und warf dabei Bot-Abwehr, veraltete Adressen, Länderauswahlen und technische Fehler in einen Topf.

**Was auch diese Erhebung nicht beantwortet:** ob ein Agent seine Aufgabe am Ende löst. Sie misst, was er vorfindet, nicht was er erreicht. Die ursprüngliche Frage bleibt offen: Verbessert bessere Auszeichnung den Erfolg? Die Zahlen dieser Erhebung stehen mit ihren Grenzen auf der [Belege-Seite](https://robert-haase.de/belege.html), bis auf die Bilderzahl, deren Grenze oben im Text steht.

**Strukturierte Daten machen sichtbar?** Ahrefs verfolgte 1.885 Seiten, die zwischen August 2025 und März 2026 JSON-LD ergänzten, und verglich sie mit 4.000 Kontrollseiten auf ähnlichem Zitierniveau. In ChatGPT und im Google-AI-Modus war der Effekt nicht von null zu unterscheiden, in den AI Overviews verloren die ergänzten Seiten 4,6 Prozent gegenüber den Kontrollseiten. Untersucht wurden allerdings nur Seiten, die ohnehin schon stark zitiert wurden, jede mit über hundert Nennungen in den AI Overviews. Für Seiten, die bisher gar nicht vorkommen, sagt die Erhebung nichts, und die Autoren halten dort einen Nutzen ausdrücklich für möglich. Ich pflege das Markup, weil es das Fundament sauber hält. Zahlen und Grenzen stehen auf der [Belege-Seite](https://robert-haase.de/belege.html#json-ld-test).

**Es gibt Regeln, an die sich alle halten?** Google, OpenAI, Perplexity und Meta nehmen ihre nutzerausgelösten Abrufe ausdrücklich von der robots.txt aus, Anthropic ist die Ausnahme. Wer KI-Crawler blockiert, blockiert Training und Suche. Die Agenten laufen weiter. Und der Standard, der das regeln soll, hängt seit über einem Jahr in der Arbeitsgruppe fest.

Und die angekündigte Auflösung zur llms.txt: Sie liegt hier, weil es sie gibt. 97 Prozent dieser Dateien bekommen keinen einzigen Zugriff, das zeigen Server-Logs über 137.000 Domains. Erfunden wurde das Format für Werkzeug-Dokumentation, nicht für Sichtbarkeit. Wo es wirkt, spart es Agenten Zeit. Belegt ist das an Dokumentationsseiten: In einem [Test über 20 solcher Sites und 2.400 Durchläufe](https://www.mintlify.com/blog/llms-txt-agent-benchmark) sanken Antwortzeit und Tokenverbrauch um rund ein Fünftel, sobald die Seiten auf ihre llms.txt verwiesen; verglichen mit denselben Seiten in Markdown ohne diesen Verweis. Gemessen hat das Mintlify, ein Anbieter, der solche Dokumentationen selbst ausliefert und den Aufbau samt [Rohdaten](https://github.com/mintlify/docs-url-discovery-bench) offengelegt hat. Eine unabhängige Messung kenne ich nicht. Für Marken-Websites ist damit nichts belegt.

## Der leichteste Fall

**Diese Website ist der einfachste Fall, den es gibt.**

Rund dreißig Seiten, statisch, kein Redaktionssystem, ein einziges externes Skript. Bei einer gewachsenen Marken-Site mit Tag-Manager, Consent-Schicht und drei beteiligten Agenturen sähe die rechte Spalte anders aus. Was hier Handarbeit ist, wird dort eine Frage von Zuständigkeit und Prozess.

Und saubere Struktur ist nur die Eintrittskarte. Meine eigene Messreihe zeigt beides: Wer nach mir fragt, bekommt in zwei von drei Systemen diese Website als meistzitierte Quelle. Im Google-AI-Modus führt seit Ende August das Fachmedium, in dem ich schreibe. Wer fragt, wen man für das Thema beauftragen sollte, bekommt meinen Namen nicht, in vier Messungen seit Juli kein einziges Mal. Dazwischen liegt kein technisches Problem. Dazwischen liegt, was Dritte über einen schreiben, und das korreliert mit der Sichtbarkeit in KI-Antworten [deutlich stärker als die klassischen Größen der eigenen Website](https://robert-haase.de/belege.html#mentions-vs-backlinks). Gemessen wurde das an etablierten Marken; auf eine Personen-Abfrage wie meine ist es übertragen.

## Quellen

- **JavaScript beim Direkt-Abruf:** drei Tests, [searchviu](https://www.searchviu.com/en/schema-markup-and-ai-in-2025-what-chatgpt-claude-perplexity-gemini-really-see/) (2025), [Resoneo](https://think.resoneo.com/sentinel/geo-llm-crawler-report.html) (2026) und [Search Engine World](https://www.searchengineworld.com/do-ai-assistants-actually-render-your-javascript-when-grounding-we-put-it-to-the-test) (2026, der Test mit der Köder-Telefonnummer).
- **Agenten lesen den Baum:** [Google über den eigenen Agenten](https://developers.google.com/crawling/docs/crawlers-fetchers/google-agent) und die [Lighthouse-Kategorie „Agentic Browsing“](https://developer.chrome.com/docs/lighthouse/agentic-browsing/scoring).
- **30,6 Prozent leere Buttons:** [WebAIM Million 2026](https://webaim.org/projects/million/), eine Erhebung über eine Million Startseiten.
- **78 auf 42 Prozent:** [A11y-CUA](https://arxiv.org/abs/2602.09310) (CHI 2026). Die Studie verändert die Bedienung des Agenten, nicht die Websites.
- **89 gegen 49 Prozent:** [Designing Agent-Ready Websites](https://arxiv.org/abs/2607.12056) (2026), Prototyp mit zwei Fassungen derselben Seite.
- **JSON-LD-Test:** [Ahrefs](https://ahrefs.com/blog/schema-ai-citations/) (2026), 1.885 Seiten gegen 4.000 Kontrollseiten.
- **Der feststeckende Standard:** die [IETF-Arbeitsgruppe AIPREF](https://datatracker.ietf.org/wg/aipref/about/).
- **97 Prozent ohne Zugriff:** [Ahrefs](https://ahrefs.com/blog/llmstxt-study/) (Mai 2026), Server-Logs über 137.210 Domains; berichtet bei [PPC Land](https://ppc.land/llms-txt-adoption-rises-8-8x-but-97-of-files-get-zero-ai-requests/).
- **Google nutzt keine Spezialdateien:** [Optimizing for generative AI features on Google Search](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) (Google Search Central, Stand Juli 2026): llms.txt, Spezial-Markup und Chunking ausdrücklich nicht nötig, aus Google-Sicht ist KI-Such-Optimierung weiterhin SEO.

Diese Zahlen und die weiteren, die ich für meine Texte geprüft habe, stehen einzeln aufbereitet auf der Seite [Belege](https://robert-haase.de/belege.html): je mit Primärquelle, Erhebungsumfang, Datum und dem, was sie ausdrücklich nicht belegen. Zum Zitieren gedacht.

## Kleines Glossar

- **Accessibility-Baum:** die Struktur, die der Browser aus jeder Seite errechnet: alle Elemente mit Rolle und Name, ohne Layout. Grundlage für Screenreader und Agenten.
- **Browser-Agent:** Software, die einen Browser bedient wie ein Mensch: liest, klickt, tippt und erledigt Aufträge.
- **Crawler:** Programm, das Websites automatisch abruft, etwa für einen Suchindex oder für KI-Training.
- **JSON-LD:** unsichtbarer Block im Quelltext, in dem eine Seite in Datenform über sich Auskunft gibt: wer, was, wann. Die „strukturierten Daten“ aus diesem Text.
- **Lighthouse:** Googles Prüfwerkzeug für Websites, in den Chrome-Browser eingebaut.
- **llms.txt:** Textdatei an fester Adresse, die KI-Systemen in Kurzform sagen soll, worum es auf einer Website geht.
- **Playwright:** das verbreitetste Werkzeug, mit dem Programme einen Browser fernsteuern. Viele Browser-Agenten bauen darauf auf.
- **Quelltext:** der HTML-Text, den der Server ausliefert, bevor der Browser etwas daraus macht.
- **robots.txt:** Textdatei, in der eine Website festlegt, welche Crawler zugreifen dürfen. Eine Konvention, kein Gesetz.
- **Screenreader:** Software, die eine Seite vorliest, für blinde und sehbehinderte Menschen.
- **Stagehand:** ein neueres Werkzeug derselben Art wie Playwright, speziell für KI-Agenten gebaut.

---

*Diese Datei wird aus der Seite erzeugt: https://robert-haase.de/maschinensicht.html. Weichen beide voneinander ab, gilt die Seite.*
