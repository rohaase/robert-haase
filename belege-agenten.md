# Belege: Agenten

26 von 92 Einträgen der Sammlung „Belege“ von Robert Haase, Stand 12. September 2026.

Seite: https://robert-haase.de/belege.html · Übersicht aller Aussagen: https://robert-haase.de/belege.md · JSON: https://robert-haase.de/belege.json · English: https://robert-haase.de/en/evidence-agents.md

Lizenz: CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). Bitte die Primärquelle zitieren, nicht diese Seite.

Diese Datei wird aus der Seite erzeugt. Weichen beide voneinander ab, gilt die Seite.

## Wie diese Sammlung entsteht

Jede Zahl wird bis zu der Stelle zurückverfolgt, die sie erhoben hat, nicht bis zu dem Artikel, der sie zitiert. Auf dem Weg durch die Weitergaben verlieren Zahlen zuerst ihre Bezugsgröße, dann ihre Einschränkung, zuletzt ihre Herkunft. Ist eine Zahl nur über einen Dritten zugänglich, steht dieser Mittler in der Quellenzeile. Eigene Messungen tragen ihre Methode mit, unabhängig gegengeprüft sind sie bisher nicht.

**Die Grenze gehört zur Zahl.** Der häufigste Fehler ist nicht die falsche Zahl, sondern die richtige mit einer Aussage, die weiter geht als der Beleg. Deshalb hat jeder Eintrag zwei Teile, und der zweite ist der wichtigere. Über jeder Zahl steht, was für ein Beleg sie ist, von der geprüften Erhebung bis zum Einzelfall. Davon hängt ab, wie weit sie trägt.

Was der Prüfung nicht standhält, kommt nicht herein oder wieder heraus, auch aus meinen eigenen Artikeln. In einem davon stand, 44 Prozent der US-Onlinekäufer begännen ihre Kaufreise im Sprachmodell, zugeschrieben an Bain. Bain nennt zwei andere Zahlen, 17 Prozent und 30 bis 45 Prozent, die unterwegs zu einer verschmolzen waren. Beide stehen jetzt hier, die 44 nicht.

Diese Seite altert. Jeder Eintrag trägt sein Datum, überholte Zahlen werden ersetzt und nicht still gelöscht. Wenn du einen Fehler findest: [schreib mir](mailto:hallo@robert-haase.de), ich korrigiere und vermerke das Datum.

Die Sammlung bildet nicht den Forschungsstand ab, sondern die Zahlen, die ich für eigene Texte gebraucht habe. Verwendung frei mit Quellenangabe. Verlinke im Zweifel die Primärquelle, nicht diese Seite.

## Einstufung in diesem Thema

+ Geprüfte Erhebung, Herstellerdokumentation oder Gerichtsentscheidung (18) → leere-buttons, javascript, lighthouse, a11y-tree, astryx-agenten, designsysteme-maschinenschnittstelle, dax-zutritt, dax-benennung, dax-landmarken, dax-bilder, verlage-robots, marken-robots, agenten-erfolg, frontify-mcp, canva-mcp, mcp-tool-poisoning, pulumi-brand-mcp, statista-mcp
+ Vorläufig: Prototyp, Einzeltest, Prognose oder Anbieterangabe (5) → agent-ready, a11y-cua, klarna-700, monotype-mcp, veeva-mlr
+ Sachstand, Fallbericht oder Marktbeobachtung (3) → gitlab-markenrepo, aipref, mcp-primitive

---

## leere-buttons

**Aussage:** Auf 30,6 Prozent von einer Million untersuchten Startseiten fanden sich Buttons ohne zugänglichen Namen, auf 51 Prozent Formularfelder ohne Beschriftung.

**Was die Zahlen nicht sagen:** Sie stammen aus einer Barrierefreiheits-Erhebung, nicht aus einem Agenten-Test; der Bezug ist trotzdem direkt, weil ein Button ohne Namen auch im Accessibility-Baum keine Bezeichnung trägt und Agenten, die über diesen Baum arbeiten, ihn dann nicht benennen können. Gemessen sind Startseiten, nicht ganze Websites, und beide Anteile zählen Seiten mit mindestens einem solchen Fehler, nicht den Anteil aller Buttons oder aller Formularfelder. **Bei den Formularfeldern ist das die entscheidende Unterscheidung:** Dieselbe Erhebung zählt getrennt 33,1 Prozent aller Formularfelder ohne Beschriftung, also ein Drittel. Geprüft wurde der Seitenzustand nach Ausführung von JavaScript, also das, was ein rendernder Agent vorfindet. WebAIM hält fest, dass ein automatisches Werkzeug nicht alle Verstöße findet: Die Werte sind eher zu niedrig als zu hoch, und ein ausbleibender Fund belegt keine Barrierefreiheit.

