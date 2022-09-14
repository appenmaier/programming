---
title: Übungsaufgabe UnitTests03
---

Erstelle die Klasse `TelephoneBookTest` anhand des abgebildeten Klassendiagramms.

## Klassendiagramm
![image](https://user-images.githubusercontent.com/47243617/181770524-bef4ba8e-a5cd-4d4a-8f4b-9c022c105650.png)

## Hinweise zur Klasse `TelephoneBookTest`
- Die Lebenszyklus-Methode `void setUp()` soll ein Telefonbuch samt dazugehöriger Einträge erzeugen
- Die Testmetode `void testAddEntry()` soll prüfen, ob nach dem Ausführen der Methode `void addEntry(Person, TelephoneNumber)` mit einer Person, zu der es bereits einen Eintrag im Telefonbuch gibt, die Telefonnummer aktualisiert wurde
- Die Testmethode `void testGetTelephoneNumberByName1()` soll prüfen, ob beim Ausführen der Methode `TelephoneNumber getTelephoneNUmberByName(String)` mit einem Namen, zu dem es eine entsprechende Person im Telefonbuch gibt, die dazugehörige Telefonnummer zurückgegeben wird 
- Die Testmethode `void testGetTelephoneNumberByName2()` soll prüfen, ob beim Ausführen der Methode `TelephoneNumber getTelephoneNUmberByName(String)` mit einem Namen, zu dem es keine entsprechende Person im Telefonbuch gibt, der Wert `null` zurückgegeben wird 

## Hinweis
Verweden die Klasse `TelephoneBook` aus Übungsaufgabe [Maps01](../maps/maps01.md).