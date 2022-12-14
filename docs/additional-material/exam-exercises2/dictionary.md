---
title: Wörterbuch
description: ''
tags: [interfaces, comparators]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine ausführbare Klasse und/oder eine Testklasse.

## Klassendiagramm
![image](https://user-images.githubusercontent.com/47243617/207316451-0891be90-28a3-4746-86fd-0f65711a2b40.png)

## Hinweis zur Klasse Word
Die Methode `int compareTo(other: Word)` soll so implementiert werden, dass damit Wörter aufsteigend nach ihrem Wert sortiert werden können.

## Hinweise zur Klasse Dictionary
- Die Methode `void addEntry(sourceWord: Word, targetWord: Word)` soll den Einträgen des Wörterbuches (`entries`) die eingehenden Wörter als Eintrag hinzufügen
- Die Methode `void importEntries(file: File)` soll den Einträgen des Wörterbuches (`entries`) die Wörter der eingehenden Datei als Einträge hinzufügen
- Die Methode `String getTranslation(word: String)` soll die Übersetzung zur eingehenden Zeichenkette zurückgeben. Für den Fall, dass keine Übersetzung vorhanden ist,
soll der Wert `null` zurückgegeben werden
