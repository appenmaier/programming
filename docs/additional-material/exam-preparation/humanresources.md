---
title: Personalverwaltung
description: ''
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine ausführbare Klasse und/oder eine Testklasse.

## Klassendiagramm
![image](https://user-images.githubusercontent.com/47243617/207310849-7c859e3f-9c8f-4817-be87-375cfc96bc3a.png)

## Hinweise zur Klasse HumanResources
- Die Methode `void addTelephoneNumber(telephoneNumber: TelephoneNumber, person: Person` soll dem Telefonbuch (`telephoneBook`) die eingehende Telefonnummer als Schlüssel
 sowie die eingehende Person als Wert hinzufügen
- Die Methode `void addStaff(person: Person)` soll der Personalliste (`staff`) die eingehende Person hinzufügen. Für den Fall, dass diese Person bereits in der 
Personalliste vorhanden ist, soll die Ausnahme `DuplicateException` ausgelöst werden
- Die Methode `ArrayList<TelephoneNumber> getTelephoneNumbersByPersonId(id: int)` soll alle Telefonnummern zur eingehenden Personennummer zurückgeben
