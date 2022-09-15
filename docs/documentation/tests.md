---
title: Softwaretests
description: ""
sidebar_position: 310
tags: []
---

Softwaretests sollen sicherstellen, dass bei der Entwicklung oder Änderung einer Software der Quellcode in allen festgelegten Anwendungsfällen korrekt funktioniert. Mit Hilfe von Softwaretests können Softwareentwickler im Idealfall schon während des 
Entwicklungsprozesses mögliche Fehler identifizieren und beheben.

## Testarten
Man unterscheidet bei Softwaretests zwischen verschiedenen Testarten, die in der Testpyramide dargestellt werden:
- Akzeptanztests: Testen des gesamten Systems unter realitätsgetreuen Bedingungen
- Systemtests: Testen des gesamten Systems
- Integrationstests: Testen mehrerer, voneinander abhängiger Komponenten
- Komponententests: Testen einzelner, abgeschlossener Softwarebausteine

![image](https://user-images.githubusercontent.com/47243617/171476574-eebee507-6ab3-4b57-9130-ac097785c4cc.png)

## Testgetriebe Entwicklung (Test Driven Development)
Komponententests (Unit Tests) spielen vor allem bei der Testgetriebenen Entwicklung (Test Driven Development) eine große Rolle. Hierbei werden Anwendungen Schritt für Schritt (also inkrementell) um neue Funktionen erweitert (Red-Green-Refactor-Methode):
- Red: Einen Test schreiben, der zunächst fehlschlägt
- Green: Genau soviel Produktivcode schreiben, damit der Test erfolgreich durchläuft
- Refactor: Testcode und Produktivcode aufräumen (vereinfachen und verbessern)

![image](https://user-images.githubusercontent.com/47243617/171477304-f76f562e-e8e0-4412-ae66-a3b8d94e1d37.png)

:::note Hinweis
Da durch die vorangestellten Tests eine kontinuierliche Designverbesserung stattfindet, wird die Testgetriebene Entwicklung zu den Designstrategien gezählt.
:::

## Test Doubles
Oftmals werden zum Testen einer Methode andere Objekte bzw. Komponenten benötigt, die vom Test bereitgestellt werden müssen. Zum Testen können entweder die realen Komponenten, oder aber sogenannte **Test Doubles** verwendet werden:
- Eine **Fälschung** (Fake) imitiert eine reale Komponente
- Eine **Attrappe** (Dummy) ist ein Platzhalter für ein Objekt, welches im Test nicht benötigt wird
- Ein **Stummel** (Stub) gibt bei Aufruf einen festen Wert zurück; wird also für eingehende Aufrufe verwendet
- Eine **Nachahmung** (Mock) zeichnet die Methodenaufrufe an ihr auf und kann zurückgeben, welche Methode wie oft mit welchen Parametern aufgerufen wurde; wird also für ausgehende Aufrufe verwendet
- Ein **Spion** (Spy) kann ähnlich wie eine Nachahmung Methodenaufrufe aufzeichnen, kann diese aber auch die reale Komponente weiterleiten

Test Doubles sollen die Abhängigkeiten des SUT (System under Test) minimieren und für vorhersagbare Ergebnisse sorgen.