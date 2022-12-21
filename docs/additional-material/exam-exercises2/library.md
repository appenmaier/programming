---
title: Bibliothek
description: ''
tags: [inheritance, polymorphy, exceptions, records, maps]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine ausführbare Klasse und/oder eine Testklasse.

## Klassendiagramm
![image](https://user-images.githubusercontent.com/47243617/208895992-18ff0901-0e09-40a6-847e-44a9d2945eff.png)

## Allgemeine Hinweise
- Aus Gründen der Übersicht werden im Klassendiagramm keine Getter und Object-Methoden dargestellt
- So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die Object-Methoden wie gewohnt implementiert werden
- Die statische Methode `UUID randomUUID()` der Klasse `UUID` gibt eine zufällig erstellte UUID zurück

## Hinweis zur Klasse Book
Der Konstruktor soll alle Attribute initialisieren.

## Hinweise zur Klasse Library
- Die Methode `void addBook(book: Book)` soll der Bücherliste (`books`) das eingehende Buch hinzufügen
- Die Methode `Book getBookByTitle(title: String)` soll das Buch zum eingehenden Titel zuurückgeben
- Die Methode `ArrayList<PaperBook> getPaperBooksByStatus(status: Status)` soll alle gedruckten Bücher zum eingehenden Status zurückgeben
