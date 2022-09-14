---
title: Übungsaufgabe ClassDiagrams04
---

- Erstelle die Klassen `Company`, `Employee` und `Person` anhand des abgebildeten Klassendiagramms
- Erstelle eine ausführbare Klasse, welche ein Unternehmen mit mehreren Mitarbeitern erzeugt und auf der Konsole ausgibt

## Klassendiagramm
![image](https://user-images.githubusercontent.com/47243617/170922615-9bdc8766-e496-45ef-9134-319291585d65.png)

## Hinweis zur Klasse Person
Der Konstruktor soll den Namen initialisieren.

## Hinweise zur Klasse Employee
- Der Konstruktor soll alle Attribute initialisieren
- Die Methode `String getName()` soll den Namen des Mitarbeiters zurückgeben
- Die Methode `void print()` soll alle Attribute auf der Konsole ausgeben

## Hinweise zur Klasse Company
- Der Konstruktor soll den Namen sowie die Mitarbeiterliste initialisieren
- Die Methode `void addEmployee()` soll der Mitarbeiterliste einen Mitarbeiter hinzufügen
- Die Methode `void print()` soll alle Attribute auf der Konsole ausgeben

## Konsolenausgabe

```markdown
Maier GmbH (5 Mitarbeiter)
1 - Max Schmid - 50000€
2 - Hans Müller - 75000€
3 - Lisa Meier - 40000€
4 - Peter Schneider - 55000€
5 - Miriam Albers - 90000€
```
