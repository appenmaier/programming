---
title: Weihnachtsbaum
description: ''
tags: []
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine ausführbare Klasse.

## Klassendiagramm
![image](https://user-images.githubusercontent.com/47243617/208442529-14ab3952-8cec-4d28-b826-3573caffc9ef.png)

## Hinweise zur Klasse ChristmasTree
- Der Konstruktor soll alle Attribute initialisieren
- Die Methode `void addCandle(candle: Candle)` soll der Kerzenliste (`candles`) die eingehende Kerze hinzufügen
- Die Methode `void lightChristmasTree()` soll alle Kerzen "entzünden"
- Die Methode `int getNumberOfElectricCandles()` soll die Anzahl elektrischer Kerzen zurückgeben

## Hinweise zur Klasse Candle
- Der Konstruktor soll alle Attribute initialisieren
- - Die Methode `void lightACandle()` soll die Kerze "entzünden"
- Die Methode `void turnOffACandle()` soll die Kerze "ausmachen"

## Hinweise zur Klasse ElectricCandle
- Der Konstruktor soll alle Attribute initialisieren und die Energie (`power`) auf den Wert _100_ setzen
- Die Methode `void lightACandle()` soll die elektrische Kerze "entzünden", wenn diese noch über Energie verfügt und die Energie um 10 reduzieren
- Die Methode `void recharge()` soll die Energie der elektrische Kerze wieder auf den Wert _100_ setzen
