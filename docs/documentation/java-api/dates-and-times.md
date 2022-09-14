---
title: Datums- und Zeitangaben
description: ""
sidebar_position: 20
tags: [datum, zeit]
---

Die Klasse `LocalDateTime` liefert alle relevanten Informationen zum fast weltweit verwendeten Kalendersystem ISO-8601 (gregorianischer Kalender).

```java
public class MainClass {

    public static void main(String[] args) {
        LocalDateTime now = LocalDateTime.now();

        System.out.println("Jahr: " + now.getYear());
        System.out.println("Monat: " + now.getMonth());
        System.out.println("Tag: " + now.getDayOfMonth());
    }

}
```

Neben den print-Methoden des Standard-Ausgabestroms `System.out` besitzt die Klasse `System` auch die Methode `currentTimeMillis()`, die die Differenz in Millisekunden zwischen der aktuellen Systemzeit und dem Nullpunkt zurückgibt.


```java
public class MainClass {

    public static void main(String[] args) {
        long timeInMilliseconds = System.currentTimeMillis();    
        System.out.println(timeInMilliseconds);
    }

}
```

:::note Hinweis
Der festgelegte Nullpunkt ist der 1. Januar 1970, 0 Uhr.
:::