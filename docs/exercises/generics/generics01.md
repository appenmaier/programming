---
title: Generics 01
---

import Exercise from '@site/src/components/Exercise';

- Erstelle die Klassen `Bottle`, `BeerBottle`, `WineBottle` und `Crate` anhand
  des abgebildeten Klassendiagramms
- Erstelle eine ausführbare Klasse, welche eine Getränkiste sowie mehrere
  Flaschen erzeugt und die Flaschen in die Getränkekiste stellt

## Klassendiagramm

![image](https://user-images.githubusercontent.com/47243617/179726347-0d746c34-ca62-4624-baa6-f47f12a8d960.png)

## Hinweise zur Klasse BeerBottle

- Die Methode `void chugALug()` soll den Text "Ex und Hopp" auf der Konsole
  ausgeben

## Hinweise zur Klasse Crate

- Die Methode `void insertBottle(Bottle, int)` soll eine Flasche in eine der 6
  Getränkefächer einfügen
- Die Methode `Bottle takeBottle(int)` soll die Flasche des entsprechenden
  Getränkefachs zurückgeben

<Exercise pullRequest="52" branchSuffix="generics/01" />
