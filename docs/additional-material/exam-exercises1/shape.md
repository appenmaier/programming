---
title: Geometrische Form
description: ''
tags: []
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine ausführbare Klasse.

## Klassendiagramm
![image](https://user-images.githubusercontent.com/47243617/208437301-8e4b08d6-5137-44a0-a59d-e4166947e58a.png)

## Hinweise zur Klasse Shape
- Die Methode `double getArea()` soll den Wert _0_ zurückgeben
- Die Methode `double getCircumference()` soll den Wert _0_ zurückgeben

## Hinweise zur Klasse Circle
- Der Konstruktor soll alle Attribute initialisieren
- Die Methode `double getArea()` soll den Flächeninhalt gemäß der Formel _Pi * r * r_ berechnen und zurückgeben
- Die Methode `double getCircumference()` soll den Umfang gemäß der Formel _2 * Pi * r_ berechnen und zurückgeben

## Hinweise zur Klasse Rectangle
- Der Konstruktor soll alle Attribute initialisieren
- Die Methode `double getArea()` soll den Flächeninhalt gemäß der Formel _a * b_ berechnen und zurückgeben
- Die Methode `double getCircumference()` soll den Umfang gemäß der Formel _2 * a + 2 * b_ berechnen und zurückgeben

## Hinweis zur Klasse Square
Der Konstruktor soll alle Attribute initialisieren

## Hinweise zur Klasse ShapeReader
- Der Konstruktor soll alle Attribute initialisieren und der Formenliste (`shapes`) alle Formen der eingehenden Formenliste hinzufügen
- Die Methode `ArrayList<Circle> getCircles()` soll alle Kreise der Formenliste (`shapes`) zurückgeben
- Die Methode `ArrayList<Shape> getShapesWithMinArea(minArea: double)` soll alle Formen der Formenliste (`shapes`) zurückgeben, die mindestens den eingehenden
Flächeninhalt aufweisen

## Hinweis
Die statische Konstante `PI` der Klasse `Math` stellt die Kreiszahl Pi dar.
