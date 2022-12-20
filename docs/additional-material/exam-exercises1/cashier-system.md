---
title: Kassensystem
description: ''
tags: []
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine ausführbare Klasse.

## Klassendiagramm

## Hinweise zur Klasse Item
- Der Konstruktor soll alle Attribute initialisieren
- Die Methode `double getSubTotal()` soll die Zwischensumme gemäß der Formel _Anzahl * Preis_ zurückgeben

## Hinweise zur Klasse ShoppingCart
- Der Konstruktor soll alle Attribute initialisieren
- Die Methode `void createItem(goods: Goods, amount: int)` soll den Einträgen des Warenkorbs (`items`) die eingehende Ware und die eingehende Anzahl als Eintrag hinzufügen
- Die Methode `double getTotal()` soll die Gesamtsumme zurückgeben

## Hinweise zur Klasse CashierSystem
- Der Konstruktor soll alle Attribute initialisieren
- Die Methode `void login(id: int)` soll den Kassierer zur eingehenden Kassierernummer an der Kasse "registrieren"
- Die Methode `void createShoppingCart()` soll an der Kasse einen neuen Warenkorb erstellen
- Die Methode `void addItem(id: int, amount: int)` soll dem Warenkorb (`shoppingCart`) anhand der eingehenden Produktnummer und anhand der eingehenden Anzahl
einen neuen Warenkorbeintrag hinzufügen
- Die Methode `void printBon()` soll alle relevanten Informationen zum Warenkorb auf der Konsole ausgeben
