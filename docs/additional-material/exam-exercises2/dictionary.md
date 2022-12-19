---
title: Wörterbuch
description: ''
tags: [interfaces, comparators, io-streams]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine ausführbare Klasse und/oder eine Testklasse.

## Klassendiagramm
![image](https://user-images.githubusercontent.com/47243617/208393410-50927e61-5679-46ae-bf17-d414eec1204f.png)

## Hinweis zur Klasse Word
Die Methode `int compareTo(other: Word)` soll so implementiert werden, dass damit Wörter aufsteigend nach ihrem Wert sortiert werden können.

## Hinweise zur Klasse Dictionary
- Die Methode `void addEntry(sourceWord: Word, targetWord: Word)` soll den Einträgen des Wörterbuches (`entries`) die eingehenden Wörter als Eintrag hinzufügen
- Die Methode `void importEntries(file: File)` soll den Einträgen des Wörterbuches (`entries`) die Wörter der eingehenden Datei als Einträge hinzufügen
- Die Methode `String getTranslation(word: String)` soll die Übersetzung zur eingehenden Zeichenkette zurückgeben. Für den Fall, dass keine Übersetzung vorhanden ist,
soll der Wert `null` zurückgegeben werden
