---
title: Verzweigungen
description: ""
sidebar_position: 10
tags: [verzweigung]
---

Mit Hilfe von Verzweigungen können unterschiedliche Anweisungsblöcke ausgeführt werden.

## Einfache Verzweigungen
Die if-Verzweigung ist eine Anweisung, die abhängig von einer Bedingung zwischen unterschiedlichen Anweisungsblöcken auswählt: Ist die Bedingung wahr, wird der Anweisungsblock direkt nach der Bedingung ausgeführt, ansonsten wird der Anweisungsblock nach `else` 
ausgeführt.

```java
public class MainClass {

    public static void main(String[] args) {
        int a = 3, b = 4, c;

        if (a > b) {
            c = a - b;
        } else {
            c = b - a;
        }
    }

}
```

:::note Hinweis
Der else-Zweig ist optional, kann also weggelassen werden.
:::

## Kaskadierte Verzweigungen
Mehrfachverzweigungen können mit Hilfe einer if-else-if-Leiter abgebildet werden. Die if-else-if-Leiter verschachtelt mehrere if-Anweisungen zu einer sogenannten kaskadierten Verzweigung.

```java
public class MainClass {

    public static void main(String[] args) {
        int amount = 6;

        if (amount >= 10) {
            System.out.println("viel");
        } else if (amount == 0) {
            System.out.println("nichts");
        } else if (amount > 0 && amount <= 5) {
            System.out.println("wenig");
        } else if (amount < 0) {
            System.out.println("nicht definiert");
        } else {
            System.out.println("irgendwas zwischen wenig und viel");
        }
    }

}
```

## Bedingte Zuweisungen
Wird eine if-Verzweigung für eine Wertzuweisung verwendet, spricht man von einer bedingten Zuweisung. Zusätzlich zur ausführlichen Schreibweise existiert für bedingte Zuweisungen auch eine Kurzschreibweise. 

```java
public class MainClass {

    public static void main(String[] args) {
        int x = 1;
        int y = 2;
        int z;

        /* ausführliche Schreibweise */
        if (x > y) {
            z = 3;
        } else {
            z = 4;
        }

        /* Kurzschreibweise */
        z = (x > y) ? 3 : 4;
    }

}
```

:::danger Hinweis
Die Kurzschreibweise sollte verantwortungsvoll verwendet werden, da die Lesbarkeit dadurch eventuell erschwert wird.
:::

## Mehrfachverzweigungen
Mehrfachverzweigungen können entweder mit Hilfe von if-else-if-Leitern oder mit Hilfe der switch-case-Anweisung realisiert werden. Tritt ein Fall ein, werden alle Anweisungen bis zum nächsten `break` ausgeführt. Durch Weglassen von `break` können 
unterschiedliche Fälle gleich behandelt werden. Der default-Block wird immer dann ausgeführt, wenn keiner der aufgeführten Fälle eintritt.

```java
public class MainClass {

    public static void main(String[] args) {
        String unit = "kg";
        switch (unit) {
        case "l":
        case "L":
            System.out.println("Liter");
            break;
        case "kg":
        case "KG":
            System.out.println("Kilogramm");
            break;
        case "pc":
        case "PC":
            System.out.println("Stück");
            break;
        default:
            break;
        }
    }

}
```

Seit Java 14 beheben Switch-Ausdrücke einige Ungereimtheiten der klassischen switch-case-Anweisung und ermöglichen eine elegantere Syntax.

```java
public class MainClass {

    public static void main(String[] args) {
        String unit = "l";

        String unitText = switch (unit) {
        case "l", "L" -> "Liter";
        case "kg", "KG" -> "Kilogramm";
        case "pc", "PC" -> "Stück";
        default -> "";
        };

        System.out.println(unitText);
    }

}
```
