---
title: Warenkorb
description: ''
tags: [records, inner-classes, generics]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine ausführbare Klasse und/oder eine Testklasse.

## Klassendiagramm
![image](https://user-images.githubusercontent.com/47243617/208896229-0e69e1a8-5419-4516-ae3f-eb98b49f26bc.png)

## Allgemeine Hinweise
- Aus Gründen der Übersicht werden im Klassendiagramm keine Getter und Object-Methoden dargestellt
- So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die Object-Methoden wie gewohnt implementiert werden

## Hinweis zur Klasse Item
Die Methode `double getSubTotal()` soll die Zwischensumme des Warenkorbeintrags gemäß der Formel _Produktpreis * Anzahl_ zurückgeben.

## Hinweise zur Klasse ShoppingCart
- Die Methode `void addItem(value: T, amount: int)` soll den Einträgen des Warenkorbs (`items`) den eingehenden Wert und die eingehende Anzahl als Eintrag hinzufügen
- Die Methode `double getTotal()` soll die gesamtsumme des Warenkorbeintrags zurückgeben

## Hinweise zur Klasse User
- Die Methode `void addProductToShoppingCart(product: Product, amount: int)` soll dem Warenkorb (`shoppingCart`) das eingehende Produkt und die eingehende Anzahl als 
Eintrag hinzufügen
- Die Methode `void removeProductFromShoppingCart(product: Product)` soll das eingehende Produkt aus dem Warenkorb (`shoppingCart`) entfernen
- Die Methode `void clearShoppingCart()` soll alle Einträge des Warenkorbs (`shoppingCart`) entfernen
