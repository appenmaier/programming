---
title: Personalverwaltung
description: ''
tags: [exceptions, records, maps]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine ausführbare Klasse und/oder eine Testklasse.

## Klassendiagramm
![image](https://user-images.githubusercontent.com/47243617/207314769-6ce0ad07-7661-4935-a244-5f27136078fe.png)

## Hinweise zur Klasse HumanResources
- Die Methode `void addTelephoneNumber(telephoneNumber: TelephoneNumber, person: Person)` soll dem Telefonbuch (`telephoneBook`) die eingehende Telefonnummer als Schlüssel
 sowie die eingehende Person als Wert hinzufügen
- Die Methode `void addStaff(person: Person)` soll der Personalliste (`staff`) die eingehende Person hinzufügen. Für den Fall, dass diese Person bereits in der 
Personalliste vorhanden ist, soll die Ausnahme `DuplicateException` ausgelöst werden
- Die Methode `ArrayList<TelephoneNumber> getTelephoneNumbersByPersonId(id: int)` soll alle Telefonnummern zur eingehenden Personennummer zurückgeben
