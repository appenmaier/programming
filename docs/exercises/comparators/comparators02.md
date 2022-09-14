---
title: Übungsaufgabe Comparators02
---

- Erstelle die Klasse `CoordinateComparator` anhand des abgebildeten Klassendiagramms
- Passe die ausführbare Klasse aus Übungsaufgabe [Comparators01](comparators01.md) so an, dass die Koordinatenliste mit Hilfe der Klasse `CoordinateComparator` sortiert wird

## Klassendiagramm
![image](https://user-images.githubusercontent.com/47243617/179708340-78b63f31-6a3f-4790-9bbb-d60af5cd01a7.png)

## Hinweis zur Klasse CoordinateComparator
Die Methode `int compare(Coordinate, Coordinate)` soll zwei eingehende Koordinaten anhand ihrer jeweiligen Distanz zum Nullpunkt vergleichen. Ist die Distanz der ersten Koordinate zum Nullpunkt kleiner als bzw. größer als bzw. gleich die der zweiten Koordinate, 
soll der Wert -1 bzw. 1 bzw. 0 zurückgegeben werden.
