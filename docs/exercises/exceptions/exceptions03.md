---
title: Übungsaufgabe Exceptions03
---

- Passe die Klasse `Employee` aus Übungsaufgabe [ClassDiagrams04](../uml/class-diagrams04) anhand des abgebildeten Klassendiagramms an und erstelle die Ausnahmenklassen `SalaryIncreaseTooHighException` und `SalaryDecreaseException`
- Passe die ausführbare Klasse aus Übungsaufgabe [ClassDiagrams04](../uml/class-diagrams04) so an, dass ein oder mehrere Mitarbeiter eine Gehaltserhöhung bekommen

## Klassendiagramm
![image](https://user-images.githubusercontent.com/47243617/170884636-d90fbe5c-62b8-4ab2-b301-1d035e969c75.png)

## Hinweis zur Klasse Employee
In der Methode `void setSalary(int)` soll bei einer Gehaltserhöhung größer 10% die Ausnahme `SalaryIncreaseTooHighException` und bei einer Gehaltsverringerung die Ausnahme `SalaryDecreaseException` ausgelöst werden.
