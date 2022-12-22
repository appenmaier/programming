---
title: Wörterbuch
description: ''
tags: [interfaces, comparators, records, maps, io-streams]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine ausführbare Klasse und/oder eine Testklasse.

## Klassendiagramm
![image](https://user-images.githubusercontent.com/47243617/209169445-4e2b4675-0025-451c-96ea-aa7548cc5a57.png)

## Allgemeine Hinweise
- Aus Gründen der Übersicht werden im Klassendiagramm keine Getter und Object-Methoden dargestellt
- So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die Object-Methoden wie gewohnt implementiert werden

## Hinweis zur Klasse Word
Die Methode `int compareTo(other: Word)` soll so implementiert werden, dass damit Wörter aufsteigend nach ihrem Wert sortiert werden können.

## Hinweise zur Klasse Dictionary
- Die Methode `void addEntry(sourceWord: Word, targetWord: Word)` soll den Einträgen des Wörterbuches (`entries`) die eingehenden Wörter als Eintrag hinzufügen
- Die Methode `void importEntries(file: File)` soll den Einträgen des Wörterbuches (`entries`) die Wörter der eingehenden Datei als Einträge hinzufügen
- Die Methode `String getTranslation(word: String)` soll die Übersetzung zur eingehenden Zeichenkette zurückgeben. Für den Fall, dass keine Übersetzung vorhanden ist,
soll der Wert `null` zurückgegeben werden
