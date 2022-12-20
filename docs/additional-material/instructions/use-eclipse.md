---
title: Eclipse verwenden
description: ''
sidebar_position: 40
--- 

## Hilfreiche Tastaturkürzel
| Kürzel       | Funktion                                    |
| ------------ | ------------------------------------------- |
| Ctrl + Space | Autovervollständigung                       |
| Shift + F1   | Quellcode formatieren                       |
| Ctrl + 1     | Quick-Fix ausführen                         |
| Ctrl + 7     | Quellcode auskommentieren / entkommentieren |
| Ctrl + +     | Quellcode-Schriftgröße erhöhen              |
| Ctrl + -     | Quellcode-Schriftgröße verringern           |

## Hilfreiche Einstellungen
- _**Window - Preferences - General - Appearance - Theme**_: Dark
- _**Window - Preferences - Java - Code Style - Formatter - Active profile**_: GoogleStyle
- _**Window - Preferences - Java - Editor - Save actions - Perform the selected actions on save**_: Ja
- _**Window - Preferences - Java - Editor - Save actions - Perform the selected actions on save - Format source code**_: Ja
- _**Window - Preferences - Java - Editor - Save actions - Perform the selected actions on save - Organize imports**_: Ja
- _**Window - Preferences - Java - Editor - Save actions - Perform the selected actions on save - Additional actions**_: Ja

## Perspektiven wechseln
![image](https://user-images.githubusercontent.com/47243617/208664588-064c320f-8e4b-4ae8-9b35-1c11fe87c238.png)

:::note Hinweis
Perspektiven können über _**Window – Perspective – Reset Perspective...**_ auf den Ursprungszustand zurückgesetzt werden
:::

## Hilfreiche Funktionen der Java-Perspektive
![image](https://user-images.githubusercontent.com/47243617/208665240-90d45434-bfda-4035-9a9d-9b82663f02dc.png)

## Hilfreiche Funktionen der Debugging-Perspektive
![image](https://user-images.githubusercontent.com/47243617/208665348-9172bda0-02d6-4b7f-9282-dd5838282d12.png)

### Git-Repository in Eclipse integrieren
- In der Git-Perspektive Drucktaste _**Clone a Git repository**_ betätigen
- URI eingeben (z.B. https://github.com/appenmaier/dhbw-java) und Drucktaste _**Next >**_ betätigen
- Drucktaste _**Next >**_ betätigen
- Drucktaste _**Finish**_ betätigen
- Importiertes Git-Repository aufklappen
- Im _**Working Tree**_ Rechtsklick auf den gewünschten Ordner ausführen
- Option _**Import Projects...**_ auswählen
- Drucktaste _**Finish**_ betätigen

## Java-Projekt zu einem Git-Repository hinzufügen
- In der Java-Perspektive Rechtsklick auf gewünschtes Java-Projekt ausführen
- Option _**Team – Share Project**_ auswählen
- Option _**Git**_ auswählen und Drucktaste _**Next >**_ betätigen
- Gewünschtes Git-Repository auswählen und Drucktaste _**Finish**_ betätigen

## Git-Staging-View anzeigen lassen
- Option _**Window – Show View – Other...**_ auswählen
- Option _**Git Staging**_ auswählen
- Drucktaste _**OK**_ betätigen

## Änderungen eines lokalen Git-Repositories hochladen (Pushen)
- In der View _**Git Staging**_ alle geänderten Objekte markieren und Drucktaste _**Add selected files to the index**_ betätigen
- _**Commit Message**_ eingeben und Drucktaste _**Commit and push**_ betätigen

## Lokales Git-Repository aktualisieren (Pullen)
- In der Java-Perspektive Rechtsklick auf gewünschtes Java-Projekt ausführen
- Option _**Team – Pull**_ auswählen

## JavaFX-Anwendung ausführen (ab Java 11)
- Im Package Explorer zur gewünschten JavaFX Anwendung navigieren und gewünschte JavaFX Anwendung auswählen
- Option _**Run – Run Configurations**_ auswählen
- Option _**Java Application**_ auswählen und Drucktaste _**New launch configuration**_ betätigen
- Reiter _**Arguments**_ auswählen
- VM arguments: _**--module-path "C:\Program Files\Java\javafx-sdk-[JavaFX SDK Version\]\lib" --add-modules=javafx.controls,javafx.fxml**_ eingeben und Drucktaste _**Run**_ betätigen

