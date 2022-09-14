---
title: Übungsaufgabe Polymorphie01
---

- Passe die Klasse `Vehicle` aus Übungsaufgabe [Enumerations01](../enumerations/enumerations01.md) anhand des abgebildeten Klassendiagramms an und erstelle die Klassen `Car` und `Truck`
- Passe die ausführbare Klasse aus Übungsaufgabe [Enumerations01](../enumerations/enumerations01.md) so an, dass keine Fahrzeuge, sondern Autos und Lastwagen erzeugt und ausgegeben werden

## Klassendiagramm
![image](https://user-images.githubusercontent.com/47243617/170883749-a72e4bd8-4059-432e-a648-f5f6bdbfc6ef.png)

## Hinweise zur Klasse Car
- Der Konstruktor soll alle Attribute initialisieren
- Die Methode `void doATurboBoost()` soll die Geschwindigkeit verdoppeln
- Die Methode `void print()` soll alle Attribute auf der Konsole ausgeben

## Hinweise zur Klasse Truck
- Der Konstruktor soll alle Attribute initialisieren
- Die Methode `void transform()` soll das Attribut isTransformed invertieren
- Die Methode `void print()` soll alle Attribute auf der Konsole ausgeben

## Konsolenausgabe

```markdown
Anzahl Fahrzeuge: 0
Anzahl Fahrzeuge: 3
Porsche 911 (Elektro, 2 Sitzplätze)
MAN TGX (Diesel, 20t)
Opel Zafira Life (Diesel, 7 Sitzplätze)
Porsche 911 beschleunigt auf 50 km/h
MAN TGX verwandelt sich in einen Autobot
Porsche 911 macht einen TurboBoost und beschleunigt auf 100 km/h
MAN TGX verwandelt sich in einen Lastwagen zurück 
```
