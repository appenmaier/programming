---
title: Maps 01
---

import Exercise from '@site/src/components/Exercise';

- Erstelle die Klassen `Person`, `TelephoneNumber` und `TelephoneBook` anhand
  des abgebildeten Klassendiagramms
- Erstelle eine ausführbare Klasse, welche ein Telefonbuch mit mehreren
  Einträgen erzeugt und zu eingegebenen Namen die dazugehörigen Telefonnummern
  auf der Konsole ausgibt

## Klassendiagramm

![image](https://user-images.githubusercontent.com/47243617/181770698-8ea1cbfc-0a61-4efb-99f4-8c068b3a8ff9.png)

## Hinweise zur Klasse TelephoneBook

- Die Methode `void addEntry(Person, TelephoneNumber)` soll einen Eintrag im
  Telefonbuch anlegen
- Die Methode `TelephoneNumber getTelephoneNumberByName(String)` soll die
  Telefonnummer zum eingehenden Namen zurückgeben

<Exercise pullRequest="59" branchSuffix="maps/01" />
