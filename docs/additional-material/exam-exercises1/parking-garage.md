---
title: Tiefgarage
description: ''
tags: []
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine ausführbare Klasse.

## Klassendiagramm
![image](https://user-images.githubusercontent.com/47243617/208439376-6c80fd6d-e822-454e-b501-7706cba4359c.png)

## Hinweise zur Klasse ParkingGarage
- Der Konstruktor soll alle Attribute initialisieren
- Die Methode `boolean parkIn(car: Car, parkingSpotNumber: int` soll das eingehende Fahrzeug auf dem Parkplatz mit der eingehenden Parkplatznummer "parken", falls dieser
frei ist. In diesem Fall soll der Wert `true` zurückgegeben werden, andernfalls der Wert `false`
- Die Methode `boolean parkOut(car: Car)` soll das eingehende Auto "ausparken", falls dieses in der Tiefgarage steht. In diesem Fall soll der Wert `true` zurückgegeben
werden, andernfalls der Wert `false`
- Die Methode `int getNextFreeParkingSpotNumber()` soll die Nummer des nächsten freien Parkplatzes zurückgeben