**Quelle:** WebAIM Million, achte Ausgabe: WAVE-Prüfung von einer Million Startseiten aus dem Tranco-Ranking · Daten von Februar 2026, Seite zuletzt geändert am 30. März 2026 · Vorjahreswerte 29,6 Prozent bei den Buttons und 48,2 Prozent bei den Formularfeldern · [Zur Quelle](https://webaim.org/projects/million/)

**Einstufung:** Geprüfte Erhebung · Gruppe: Geprüfte Erhebung, Herstellerdokumentation oder Gerichtsentscheidung

**Direktlink:** https://robert-haase.de/belege.html#leere-buttons

---

## agent-ready

**Aussage:** In einem kontrollierten Versuch erreichten drei Browser-Agenten auf der agentenfreundlich gebauten Fassung eine strikte Erfolgsquote von 89,3 Prozent gegenüber 49,3 Prozent auf der Ausgangsfassung.

**Was der Versuch nicht sagt:** Variiert wurde maschinelle Klarheit, nicht Barrierefreiheit, und es sind zwei Fassungen eines eigens gebauten Shop-Prototyps, keine echte Website. Die Autoren halten ausdrücklich fest, es handle sich um einen Proof of Concept, dessen Ergebnisse „should not be generalized to all domains, websites, or agent systems“. Genannt ist zudem die strengere von zwei gemessenen Erfolgsquoten. Es ist der beste vorhandene Hinweis, kein Nachweis.

**Quelle:** Elnaffar und Rashidi, Designing Agent-Ready Websites, arXiv 2607.12056, 300 Durchläufe mit drei Modellen · Juli 2026 · [Zur Quelle](https://arxiv.org/abs/2607.12056)

**Einstufung:** Vorläufig, Prototyp · Gruppe: Vorläufig: Prototyp, Einzeltest, Prognose oder Anbieterangabe

**Direktlink:** https://robert-haase.de/belege.html#agent-ready

---

## a11y-cua

**Aussage:** Die vielzitierte Zahl vom Absturz der Agenten-Erfolgsquote von 78 auf 42 Prozent stammt aus einer Studie, die keine einzige Website verändert hat.

**Was wirklich variiert wurde:** die Bedienung des Agenten, nicht die Barrierefreiheit der Seiten. Die Studie hat dem Agenten sinngemäß die Maus weggenommen und ihn auf die Tastatur beschränkt. Als Beleg dafür, dass barrierefreie Websites Agenten helfen, taugt sie deshalb nicht, obwohl sie genau dafür überall zitiert wird. Ein sauberer Vergleich barrierefrei gegen nicht barrierefrei fehlt bis heute. **Auch die Zahlen sind enger, als sie zitiert werden:** Sie gelten für ein einzelnes Modell (Claude Sonnet 4.5, genau 78,33 auf 41,67 Prozent), und die Aufgaben umfassen Desktop-Anwendungen, nicht nur Websites. Ein zweites, offenes Modell fiel von 20 auf 0 Prozent.

**Quelle:** A11y-CUA, arXiv 2602.09310, vorgestellt auf der CHI 2026 · Februar 2026 · [Zur Quelle](https://arxiv.org/abs/2602.09310)

**Einstufung:** Wird meist falsch zitiert · Gruppe: Vorläufig: Prototyp, Einzeltest, Prognose oder Anbieterangabe

**Direktlink:** https://robert-haase.de/belege.html#a11y-cua

---

## javascript

**Aussage:** Sieben verbreitete KI-Assistenten aus den USA führen beim nutzerausgelösten Abruf kein JavaScript aus und werten nur das rohe HTML aus. Fünf andere tun es.

**Was der Test zeigt und was nicht:** Getestet wurde mit einem Köderwert im rohen HTML und dem echten Wert hinter JavaScript. ChatGPT, Claude, Gemini, Perplexity, Meta AI, Copilot und Grok lieferten den Köder, DeepSeek, ERNIE, Qwen, Kimi und Mistral den echten Wert. **Die Trennlinie verläuft nach Anbieter, nicht nach Technik:** Es ist eine Entscheidung, keine Grenze. Und der Befund gilt für den direkten Abruf, nicht für Inhalte, die über den Google-Index in eine Antwort gelangen. Ein früherer Test vom Dezember 2025 hatte Gemini noch als einziges rendernde System gemessen; die Lage ändert sich also.

**Quelle:** Search Engine World, 12 Assistenten im Vergleich · Juni 2026 · früherer Test: searchVIU, Dezember 2025 · [Zur Quelle](https://www.searchengineworld.com/do-ai-assistants-actually-render-your-javascript-when-grounding-we-put-it-to-the-test)

**Einstufung:** Kontrollierter Test · Gruppe: Geprüfte Erhebung, Herstellerdokumentation oder Gerichtsentscheidung

**Direktlink:** https://robert-haase.de/belege.html#javascript

---

## lighthouse

**Aussage:** Lighthouse führt seit Version 13.3.0 vom 7. Mai 2026 eine Kategorie „Agentic Browsing“ in der Standardkonfiguration.

**Was der Score nicht sagt:** Google kennzeichnet die Kategorie ausdrücklich als experimentell und auf vorgeschlagenen Standards beruhend; sie braucht Chrome 150 oder neuer, und die WebMCP-Prüfungen setzen eine Anmeldung zum Origin Trial voraus. Ausgegeben wird eine Bestehensquote, kein Wert von 0 bis 100 wie bei Performance oder SEO. Gemessen wird Agenten-Tauglichkeit, ausdrücklich nicht die Sichtbarkeit in der Google-Suche. Bemerkenswert ist die Richtung: Maschinenlesbarkeit wird von einer Behauptung zu einer gemessenen Eigenschaft.

**Quelle:** Lighthouse-Release 13.3.0 vom 7. Mai 2026, Kategorie in der Standardkonfiguration · [Googles Dokumentation dazu](https://developer.chrome.com/docs/lighthouse/agentic-browsing/scoring) · [Zur Quelle](https://github.com/GoogleChrome/lighthouse/releases/tag/v13.3.0)

**Einstufung:** Herstellerdokumentation · Gruppe: Geprüfte Erhebung, Herstellerdokumentation oder Gerichtsentscheidung

**Direktlink:** https://robert-haase.de/belege.html#lighthouse

---

## a11y-tree

**Aussage:** Google nennt drei Wege, auf denen Agenten eine Seite wahrnehmen: Bildschirmfotos, rohes HTML und den Accessibility-Baum. Moderne Agenten kombinieren sie.

**Was daraus nicht folgt:** dass Agenten ausschließlich über den Accessibility-Baum arbeiten. Genau diese Verkürzung kursiert. Google beschreibt den Baum als hochauflösende Karte, die den visuellen Lärm ignoriert, sagt aber im selben Text, dass Agenten Baum und DOM mit einer visuellen Darstellung abgleichen. Für die Praxis ändert das wenig: Ein Element ohne zugänglichen Namen fehlt in zwei der drei Wege.

**Quelle:** Google, Build agent-friendly websites (web.dev) · Stand 1. April 2026 · [Zur Quelle](https://web.dev/articles/ai-agent-site-ux)

**Einstufung:** Herstellerdokumentation · Gruppe: Geprüfte Erhebung, Herstellerdokumentation oder Gerichtsentscheidung

**Direktlink:** https://robert-haase.de/belege.html#a11y-tree

---

## astryx-agenten

**Aussage:** Meta hat sein acht Jahre intern gewachsenes Designsystem im Juni 2026 als Open Source veröffentlicht und begründet dessen Bauweise ausdrücklich mit Agenten: Designsysteme seien historisch für den menschlichen Gebrauch entworfen worden, und da immer mehr Code von Agenten geschrieben werde, müsse man ihre Struktur neu denken. Bedient wird das System über Kommandozeile oder MCP.

**Was das nicht sagt:** Es sind Herstellerangaben, nicht unabhängig geprüft. Die Reichweite von über 13.000 Anwendungen bezieht sich auf Metas eigenen Bestand, nicht auf den Markt, und das System ist als Beta gekennzeichnet. **Die zweite, gern weitergereichte Zahl gehört eingeordnet:** Der Rückgang der wöchentlichen Einfügerate aus der zugehörigen Figma-Bibliothek um 95 Prozent ist eine interne Beobachtung bei Meta, kein Branchenwert. Und die Bibliothek wurde nicht abgeschafft, sondern im August als Experiment veröffentlicht, gebaut und gepflegt von einem Cronjob mit Anbindung an Figmas MCP.

**Quelle:** Astryx by Meta, „Introducing Astryx“, 18. Juni 2026, und „Who needs a Figma Library?“, 5. August 2026 · Repository unter MIT-Lizenz · [Zur Quelle](https://astryx.atmeta.com/blog/introducing-astryx)

**Einstufung:** Herstellerdokumentation · Gruppe: Geprüfte Erhebung, Herstellerdokumentation oder Gerichtsentscheidung

**Direktlink:** https://robert-haase.de/belege.html#astryx-agenten

---

## designsysteme-maschinenschnittstelle

**Aussage:** Von 20 untersuchten Open-Source-Designsystemen liefern 17 einen herstellereigenen MCP-Server, 17 offizielle Agent Skills und 14 eine llms.txt. Die Erhebung fasst das so zusammen: „Nobody is still arguing about whether to ship a machine interface.“

**Was die Zahl nicht sagt, und das ist beim Nachrechnen der erste Stolperstein:** Die Erhebung führt zwei Reihen. Der Essay zählt ausschließlich herstellereigene, offizielle Angebote und kommt auf 17, 17 und 14; die Systemtabelle auf der Startseite zählt Community-Angebote mit und kommt auf 19, 18 und 14. Beide sind richtig, sie messen Verschiedenes. Wer die engere Zahl zitiert, muss „herstellereigen“ dazusagen. **Der wichtigere Vorbehalt:** Gemessen wurden *Designsysteme*, also Komponenten und Code für Entwickler, nicht Markenrichtlinien. Über Marken außerhalb der Softwarebranche sagt die Erhebung nichts. Sie ist außerdem eine Momentaufnahme von drei Tagen und stammt von einer einzelnen Person, nicht von einem Institut.

**Quelle:** Kaelig Deloumeau-Prigent, 20 Open-Source-Designsysteme, Daten erhoben 26. bis 28. Juli 2026 · Bericht 1. September 2026 · CC BY 4.0 · die engeren Zahlen stehen im Essay-Teil der Seite · [Zur Quelle](https://state-of-ai-in-design-systems.netlify.app/)

**Einstufung:** Geprüfte Erhebung · Gruppe: Geprüfte Erhebung, Herstellerdokumentation oder Gerichtsentscheidung

**Direktlink:** https://robert-haase.de/belege.html#designsysteme-maschinenschnittstelle

---

## gitlab-markenrepo

**Aussage:** GitLab hält Markenstimme, Namensregeln, Markenzeichen-Richtlinien, Werte und Mission als versionierte Markdown-Dateien in einem öffentlichen Repository, jede Änderung mit Datum, Klarnamen und schriftlicher Begründung. Die Neufassung der drei Merkmale der Markenpersönlichkeit ist ein einzelner Commit vom 22. Mai 2025 über vier eingefügte und fünf gelöschte Zeilen, von Senior Brand Managerin Betsy Bula, begründet mit der Angleichung an aktuelle Kommunikation und den FY26-Unternehmensplan.

**Was der Fall nicht zeigt:** ein einziges Unternehmen, und einen Softwarehersteller, dem das öffentliche Repository ohnehin Hausform ist. Belegt ist die Form, keine Wirkung: ob Sprachmodelle GitLab deshalb treffender beschreiben, ist nirgends gemessen. Und keine zweite Prüfinstanz, Merge Request 13766 ist von derselben Person eingereicht und nach knapp 16 Minuten kommentarlos selbst zusammengeführt. **Wo die Offenheit endet:** Die offiziellen Brand Guidelines liegen nicht dort, sondern auf design.gitlab.com, wo dieselben drei Merkmale weiter den Wortlaut von vor dem 22. Mai 2025 tragen, zuletzt inhaltlich geändert am 20. Dezember 2024. Der Widerspruch steht seit über fünfzehn Monaten; ein Versionsverlauf erzeugt Nachvollziehbarkeit, keine Übereinstimmung. Dazu die Gegenbewegung: die Vision am 10. Februar 2025 ins interne Handbuch verschoben, die Strategieseite am 17. Juli 2025 entfernt. Positionierung im Marketing-Sinn liegt dagegen weiter öffentlich dort, je Anwendungsfall als Message House mit eigener Zeile „Positioning Statement“. **Wer datiert, datiert je Datei:** Das Repository entstand am 23. Januar 2023, die Werte kamen am 2. Mai 2023, Markenzeichen-Richtlinien am 16. November 2023, Markenstimme am 21. Dezember 2023, Namensregeln erst am 6. Februar 2025. Nach dem Anlagedatum zu datieren, liegt um bis zu zwei Jahre daneben.

**Quelle:** GitLab Handbook, öffentliches Repository gitlab-com/content-sites/handbook, geprüft am 10. September 2026 · Markenstimme mit den drei Merkmalen in content/handbook/marketing/brand-experience/content-style-guide.md, Namensregeln in naming.md, Markenzeichen-Richtlinien in trademark-guidelines.md, Werte in content/handbook/values/\_index.md, Mission in content/handbook/company/mission.md · Commit e692ba4b vom 22. Mai 2025, 17:11 Uhr UTC, Merge Request 13766 · abweichende Fassung derselben Merkmale im Design-System-Repository gitlab-org/gitlab-services/design.gitlab.com, contents/brand-messaging/brand-voice.md ([Design-System-Repository](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com)) · [Zum Commit](https://gitlab.com/gitlab-com/content-sites/handbook/-/commit/e692ba4bade85fa0f35552cecc7d69abba3779a1)

**Einstufung:** Dokumentierter Einzelfall · Gruppe: Sachstand, Fallbericht oder Marktbeobachtung

**Direktlink:** https://robert-haase.de/belege.html#gitlab-markenrepo

---

## aipref

**Aussage:** Ein einheitlicher Standard dafür, wie Websites die KI-Nutzung ihrer Inhalte erlauben oder untersagen, existiert bis heute nicht.

**Wie weit die Arbeit ist:** Die IETF-Arbeitsgruppe AIPREF entwickelt zwei Bausteine, Vokabular und Anbindungsmechanismus. Beide stehen am 10. September 2026 im IESG-Zustand „I-D Exists“, also noch nicht eingereicht, kein RFC. Vom 4. September bis 3. November 2025 lief die Schlussabstimmung, danach wieder „WG Document“. Der Vokabular-Entwurf trägt seit April 2026 den Hinweis, sein Inhalt spiegele keinen Konsens wider, und markiert zwei Abschnitte als noch ohne Konsens; der Anbindungs-Entwurf nicht. **Der eigene Zeitplan ist zweimal gerissen:** fällig im August 2025, am 23. September 2025 verschoben auf den 31. August 2026, auch dieser Termin ohne Einreichung verstrichen und nicht neu datiert. **Was der Eintrag nicht sagt:** ob ein Standard kommt und wann, und wie gut die Behelfe tragen, robots.txt und anbieterspezifische Kennungen. Gemessen ist der Stand an der IETF, nicht bei anderen Gremien oder Anbietern. Acht weitere Einzelentwürfe zum selben Thema liegen bei der Arbeitsgruppe, keiner angenommen. Der Datatracker listet den 18. August 2026, weil er US-Pazifikzeit zeigt; die Entwürfe tragen den 19. August 2026.

**Quelle:** IETF, Arbeitsgruppe AI Preferences (aipref), Zustand „Active“ · draft-ietf-aipref-vocab-07 und draft-ietf-aipref-attach-05, beide vom 19. August 2026, IESG-Zustand „I-D Exists“, WG-Zustand „WG Document“, vorgesehener Rang Proposed Standard, kein RFC · Meilensteine beider Bausteine am 23. September 2025 von August 2025 auf den 31. August 2026 verschoben und seither unverändert ([Verlauf der Arbeitsgruppe](https://datatracker.ietf.org/group/aipref/history/)) · Volltext des Vokabular-Entwurfs mit dem Konsens-Hinweis ([Entwurfstext](https://www.ietf.org/archive/id/draft-ietf-aipref-vocab-07.txt)) · geprüft am 10. September 2026 · [Zur Arbeitsgruppe](https://datatracker.ietf.org/wg/aipref/about/)

**Einstufung:** Stand der Normung · Gruppe: Sachstand, Fallbericht oder Marktbeobachtung

**Direktlink:** https://robert-haase.de/belege.html#aipref

---

## dax-zutritt

**Aussage:** Von 160 angefragten Startseiten weisen 12 einen automatisierten Abruf mit aktiver Bot-Abwehr zurück, also 7,5 Prozent. Sie stammt bei zehn der zwölf Seiten von Akamai oder Cloudflare, bei Siemens und der Hannover Rück von Amazons CloudFront. Bei 18 von 22 auf HTTP-Ebene geprüften Seiten kam dieselbe Abweisung unabhängig von der Browser-Kennung; die Erkennung greift dort am TLS-Fingerabdruck und an der Reihenfolge der HTTP-Header. Bei den beiden CloudFront-Seiten entscheidet die Kennung allein.

**Was die Zahl nicht sagt:** Sie misst die Abwehr eines Abrufwerkzeugs, nicht die Erreichbarkeit für Agenten. **Ein regulärer, ferngesteuerter Chrome kam bei mehreren dieser Seiten anstandslos durch**. Die Abwehr trennt Werkzeug von Browser, nicht Mensch von Maschine. Ein Agent, der einen echten Browser steuert, dürfte weiter kommen; das wurde nicht getestet, weil es das Umgehen der Erkennung erfordert hätte. **Nicht mitgezählt sind 13 weitere Ausfälle anderer Ursache:** vier veraltete Adressen im Verzeichnis, vier technische Fehler, zwei Länderauswahlen statt Startseiten, zwei leere Antworten, ein schwankendes Ergebnis. Eine frühere Fassung dieser Zahl nannte 30 Prozent und fasste all das zusammen.

**Quelle:** Eigene Messung, 30. August 2026 · Ursache je Seite auf HTTP-Ebene geprüft, mit gewöhnlicher und mit automatisierter Browser-Kennung · bei 18 von 22 Seiten dieselbe Antwort

**Einstufung:** Eigene Erhebung, reproduzierbar · Gruppe: Geprüfte Erhebung, Herstellerdokumentation oder Gerichtsentscheidung

**Direktlink:** https://robert-haase.de/belege.html#dax-zutritt

---

## dax-benennung

**Aussage:** Auf 135 Startseiten deutscher Börsenunternehmen aus DAX, MDAX und SDAX tragen 456 von 13.527 Bedienelementen keinen Namen im Accessibility-Baum, also 3,4 Prozent. Die Quote unterscheidet sich zwischen den drei Indizes kaum: DAX 3,1, MDAX 3,8, SDAX 3,3 Prozent.

**Was die Zahl nicht sagt:** Sie misst, was ein Agent vorfindet, nicht ob er seine Aufgabe löst. Gemessen sind Startseiten im Anlieferungszustand samt Zustimmungsdialog, keine Bestellstrecken und keine angemeldeten Bereiche, wo das Bild anders aussehen dürfte. **Der Vergleich mit WebAIMs 30,6 Prozent leerer Schaltflächen trägt nicht:** Der stammt aus einer Million Startseiten weltweit, hier stehen 135 börsennotierte Unternehmen. **Die Verteilung ist ungleich:** 57 der 135 Seiten haben keine einzige Lücke, 15 liegen über 10 Prozent, die schlechteste bei 30,6. Und die Lücken folgen fast alle einem Muster. Es sind Logos und Symbole, die als Link oder Schaltfläche dienen: Marken- und Partnerlogos, Symbole sozialer Netzwerke, Karussellpfeile, Abspielknöpfe.

**Quelle:** Eigene Messung, 30. August 2026 · 160 Startseiten aus DAX, MDAX und SDAX angefragt, Auswahl und Adresse aus Wikidata · Chromes eigener Accessibility-Baum · zwei Durchläufe, 135 von 136 Seiten mit identischem Ergebnis

**Einstufung:** Eigene Erhebung, reproduzierbar · Gruppe: Geprüfte Erhebung, Herstellerdokumentation oder Gerichtsentscheidung

**Direktlink:** https://robert-haase.de/belege.html#dax-benennung

---

## dax-landmarken

**Aussage:** 52 von 135 Startseiten deutscher Börsenunternehmen haben keine Hauptinhalt-Landmarke. Für ein Programm, das die Seite liest, fehlt damit die Angabe, wo der Inhalt beginnt und die Navigation endet.

**Was die Zahl nicht sagt:** Eine fehlende Landmarke macht eine Seite nicht unbenutzbar, denn Überschriften und Textstruktur bleiben lesbar, und Browser leiten teils eine ersatzweise Struktur ab. Sie ist ein Hinweis auf die Sorgfalt der Auszeichnung, kein Fehler mit unmittelbarer Folge. Gemessen sind Startseiten, keine Unterseiten.

**Quelle:** Eigene Messung, 30. August 2026 · gezählt wurde die Rolle „main“ in Chromes Accessibility-Baum · zwei Durchläufe mit identischem Ergebnis

**Einstufung:** Eigene Erhebung, reproduzierbar · Gruppe: Geprüfte Erhebung, Herstellerdokumentation oder Gerichtsentscheidung

**Direktlink:** https://robert-haase.de/belege.html#dax-landmarken

---

## dax-bilder

**Aussage:** Auf 135 Startseiten deutscher Börsenunternehmen aus DAX, MDAX und SDAX tragen 1.662 von 3.979 Bildern, die Chrome im Accessibility-Baum ausweist, keinen Namen, also 41,8 Prozent. Unter den daraufhin nach Elementart untersuchten namenlosen Bildern sind 86 Prozent inline eingebundene SVG-Grafiken und 13 Prozent klassische img-Elemente.

**Was die Zahl nicht sagt:** Gezählt sind nur Bilder, die Chrome im Accessibility-Baum ausweist, korrekt als dekorativ gekennzeichnete fehlen in Zähler und Nenner zugleich. Auf einer Testseite mit sechs Bildern erschienen nur vier, die Quote lag bei 50 Prozent, obwohl zwei von sechs mangelhaft waren: Wer sauber auszeichnet, verkleinert seinen eigenen Nenner. Über den Anteil aller Bilder einer Seite sagt die Quote nichts. **Die Aufteilung nennt die Elementart, nicht den Zweck:** Ein verlinktes Konzernlogo, das einen Namen bräuchte, und ein Ziersymbol liegen in denselben 86 Prozent, der Anteil der Fälle mit tatsächlicher Folge liegt zwischen den 13 Prozent und einem unbekannten höheren Wert. **Zwei weitere Grenzen:** Bezugsgröße der 86 und 13 Prozent ist die auf 80 Knoten je Seite begrenzte untersuchte Teilmenge, nicht die 1.662; ob sie gegriffen hat, ist ohne aufbewahrte Rohdaten nicht mehr feststellbar, im Schnitt 12,3 namenlose Bilder je Seite sprechen dagegen; und dass die beiden Anteile 99 statt 100 Prozent ergeben, liegt an den genau zwei Elementarten, die das Werkzeug kennt. Und 1.662 zu 3.979 ist eine Summe über alle Seiten ohne Median und ohne Aufteilung nach Index: bei den Bedienelementen liegt er mit 1,0 Prozent weit unter der gepoolten Quote von 3,4 Prozent, dort tragen wenige Ausreißer das Ergebnis; ob das bei den Bildern ebenso ist, ist offen. Ein verlinktes Logo ohne Namen zählt zugleich als namenloses Bedienelement, addieren darf man die beiden Zahlen nicht. Unabhängig gegengeprüft ist diese Messung so wenig wie die drei anderen eigenen.

**Quelle:** Eigene Messung, 30. August 2026 · 160 Startseiten aus DAX, MDAX und SDAX angefragt, 135 auswertbar, Auswahl und Adresse aus Wikidata · Chromes eigener Accessibility-Baum, gezählt sind nicht ignorierte Knoten der Rolle „image“ ohne Namen · Aufschlüsselung nach Elementart je Seite auf 80 Knoten begrenzt · zwei Durchläufe, 135 von 136 Seiten mit identischem Ergebnis

**Einstufung:** Eigene Erhebung, reproduzierbar · Gruppe: Geprüfte Erhebung, Herstellerdokumentation oder Gerichtsentscheidung

**Direktlink:** https://robert-haase.de/belege.html#dax-bilder

---

## verlage-robots

**Aussage:** Von 76 auswertbaren deutschsprachigen Nachrichten- und Fachmedien sperren 44 in ihrer robots.txt mindestens einen Trainings-Crawler, also 57,9 Prozent. GPTBot sperren 38 von ihnen, also genau die Hälfte, CCBot 40 und Bytespider 36. Den Suchbot desselben Anbieters sperren weit weniger: OAI-SearchBot steht bei 8 Medien auf der Liste, das sind 10,5 Prozent. 11 Medien sperren das Training, ohne einen KI-Suchbot oder einen Abruf auf Nutzerfrage zu sperren.

**Was die Zahl nicht sagt:** robots.txt verbietet nichts, sie bittet. Gemessen ist eine Absichtserklärung, kein Zugriffsschutz: Der Standard RFC 9309 stellt die Befolgung ausdrücklich frei, und OpenAI schreibt für den Abruf auf Nutzerfrage selbst, dass die Regeln dort nicht gelten müssen. **Eine Sperre gegen das Training sagt deshalb nichts über die Sichtbarkeit in KI-Antworten**, solange die Suchbots offen bleiben. **Offen heißt hier nicht erlaubt:** Gemessen ist die Abwesenheit einer Sperre, nicht eine ausgesprochene Erlaubnis; genau 2 der 76 Medien schreiben einem KI-Bot eine ausdrückliche Erlaubnis in die Datei. **Drei der gezählten Namen sind gar keine Crawler:** Google-Extended, Applebot-Extended und Webzio-Extended holen keine Seite, sie steuern nur, was mit bereits geholten Daten geschehen darf. Bei Apple und Microsoft lassen sich Suche und KI technisch nicht trennen, beide führen dafür keinen eigenen Namen. **Und der Name muss genau stimmen:** Ein Fachtitel sperrt „ChatGPT“, eine Kennung, die OpenAI nicht führt, deshalb greift die Regel nicht. **Und die Stichprobe ist offengelegt, aber nicht repräsentativ:** 14 der 77 Titel stammen aus einer externen Rangliste, der Rest folgt benannten Regeln. Die Nachrichtenagenturen fehlen, und sie sind der stärkste Einwand: dpa, AFP, epd, APA und Keystone-SDA sperren zusammen keinen einzigen KI-Crawler, weil ihre Inhalte über Verträge geschützt sind und nicht über diese Datei.

**Quelle:** Eigene Erhebung, 12. September 2026 · 77 Titel angefragt, 76 auswertbar · Nachrichtenteil nach dem Diagramm „Weekly reach online“ der Länderseite Deutschland im Reuters Institute Digital News Report 2026, Fachmedien sowie Österreich und die Schweiz nach benannter Regel · Auswertung nach RFC 9309 gegen 51 an der Dokumentation der Betreiber belegte Bot-Namen, gewertet ist der Zugriff auf die Startseite · abgerufen zuerst mit einer eigenen Kennung, bei Abweisung mit gewöhnlicher Browser-Kennung, nötig bei 3 Titeln · zwei Durchläufe mit identischem Urteil

**Einstufung:** Eigene Erhebung, reproduzierbar · Gruppe: Geprüfte Erhebung, Herstellerdokumentation oder Gerichtsentscheidung

**Direktlink:** https://robert-haase.de/belege.html#verlage-robots

---

## marken-robots

**Aussage:** Von 148 auswertbaren Startseiten der Unternehmen aus DAX, MDAX und SDAX sperren 10 mindestens einen Trainings-Crawler, also 6,8 Prozent; GPTBot sperren 4. 138 sperren keinen einzigen KI-Zugriff, darunter 14, die gar keine robots.txt ausliefern. 7 Unternehmen schreiben einem KI-Crawler eine ausdrückliche Erlaubnis in die Datei, 6 davon sperren zugleich keinen: Es gibt fast so viele Einladungen wie Sperren. Die einzige Reservierung von Rechten für Text und Data Mining, die sich im Index finden ließ, steht bei einem Wissenschaftsverlag, und der sperrt keinen einzigen Crawler.

**Was die Zahl nicht sagt:** Sie misst eine Bitte, keinen Zugriffsschutz; wie viele derselben Seiten einen automatisierten Abruf technisch abweisen, steht als eigener Beleg auf dieser Seite. **Von den zehn Sperren sind acht namentlich.** Eine Seite sperrt alles Unbenannte und lässt die großen Anbieter ausdrücklich herein, eine sperrt alle Crawler einschließlich Google, was keine Entscheidung über KI ist, und eine zählt nur mit, weil ein KI-Crawler in einer übernommenen Sammelliste von 139 unerwünschten Bots steht. **Eine fehlende Sperre ist keine Entscheidung für KI:** 14 Seiten haben gar keine Datei und damit nichts entschieden. **12 Seiten waren nicht auswertbar**, sechs weisen den Abruf ab, sechs antworten nicht; in welche Richtung das die Quote verschiebt, bleibt offen, denn nach RFC 9309 gilt eine nicht erreichbare robots.txt als Erlaubnis. Gemessen ist die Startseite: Wer tiefer im Angebot andere Regeln setzt, erscheint hier als offen. **Die Reservierung der Rechte ist nur technisch gesucht**, in der dafür vorgesehenen Datei, im Kopf der Seite und im Seitenquelltext; 134 der 160 Seiten haben darauf eindeutig geantwortet. Ein Vorbehalt in den Nutzungsbedingungen, die in Deutschland übliche Form, ist damit nicht erfasst.

**Quelle:** Eigene Erhebung, 12. September 2026 · dieselbe Liste wie die Erhebung vom 30. August, 160 Startseiten aus DAX, MDAX und SDAX, Index-Mitglieder aus Wikipedia, Adresse aus Wikidata · Auswertung nach RFC 9309 gegen 51 an der Dokumentation der Betreiber belegte Bot-Namen, gewertet ist der Zugriff auf die Startseite · abgerufen zuerst mit einer eigenen Kennung, bei Abweisung mit gewöhnlicher Browser-Kennung, nötig bei 2 Seiten · zwei Durchläufe, 160 von 160 Seiten mit identischem Urteil

**Einstufung:** Eigene Erhebung, reproduzierbar · Gruppe: Geprüfte Erhebung, Herstellerdokumentation oder Gerichtsentscheidung

**Direktlink:** https://robert-haase.de/belege.html#marken-robots

---

## agenten-erfolg

**Aussage:** Auf 300 Aufgaben über 136 echte Websites ist die Erfolgsquote der besten Web-Agenten in zehn Monaten von 61 auf 97,7 Prozent gestiegen. Als der Benchmark im Oktober 2025 zum ersten Mal ausgewertet wurde, meldete ein Agent selbst 89 Prozent und erreichte gemessen 30; die meisten schlugen einen simplen Agenten von Anfang 2024 nicht. Im August 2026 löst der beste Eintrag auch die schwersten Aufgaben, die elf Schritte und mehr brauchen, vollständig.

**Was die Zahl nicht sagt:** Die aktuellen Werte stammen aus *vier* Einträgen einer Bestenliste, eingereicht von den Anbietern der Agenten und vom Benchmark-Team nachgeprüft. Das ist keine unabhängige Reihenuntersuchung. **Und eine Warnung steht auf der Bestenliste selbst:** Die Aufgaben sind seit April 2025 öffentlich, das Team bittet ausdrücklich darum, sie nicht als Trainingsdaten zu verwenden. Ob die Werte Können abbilden oder Gewöhnung an bekannte Aufgaben, ist damit nicht entschieden. Gemessen wird außerdem, ob eine Aufgabe gelöst wurde, nicht wie gut und nicht, ob die Marke dabei korrekt dargestellt war.

**Quelle:** Xue u. a., „An Illusion of Progress? Assessing the Current State of Web Agents“, COLM 2025 (arXiv:2504.01382) für die Ausgangswerte · Online-Mind2Web-Bestenliste, menschliche Bewertung, Stand 4. August 2026, für die aktuellen · 300 Aufgaben, 136 Websites · [zur Bestenliste](https://huggingface.co/spaces/osunlp/Online_Mind2Web_Leaderboard) · [Zur Quelle](https://arxiv.org/abs/2504.01382)

**Einstufung:** Geprüfte Erhebung · Gruppe: Geprüfte Erhebung, Herstellerdokumentation oder Gerichtsentscheidung

**Direktlink:** https://robert-haase.de/belege.html#agenten-erfolg

---

## frontify-mcp

**Aussage:** Frontify öffnet sein Markenportal über einen selbst betriebenen MCP-Server. Am 10. September 2026 führt er, einzeln aufgeführt, 54 Werkzeuge in zehn Paketen, gestuft vom rein lesenden bis zum vollen Verwaltungszugriff. Das lesende Discovery-Paket enthält 24 Werkzeuge, das Admin-Paket alle 54, zwei davon sind als destruktiv gekennzeichnet.

**Was die Zahl nicht sagt:** 54 ist ein Stichtagswert eines Beta-Produkts und bewegt sich. Die Herstellerdokumentation nennt an zwei Stellen 52 und für das lesende Paket 25 statt 24: Wer 52 zitiert, zitiert die Dokumentation, nicht das ausgezählte System. Einen Grund dafür nennt keine der vier Frontify-Quellen. Die Paketzahlen sind überlappende Teilmengen der 54 und dürfen nicht addiert werden. Die Guide-Überschrift kündigt den Server mit zehn Werkzeugen an, gemeint sind zehn Pakete, mehr als das Fünffache daneben. **Was der Eintrag nicht belegt:** Belegt ist, was ein Anbieter über sein eigenes Produkt sagt, nirgends unabhängig geprüft: der Umfang einer Schnittstelle, nicht Verbreitung, Nutzung, Wirkung oder die Qualität der ausgelieferten Markenregeln. Kein Werkzeug entscheidet über eine Aussage, die Pakete lesen, schreiben und verwalten. Ein Zugriffsprotokoll ist nicht belegt: „Audit trail of AI interactions“ ist bei Frontify ein Auswahlkriterium für Käufer, in Repository, Server-Seiten und Help Center kommt das Wort audit nicht vor. Der Server ist nicht standardmäßig aktiv, der Zugang läuft über die Kundenbetreuung, derzeit kostenfrei mit Preisvorbehalt. Wie der angeschlossene KI-Anbieter die Daten verarbeitet, kontrolliert Frontify nach eigener Angabe nicht.

**Quelle:** Frontify, MCP-Server-Übersicht und Paketseiten (/mcp/packs/admin und /mcp/packs/discovery), Werkzeuge einzeln aufgeführt und ausgezählt, 54 beziehungsweise 24 Einträge mit eindeutigen Namen, abgerufen am 10. September 2026 · Repository mit der Tabelle der zehn Pakete, MIT-Lizenz ([Repository](https://github.com/Frontify/mcp-servers)) · Help Center „Frontify MCP (Beta)“, nennt 52 Werkzeuge und für Discovery 25 ([Help Center](https://help.frontify.com/en/articles/14787214-frontify-mcp-beta)) · Guide „Choosing a DAM for the AI era“, veröffentlicht 22. Mai 2026, zuletzt geändert 30. Juli 2026, nennt ebenfalls 52 ([Guide](https://www.frontify.com/en/guide/dam-mcp)) · [Zum Server](https://mcp.frontify-integrations.com/)

**Einstufung:** Herstellerdokumentation · Gruppe: Geprüfte Erhebung, Herstellerdokumentation oder Gerichtsentscheidung

**Direktlink:** https://robert-haase.de/belege.html#frontify-mcp

---

## canva-mcp

**Aussage:** Canva betreibt einen offiziellen MCP-Server und dokumentiert dafür 33 Werkzeuge. 27 stehen in allen Tarifen, darunter Designs erzeugen und exportieren. Vier setzen mindestens Canva Pro voraus, darunter Brand Kits auflisten und Markenvorlagen nutzen. Zwei bleiben Enterprise vorbehalten: eine Vorlage automatisch befüllen und den zugehörigen Datensatz auslesen. Jeder meldet sich einzeln an, ein Agent hat die Rechte des angemeldeten Menschen.

**Wo die Tarifgrenze liegt:** Die Übersichtsseite stellt den markenbezogenen Teil scheinbar auf Enterprise; maßgeblich ist die Werkzeugliste: „Pro and above“ heißt dort Pro, Business und Enterprise. **Was der Eintrag nicht belegt:** Eigenangaben eines Anbieters ohne unabhängige Prüfung. Belegt sind Existenz und Umfang der Schnittstelle, nicht Verbreitung, Nutzung oder Wirkung. Kein Werkzeug prüft eine Aussage gegen Markenregeln; Brand Kits werden gelesen und eingefüllt. Der Export läuft in allen Tarifen, freie aber nur in Standardqualität, und Premium-Elemente können ihn in jedem Tarif mit license_required scheitern lassen. **Haltbarkeit:** Die 33 gilt zum Abrufdatum, die Dokumentation trägt keine Versionsangabe. Der Server verlangt nur ein Canva-Konto in beliebigem Tarif; eine eigene Integration braucht Canvas Freigabe.

**Quelle:** Canva, „MCP tools and rate limits“, Werkzeugkatalog mit Tarifstufen und Legende, 33 Einträge einzeln ausgezählt · Canva, „Canva Model Context Protocol (MCP)“, Serveradresse mcp.canva.com/mcp, Anmeldung und Tarifübersicht ([Serverdokumentation](https://www.canva.dev/docs/mcp/)) · beide abgerufen am 10. September 2026 · [Zum Werkzeugkatalog](https://www.canva.dev/docs/mcp/tools/)

**Einstufung:** Herstellerdokumentation · Gruppe: Geprüfte Erhebung, Herstellerdokumentation oder Gerichtsentscheidung

**Direktlink:** https://robert-haase.de/belege.html#canva-mcp

---

## klarna-700

**Aussage:** Klarnas meistzitierte KI-Zahl ist eine Schätzung, kein Personalstand: Die Pressemitteilung von Februar 2024 nennt „the equivalent work of 700 full-time agents“. Derselbe Wert steht im Börsenprospekt von September 2025 bei über 700 und im Geschäftsbericht von Februar 2026 in der Unternehmensbeschreibung weiter bei über 700, im Lagebericht desselben Berichts bei über 850. Der Personalstand steht daneben: rund 5.527 Vollzeitbeschäftigte Ende 2022, rund 2.831 Ende 2025.

**Was die Zahl wirklich ist:** eine Hochrechnung aus dem durchschnittlichen monatlichen Rückgang an Chat- und Telefongesprächen, im Prospekt und in der Unternehmensbeschreibung des Berichts auf Basis 2024, im Lagebericht auf Basis 2025. Die beiden Werte widersprechen sich deshalb nicht, sie stehen nur unkommentiert nebeneinander: die ältere Zahl im Präsens, die neuere im Rückblick auf das Jahr 2025. **Kein Rückbau von KI:** Klarna nennt es einen „dual-track approach“, hielt die menschliche Option schon 2024 offen und erwartet laut beiden Börsenpapieren weiter sinkende Beschäftigtenzahlen. Wer den Fall als Rückkehr zum Menschen zitiert, zitiert gegen die Quelle.

**Quelle:** Klarna Group plc, eigene Angaben in Pressemitteilung, Börsenprospekt (Formular F-1/A) und Geschäftsbericht (Formular 20-F) bei der SEC · 27. Februar 2024 bis 26. Februar 2026 · [Zur Quelle](https://www.sec.gov/Archives/edgar/data/2003292/000200329226000007/klar-20251231.htm)

**Einstufung:** Wird meist falsch zitiert · Gruppe: Vorläufig: Prototyp, Einzeltest, Prognose oder Anbieterangabe

**Direktlink:** https://robert-haase.de/belege.html#klarna-700

---

## mcp-primitive

**Aussage:** Das Model Context Protocol kennt drei Server-Bausteine mit je einer vorgesehenen Steuerungsinstanz: Werkzeuge (Tools) ruft das Modell auf, Ressourcen (Resources) steuert die Anwendung, Prompt-Vorlagen (Prompts) wählt der Nutzer aus. Verbindlich ist das nicht. Alle drei Kapitel tragen denselben Nachsatz: Das Protokoll schreibe kein bestimmtes Interaktionsmodell vor. Im Tools-Kapitel folgt darauf sofort eine Soll-Regel: Ein Mensch soll jederzeit einen Werkzeugaufruf ablehnen können.

**Der Dreiklang steht in der Übersicht, nicht in den Regeln:** Die Tabelle mit Model, Application, User steht im Erklärtext „Understanding MCP servers“ und in der Spezifikationsübersicht „Server Features“. Beide führen keine Muss- und Soll-Regeln; in den drei Kapiteln, die sie führen, heißen Ressourcen „application-driven“. Kein Server muss alle drei anbieten: „Servers offer any of the following features to clients“. **Und er altert schnell:** Seit dem 5. November 2024 gibt es fünf Revisionen, zwei davon seit November 2025. Methoden werden ersetzt: resources/subscribe steht in 2025-06-18 und 2025-11-25 je zweimal im Ressourcen-Kapitel, in 2026-07-28 kein einziges Mal, dort dreimal subscriptions/listen.

**Quelle:** Model Context Protocol, getragen von Model Context Protocol a Series of LF Projects, LLC, Spezifikation Revision 2026-07-28, Kapitel Tools, Resources und Prompts, jeweils Abschnitt „User Interaction Model“, dazu die Übersichtsseiten /specification/2026-07-28, Abschnitt Features, und /specification/2026-07-28/server, Abschnitt Server Features, sowie der Erklärtext „Understanding MCP servers“ · Revisionsliste und Methodenwechsel als eigene Pfad- und Textprobe · 10. September 2026 · [Zur Quelle](https://modelcontextprotocol.io/specification/2026-07-28/server/tools)

**Einstufung:** Stand der Normung · Gruppe: Sachstand, Fallbericht oder Marktbeobachtung

**Direktlink:** https://robert-haase.de/belege.html#mcp-primitive

---

## mcp-tool-poisoning

**Aussage:** In einer Werkzeugbeschreibung versteckte Anweisungen bringen einen Agenten dazu, den privaten SSH-Schlüssel zu lesen und über einen Parameter namens „sidenote“ an einen fremden Server zu schicken; im Bestätigungsdialog steht nur der Name eines Additionswerkzeugs. Eine Benchmark auf 45 echten MCP-Servern mit 353 Werkzeugen misst über 20 Modelleinstellungen im Mittel 36,5 Prozent Angriffserfolg, höchstens 72,8.

**Was das nicht sagt:** Der Nutzer klickt mit. Verborgen ist nur der Inhalt der Freigabe, Cursor blendet den Schlüssel selbst im Dialog aus. Kein Server war kompromittiert, das vergiftete Werkzeug steht im System-Prompt. **Der Erfolgsbegriff ist eng:** Gezählt wird nur, wenn der Agent ein zweites, legitimes Werkzeug missbraucht; ruft er das vergiftete selbst auf, gilt das als Misserfolg. Gemessen wird die Werkzeugaufruf-Ausgabe des Modells in einer einzelnen Runde, ausgeführt wird nichts. Bezugsgröße sind die gültigen Ausgaben, nicht die 1.348 Testfälle. Der Rest ist keine Abwehrquote, verweigert hat selbst das am häufigsten verweigernde Modell, Claude-3.7-Sonnet, in unter 3 Prozent. Invariant verkauft Sicherheitswerkzeuge und veröffentlichte zehn Tage vor dem eigenen Scanner.

**Quelle:** Invariant Labs (inzwischen Snyk), Luca Beurer-Kellner und Marc Fischer, zwei Versuche mit dem MCP-Client Cursor, 1. April 2025, Nachträge 7. und 11. April 2025 · Zhiqiang Wang und acht weitere (University of Science and Technology of China, Beihang University), „MCPTox“, 45 MCP-Server, 353 Werkzeuge, 1.348 Testfälle, 20 Modelleinstellungen, Zahlen aus Abschnitt 4.2 und Tabelle 2, AAAI-26, Proceedings of the AAAI Conference on Artificial Intelligence 40(42), S. 35811 bis 35819, 14. März 2026, doi:10.1609/aaai.v40i42.40895, Vorabfassung arXiv:2508.14925v1, 19. August 2025 · [Zur begutachteten Fassung](https://doi.org/10.1609/aaai.v40i42.40895) · [Zur Quelle](https://invariantlabs.ai/blog/mcp-security-notification-tool-poisoning-attacks)

**Einstufung:** Begutachtete Benchmark und Test des Anbieters · Gruppe: Geprüfte Erhebung, Herstellerdokumentation oder Gerichtsentscheidung

**Direktlink:** https://robert-haase.de/belege.html#mcp-tool-poisoning

---

## monotype-mcp

**Aussage:** Monotype hat am 15. Juli 2026 eine Beta seines Enterprise MCP Connectors angekündigt. Er verbindet KI-Werkzeuge mit Schriftbibliothek, Lizenzangaben und Produktionsfreigaben eines Kunden: Er gleicht KI-Entwürfe gegen die Bibliothek ab, prüft referenzierte Schriften gegen die Produktionsschriftliste und gibt CSS im Chat zurück, sofern die Projektschriften zur Bibliothek gehören. Er läuft über das Model Context Protocol, zunächst in Claude und Claude Design.

**Was die Angabe nicht sagt:** Sie stammt vom Anbieter, keine auffindbare Meldung prüft selbst nach. Die Prüfung meldet und verweigert nicht: Nicht freigegebene Schriften werden laut Produktseite markiert, und der Labs-Beitrag verneint ausdrücklich, dass der Connector die Marken-, Rechts- oder Produktionsprüfung ersetzt. **Wer freigibt, ist der Kunde:** Vorausgesetzt sind freigegebene Produktionsschriften in seiner Instanz, die der Connector nur umsetzt. Gegenstand ist eine Schrift, keine Aussage. Web und HTML sind die erste Ausbaustufe, der Zugang auf ausgewählte Enterprise-Kunden von Monotype Fonts beschränkt, Zahlen zu Nutzung oder Wirkung fehlen.

**Quelle:** Monotype Labs, „Bringing font governance into AI-native content creation“, Ablauf der Beta in sieben Schritten, 15. Juli 2026 · Pressemitteilung „Monotype Introduces Enterprise Connector Beta, Exploring How Brand Governance Works Inside AI-Native Workflows“, Woburn, Massachusetts, 15. Juli 2026 · Produktseite „Monotype Enterprise Connector“ mit Status „Now in BETA“ und Zugangsvoraussetzungen, abgerufen 10. September 2026 · Negativprobe an der Pressemitteilungsliste, 15. Juli bis 10. September 2026 ohne Statusänderung · [Zur Quelle](https://www.monotype.com/resources/monotype-labs/bringing-font-governance-ai-native-content-creation)

**Einstufung:** Anbieterangaben, Beta · Gruppe: Vorläufig: Prototyp, Einzeltest, Prognose oder Anbieterangabe

**Direktlink:** https://robert-haase.de/belege.html#monotype-mcp

---

## pulumi-brand-mcp

**Aussage:** Pulumi veröffentlicht die eigenen Markenrichtlinien als MCP-Server unter brand.pulumi.com/mcp. Er antwortete am 10. September 2026 ohne Anmeldung und führt 13 Ressourcen, eine Vorlage, 11 Werkzeuge und 3 Prompts; unter den Ressourcen Markenstimme, Schreibregeln und verbindliche Produktnamen. Eine Ressource regelt generative KI im Klartext, gerichtet an den Menschen: „never ship raw model output as a finished piece“, „never publish anything without a human reviewing it first“.

**Was die Zahlen nicht sagen:** Gemessen sind Erreichbarkeit und Umfang, nicht Nutzung, Wirkung oder ob sich jemand an die Regeln hält. Der Inhalt ist die ungeprüfte Selbstdarstellung einer einzelnen Softwarefirma über die eigene Marke. **Was der Server entscheidet:** Drei Prompts sagen eine strukturierte Bewertung von Text, Bild und Design zu, werden laut Hersteller aber vom Menschen ausgelöst und expandieren in eine vorbereitete Modellanfrage. Selbst gerechnet werden zwei Urteile: Farbkontrast gegen veröffentlichte APCA-Schwellen, im Test Lc 86,4 für violet-700 auf Weiß, und die nächstgelegene Markenfarbe samt Ersetzungsempfehlung. Über die Güte einer Aussage befindet ein Mensch, so verlangt es der Regeltext.

**Quelle:** Eigener Abruf des Pulumi Brand MCP Server, Fassung 0.1.0, Protokollfassung der Sitzung 2025-06-18 (vom Client vorgegeben, der Server nennt 2025-11-25), per JSON-RPC über Streamable HTTP · Methoden initialize, resources/list, resources/templates/list, tools/list, prompts/list, resources/read auf brand://guidelines und tools/call auf check_color_accessibility und find_nearest_brand_color · alle Aufrufe HTTP 200 ohne Authentifizierungskopf, keine Liste mit nextCursor, Zählungen dreimal wiederholt und stabil · brand://guidelines im Volltext, 3.053 Zeichen, text/markdown · Herstellerdokumentation brand.pulumi.com/mcp-server für die Einordnung der Prompts · abgerufen am 10. September 2026 · [Zur Quelle](https://brand.pulumi.com/mcp-server/)

**Einstufung:** Eigene Erhebung, reproduzierbar · Gruppe: Geprüfte Erhebung, Herstellerdokumentation oder Gerichtsentscheidung

**Direktlink:** https://robert-haase.de/belege.html#pulumi-brand-mcp

---

## statista-mcp

**Aussage:** Statista betreibt einen MCP-Server unter api.statista.ai/v1/mcp mit sechs dokumentierten Werkzeugen. Jeder Aufruf wird einzeln in Credits abgerechnet, gestaffelt nach Antwortart: Suchen kostet 0 oder 1 Credit, das Abrufen der Zahlen selbst 10 bis 15. Ohne Schlüssel antwortet der Server mit 401 Unauthorized.

**Was die Staffelung nicht sagt:** Was ein Credit in Geld kostet, steht in der gesamten Dokumentation nirgends, die einzige Preisseite nennt Verhältnisse. Belegt ist, was teuer ist, nicht wie teuer. Vier der sechs Werkzeuge betreffen Market und Consumer Insights, also Marktprognosen und Umfragedaten, nicht den Statistik-Katalog; Daten liefern davon nur zwei, die beiden anderen geben Suchtreffer zurück. **Was der Eintrag nicht belegt:** Herstellerangaben über das eigene Produkt. Unabhängig gemessen ist allein, dass der Endpunkt antwortet und ohne Schlüssel abweist, nichts über Verbreitung oder Nutzung. Die Bestandszahlen der Pressemitteilung vom 20. November 2025 sind nicht verwendet: über eine Million Statistiken meint dort den über MCP zugänglichen Teil, 1,5 Millionen den Gesamtbestand, beides Herstellerangaben ohne Zählvorschrift.

**Quelle:** Statista, Entwicklerdokumentation MCP Server und Credit Logic, sechs Werkzeuge und Kreditkosten einzeln ausgezählt · eigene Abfrage des Endpunkts ohne Schlüssel · Pressemitteilung vom 20. November 2025 · abgerufen am 10. September 2026 · [Pressemitteilung](https://www.statista.com/press/p/statista_next_ai_leap/) · [Zur Quelle](https://docs.platform.statista.ai/pricing/credit-logic)

**Einstufung:** Herstellerdokumentation · Gruppe: Geprüfte Erhebung, Herstellerdokumentation oder Gerichtsentscheidung

**Direktlink:** https://robert-haase.de/belege.html#statista-mcp

---

## veeva-mlr

**Aussage:** Im regulierten Pharma-Freigabeverfahren ist die maschinelle Vorprüfung von Markenvorgaben ausgeliefertes Produkt. Veeva meldet am 3. Dezember 2025 einen Quick Check Agent, der Inhalte anhand redaktioneller, Marken-, Markt-, Kanal- und Compliance-Vorgaben prüft, bevor die MLR-Prüfung selbst beginnt. Am 23. Juni 2026 übernimmt Veeva den Anbieter Copli und startet ihn als Falcon MLR, mit dem erklärten Potenzial, binnen fünf Jahren 70 Prozent oder mehr der MLR-Handarbeit zu beseitigen.

**Was der Eintrag nicht belegt:** eine Wirkung. Die 70 Prozent sind Absicht unter Zukunftsvorbehalt. Alle Angaben stammen vom Anbieter, geprüft ist nur, dass er sie macht. Der Agent prüft gegen hinterlegte Vorgaben und entscheidet nichts; die Freigabe ist hier ein regulatorisch erzwungenes Verfahren, die Übertragung auf andere Marken bleibt Analogie. **Die Werbezahl trägt das nicht:** 57 Prozent kürzere Prüfzyklen bewirbt Veeva heute auf der Produktseite, ohne Stichprobe, Ausgangswert und Rechenvorschrift; wortgleich stehen sie schon in einem Datenblatt vom 2. Mai 2017, dieselbe Zahl in einem vom 21. März 2016, also mindestens neun Jahre vor dem ersten Agenten, in Unterlagen, die KI kein einziges Mal erwähnen.

**Quelle:** Veeva Systems, Pressemitteilungen zur Verfügbarkeit der Veeva AI Agents und zur Übernahme von Copli, beide im Volltext geprüft · 3. Dezember 2025 und 23. Juni 2026 · die 57 Prozent bewirbt Veeva heute auf der Produktseite Veeva PromoMats Review and Approve, abgerufen 10. September 2026 · Altersnachweis: Veeva-Datenblatt „Ensuring End-to-End Commercial Content Compliance“ (PromoMats for EU), PDF-Erstellungsdatum 2. Mai 2017, veeva.com/eu/wp-content/uploads/2017/05/PromoMats-for-EU-Datasheet.pdf, dieselbe Zahl in der Fassung mit PDF-Erstellungsdatum 21. März 2016, veeva.com/eu/wp-content/uploads/2012/07/PromoMats-for-EU-Datasheet-1.pdf · [Produktseite](https://www.veeva.com/products/veeva-promomats/mlr-review/) · [Zur Quelle](https://www.veeva.com/resources/veeva-ai-agents-now-available-to-increase-productivity-and-customer-centricity/)

**Einstufung:** Pressemitteilungen des Anbieters · Gruppe: Vorläufig: Prototyp, Einzeltest, Prognose oder Anbieterangabe

**Direktlink:** https://robert-haase.de/belege.html#veeva-mlr

---

Ende der Datei: 26 von 26 Einträgen zum Thema Agenten. Letzter Eintrag: veeva-mlr.
