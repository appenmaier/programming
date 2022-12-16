---
title: Comparators01
description: ''
---

import Exercise from '@site/src/components/Exercise';

- Erstelle die Klasse `Coordinate` anhand des abgebildeten Klassendiagramms
- Erstelle eine ausführbare Klasse, welche eine Koordinatenliste mit mehreren
  Koordinaten erzeugt, diese sortiert und anschließend auf der Konsole ausgibt

## Klassendiagramm
![image](https://user-images.githubusercontent.com/47243617/208048613-5e7964d2-b830-47d6-bc88-5d525fd31325.png)

## Hinweise zur Klasse Coordinate
- Die Methode `double getDistanceToOriginPoint()` soll die Distanz der
  Koordinate zum Nullpunkt zurückgeben
- Die Methode `int compareTo(o: Coordinate)` soll die Koordinate mit der
  eingehenden Koordinate anhand ihrer jeweiligen Distanz zum Nullpunkt
  vergleichen. Ist die Distanz der Koordinate zum Nullpunkt kleiner als bzw.
  größer als bzw. gleich die der eingehenden
  Koordinate, soll der Wert 1 bzw. -1 bzw. 0 zurückgegeben werden

## Hinweis
Die statische Methode `double hypot(x: double, y: double)` der Klasse `Math`
berechnet die Hypotenuse zum eingehenden X- und Y-Wert.

<Exercise pullRequest="47" branchSuffix="comparators/01" />
