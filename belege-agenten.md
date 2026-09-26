# Belege: Agenten

20 von 114 Einträgen der Sammlung „Belege“ von Robert Haase, Stand 26. September 2026.

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

+ Geprüfte Erhebung, Herstellerdokumentation oder Gerichtsentscheidung (14) → leere-buttons, javascript, lighthouse, a11y-tree, dax-zutritt, dax-benennung, dax-landmarken, dax-bilder, verlage-robots, marken-robots, agenten-erfolg, rechtsvorbehalt-kommentar, lighthouse-agent-discovery, content-signal-selten
+ Vorläufig: Prototyp, Einzeltest, Prognose oder Anbieterangabe (5) → agent-ready, a11y-cua, klarna-700, abruf-kuerzung, robots-sperre-chatbots
+ Sachstand, Fallbericht oder Marktbeobachtung (1) → aipref

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

## aipref

**Aussage:** Ein einheitlicher Standard dafür, wie Websites die KI-Nutzung ihrer Inhalte erlauben oder untersagen, existiert bis heute nicht.

**Wie weit die Arbeit ist:** Die IETF-Arbeitsgruppe AIPREF entwickelt zwei Bausteine, Vokabular und Anbindungsmechanismus. Beide stehen am 21. September 2026 im IESG-Zustand „I-D Exists“, also noch nicht eingereicht, kein RFC. Vom 4. September bis 3. November 2025 lief die Schlussabstimmung, danach wieder „WG Document“. Der Vokabular-Entwurf trägt seit April 2026 den Hinweis, sein Inhalt spiegele keinen Konsens wider, und markiert zwei Abschnitte als noch ohne Konsens; der Anbindungs-Entwurf nicht. **Der eigene Zeitplan ist zweimal gerissen:** fällig im August 2025, am 23. September 2025 verschoben auf den 31. August 2026, auch dieser Termin ohne Einreichung verstrichen und nicht neu datiert. **Was der Eintrag nicht sagt:** ob ein Standard kommt und wann, und wie gut die Behelfe tragen, robots.txt und anbieterspezifische Kennungen. Gemessen ist der Stand an der IETF, nicht bei anderen Gremien oder Anbietern. Acht weitere Einzelentwürfe zum selben Thema liegen bei der Arbeitsgruppe, keiner angenommen. Der Datatracker listet beide Entwürfe einen Tag früher, den 13. September und den 18. August 2026, weil er US-Pazifikzeit zeigt; die Entwürfe selbst tragen den 14. September und den 19. August 2026.

