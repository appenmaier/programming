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
![image](https://user-images.githubusercontent.com/47243617/208110518-3bfb7626-0865-4c4a-a49b-ebcd3448e052.png)

## Hinweise zur Klasse Vehicle

- In der Methode `void accelerate(value: int)` soll bei einem eingehenden Wert kleiner
  gleich Null die Ausnahme `InvalidValueException` ausgelöst werden
- In der Methode `void brake(value: int)` soll bei einem eingehenden Wert kleiner
  gleich Null die Ausnahme `InvalidValueException` ausgelöst werden

<Exercise pullRequest="49" branchSuffix="exceptions/01" />
