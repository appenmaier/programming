---
title: Exceptions 01
---

import Exercise from '@site/src/components/Exercise';

- Passe die Klasse `Vehicle` aus Übungsaufgabe
  [Interfaces01](../interfaces/interfaces01) anhand des abgebildeten
  Klassendiagramms an und erstelle die Ausnahmenklasse `InvalidValueException`
- Passe die ausführbare Klasse aus Übungsaufgabe
  [Interfaces01](../interfaces/interfaces01) so an, dass sie fehlerfrei
  ausgeführt werden kann

## Klassendiagramm

![image](https://user-images.githubusercontent.com/47243617/176827972-1ad44ba0-46ec-4f21-933b-1a6b1f042e87.png)

## Hinweise zur Klasse Vehicle

- In der Methode `void accelerate(int)` soll bei einem eingehenden Wert kleiner
  gleich Null die Ausnahme `InvalidValueException` ausgelöst werden
- In der Methode `void brake(int)` soll bei einem eingehenden Wert kleiner
  gleich Null die Ausnahme `InvalidValueException` ausgelöst werden

<Exercise pullRequest="49" branchSuffix="exceptions/01" />
