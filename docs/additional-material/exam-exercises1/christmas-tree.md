---
title: Weihnachtsbaum
description: ''
tags: [oo, inheritance, polymorphy]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine ausführbare Klasse. So nicht anders angegeben, sollen Konstruktoren, Setter, Getter und die Object-Methoden wie üblich implementiert werden.

## Klassendiagramm
![image](https://user-images.githubusercontent.com/47243617/208442529-14ab3952-8cec-4d28-b826-3573caffc9ef.png)

## Hinweise zur Klasse ChristmasTree
- Die Methode `void addCandle(candle: Candle)` soll der Kerzenliste (`candles`) die eingehende Kerze hinzufügen
- Die Methode `void lightChristmasTree()` soll alle Kerzen "entzünden"
- Die Methode `int getNumberOfElectricCandles()` soll die Anzahl elektrischer Kerzen zurückgeben

## Hinweise zur Klasse Candle
- Die Methode `void lightACandle()` soll die Kerze "entzünden"
- Die Methode `void turnOffACandle()` soll die Kerze "ausmachen"

## Hinweise zur Klasse ElectricCandle
- Der Konstruktor soll die Energie (`power`) auf den Wert _100_ setzen
- Die Methode `void lightACandle()` soll die elektrische Kerze "entzünden", wenn diese noch über Energie verfügt und die Energie um den Wert _10_ reduzieren
- Die Methode `void recharge()` soll die Energie der elektrische Kerze wieder auf den Wert _100_ setzen
