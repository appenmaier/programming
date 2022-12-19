---
title: Warenkorb
description: ''
tags: [inner-classes, generics]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine ausführbare Klasse und/oder eine Testklasse.

## Klassendiagramm
![image](https://user-images.githubusercontent.com/47243617/208393768-1a5ba140-7fde-49a8-ad27-26d1d58b48e5.png)

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