**Quelle:** IETF, Arbeitsgruppe AI Preferences (aipref), Zustand „Active“ · draft-ietf-aipref-vocab-08 vom 14. September 2026 und draft-ietf-aipref-attach-05 vom 19. August 2026, IESG-Zustand „I-D Exists“, WG-Zustand „WG Document“, vorgesehener Rang Proposed Standard, kein RFC · Meilensteine beider Bausteine am 23. September 2025 von August 2025 auf den 31. August 2026 verschoben und seither unverändert ([Verlauf der Arbeitsgruppe](https://datatracker.ietf.org/group/aipref/history/)) · Volltext des Vokabular-Entwurfs mit dem Konsens-Hinweis ([Entwurfstext](https://www.ietf.org/archive/id/draft-ietf-aipref-vocab-08.txt)) · geprüft am 21. September 2026 · [Zur Arbeitsgruppe](https://datatracker.ietf.org/wg/aipref/about/)

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

**Was die Zahl nicht sagt:** Gezählt sind nur Bilder, die Chrome im Accessibility-Baum ausweist, korrekt als dekorativ gekennzeichnete fehlen in Zähler und Nenner zugleich. Auf einer Testseite mit sechs Bildern erschienen nur vier, die Quote lag bei 50 Prozent, obwohl zwei von sechs mangelhaft waren: Wer sauber auszeichnet, verkleinert seinen eigenen Nenner. Über den Anteil aller Bilder einer Seite sagt die Quote nichts. **Die Aufteilung nennt die Elementart, nicht den Zweck:** Ein verlinktes Konzernlogo, das einen Namen bräuchte, und ein Ziersymbol liegen in denselben 86 Prozent, der Anteil der Fälle mit tatsächlicher Folge liegt zwischen den 13 Prozent und einem unbekannten höheren Wert. **Zwei weitere Grenzen:** Bezugsgröße der 86 und 13 Prozent ist die auf 80 Knoten je Seite begrenzte untersuchte Teilmenge, nicht die 1.662; ob sie gegriffen hat, ist ohne aufbewahrte Rohdaten nicht mehr feststellbar, im Schnitt 12,3 namenlose Bilder je Seite sprechen dagegen; und dass die beiden Anteile 99 statt 100 Prozent ergeben, liegt an den genau zwei Elementarten, die das Werkzeug kennt. Und 1.662 zu 3.979 ist eine Summe über alle Seiten ohne Median und ohne Aufteilung nach Index: bei den Bedienelementen liegt er mit 1,0 Prozent weit unter der gepoolten Quote von 3,4 Prozent, dort tragen wenige Ausreißer das Ergebnis; ob das bei den Bildern ebenso ist, ist offen. Ein verlinktes Logo ohne Namen zählt zugleich als namenloses Bedienelement, addieren darf man die beiden Zahlen nicht. Unabhängig gegengeprüft ist diese Messung so wenig wie die drei anderen eigenen DAX-Messungen.

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

**Aussage:** Auf 300 Aufgaben über 136 echte Websites ist die Erfolgsquote der besten Web-Agenten in gut 16 Monaten von 61 auf 97,7 Prozent gestiegen. Als der Benchmark im März 2025 zum ersten Mal ausgewertet wurde, meldete ein Agent selbst 89 Prozent und erreichte gemessen 30; die meisten schlugen einen simplen Agenten von Anfang 2024 nicht. Im August 2026 löst der beste Eintrag auch die schwersten Aufgaben, die elf Schritte und mehr brauchen, vollständig.

**Was die Zahl nicht sagt:** Die aktuellen Werte stammen aus *vier* Einträgen einer Bestenliste, eingereicht von den Anbietern der Agenten und vom Benchmark-Team nachgeprüft. Das ist keine unabhängige Reihenuntersuchung. **Und eine Warnung steht auf der Bestenliste selbst:** Die Aufgaben sind seit April 2025 öffentlich, das Team bittet ausdrücklich darum, sie nicht als Trainingsdaten zu verwenden. Ob die Werte Können abbilden oder Gewöhnung an bekannte Aufgaben, ist damit nicht entschieden. Gemessen wird außerdem, ob eine Aufgabe gelöst wurde, nicht wie gut und nicht, ob die Marke dabei korrekt dargestellt war.

**Quelle:** Xue u. a., „An Illusion of Progress? Assessing the Current State of Web Agents“, COLM 2025 (arXiv:2504.01382) für die Ausgangswerte · Online-Mind2Web-Bestenliste, menschliche Bewertung, Stand 4. August 2026, für die aktuellen · 300 Aufgaben, 136 Websites · [zur Bestenliste](https://huggingface.co/spaces/osunlp/Online_Mind2Web_Leaderboard) · [Zur Quelle](https://arxiv.org/abs/2504.01382)

**Einstufung:** Geprüfte Erhebung · Gruppe: Geprüfte Erhebung, Herstellerdokumentation oder Gerichtsentscheidung

**Direktlink:** https://robert-haase.de/belege.html#agenten-erfolg

---

## klarna-700

**Aussage:** Klarnas meistzitierte KI-Zahl ist eine Schätzung, kein Personalstand: Die Pressemitteilung von Februar 2024 nennt „the equivalent work of 700 full-time agents“. Derselbe Wert steht im Börsenprospekt von September 2025 bei über 700 und im Geschäftsbericht von Februar 2026 in der Unternehmensbeschreibung weiter bei über 700, im Lagebericht desselben Berichts bei über 850. Der Personalstand steht daneben: rund 5.527 Vollzeitbeschäftigte Ende 2022, rund 2.831 Ende 2025.

**Was die Zahl wirklich ist:** eine Hochrechnung aus dem durchschnittlichen monatlichen Rückgang an Chat- und Telefongesprächen, im Prospekt und in der Unternehmensbeschreibung des Berichts auf Basis 2024, im Lagebericht auf Basis 2025. Die beiden Werte widersprechen sich deshalb nicht, sie stehen nur unkommentiert nebeneinander: die ältere Zahl im Präsens, die neuere im Rückblick auf das Jahr 2025. **Kein Rückbau von KI:** Klarna nennt es einen „dual-track approach“, hielt die menschliche Option schon 2024 offen und erwartet laut beiden Börsenpapieren weiter sinkende Beschäftigtenzahlen. Wer den Fall als Rückkehr zum Menschen zitiert, zitiert gegen die Quelle.

**Quelle:** Klarna Group plc, eigene Angaben in Pressemitteilung, Börsenprospekt (Formular F-1/A) und Geschäftsbericht (Formular 20-F) bei der SEC · 27. Februar 2024 bis 26. Februar 2026 · [Zur Quelle](https://www.sec.gov/Archives/edgar/data/2003292/000200329226000007/klar-20251231.htm)

**Einstufung:** Wird meist falsch zitiert · Gruppe: Vorläufig: Prototyp, Einzeltest, Prognose oder Anbieterangabe

**Direktlink:** https://robert-haase.de/belege.html#klarna-700

---

## rechtsvorbehalt-kommentar

**Aussage:** Von 77 deutschsprachigen Nachrichten- und Fachmedien erklären 20 in ihrer robots.txt einen Rechtsvorbehalt gegen Text und Data Mining, und zwar als Kommentarzeile: 16 nennen ausdrücklich § 44b UrhG, vier weitere berufen sich auf österreichisches oder europäisches Recht oder nennen den Vorbehalt ohne Paragraphen. Unter den Startseiten der Unternehmen aus DAX, MDAX und SDAX tut das keine einzige. Eine maschinell auswertbare Form, die *TDM-policy*-Zeile in derselben Datei, steht in keiner der geprüften Dateien.

**Was die Zahl nicht sagt:** Ein Kommentar ist kein Befehl. Crawler werten Kommentarzeilen nicht aus; die Zeile erklärt einen Vorbehalt, sie erzwingt ihn nicht. Ob diese Form den maschinenlesbaren Vorbehalt nach § 44b Abs. 3 UrhG erfüllt, ist eine Rechtsfrage, und die Messung beantwortet sie nicht. **Zwei weitere Medien** untersagen im Kommentar das automatisierte Auslesen, ohne sich auf einen Rechtsvorbehalt zu berufen; sie sind nicht mitgezählt. Zwei der 16 reservieren ausdrücklich nur fremdes Material, Inhalte von dpa und Picture-Alliance, nicht die eigenen. Gemessen ist allein die robots.txt der Startseite: Vorbehalte in den Nutzungsbedingungen, im Impressum, in den Metadaten der Seite oder in der Datei /.well-known/tdmrep.json sind hier nicht erfasst; die einzige Reservierung, die sich im Index überhaupt fand, steht genau dort und ist in einem eigenen Eintrag beschrieben. Von den 160 Index-Startseiten haben 14 nicht geantwortet, im zweiten Durchgang 15; sie könnten einen Vorbehalt tragen.

**Quelle:** Eigene Erhebung, 17. September 2026 · dieselben Listen wie die beiden robots.txt-Einträge vom 12. September, deren Zusammensetzung und Grenzen dort stehen: 77 Medientitel, alle auswertbar, und 160 Startseiten aus DAX, MDAX und SDAX, davon 146 im ersten und 145 im zweiten Durchgang auswertbar · gesucht wurde in der ausgelieferten robots.txt nach Kommentaren mit § 44b, nach dem Wortlaut Text und Data Mining und nach einer TDM-policy-Zeile · Abruf zuerst mit eigener Kennung, bei Abweisung mit gewöhnlicher Browser-Kennung · zwei Durchläufe, bei den Medien 77 von 77 mit identischem Urteil, im Index wich eine Seite ab, die im zweiten Durchgang nicht antwortete

**Einstufung:** Eigene Erhebung, reproduzierbar · Gruppe: Geprüfte Erhebung, Herstellerdokumentation oder Gerichtsentscheidung

**Direktlink:** https://robert-haase.de/belege.html#rechtsvorbehalt-kommentar

---

## abruf-kuerzung

**Aussage:** Das Standard-Abrufwerkzeug eines Agenten las von einer Seite mit 128.000 Zeichen sichtbarem Text nur den vorderen Teil. Eine Handprobe am selben Morgen fand den Abbruch bei Eintrag 65 von 90; das Werkzeug selbst gab „etwa 80“ Einträge an und die Abbruchstelle mit 100.000 bis 115.000 Zeichen. In einem Abnahmetest mit zehn festen Fragen, jede zweimal gestellt, wies es nur bei drei Fragen auf die Kürzung hin, obwohl ein sichtbarer Satz auf der Seite genau dafür das Erkennungsmerkmal nannte. Mit einer Ankerkarte führten Fragen nach einem bestimmten Eintrag in 6 von 6 Fällen zur richtigen Datei, Zählfragen in 4 von 4. Bei begrifflichen Fragen antwortete es aus dem gekürzten Text weiter, ohne den Abbruch zu erwähnen.

**Ein Werkzeug, eine Seite:** Geprüft ist das Abrufwerkzeug eines Claude-Agenten auf einer einzigen Seite, nicht der Markt. ChatGPT, Gemini und Perplexity sind nicht getestet, und ein Browser-Agent, der die Seite darstellt, liest anders. **Die beiden Proben widersprechen sich:** Eintrag 65 entspricht rund 92.000 Zeichen, die Selbstauskunft nennt 100.000 bis 115.000. Die Handprobe ist die härtere Zahl, die Selbstauskunft die günstigere. **Die 6 von 6 sind eine Abnahme, kein Feldbefund:** Ankerkarte und feste Zählung sind am selben Vormittag als Antwort auf den ersten Abruf entstanden, der Lauf um 11:05 war ihre Abnahme; die eigene Reparatur hat ihr eigenes Kriterium erfüllt. Gemessen ist dabei, dass das Werkzeug die richtige Datei nennt, nicht dass seine Antwort stimmt: In einem Lauf nahm es einen Anker aus der Karte und erfand dessen Inhalt. **Der Gegenstand verändert sich:** Die Seite ist seitdem gewachsen, die Kürzung greift mit jedem neuen Eintrag früher. Den Satz, auf den sich die drei von zehn beziehen, gibt es nicht mehr; er ist nach dem Test entfernt worden, weil er seine Aufgabe nicht erfüllte. **In eigener Sache:** Die geprüfte Seite ist die eigene, Bau und Test liefen in derselben Werkstatt; ausgewertet hat ein zweiter Agent, der den Bau nicht kannte. Der Test misst das Verhalten des Werkzeugs, nicht die Güte der Seite, und sagt nichts darüber, ob gekürzte Antworten seltener zitiert werden.

**Quelle:** Eigene Messung, 11. September 2026, 08:10 und 11:05 · Abrufwerkzeug eines Claude-Agenten auf robert-haase.de/belege.html, 128.000 Zeichen sichtbarer Text ohne Skripte · zehn vorher festgelegte Fragen, jede zweimal gestellt, Abbruchregeln vor dem Lauf bestimmt · Auswertung durch einen zweiten Agenten ohne Kenntnis des Baus

**Einstufung:** Eigener Test, ein Werkzeug · Gruppe: Vorläufig: Prototyp, Einzeltest, Prognose oder Anbieterangabe

**Direktlink:** https://robert-haase.de/belege.html#abruf-kuerzung

---

## lighthouse-agent-discovery

**Aussage:** Seit Version 13.5.0 vom 18. September 2026 prüft Googles Werkzeug Lighthouse auch, ob der Agenten-Katalog einer Website der Spezifikation „Agentic Resource Discovery“ entspricht, und führt diese Prüfung zusammen mit der Prüfung der llms.txt in einer eigenen Gruppe „Agent Discoverability“. Laut Release kommt das mit Chrome 156 in die DevTools und binnen zwei Wochen in PageSpeed Insights.

**Was der Eintrag nicht belegt:** dass Agenten diese Dateien lesen. Ein Prüfwerkzeug misst, ob etwas vorhanden und gültig ist, nicht, ob es genutzt wird. Die Prüfung der llms.txt gibt es schon seit Version 13.3.0; für die Google-Suche erklärt Google dieselbe Datei für unnötig, wie ein eigener Eintrag zum Leitfaden der Google-Suche belegt. **Die Spezifikation ist ein Vorschlag:** ARD steht in Version 0.91 vom 26. August 2026 im Status „Proposal“, unter den Autoren sind Leute von Google und Hugging Face; ein Gremienstandard ist es nicht. **Und Werkzeug und Spezifikation laufen auseinander:** Die Spezifikation verlangt den Pfad /.well-known/ard.json, Lighthouse sucht noch den Vorgängernamen /.well-known/ai-catalog.json.

**Quelle:** Google, Lighthouse-Release 13.5.0 vom 18. September 2026 mit der Prüfung „Agent Resource Discovery“ und der Gruppe „Agent Discoverability“, Suchpfad /.well-known/ai-catalog.json laut Quelltext der Prüfung · Agentic Resource Discovery, Spezifikation v0.91 vom 26. August 2026, Status „Proposal“ ([zur Spezifikation](https://github.com/ards-project/ard-spec/blob/main/spec/ard.md)) · abgerufen am 21. September 2026 · [Zur Quelle](https://github.com/GoogleChrome/lighthouse/releases/tag/v13.5.0)

**Einstufung:** Herstellerdokumentation · Gruppe: Geprüfte Erhebung, Herstellerdokumentation oder Gerichtsentscheidung

**Direktlink:** https://robert-haase.de/belege.html#lighthouse-agent-discovery

---

## content-signal-selten

**Aussage:** Cloudflares maschinenlesbare Erklärung „Content-Signal“, mit der eine robots.txt Suche, KI-Eingabe und KI-Training erlaubt oder untersagt, steht bei keinem der 77 deutschsprachigen Nachrichten- und Fachmedien. Unter den 139 robots.txt, die Startseiten der Unternehmen aus DAX, MDAX und SDAX ausliefern, führt sie genau eine, die von Heidelberg Materials, und die erlaubt alle drei Nutzungen.

**Was die Zahl nicht sagt:** Gezählt ist das Vorkommen der Zeile in den am 17. September 2026 abgerufenen Dateien, nicht ihre Wirkung. Die Signale sind erklärte Präferenzen ohne technische Sperre; Cloudflare erklärt Einschränkungen darin zu einem Rechtsvorbehalt nach Artikel 4 der Richtlinie (EU) 2019/790, ob er als solcher trägt, ist offen. **Die Stichprobe spricht nur für diese Listen:** Cloudflare nennt über 3,8 Millionen Domains, deren robots.txt der Dienst verwaltet und um die Erklärung ergänzen wollte. Von den 160 Index-Startseiten lieferten 139 eine robots.txt, 7 hatten keine, 14 antworteten nicht; diese 14 könnten die Zeile tragen.

**Quelle:** Eigene Erhebung, 17. September 2026 · dieselben Dateien wie beim Eintrag zum Rechtsvorbehalt in der robots.txt: 77 Medientitel, alle mit robots.txt, und 160 Startseiten aus DAX, MDAX und SDAX, davon 139 mit robots.txt · gesucht wurde nach einer Zeile Content-Signal, gleich in welcher Schreibweise · zur Erklärung selbst: Cloudflare, „Giving users choice with Cloudflare’s new Content Signals Policy“, 24. September 2025 ([zur Erklärung](https://blog.cloudflare.com/content-signals-policy/))

**Einstufung:** Eigene Erhebung, reproduzierbar · Gruppe: Geprüfte Erhebung, Herstellerdokumentation oder Gerichtsentscheidung

**Direktlink:** https://robert-haase.de/belege.html#content-signal-selten

---

## robots-sperre-chatbots

**Aussage:** Eine Sperre in der robots.txt hält Chatbots kaum davon ab, Inhalte auszugeben, die schon gesammelt sind. Forscher stellten 20 eigene Websites ins Netz, gaben jedem Scraper eigene Kennmarken mit und befragten 22 Chatbots. Von 18 auswertbaren gaben 12 die Inhalte weiter wieder, sowohl bei Seiten, die offline genommen waren, als auch bei Seiten, deren robots.txt alle Bots sperrte; nur Duck.ai hörte in beiden Fällen auf. 10 der 18 gaben Kennmarken wieder, die nur die Suchmaschinen-Crawler von Google, Bing oder Brave bekommen hatten.

**Was der Versuch nicht belegt:** ob eine Sperre neues Sammeln verhindert. Gesperrt wurde erst nach zwei Monaten Crawling; gemessen ist, ob schon Gesammeltes weiter ausgegeben wird, nicht, woher der Chatbot es holt. Es ist ein Preprint ohne Begutachtung mit 20 Websites, und vier der 22 Chatbots lieferten zu wenige Kennmarken für eine Auswertung. **Was daraus für die robots.txt folgt:** Sie bittet, sie verbietet nicht. Die eigenen Erhebungen zu Medien und DAX-Unternehmen zählen, wer diese Bitte ausspricht; dieser Versuch zeigt, wie wenig sie bei bereits gesammelten Inhalten bewirkt. Und wer einem Suchmaschinen-Crawler Zugang gibt, gibt ihn womöglich einem Chatbot mit.

**Quelle:** Seiden, Ren, Zhang, Kim, Liu und Wenger (Duke University, University of Pittsburgh, Carnegie Mellon University), „Identifying AI Web Scrapers Using Canary Tokens“, arXiv 2605.13706, Fassung 2 vom 3. September 2026, erste Fassung vom 13. Mai 2026, Preprint ohne Begutachtung · 20 Websites, zwei Monate Crawling vor der Sperre, 22 Chatbots, davon 18 auswertbar · Volltext gelesen am 23. September 2026 · [Zur Quelle](https://arxiv.org/abs/2605.13706)

**Einstufung:** Kontrollierter Versuch, Preprint ohne Begutachtung · Gruppe: Vorläufig: Prototyp, Einzeltest, Prognose oder Anbieterangabe

**Direktlink:** https://robert-haase.de/belege.html#robots-sperre-chatbots

---

Ende der Datei: 20 von 20 Einträgen zum Thema Agenten. Letzter Eintrag: robots-sperre-chatbots.
