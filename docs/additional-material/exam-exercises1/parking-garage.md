---
title: Tiefgarage
description: ''
tags: [oo, inheritance, polymorphy]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine ausführbare Klasse. So nicht anders angegeben, sollen Konstruktoren, Setter, Getter und die Object-Methoden wie üblich implementiert werden.

## Klassendiagramm
![image](https://user-images.githubusercontent.com/47243617/208439376-6c80fd6d-e822-454e-b501-7706cba4359c.png)

## Hinweise zur Klasse ParkingGarage
- Die Methode `boolean parkIn(car: Car, parkingSpotNumber: int` soll das eingehende Fahrzeug auf dem Parkplatz mit der eingehenden Parkplatznummer "parken", falls dieser
frei ist. In diesem Fall soll der Wert `true` zurückgegeben werden, andernfalls der Wert `false`
- Die Methode `boolean parkOut(car: Car)` soll das eingehende Auto "ausparken", falls dieses in der Tiefgarage steht. In diesem Fall soll der Wert `true` zurückgegeben
werden, andernfalls der Wert `false`
- Die Methode `int getNextFreeParkingSpotNumber()` soll die Nummer des nächsten freien Parkplatzes zurückgeben
