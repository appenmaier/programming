---
title: Tiefgarage
description: ''
tags: [oo, inheritance, polymorphy]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine ausführbare Klasse.

## Klassendiagramm
![image](https://user-images.githubusercontent.com/47243617/208894611-09b0b3c4-b755-4a38-bf57-0419014d3b01.png)

## Allgemeine Hinweise
- Aus Gründen der Übersicht werden im Klassendiagramm keine Getter und Object-Methoden dargestellt
- So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die Object-Methoden wie gewohnt implementiert werden

## Hinweise zur Klasse ParkingGarage
- Die Methode `boolean parkIn(car: Car, parkingSpotNumber: int)` soll das eingehende Fahrzeug auf dem Parkplatz mit der eingehenden Parkplatznummer "parken", falls dieser
frei ist. In diesem Fall soll der Wert `true` zurückgegeben werden, andernfalls der Wert `false`
- Die Methode `boolean parkOut(car: Car)` soll das eingehende Auto "ausparken", falls dieses in der Tiefgarage steht. In diesem Fall soll der Wert `true` zurückgegeben
werden, andernfalls der Wert `false`
- Die Methode `int getNextFreeParkingSpotNumber()` soll die Nummer des nächsten freien Parkplatzes zurückgeben
