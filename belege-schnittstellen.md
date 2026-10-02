# Belege: Schnittstellen

21 von 127 Einträgen der Sammlung „Belege“ von Robert Haase, Stand 2. Oktober 2026.

Seite: https://robert-haase.de/belege.html · Übersicht aller Aussagen: https://robert-haase.de/belege.md · JSON: https://robert-haase.de/belege.json · English: https://robert-haase.de/en/evidence-interfaces.md

Lizenz: CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). Bitte die Primärquelle zitieren, nicht diese Seite.

Diese Datei wird aus der Seite erzeugt. Weichen beide voneinander ab, gilt die Seite.

## Wie diese Sammlung entsteht

Jede Zahl wird bis zu der Stelle zurückverfolgt, die sie erhoben hat, nicht bis zu dem Artikel, der sie zitiert. Auf dem Weg durch die Weitergaben verlieren Zahlen zuerst ihre Bezugsgröße, dann ihre Einschränkung, zuletzt ihre Herkunft. Ist eine Zahl nur über einen Dritten zugänglich, steht dieser Mittler in der Quellenzeile. Eigene Messungen tragen ihre Methode mit, unabhängig gegengeprüft sind sie bisher nicht.

**Die Grenze gehört zur Zahl.** Der häufigste Fehler ist nicht die falsche Zahl, sondern die richtige mit einer Aussage, die weiter geht als der Beleg. Deshalb hat jeder Eintrag zwei Teile, und der zweite ist der wichtigere. Über jeder Zahl steht, was für ein Beleg sie ist, von der geprüften Erhebung bis zum Einzelfall. Davon hängt ab, wie weit sie trägt.

Was der Prüfung nicht standhält, kommt nicht herein oder wieder heraus, auch aus meinen eigenen Artikeln. In einem davon stand, 44 Prozent der US-Onlinekäufer begännen ihre Kaufreise im Sprachmodell, zugeschrieben an Bain. Bain nennt zwei andere Zahlen, 17 Prozent und 30 bis 45 Prozent, die unterwegs zu einer verschmolzen waren. Beide stehen jetzt hier, die 44 nicht.

Diese Seite altert. Jeder Eintrag trägt sein Datum, überholte Zahlen werden ersetzt und nicht still gelöscht. Wenn du einen Fehler findest: [schreib mir](mailto:hallo@robert-haase.de), ich korrigiere und vermerke das Datum.

Die Sammlung bildet nicht den Forschungsstand ab, sondern die Zahlen, die ich für eigene Texte gebraucht habe. Verwendung frei mit Quellenangabe. Verlinke im Zweifel die Primärquelle, nicht diese Seite.

## Einstufung in diesem Thema

+ Geprüfte Erhebung, Herstellerdokumentation oder Gerichtsentscheidung (14) → astryx-agenten, designsysteme-maschinenschnittstelle, frontify-mcp, canva-mcp, mcp-tool-poisoning, pulumi-brand-mcp, statista-mcp, google-ads-textregeln, microsoft-brand-kit, muse-connectors, adobe-markenpruefung, markup-ai-stilpruefung, markenstimme-als-skill, chatgpt-plugin-pruefung
+ Vorläufig: Prototyp, Einzeltest, Prognose oder Anbieterangabe (3) → monotype-mcp, veeva-mlr, olivares-access-map
+ Sachstand, Fallbericht oder Marktbeobachtung (4) → gitlab-markenrepo, mcp-primitive, agentenstandards-verbreitung, staat-als-einzige-quelle

---

## astryx-agenten

**Aussage:** Meta hat sein acht Jahre intern gewachsenes Designsystem im Juni 2026 als Open Source veröffentlicht und begründet dessen Bauweise ausdrücklich mit Agenten: Designsysteme seien historisch für den menschlichen Gebrauch entworfen worden, und da immer mehr Code von Agenten geschrieben werde, müsse man ihre Struktur neu denken.

**Was das nicht sagt:** Es sind Herstellerangaben, nicht unabhängig geprüft. Die Reichweite von über 13.000 Anwendungen bezieht sich auf Metas eigenen Bestand, nicht auf den Markt, und das System ist als Beta gekennzeichnet. **Die zweite, gern weitergereichte Zahl gehört eingeordnet:** Der Rückgang der wöchentlichen Einfügerate aus der zugehörigen Figma-Bibliothek um 95 Prozent ist eine interne Beobachtung bei Meta, kein Branchenwert. Und die Bibliothek wurde nicht abgeschafft, sondern im August als Experiment veröffentlicht, gebaut und gepflegt von einem Cronjob mit Anbindung an Figmas MCP. **Im Einzelnen:** Bedient wird das System über Kommandozeile oder MCP.

