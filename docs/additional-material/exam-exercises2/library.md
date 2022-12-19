---
title: Bibliothek
description: ''
tags: [polymorphy, exceptions]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine ausführbare Klasse und/oder eine Testklasse.

## Klassendiagramm
![image](https://user-images.githubusercontent.com/47243617/208377420-aafaf1b8-0873-45cd-91ae-38974ce8f700.png)

## Hinweis zur Klasse Book
Der Konstruktor soll alle Attribute initialisieren.

## Hinweise zur Klasse Library
- Die Methode `void addBook(book: Book)` soll der Bücherliste (`books`) das eingehende Buch hinzufügen
- Die Methode `Book getBookByTitle(title: String)` soll das Buch zum eingehenden Titel zuurückgeben
- Die Methode `ArrayList<PaperBook> getPaperBooksByStatus(status: Status)` soll alle gedruckten Bücher zum eingehenden Status zurückgeben

## Hinweis
Die statische Methode `UUID randomUUID()` der Klasse `UUID` gibt eine zufällig erstellte UUID zurück.
