---
title: Übungsaufgabe Interfaces01
---

- Passe die Klasse `Rental` aus Übungsaufgabe [Polymorphie03](../polymorphie/polymorphie03) anhand des abgebildeten Klassendiagramms an und erstelle die Klasse `TravelAgency` sowie die Schnittstelle `Partner`
- Passe die ausführbare Klasse aus Übungsaufgabe [Polymorphie03](../polymorphie/polymorphie03) so an, dass ein Reisebüro erzeugt wird, dass diesem die Autovermietung hinzugefügt wird und dass alle Attribute des Reisebüros ausgegeben werden

## Klassendiagramm
![image](https://user-images.githubusercontent.com/47243617/170883385-dbd51dae-eeba-49f9-a6ca-a8714f1b994d.png)

## Hinweise zur Klasse TravelAgency
- Der Konstruktor soll alle Attribute initialisieren
- Die Methode `void addPartner(Partner)` soll dem Reisebüro einen Partner hinzufügen
- Die Methode `void print()` soll alle Attribute auf der Konsole ausgeben

## Konsolenausgabe

```markdown
Reisebüro Schmidt
Unsere Partner:
Fahrzeugvermietung Müller
Unsere Fahrzeuge:
Porsche 911 (Elektro, 2 Sitzplätze)
MAN TGX (Diesel, 20t)
Opel Zafira Life (Diesel, 7 Sitzplätze)
```
