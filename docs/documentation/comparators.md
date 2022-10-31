---
title: Komparatoren
description: ''
sidebar_position: 220
tags: [comparators]
---

Mit Hilfe der Methode `int compareTo(T)` der Schnittstelle `Comparable<T>` bzw. der Methode `int compare(T, T)` der Schnittstelle `Comparator<T>` können Objekte einer Klasse miteinander verglichen werden. Der Rückgabewert beider Methoden gibt die Ordnung der zu 
vergleichenden Objekte an:
- Rückgabewert kleiner Null: das Vergleichsobjekt ist größer
- Rückgabewert gleich Null: beide Objekte sind gleich groß
- Rückgabewert größer Null: das Vergleichsobjekt ist kleiner

Objekte der Klasse `Foo` können durch die Implementierung der Methode `int compareTo(T)` der Schnittstelle `Comparable<T>` miteinander verglichen werden.

```java
public class Foo implements Comparable<Foo> {
    
    public String bar;
    
    @Override
    public int compareTo(Foo foo) {
        return bar.compareTo(foo.bar);
    }
    
}
```

In der main-Methode der Startklasse wird mit Hilfe der statischen Methode `void sort(List<T>)` der Klasse `Collections` eine Liste mit Objekten der Klasse `Foo` sortiert. Aufgrund der Implementierung der compareTo-Methode wird die Liste aufsteigend nach dem 
Attribut `bar` sortiert.

```java
public class MainClass {

    public static void main(String[] args) {
        ArrayList<Foo> foos = new Arraylist<>();
        ...
        Collections.sort(foos);
    }
    
}
```