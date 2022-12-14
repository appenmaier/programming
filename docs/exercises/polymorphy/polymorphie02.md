---
title: Polymorphy 02
---

import Exercise from '@site/src/components/Exercise';

- Erstelle die Klasse `Rental` anhand des abgebildeten Klassendiagramms
- Passe die ausführbare Klasse aus Übungsaufgabe
  [Polymorphie01](polymorphy01.md) so an, dass alle erzeugten Autos und
  Lastwagen in einer Fahrzeugvermietung abgelegt und alle Attribute der
  Fahrzeugvermietung ausgegeben werden

## Klassendiagramm

![image](https://user-images.githubusercontent.com/47243617/170883813-686bec70-7bbf-44ac-9e30-db42f366e44c.png)

## Hinweise zur Klasse Rental

- Der Konstruktor soll alle Attribute initialisieren
- Die Methode `void addVehicle(Vehicle)` soll der Fahrzeugvermietung ein
  Fahrzeug hinzufügen
- Die Methode `void addAllVehicles(Vehicle...)` soll der Fahrzeugvermietung
  mehrere Fahrzeug hinzufügen
- Die Methode `void print()` soll alle Attribute auf der Konsole ausgeben

## Konsolenausgabe

```console
Fahrzeugvermietung Müller
Unsere Fahrzeuge:
Porsche 911 (Elektro, 2 Sitzplätze)
MAN TGX (Diesel, 20t)
Opel Zafira Life (Diesel, 7 Sitzplätze)
```

<Exercise pullRequest="42" branchSuffix="polymorphy/02" />
