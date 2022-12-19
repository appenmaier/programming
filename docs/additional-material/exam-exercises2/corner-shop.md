---
title: Tante-Emma-Laden
description: ''
tags: [polymorphy, interfaces, comparators, exceptions]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine ausführbare Klasse und/oder eine Testklasse.

## Klassendiagramm
![image](https://user-images.githubusercontent.com/47243617/208393275-41eac2d1-4e35-448d-8329-b3852fb795da.png)

## Hinweis zur Klasse Goods
Die Methode `int compareTo(other: Goods)` soll so implementiert werden, dass damit Waren aufsteigend nach ihrer Beschreibung sortiert werden können.

## Hinweise zur Klasse CornerShop
- Die Methode `int getAmountByDescription(description: String)` soll die Anzahl Waren zur eingehenden Warenbeschreibung zurückgeben
- Die Methode `void buyGoods(goods: Goods, amount: int)` soll die eingehende Ware im Lager (`store`) um die eingehende Anzahl erhöhen
- Die Methode `void sellGoods(goods: Goods, amount: int)` soll die eingehende Ware im Lager (`store`) um die eingehende Anzahl reduzieren. Für den Fall, dass keine
ausreichende Anzahl an Waren vorhanden ist, soll die Ausnahme `OutOfStockException` ausgelöst werden
