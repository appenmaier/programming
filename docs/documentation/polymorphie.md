---
title: Polymorphie
description: ""
sidebar_position: 180
tags: [polymorphie, upcast, downcast]
---

Unter Polymorphie (griechisch für Vielgestaltigkeit) versteht man, dass eine Referenzvariable zur Laufzeit durch Typumwandlung Referenzen auf Objekte unterschiedlicher Klassen besitzen kann und dass dadurch unterschiedliche Methodenimplementierungen aufgerufen 
werden können. Man spricht in diesem Zusammenhang auch vom **statischen Datentyp einer Referenzvariablen** (der zur Designzeit festgelegt wird) und vom **dynamischen Datentyp einer Referenzvariablen** (der zur Laufzeit zugewiesen wird). Der statische Typ legt 
fest, welche Methoden aufgerufen werden können, der dynamische, welche Methodenimplementierung aufgerufen wird. Die Typumwandlung von der abgeleiteten Unterklasse zur Oberklasse bezeichnet man als **Upcast**, die Rückumwandlung als **Downcast**.


## Upcast
Beim Upcast wird die Objektreferenz der Unterklasse in eine Objektreferenz der Oberklasse umgewandelt.

```java
public class SuperClass { }

public class SubClass extends SuperClass { }

public class MainClass {

    public static void main(String[] args) {
        SuperClass superClass;
        SubClass subClass = new SubClass();
        superClass = subClass; // Upcast
    }
  
}
```

## Downcast
Beim Downcast wird die Objektreferenz der Oberklasse in eine Objektreferenz der Unterklasse umgewandelt. Im Gegensatz zum Upcast muss bei einem Downcast der Typ explizit angegeben werden. Der Downcast einer nicht zuweisungskompatiblen Referenz führt zu einer 
`ClassCastException`.

```java
public class SuperClass { }

public class SubClass extends SuperClass { }

public class MainClass {

    public static void main(String[] args) {
        SuperClass superClass;
        SubClass subClass = new SubClass();
        superClass = subClass; // Upcast
        subClass = (SubClass) superClass; // Downcast
    }
  
}
```

## Der instanceof-Operator
Mit dem Operator `instanceof` kann zur Laufzeit geprüft werden, ob eine Objektreferenz zuweisungskompatibel zu einer Klasse ist. Eine Objektreferenz ist dann zuweisungskompatibel zu einer Klasse, wenn die Klasse des referenzierten Objektes in einer 
Vererbungsbeziehung zur Klasse steht.

```java
public class SuperClass { }

public class SubClass extends SuperClass { }

public class MainClass {

    public static void main(String[] args) {
        SuperClass superClass;
        SubClass subClass = new SubClass();
        superClass = subClass; // Upcast
        if (superClass instanceof SubClass) {
            subClass = (SubClass) superClass; // Downcast
        }
    }
  
}
```

Seit Java 16 ermöglicht der Mustervergleich bei `instanceof` das Vermeiden notwendiger Typumwandlungen und sorgt gleichzeitig für eine sicherere Programmierung.

```java
public class SuperClass { }

public class SubClass extends SuperClass { }

public class MainClass {

    public static void main(String[] args) {
        SuperClass superClass;
        SubClass subClass = new SubClass();
        superClass = subClass; // Upcast
        if (superClass instanceof SubClass s) { // Downcast
        }
    }
  
}
```
