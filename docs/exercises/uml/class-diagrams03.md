---
title: Übungsaufgabe ClassDiagrams03
---

- Passe die Klasse `Creature` aus Übungsaufgabe [OO06](../oo/oo06.md) anhand des abgebildeten Klassendiagramms an und Erstelle die Klasse `CreatureGame`
- Erstelle eine ausführbare Klasse, welche einen Kampf zwischen zwei Kreaturen simuliert

## Klassendiagramm
![image](https://user-images.githubusercontent.com/47243617/177834012-3acc46b6-fd7d-4ed4-b82a-a965de5abb0d.png)
 
## Hinweise zur Klasse Creature
- Passe die Methode `boolean attack(Creature)` so an, dass der Rückgabewert `true` ist, wenn die Lebenspunkte der angegriffenen Kreatur kleiner gleich Null sind, bzw. `false`, wenn nicht
- Die Methode `void print()` soll alle Attribute auf der Konsole ausgeben

## Hinweise zur Klasse CreatureGame 
- Der Konstruktor soll alle Attribute initialisieren
- Die Methode `void simulateFight()` soll die beiden Kreaturen sich so lange gegenseitig angreifen lassen, bis eine der Kreaturen "stirbt"
- Die Methode `boolean move(Creature, Creature)` soll eine Kreatur die andere angreifen lassen und den Rückgabewert `true` liefern, wenn die angegriffene Kreatur "stirbt", bzw. `false`, wenn nicht
- Die Methode `void print()` soll alle Attribute auf der Konsole ausgeben

## Konsolenausgabe

```markdown
Runde 1: Zombie (2 - 10), Vampir (4 - 6)
Zombie greift Vampir an und erzielt 2 Schaden
Vampir hat noch 4 Lebenspunkte
Vampir greift Zombie an und erzielt 4 Schaden
Zombie hat noch 6 Lebenspunkte
…
Runde 3: Zombie (2 - 2), Vampir (4 - 2)
Zombie greift Vampir an und erzielt 2 Schaden
Vampir wurde vernichtet
```
