---
title: Datenklassen (Records)
description: ''
sidebar_position: 250
tags: []
---

Datenklassen sind Klassen die lediglich der Kapselung unveränderlicher Daten dienen. Daher bestehen Datenklassen häufig aus Boilerplate-Code. Unter Boilerplate-Code versteht man Anweisungblöcke, die an verschiedenen Stellen mehr oder weniger identisch verwendet 
werden.

```java
public final class Student {

    public int id;
    public String name;

    public Student (int id, String name) {
        this.id = id;
        this.name = name;
    }
  
    public int getId() {
        return id;
    }
  
    public String getName() {
        return name;
    }
  
    public final boolean equals(Object o) { }
    public final int hashCode() { }
    public final String toString() { }

}
```

Seit Java 16 bieten Records die Möglichkeiten, Datenklassen einfach umzusetzen. Records sind spezielle Klassen, die anhand der festgelegten Parameter entsprechende Konstruktoren, Getter sowie Implementierungen für die Methoden `boolean equals(Object)`, 
`int hashCode()` und `String toString()` erzeugen. Das Schlüsselwort für Records lautet `record`.

```java
public record(int id, String name ) { }
```

:::danger Hinweis
Da Records von der Klasse `Record` abgeleitet sind, können sie nicht von einer weiteren Klasse abgeleitet werden. Allerdings können Records, wie andere Klassen auch, beliebig viele [Schnittstellen](interfaces.md) implementieren.
:::
