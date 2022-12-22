---
title: Bibliothek
description: ''
tags: [inheritance, polymorphy, exceptions, records, maps]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine ausführbare Klasse und/oder eine Testklasse.

## Klassendiagramm
![image](https://user-images.githubusercontent.com/47243617/209169836-15f70d65-2514-439a-bc4a-7321f08121a6.png)

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
