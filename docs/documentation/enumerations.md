---
title: Aufzählungen (Enumerations)
description: ''
sidebar_position: 150
tags: [enumerations]
---

Bei einer Aufzählung (Enumeration) handelt es sich um eine spezielle Klasse, von der nur eine vorgegebene, endliche Anzahl an Instanzen existiert. Diese Instanzen werden als **Aufzählungskonstanten** bezeichnet. Technisch gesehen handelt es sich bei 
Aufzählungskonstanten um öffentliche, statische Konstanten vom Typ der Aufzählung.

## Implementieren von Aufzählungen
Die Definition einer Aufzählung erfolgt analog zur Definition von Klassen, das Schlüsselwort hierfür lautet `enum`.

```java
public enum WeekDays {  

    MONDAY("Montag", true),
    TUESDAY("Dienstag", true),
    WEDNESDAY("Mittwoch", true),
    THURSDAY("Donnerstag", true),
    FRIDAY("Freitag", true),
    SATURDAY("Samstag", true),
    SUNDAY("Sonntag", false);
  
    private String description;
    private boolean isWorkingDay;
  
    WorkingDay(String description, boolean isWorkingDay) {
        this.description = description;
        this.isWorkingday = isWorkingDay;
    }
  
    public String getDescription() {
        return description;
    }
  
    public boolean getWorkingDay() {
        return isWorkingday;
    }

}
```

## Verwenden von Aufzählungen
Aufzählungen besitzen eine Reihe hilfreicher Methoden:
- Die statische Methode `T[] values()` gibt alle Aufzählunskonstanten als Feld zurück
- Die statische Methode `T valueOf()` gibt zu einer eingehenden Zeichenkette die dazugehörige Aufzählungskonstante zurück
- Die Methode `int ordinal()` gibt die Ordnungszahl der Aufzählungskonstanten zurück

```java
public class MainClass {

    public static void main(String[] args) {
        for (WeekDay w : WeekDay.values()) {
            System.out.println(w.ordinal());
        }
    }

}
```