**Quelle:** Astryx by Meta, „Introducing Astryx“, 18. Juni 2026, und „Who needs a Figma Library?“, 5. August 2026 · Repository unter MIT-Lizenz · [Zur Quelle](https://astryx.atmeta.com/blog/introducing-astryx)

**Einstufung:** Herstellerdokumentation · Gruppe: Geprüfte Erhebung, Herstellerdokumentation oder Gerichtsentscheidung

**Direktlink:** https://robert-haase.de/belege.html#astryx-agenten

---

## designsysteme-maschinenschnittstelle

**Aussage:** Von 21 untersuchten Open-Source-Designsystemen liefern 18 einen herstellereigenen MCP-Server, 18 offizielle Agent Skills und 15 eine llms.txt. Die Erhebung fasst das so zusammen: „Nobody is still arguing about whether to ship a machine interface.“

**Was die Zahl nicht sagt, und das ist beim Nachrechnen der erste Stolperstein:** Die Erhebung führt zwei Reihen. Der Essay zählt ausschließlich herstellereigene, offizielle Angebote und kommt auf 18, 18 und 15; die Systemtabelle auf der Startseite zählt Community-Angebote mit und kommt auf 20, 19 und 15. Beide sind richtig, sie messen Verschiedenes. Wer die engere Zahl zitiert, muss „herstellereigen“ dazusagen. Die Zahl bewegt sich: Am 10. September 2026 führte die Seite noch 20 Systeme mit 17, 17 und 14, am 17. September 21. **Der wichtigere Vorbehalt:** Gemessen wurden *Designsysteme*, also Komponenten und Code für Entwickler, nicht Markenrichtlinien. Über Marken außerhalb der Softwarebranche sagt die Erhebung nichts. Sie ist außerdem eine Momentaufnahme von drei Tagen und stammt von einer einzelnen Person, nicht von einem Institut.

**Quelle:** Kaelig Deloumeau-Prigent, 21 Open-Source-Designsysteme, Daten laut Seite erhoben 26. bis 28. Juli 2026, Liste seither erweitert · Bericht 1. September 2026 · CC BY 4.0 · die engeren Zahlen stehen im Essay-Teil der Seite · abgerufen am 17. September 2026 · [Zur Quelle](https://state-of-ai-in-design-systems.netlify.app/)

**Einstufung:** Geprüfte Erhebung · Gruppe: Geprüfte Erhebung, Herstellerdokumentation oder Gerichtsentscheidung

**Direktlink:** https://robert-haase.de/belege.html#designsysteme-maschinenschnittstelle

---

## gitlab-markenrepo

**Aussage:** GitLab pflegt Markenstimme, Namensregeln, Markenzeichen-Richtlinien, Werte und Mission als Markdown-Dateien in einem öffentlichen Repository, jede Änderung mit Datum, Klarnamen und schriftlicher Begründung. Am 22. Mai 2025 reichte Senior Brand Managerin Betsy Bula die Neufassung der drei Merkmale der Markenpersönlichkeit ein.

**Belegt ist die Form, nicht die Wirkung:** Ob Sprachmodelle GitLab deshalb treffender beschreiben, ist nirgends gemessen. Es ist außerdem ein einziges Unternehmen, und ein Softwarehersteller, dem ein öffentliches Repository ohnehin Hausform ist. **Niemand hat gegengelesen:** Merge Request 13766 stammt von derselben Person und wurde nach knapp 16 Minuten kommentarlos selbst zusammengeführt. **Zwei Fassungen stehen nebeneinander:** Die offiziellen Brand Guidelines liegen nicht im Handbuch, sondern auf design.gitlab.com, und dort tragen dieselben drei Merkmale bis heute den Wortlaut von vor dem 22. Mai 2025, zuletzt inhaltlich geändert am 20. Dezember 2024. Der Widerspruch steht seit über fünfzehn Monaten. Ein Versionsverlauf schafft Nachvollziehbarkeit, keine Übereinstimmung. **Die Öffnung geht auch zurück:** Die Vision wanderte am 10. Februar 2025 ins interne Handbuch, die Strategieseite verschwand am 17. Juli 2025. Die Positionierung im Marketing-Sinn liegt weiter öffentlich dort, je Anwendungsfall als Message House mit einer eigenen Zeile „Positioning Statement“. **Jede Datei hat ihren eigenen Anfang:** Repository 23. Januar 2023, Werte 2. Mai 2023, Markenzeichen-Richtlinien 16. November 2023, Markenstimme 21. Dezember 2023, Namensregeln erst 6. Februar 2025. Wer den Fall nach dem Alter des Repositories datiert, liegt um bis zu zwei Jahre daneben. **Im Einzelnen:** Die Neufassung war ein einzelner Commit über vier eingefügte und fünf gelöschte Zeilen, begründet mit der Angleichung an die aktuelle Kommunikation und den Unternehmensplan FY26.

**Quelle:** GitLab Handbook, öffentliches Repository gitlab-com/content-sites/handbook, geprüft am 10. September 2026 · Markenstimme mit den drei Merkmalen in content/handbook/marketing/brand-experience/content-style-guide.md, Namensregeln in naming.md, Markenzeichen-Richtlinien in trademark-guidelines.md, Werte in content/handbook/values/\_index.md, Mission in content/handbook/company/mission.md · Commit e692ba4b vom 22. Mai 2025, 17:11 Uhr UTC, Merge Request 13766 · abweichende Fassung derselben Merkmale im Design-System-Repository gitlab-org/gitlab-services/design.gitlab.com, contents/brand-messaging/brand-voice.md ([Design-System-Repository](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com)) · [Zum Commit](https://gitlab.com/gitlab-com/content-sites/handbook/-/commit/e692ba4bade85fa0f35552cecc7d69abba3779a1)

**Einstufung:** Dokumentierter Einzelfall · Gruppe: Sachstand, Fallbericht oder Marktbeobachtung

**Direktlink:** https://robert-haase.de/belege.html#gitlab-markenrepo

---

## frontify-mcp

**Aussage:** Frontify öffnet sein Markenportal über einen selbst betriebenen MCP-Server. Am 17. September 2026 führt er, einzeln aufgeführt, 53 Werkzeuge in zehn Paketen, gestuft vom rein lesenden bis zum vollen Verwaltungszugriff; am 10. September waren es 54.

**Was die Zahl nicht sagt:** 53 ist ein Stichtagswert und bewegt sich: Am 10. September 2026 waren es 54, eine Woche später 53. Den Zusatz Beta führt das Help Center seit September 2026 nicht mehr im Titel. Die Herstellerdokumentation nennt an zwei Stellen 52 und für das lesende Paket 25 statt 24: Wer 52 zitiert, zitiert die Dokumentation, nicht das ausgezählte System. Einen Grund dafür nennt keine der vier Frontify-Quellen. Die Paketzahlen sind überlappende Teilmengen der 53 und dürfen nicht addiert werden. Die Guide-Überschrift kündigt den Server mit zehn Werkzeugen an, gemeint sind zehn Pakete, mehr als das Fünffache daneben. **Was der Eintrag nicht belegt:** Belegt ist, was ein Anbieter über sein eigenes Produkt sagt, nirgends unabhängig geprüft: der Umfang einer Schnittstelle, nicht Verbreitung, Nutzung, Wirkung oder die Qualität der ausgelieferten Markenregeln. Kein Werkzeug entscheidet über eine Aussage, die Pakete lesen, schreiben und verwalten. Ein Zugriffsprotokoll ist nicht belegt: „Audit trail of AI interactions“ ist bei Frontify ein Auswahlkriterium für Käufer, in Repository, Server-Seiten und Help Center kommt das Wort audit nicht vor. Der Server ist nicht standardmäßig aktiv. Seit Mitte September 2026 schalten Account-Admins ihn selbst frei, laut Help Center ohne Aufpreis und ohne die Kundenbetreuung; am 10. September lief der Zugang noch über die Kundenbetreuung, kostenfrei mit Preisvorbehalt. Dazu kommt ein offizieller Connector im Verzeichnis von Claude. Wie der angeschlossene KI-Anbieter die Daten verarbeitet, kontrolliert Frontify nach eigener Angabe nicht. **Im Einzelnen:** Das lesende Discovery-Paket enthält 24 Werkzeuge, das Admin-Paket alle 53, zwei davon sind als destruktiv gekennzeichnet.

**Quelle:** Frontify, MCP-Server-Übersicht und Paketseiten (/mcp/packs/admin und /mcp/packs/discovery), Werkzeuge einzeln aufgeführt und ausgezählt, am 17. September 2026 53 beziehungsweise 24 Einträge mit eindeutigen Namen (am 10. September 54 und 24) · Repository mit der Tabelle der zehn Pakete, MIT-Lizenz ([Repository](https://github.com/Frontify/mcp-servers)) · Help Center „Frontify MCP“ (bis Anfang September mit dem Zusatz Beta), Stand 17. September 2026, nennt 52 Werkzeuge und für Discovery 25 und die Freischaltung durch Account-Admins ohne Aufpreis ([Help Center](https://help.frontify.com/en/articles/14787214-frontify-mcp-beta)) · Guide „Choosing a DAM for the AI era“, veröffentlicht 22. Mai 2026, zuletzt geändert 30. Juli 2026, nennt ebenfalls 52 ([Guide](https://www.frontify.com/en/guide/dam-mcp)) · [Zum Server](https://mcp.frontify-integrations.com/)

**Einstufung:** Herstellerdokumentation · Gruppe: Geprüfte Erhebung, Herstellerdokumentation oder Gerichtsentscheidung

**Direktlink:** https://robert-haase.de/belege.html#frontify-mcp

---

## canva-mcp

**Aussage:** Canva betreibt einen offiziellen MCP-Server und dokumentiert dafür 33 Werkzeuge: 27 stehen in allen Tarifen; vier setzen mindestens Canva Pro voraus, darunter Brand Kits auflisten und Markenvorlagen nutzen; zwei bleiben Enterprise vorbehalten. Jeder meldet sich einzeln an, ein Agent hat die Rechte des angemeldeten Menschen.

**Wo die Tarifgrenze liegt:** Die Übersichtsseite stellt den markenbezogenen Teil scheinbar auf Enterprise; maßgeblich ist die Werkzeugliste: „Pro and above“ heißt dort Pro, Business und Enterprise. **Was der Eintrag nicht belegt:** Eigenangaben eines Anbieters ohne unabhängige Prüfung. Belegt sind Existenz und Umfang der Schnittstelle, nicht Verbreitung, Nutzung oder Wirkung. Kein Werkzeug prüft eine Aussage gegen Markenregeln; Brand Kits werden gelesen und eingefüllt. Der Export läuft in allen Tarifen, freie aber nur in Standardqualität, und Premium-Elemente können ihn in jedem Tarif mit license_required scheitern lassen. **Haltbarkeit:** Die 33 gilt zum Abrufdatum, die Dokumentation trägt keine Versionsangabe. Der Server verlangt nur ein Canva-Konto in beliebigem Tarif; eine eigene Integration braucht Canvas Freigabe. **Im Einzelnen:** Zu den 27 Werkzeugen in allen Tarifen gehören Designs erzeugen und exportieren. Enterprise vorbehalten sind eine Vorlage automatisch befüllen und den zugehörigen Datensatz auslesen.

**Quelle:** Canva, „MCP tools and rate limits“, Werkzeugkatalog mit Tarifstufen und Legende, 33 Einträge einzeln ausgezählt · Canva, „Canva Model Context Protocol (MCP)“, Serveradresse mcp.canva.com/mcp, Anmeldung und Tarifübersicht ([Serverdokumentation](https://www.canva.dev/docs/mcp/)) · beide abgerufen am 10. September 2026 · [Zum Werkzeugkatalog](https://www.canva.dev/docs/mcp/tools/)

**Einstufung:** Herstellerdokumentation · Gruppe: Geprüfte Erhebung, Herstellerdokumentation oder Gerichtsentscheidung

**Direktlink:** https://robert-haase.de/belege.html#canva-mcp

---

## mcp-primitive

**Aussage:** Das Model Context Protocol kennt drei Server-Bausteine mit je einer vorgesehenen Steuerungsinstanz: Werkzeuge (Tools) ruft das Modell auf, Ressourcen (Resources) steuert die Anwendung, Prompt-Vorlagen (Prompts) wählt der Nutzer aus. Verbindlich ist das nicht: Das Protokoll schreibt kein bestimmtes Interaktionsmodell vor.

**Der Dreiklang steht in der Übersicht, nicht in den Regeln:** Die Tabelle mit Model, Application, User steht im Erklärtext „Understanding MCP servers“ und in der Spezifikationsübersicht „Server Features“. Beide führen keine Muss- und Soll-Regeln; in den drei Kapiteln, die sie führen, heißen Ressourcen „application-driven“. Kein Server muss alle drei anbieten: „Servers offer any of the following features to clients“. **Und er altert schnell:** Seit dem 5. November 2024 gibt es fünf Revisionen, zwei davon seit November 2025. Methoden werden ersetzt: resources/subscribe steht in 2025-06-18 und 2025-11-25 je zweimal im Ressourcen-Kapitel, in 2026-07-28 kein einziges Mal, dort dreimal subscriptions/listen. **Im Einzelnen:** Alle drei Kapitel tragen denselben Nachsatz zum Interaktionsmodell. Im Tools-Kapitel folgt darauf sofort eine Soll-Regel: Ein Mensch soll jederzeit einen Werkzeugaufruf ablehnen können.

**Quelle:** Model Context Protocol, getragen von Model Context Protocol a Series of LF Projects, LLC, Spezifikation Revision 2026-07-28, Kapitel Tools, Resources und Prompts, jeweils Abschnitt „User Interaction Model“, dazu die Übersichtsseiten /specification/2026-07-28, Abschnitt Features, und /specification/2026-07-28/server, Abschnitt Server Features, sowie der Erklärtext „Understanding MCP servers“ · Revisionsliste und Methodenwechsel als eigene Pfad- und Textprobe · 10. September 2026 · [Zur Quelle](https://modelcontextprotocol.io/specification/2026-07-28/server/tools)

**Einstufung:** Stand der Normung · Gruppe: Sachstand, Fallbericht oder Marktbeobachtung

**Direktlink:** https://robert-haase.de/belege.html#mcp-primitive

---

## mcp-tool-poisoning

**Aussage:** Versteckte Anweisungen in einer Werkzeugbeschreibung lassen einen Agenten den privaten SSH-Schlüssel an einen fremden Server schicken. Eine Benchmark auf 45 echten MCP-Servern mit 353 Werkzeugen misst gemittelt über 20 Modelleinstellungen 36,5 Prozent Angriffserfolg, höchstens 72,8.

**Was das nicht sagt:** Der Nutzer klickt mit. Verborgen ist nur der Inhalt der Freigabe, Cursor blendet den Schlüssel selbst im Dialog aus. Kein Server war kompromittiert, das vergiftete Werkzeug steht im System-Prompt. **Der Erfolgsbegriff ist eng:** Gezählt wird nur, wenn der Agent ein zweites, legitimes Werkzeug missbraucht; ruft er das vergiftete selbst auf, gilt das als Misserfolg. Gemessen wird die Werkzeugaufruf-Ausgabe des Modells in einer einzelnen Runde, ausgeführt wird nichts. Bezugsgröße sind die gültigen Ausgaben, nicht die 1.348 Testfälle. Der Rest ist keine Abwehrquote, verweigert hat selbst das am häufigsten verweigernde Modell, Claude-3.7-Sonnet, in unter 3 Prozent. Invariant verkauft Sicherheitswerkzeuge und veröffentlichte zehn Tage vor dem eigenen Scanner. **Im Einzelnen:** Der Agent liest den Schlüssel und schickt ihn über einen Parameter namens „sidenote“; im Bestätigungsdialog steht nur der Name eines Additionswerkzeugs.

**Quelle:** Invariant Labs (inzwischen Snyk), Luca Beurer-Kellner und Marc Fischer, zwei Versuche mit dem MCP-Client Cursor, 1. April 2025, Nachträge 7. und 11. April 2025 · Zhiqiang Wang und acht weitere (University of Science and Technology of China, Beihang University), „MCPTox“, 45 MCP-Server, 353 Werkzeuge, 1.348 Testfälle, 20 Modelleinstellungen, Zahlen aus Abschnitt 4.2 und Tabelle 2, AAAI-26, Proceedings of the AAAI Conference on Artificial Intelligence 40(42), S. 35811 bis 35819, 14. März 2026, doi:10.1609/aaai.v40i42.40895, Vorabfassung arXiv:2508.14925v1, 19. August 2025 · [Zur begutachteten Fassung](https://doi.org/10.1609/aaai.v40i42.40895) · [Zur Quelle](https://invariantlabs.ai/blog/mcp-security-notification-tool-poisoning-attacks)

**Einstufung:** Begutachtete Benchmark und Test des Anbieters · Gruppe: Geprüfte Erhebung, Herstellerdokumentation oder Gerichtsentscheidung

**Direktlink:** https://robert-haase.de/belege.html#mcp-tool-poisoning

---

## monotype-mcp

**Aussage:** Monotype hat am 15. Juli 2026 eine Beta seines Enterprise MCP Connectors angekündigt, der zunächst in Claude und Claude Design läuft. Er verbindet KI-Werkzeuge mit Schriftbibliothek, Lizenzangaben und Produktionsfreigaben eines Kunden und prüft referenzierte Schriften gegen die Produktionsschriftliste.

**Was die Angabe nicht sagt:** Sie stammt vom Anbieter, keine auffindbare Meldung prüft selbst nach. Die Prüfung meldet und verweigert nicht: Nicht freigegebene Schriften werden laut Produktseite markiert, und der Labs-Beitrag verneint ausdrücklich, dass der Connector die Marken-, Rechts- oder Produktionsprüfung ersetzt. **Wer freigibt, ist der Kunde:** Vorausgesetzt sind freigegebene Produktionsschriften in seiner Instanz, die der Connector nur umsetzt. Gegenstand ist eine Schrift, keine Aussage. Web und HTML sind die erste Ausbaustufe, der Zugang auf ausgewählte Enterprise-Kunden von Monotype Fonts beschränkt, Zahlen zu Nutzung oder Wirkung fehlen. **Im Einzelnen:** Der Connector läuft über das Model Context Protocol, gleicht KI-Entwürfe gegen die Bibliothek ab und gibt CSS im Chat zurück, sofern die Projektschriften zur Bibliothek gehören.

**Quelle:** Monotype Labs, „Bringing font governance into AI-native content creation“, Ablauf der Beta in sieben Schritten, 15. Juli 2026 · Pressemitteilung „Monotype Introduces Enterprise Connector Beta, Exploring How Brand Governance Works Inside AI-Native Workflows“, Woburn, Massachusetts, 15. Juli 2026 · Produktseite „Monotype Enterprise Connector“ mit Status „Now in BETA“ und Zugangsvoraussetzungen, abgerufen 10. September 2026 · Negativprobe an der Pressemitteilungsliste, 15. Juli bis 10. September 2026 ohne Statusänderung · [Zur Quelle](https://www.monotype.com/resources/monotype-labs/bringing-font-governance-ai-native-content-creation)

**Einstufung:** Anbieterangaben, Beta · Gruppe: Vorläufig: Prototyp, Einzeltest, Prognose oder Anbieterangabe

**Direktlink:** https://robert-haase.de/belege.html#monotype-mcp

---

## pulumi-brand-mcp

**Aussage:** Pulumi veröffentlicht die eigenen Markenrichtlinien als MCP-Server unter brand.pulumi.com/mcp, darunter Markenstimme, Schreibregeln und verbindliche Produktnamen. Am 10. und am 17. September 2026 antwortete er ohne Anmeldung und führte unverändert 13 Ressourcen, eine Vorlage, 11 Werkzeuge und 3 Prompts.

**Was die Zahlen nicht sagen:** Gemessen sind Erreichbarkeit und Umfang, nicht Nutzung, Wirkung oder ob sich jemand an die Regeln hält. Der Inhalt ist die ungeprüfte Selbstdarstellung einer einzelnen Softwarefirma über die eigene Marke. **Was der Server entscheidet:** Drei Prompts sagen eine strukturierte Bewertung von Text, Bild und Design zu, werden laut Hersteller aber vom Menschen ausgelöst und expandieren in eine vorbereitete Modellanfrage. Im Abruf vom 17. September lieferte der Prompt für Texte (review_copy) genau eine solche Anfrage von 32.957 Zeichen, mit den Richtlinien im Volltext und ohne Urteil; alle elf Werkzeuge sind als nur lesend gekennzeichnet. Selbst gerechnet werden zwei Urteile: Farbkontrast gegen veröffentlichte APCA-Schwellen, im Test Lc 86,4 für violet-700 auf Weiß, und die nächstgelegene Markenfarbe samt Ersetzungsempfehlung. Über die Güte einer Aussage befindet ein Mensch, so verlangt es der Regeltext. **Im Einzelnen:** Eine Ressource regelt generative KI im Klartext, gerichtet an den Menschen: „never ship raw model output as a finished piece“, „never publish anything without a human reviewing it first“.

**Quelle:** Eigener Abruf des Pulumi Brand MCP Server, Fassung 0.1.0, Protokollfassung der Sitzung 2025-06-18 (vom Client vorgegeben, der Server nennt 2025-11-25), per JSON-RPC über Streamable HTTP · Methoden initialize, resources/list, resources/templates/list, tools/list, prompts/list, resources/read auf brand://guidelines und tools/call auf check_color_accessibility und find_nearest_brand_color · alle Aufrufe HTTP 200 ohne Authentifizierungskopf, keine Liste mit nextCursor, Zählungen dreimal wiederholt und stabil · brand://guidelines im Volltext, 3.053 Zeichen, text/markdown · Herstellerdokumentation brand.pulumi.com/mcp-server für die Einordnung der Prompts · abgerufen am 10. September 2026, erneut am 17. September 2026 mit denselben Zählungen, dazu prompts/get auf review_copy (Kontext marketing, eine Nachricht, 32.957 Zeichen) · [Zur Quelle](https://brand.pulumi.com/mcp-server/)

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

**Aussage:** Im regulierten Pharma-Freigabeverfahren ist maschinelle Vorprüfung von Markenvorgaben ausgeliefertes Produkt: Veeva meldet am 3. Dezember 2025 einen Quick Check Agent. Für Falcon MLR, den im Juni 2026 übernommenen Anbieter Copli, nennt Veeva das Potenzial, binnen fünf Jahren 70 Prozent oder mehr der MLR-Handarbeit zu beseitigen.

**Was der Eintrag nicht belegt:** eine Wirkung. Die 70 Prozent sind Absicht unter Zukunftsvorbehalt. Alle Angaben stammen vom Anbieter, geprüft ist nur, dass er sie macht. Der Agent prüft gegen hinterlegte Vorgaben und entscheidet nichts; die Freigabe ist hier ein regulatorisch erzwungenes Verfahren, die Übertragung auf andere Marken bleibt Analogie. **Die Werbezahl trägt das nicht:** 57 Prozent kürzere Prüfzyklen bewirbt Veeva heute auf der Produktseite, ohne Stichprobe, Ausgangswert und Rechenvorschrift; wortgleich stehen sie schon in einem Datenblatt vom 2. Mai 2017, dieselbe Zahl in einem vom 21. März 2016, also mindestens neun Jahre vor dem ersten Agenten, in Unterlagen, die KI kein einziges Mal erwähnen. **Im Einzelnen:** Der Quick Check Agent prüft Inhalte anhand redaktioneller, Marken-, Markt-, Kanal- und Compliance-Vorgaben, bevor die MLR-Prüfung selbst beginnt. Am 23. Juni 2026 hat Veeva Copli übernommen und als Falcon MLR gestartet.

**Quelle:** Veeva Systems, Pressemitteilungen zur Verfügbarkeit der Veeva AI Agents und zur Übernahme von Copli, beide im Volltext geprüft · 3. Dezember 2025 und 23. Juni 2026 · die 57 Prozent bewirbt Veeva heute auf der Produktseite Veeva PromoMats Review and Approve, abgerufen 10. September 2026 · Altersnachweis: Veeva-Datenblatt „Ensuring End-to-End Commercial Content Compliance“ (PromoMats for EU), PDF-Erstellungsdatum 2. Mai 2017, veeva.com/eu/wp-content/uploads/2017/05/PromoMats-for-EU-Datasheet.pdf, dieselbe Zahl in der Fassung mit PDF-Erstellungsdatum 21. März 2016, veeva.com/eu/wp-content/uploads/2012/07/PromoMats-for-EU-Datasheet-1.pdf · [Produktseite](https://www.veeva.com/products/veeva-promomats/mlr-review/) · [Zur Quelle](https://www.veeva.com/resources/veeva-ai-agents-now-available-to-increase-productivity-and-customer-centricity/)

**Einstufung:** Pressemitteilungen des Anbieters · Gruppe: Vorläufig: Prototyp, Einzeltest, Prognose oder Anbieterangabe

**Direktlink:** https://robert-haase.de/belege.html#veeva-mlr

---

## google-ads-textregeln

**Aussage:** In Google Ads lassen sich Markenregeln in eigenen Worten hinterlegen, in Performance-Max- und in Search-Kampagnen mit AI Max: je Kampagne bis zu 25 ausgeschlossene Begriffe und bis zu 40 Vorgaben dazu, was zu vermeiden ist. Beide schließen nur aus und wirken nur auf automatisch angepasste Textbausteine, nicht auf Bilder.

**Was die Zahl nicht sagt:** Das sind Produktgrenzen, keine Messung. Die Funktion läuft als „experimental beta“, Google nennt selbst mögliche Einschränkungen; Obergrenzen und Verhalten können sich ändern. Die Regeln hängen an der Kampagne, nicht an der Marke: Wer zehn Kampagnen führt, pflegt zehn Regelsätze, und außerhalb von Google Ads gelten sie nicht. Ob die erzeugten Texte die Vorgaben einhalten, sagt die Dokumentation nicht; sie beschreibt nur, dass die Vorgaben berücksichtigt werden. **Im Einzelnen:** Die Vorgaben nennen, welche Vorstellungen, Verknüpfungen oder Stile zu vermeiden sind. Auf der Hilfeseite warnt Google, ungeeignete Vorgaben könnten eine große Zahl brauchbarer Texte entfernen und die Leistung senken.

**Quelle:** Google-Ads-Hilfe, „Use text guidelines with Performance Max and Search campaigns (beta)“, abgerufen am 17. September 2026 · erweiterter Beta-Zugang für alle Werbetreibenden weltweit laut Google-Blog vom 26. Februar 2026 · [Zur Quelle](https://support.google.com/google-ads/answer/16489313)

**Einstufung:** Herstellerdokumentation · Gruppe: Geprüfte Erhebung, Herstellerdokumentation oder Gerichtsentscheidung

**Direktlink:** https://robert-haase.de/belege.html#google-ads-textregeln

---

## microsoft-brand-kit

**Aussage:** Microsofts Copilot lernt eine Marke aus genau einem PDF und zieht aus den Richtlinien Farbpaletten, Stile, Markenstimme sowie Regeln zu Logo und Typografie. Für ein neues PDF muss das bestehende entfernt werden, und die hochgeladenen Richtlinien überschreiben vorhandene Werte im Brand Kit, die Markenstimme eingeschlossen.

**Was der Eintrag nicht belegt:** Es sind Angaben des Herstellers über das eigene Produkt, nirgends unabhängig geprüft. Belegt ist, was die Dokumentation beschreibt, nicht die Güte der Extraktion. **Kein Startdatum:** Microsoft nennt keines. Eine Partnerveröffentlichung datiert die weltweite Verfügbarkeit auf Ende Juni 2026, eine andere führt den PDF-Import schon im Frühjahr als verfügbar; wer ein Datum zitiert, zitiert Dritte. **Bedingungen:** Die Funktion verlangt eine Copilot-Lizenz, nimmt nur PDF an und erwartet die Vertraulichkeitsstufe General. Seit Mitte September 2026 lassen sich zusätzlich Präsentations-Skills als Markdown hinterlegen; die Regeln aus den Richtlinien entstehen weiterhin allein aus dem einen PDF. **Im Einzelnen:** Ein Brand Manager lädt die Richtlinien hoch.

**Quelle:** Microsoft, Support-Seite „Use guidelines to manage brand kits in the Microsoft Copilot app“, Abschnitte zum Hochladen und zur Überschreibung sowie die Frage „How many pdf guidelines can be uploaded?“ · abgerufen am 17. September 2026 · [Seite zu Rolle und Lizenz](https://support.microsoft.com/en-us/microsoft-365-copilot/create-and-manage-official-brand-kits-in-the-microsoft-365-copilot-app) · [Zur Quelle](https://support.microsoft.com/en-us/microsoft-365-copilot/use-guidelines-to-manage-brand-kits-in-the-microsoft-365-copilot-app)

**Einstufung:** Herstellerdokumentation · Gruppe: Geprüfte Erhebung, Herstellerdokumentation oder Gerichtsentscheidung

**Direktlink:** https://robert-haase.de/belege.html#microsoft-brand-kit

---

## muse-connectors

**Aussage:** Meta hat seinen persönlichen Agenten Muse am 8. September 2026 in den USA gestartet. Unternehmen können eigene Connectors einreichen, die Meta auf Funktion, Sicherheit und rechtliche Anforderungen prüft, bevor Nutzer sie in Muse finden.

**Was der Eintrag nicht belegt:** Verbreitung, Nutzung oder Umsatz. Es sind Angaben des Anbieters zum eigenen Produkt am Starttag. **Die Technik bleibt offen:** Welches Protokoll hinter den Connectors steht, nennen beide Seiten nicht, MCP kommt dort nicht vor. **Die Reichweite auch:** Muse ist zum Stichtag auf die USA und auf Erwachsene beschränkt, und wie viele Unternehmen einen Connector eingereicht haben, steht nirgends. **Im Einzelnen:** Die Nutzer entscheiden, mit welchen Anwendungen Muse sich verbindet und wie viel Zugriff er bekommt, und vor sensiblen Schritten wie dem Versand einer E-Mail oder einem Kauf fragt er nach.

**Quelle:** Meta, Newsroom „Introducing Muse“, 8. September 2026, für Start, Zugriffsentscheidung und Rückfrage vor sensiblen Schritten; Einreichung, Prüfung auf Funktion, Sicherheit und Recht sowie das Verzeichnis auf der Plattformseite · beide abgerufen am 19. September 2026 · [Muse-Plattformseite](https://muse.ai/platform) · [Zur Quelle](https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/)

**Einstufung:** Herstellerdokumentation · Gruppe: Geprüfte Erhebung, Herstellerdokumentation oder Gerichtsentscheidung

**Direktlink:** https://robert-haase.de/belege.html#muse-connectors

---

## olivares-access-map

**Aussage:** Für die Rechte von KI-Agenten gibt es Software: Olivares findet Agenten, MCP-Server und Werkzeuge im eigenen Betrieb, führt eine Karte der Lese- und Schreibrechte und stellt ihr gegenüber, was tatsächlich beobachtet wurde. Regeln werden an vier Stellen deny-closed durchgesetzt, darunter ein Gate für MCP-Werkzeugaufrufe.

**Was der Eintrag nicht belegt:** Wirkung, Verbreitung oder Nutzung. Die Beschreibung stammt aus dem Repository des Anbieters, Stand v26.9.1, dort ausdrücklich als „beta, in active development“ geführt, ohne Kundenzahlen. **Der Gegenstand ist ein anderer:** Geprüft werden Zugriffe, Werkzeuge und Ausgaben. Ob eine Aussage im Namen einer Marke gemacht werden darf, entscheidet dieses Werkzeug nicht. **Im Einzelnen:** Olivares findet außerdem Sitzungen, Modelle und Identitäten. Budgets können Ausgaben sperren oder drosseln, und jeder Vorgang landet in einem hash-verketteten, mit Ed25519 signierten Protokoll.

**Quelle:** Olivares, Repository olivaresai/olivares, README mit Inventar, Access Map, vier Durchsetzungspunkten, Budgets und signiertem Protokoll; Kern unter AGPL-3.0, SDK und Connectors unter Apache-2.0, selbst gehostet · abgerufen am 20. September 2026 · [Zur Quelle](https://github.com/olivaresai/olivares)

**Einstufung:** Anbieterangaben, Beta · Gruppe: Vorläufig: Prototyp, Einzeltest, Prognose oder Anbieterangabe

**Direktlink:** https://robert-haase.de/belege.html#olivares-access-map

---

## adobe-markenpruefung

**Aussage:** Adobe prüft Kampagnenentwürfe maschinell gegen hinterlegte Markenrichtlinien und zeigt das Ergebnis als Prozentwert: den Anteil der geprüften Richtlinien, die ein Entwurf besteht, nach jeder Änderung neu gerechnet.

**Was der Eintrag nicht belegt:** eine Wirkung. Es sind Angaben des Herstellers über das eigene Produkt, nirgends unabhängig geprüft, ohne Stichprobe und ohne Angabe, wie gut die Prüfung trifft. **Was der Prozentwert nicht sagt:** Er zählt Regeln, er gewichtet sie nicht. Eine verfehlte Logoregel wiegt in der Zahl so viel wie eine verfehlte Kommaregel. **Und was er nicht verhindert:** Die Dokumentation beschreibt die Anzeige als Hinweis auf Verbesserungsmöglichkeiten und nennt keine Sperre; die einzelnen Prüfungen lassen sich zudem abschalten. Wer eine Regel entschieden hat und seit wann sie gilt, steht in keiner dieser Antworten. **Im Einzelnen:** Neben dem Prozentwert gibt es Bestanden-oder-nicht-Ergebnisse für Kanalvorgaben wie Meta und LinkedIn und für die Barrierefreiheit nach ADA.

**Quelle:** Adobe, Dokumentation „Brand Validation in Adobe GenStudio for Performance Marketing“ (Experience League), Abschnitte zur Berechnung des Werts, zu den drei Prüfarten und zum erneuten Prüfen · abgerufen am 20. September 2026 · [Zur Quelle](https://experienceleague.adobe.com/en/docs/genstudio-for-performance-marketing/user-guide/guidelines/brand-validation)

**Einstufung:** Herstellerdokumentation · Gruppe: Geprüfte Erhebung, Herstellerdokumentation oder Gerichtsentscheidung

**Direktlink:** https://robert-haase.de/belege.html#adobe-markenpruefung

---

## markup-ai-stilpruefung

**Aussage:** Markup AI prüft Inhalte gegen die eigenen Sprach- und Stilvorgaben und ist selbst über MCP erreichbar: Der Anbieter betreibt einen MCP-Server unter api.markup.ai für Assistenten wie Claude oder Cursor. Das Werkzeug markiert, was nicht passt, begründet es und liefert einen Formulierungsvorschlag zum Übernehmen.

**Was der Eintrag nicht belegt:** Wirkung, Verbreitung oder Trefferquote. Die Beschreibung stammt vom Anbieter, die Skala der Bewertung nennt die Übersichtsseite nicht. **Der Anschluss ist nicht offen:** Der MCP-Server verlangt eine Anmeldung, per Schlüssel oder OAuth, anders als der öffentliche Marken-Server von Pulumi. **Und der Gegenstand ist ein anderer:** Geprüft wird gegen ein Stilhandbuch. Das Werkzeug markiert und schlägt vor, es gibt nichts frei, und wer eine Regel entschieden hat, steht in seinen Antworten nicht. Das Unternehmen ist nach eigener Angabe aus der Forschung und Technik des Textprüfers Acrolinx hervorgegangen. **Im Einzelnen:** Jeder Text wird zusätzlich gegen die hinterlegten Vorgaben bewertet. Ein Beispiel ist die Aufforderung, einen Absatz auf Abweichungen von der Markenstimme zu prüfen.

**Quelle:** Markup AI, eigene Seite und Dokumentation: Prüfung von Inhalten gegen Markenstimme und Stilvorgaben mit Markierung, Begründung und Vorschlag, Bewertung gegen die hinterlegten Vorgaben, Herkunft aus Acrolinx · Anschluss und Anmeldung aus der Anleitung zum MCP-Server ([Anleitung zum MCP-Server](https://docs.markup.ai/mcp/vscode-mcp)) · abgerufen am 20. September 2026 · [Zur Quelle](https://markup.ai/)

**Einstufung:** Herstellerdokumentation · Gruppe: Geprüfte Erhebung, Herstellerdokumentation oder Gerichtsentscheidung

**Direktlink:** https://robert-haase.de/belege.html#markup-ai-stilpruefung

---

## agentenstandards-verbreitung

**Aussage:** Websites, die sich KI-Agenten maschinenlesbar erklären, sind bisher die Ausnahme. Cloudflare prüft die 200.000 meistbesuchten Domains: Von 107.155 erfolgreich geprüften führen 0,43 Prozent eine MCP Server Card, 0,47 Prozent Agent Skills und 1,8 Prozent Content Signals; Werkzeuge für Agenten per WebMCP bietet keine einzige an.

**Was die Zahl nicht sagt:** Gezählt werden Dateien und Endpunkte, die ein Scan an festen Adressen findet, etwa /.well-known/mcp/server-card.json, nicht ihre Nutzung; ob ein Agent sie liest, misst Radar nicht. Es ist eine Messung des Anbieters mit eigener Auswahl: Suchmaschinen sowie leere und nicht erreichbare Infrastruktur sind ausgenommen, und nicht jeder Standard passt zu jeder Website, x402 etwa nur zu Bezahlinhalten, WebMCP nur zu Seiten, die Agenten Werkzeuge anbieten. **Die Null bei WebMCP ist die unsicherste Zahl:** Wie Radar WebMCP erkennt, beschreibt Cloudflare nicht, und Werkzeuge, die eine Seite erst per JavaScript anmeldet, kann ein Scan übersehen. **Im Kleinen gemessen:** Die eigenen Erhebungen zur robots.txt deutschsprachiger Medien und der Unternehmen aus DAX, MDAX und SDAX und der Eintrag zu Content-Signal zählen dieselbe Frage an bekannten Listen. Wie viele Händler UCP betreiben, nennen die beteiligten Firmen selbst nicht, wie der Eintrag zum UCP-Gremium belegt; Radar ist eine zweite Zählung von außen. **Im Einzelnen:** Eine MCP Server Card beschreibt einen eigenen MCP-Server. Unter den Handelsprotokollen kommt UCP auf 4,8 Prozent, AP2 auf zwei Domains.

**Quelle:** Cloudflare Radar, Seite „AI Insights“, Abschnitt „Adoption of AI agent standards“, Stand 21. September 2026 · 107.155 erfolgreich geprüfte unter den 200.000 meistbesuchten Domains · Methode und Prüfpfade im Blogbeitrag „Introducing the Agent Readiness score“ vom 17. April 2026 ([zum Methodenbeitrag](https://blog.cloudflare.com/agent-readiness/)) · abgerufen am 23. September 2026 · [Zur Quelle](https://radar.cloudflare.com/ai-insights)

**Einstufung:** Marktbeobachtung · Gruppe: Sachstand, Fallbericht oder Marktbeobachtung

**Direktlink:** https://robert-haase.de/belege.html#agentenstandards-verbreitung

---

## markenstimme-als-skill

**Aussage:** Auch Google legt Markenregeln als verwaltete Anweisung für seinen Assistenten ab: In Google Workspace sollen sogenannte Skills, am 17. September 2026 als Beta vorgestellt, unter anderem „approved tone, voice, and visual identity across email drafts and files“ sichern.

**Was der Eintrag nicht belegt:** Nutzung. Es ist Herstellerdokumentation ohne Zahlen. In Workspace stehen Skills nur Organisationen offen, deren Administrator die Gemini-Beta eingeschaltet hat; zur Verfügbarkeit in der EU sagt der Beitrag nichts. In Gemini Enterprise dürfen die Editionen Standard, Plus und Pay-as-you-go Skills anlegen, Frontline nicht. **Einordnung:** Nach Microsofts Brand Kits und Adobes Markenprüfung legt damit ein dritter großer Anbieter Markenregeln als Konfiguration seines Assistenten ab, wie die Einträge zu beiden zeigen. **Im Einzelnen:** Administratoren können geprüfte Skills der Organisation kuratieren und verteilen. In Gemini Enterprise nennt die Dokumentation das Schreiben „in your brand voice“ als Beispiel: Jede Skill ist eine Datei SKILL.md nach einem offenen Standard, und verlangt der Administrator eine Freigabe, erreicht eine geteilte Skill andere erst danach.

**Quelle:** Google Workspace Blog, Ali Douvre, „Teach Gemini your team’s know-hows with skills in Google Workspace“, 17. September 2026 · Google Cloud, „Create and manage skills | Gemini Enterprise“, zuletzt aktualisiert am 24. September 2026 · beide abgerufen am 28. September 2026 · [Dokumentation zu Gemini Enterprise](https://docs.cloud.google.com/gemini/enterprise/docs/skills) · [Zur Quelle](https://workspace.google.com/blog/product-announcements/teach-gemini-your-teams-know-hows-with-skills-in-google-workspace)

**Einstufung:** Herstellerdokumentation, Beta · Gruppe: Geprüfte Erhebung, Herstellerdokumentation oder Gerichtsentscheidung

**Direktlink:** https://robert-haase.de/belege.html#markenstimme-als-skill

---

## staat-als-einzige-quelle

**Aussage:** Seit dem 29. September 2026 beantwortet america.gov Fragen an die US-Regierung in einem Eingabefeld, laut Betreiber aus rund 29.000 Regierungswebsites, mit Link auf die Quelle. Noch während der Startveranstaltung änderte der Dienst laut AP Antworten und lehnte danach Fragen etwa zur Präsidentschaftswahl 2020 als „political questions“ ab.

**Was der Eintrag nicht belegt:** dass die Antworten richtig sind. Eine systematische Prüfung gibt es nicht, nur Stichproben von Journalisten: CBS News stellte 37 Gesundheitsfragen; Notfälle beantwortete der Dienst richtig, andere Antworten waren veraltet oder erwähnten eine gerichtliche Anordnung nicht, und die Behördenseiten widersprechen sich teils selbst. Die 29.000 Websites und die sofortige Aktualisierung sind Angaben zum Start. Dahinter laufen laut Gebbia Modelle von Google (Gemini) und xAI (Grok); Fragen zu Datenschutz und Verträgen hat das Weiße Haus nicht beantwortet. **Der Betreiber über sich:** „The accuracy of our answers is never influenced by third parties.“ Wer die Antworten beim Start geändert hat und warum, sagt der AP-Bericht nicht. **Im Einzelnen:** Änderungen auf Behördenseiten sollen laut dem Chief Design Officer der Regierung, Joe Gebbia, sofort in die Antworten einfließen.

**Quelle:** America.gov, „How it works“ · Angaben zum Start laut FedScoop (Madison Alder) und Nextgov/FCW (Christian Robles), beide 29. September 2026 · die 29.000 Websites gibt FedScoop als Angabe von America.gov wieder, auf „How it works“ standen sie am 1. Oktober 2026 nicht · Associated Press (Meg Kinnard, Chris Rugaber, Will Weissert), 29. September 2026, gelesen in der Übernahme bei Yahoo News, weil apnews.com automatische Abrufe sperrt · CBS News, Céline Gounder, 30. September 2026 · alle abgerufen am 30. September 2026 · [FedScoop](https://fedscoop.com/trump-launches-ai-site-america-gov/) · [AP bei Yahoo News](https://www.yahoo.com/news/politics/articles/trump-touts-america-gov-government-151833603.html) · [CBS News](https://www.cbsnews.com/news/america-gov-chatbot-health-questions/) · [Zur Quelle](https://america.gov/how-it-works)

**Einstufung:** Dokumentierter Einzelfall · Gruppe: Sachstand, Fallbericht oder Marktbeobachtung

**Direktlink:** https://robert-haase.de/belege.html#staat-als-einzige-quelle

---

## chatgpt-plugin-pruefung

**Aussage:** Wer ein Plugin mit MCP-Verbindung ins ChatGPT-Verzeichnis bringen will, muss festlegen, was es nicht tun soll: Für die erste Prüfung verlangt OpenAI genau fünf positive und drei negative Testfälle. Nach der Veröffentlichung prüft OpenAI den MCP-Server täglich, neue Werkzeuge bleiben bis zur Freigabe gesperrt.

**Was der Eintrag nicht belegt:** Nutzung oder Wirkung. Die Seite nennt keine Zahlen zu Plugins, Prüfdauer oder Ablehnungen und trägt kein Datum; Plugins gehörten zu den Neuheiten von OpenAIs DevDay am 29. September 2026. Geprüft werden Funktion und Richtlinien, nicht ob die Aussagen einer Marke stimmen: Die negativen Testfälle schreibt der Anbieter des Plugins selbst. **Im Einzelnen:** Ein negativer Testfall beschreibt eine Anfrage, bei der das Plugin nicht handeln soll, warum nicht, und welche Ablehnung, Rückfrage oder sichere Ausweichlösung erwartet wird. Markenfarbe und Logo, jeweils auch in einer dunklen Variante, sind eigene Felder im Manifest.

**Quelle:** OpenAI Developers, „Submission“, Einreichung von Plugins für das ChatGPT-Verzeichnis, mit Beispiel-Manifest, ohne Datum, abgerufen am 30. September 2026 · Plugins als Neuheit: OpenAI, „DevDay 2026 Recap“, 29. September 2026 · [DevDay 2026 Recap](https://openai.com/index/devday-2026-recap/) · [Zur Quelle](https://developers.openai.com/plugins/deploy/submission)

**Einstufung:** Herstellerdokumentation · Gruppe: Geprüfte Erhebung, Herstellerdokumentation oder Gerichtsentscheidung

**Direktlink:** https://robert-haase.de/belege.html#chatgpt-plugin-pruefung

---

Ende der Datei: 21 von 21 Einträgen zum Thema Schnittstellen. Letzter Eintrag: chatgpt-plugin-pruefung.
