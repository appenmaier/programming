---
title: Bibliothek
description: ''
tags: [inheritance, polymorphy, exceptions, records, maps]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine ausführbare Klasse und/oder eine Testklasse.

## Klassendiagramm
![image](https://user-images.githubusercontent.com/47243617/208609983-16b5d669-5eab-4425-8429-e2e491eec021.png)

## Hinweis zur Klasse Book
Der Konstruktor soll alle Attribute initialisieren.

## Hinweise zur Klasse Library
- Die Methode `void addBook(book: Book)` soll der Bücherliste (`books`) das eingehende Buch hinzufügen
- Die Methode `Book getBookByTitle(title: String)` soll das Buch zum eingehenden Titel zuurückgeben
- Die Methode `ArrayList<PaperBook> getPaperBooksByStatus(status: Status)` soll alle gedruckten Bücher zum eingehenden Status zurückgeben

## Hinweis
Die statische Methode `UUID randomUUID()` der Klasse `UUID` gibt eine zufällig erstellte UUID zurück.
