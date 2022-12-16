---
title: Exceptions01
description: ''
---

import Exercise from '@site/src/components/Exercise';

- Passe die Klasse `Vehicle` aus Übungsaufgabe
  [Interfaces01](../interfaces/interfaces01) anhand des abgebildeten
  Klassendiagramms an und erstelle die Ausnahmenklasse `InvalidValueException`
- Passe die ausführbare Klasse aus Übungsaufgabe
  [Interfaces01](../interfaces/interfaces01) so an, dass sie fehlerfrei
  ausgeführt werden kann

## Klassendiagramm
![image](https://user-images.githubusercontent.com/47243617/208109553-570d92b7-6d00-419d-bbe7-ce448541fd15.png)

## Hinweise zur Klasse Vehicle

- In der Methode `void accelerate(value: int)` soll bei einem eingehenden Wert kleiner
  gleich Null die Ausnahme `InvalidValueException` ausgelöst werden
- In der Methode `void brake(value: int)` soll bei einem eingehenden Wert kleiner
  gleich Null die Ausnahme `InvalidValueException` ausgelöst werden

<Exercise pullRequest="49" branchSuffix="exceptions/01" />
