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

```java title="MainClass.java" showLineNumbers
public class Container implements Comparable<Container> {

  private String value;

  public Container(String value) {
    this.value = value;
  }

  public void setValue(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public int compareTo(Container other) {
    return value.compareTo(other.value);
  }

}
```

In der main-Methode der Startklasse wird mit Hilfe der statischen Methode `void sort(List<T>)` der Klasse `Collections` eine Liste mit Objekten der Klasse `Foo` sortiert. Aufgrund der Implementierung der compareTo-Methode wird die Liste aufsteigend nach dem 
Attribut `bar` sortiert.

```java title="MainClass.java" showLineNumbers
public class MainClass {

  public static void main(String[] args) {
    ArrayList<Container> containers = new ArrayList<>();
    containers.add(new Container("Winter"));
    containers.add(new Container("is"));
    containers.add(new Container("Coming"));

    Collections.sort(containers);
  }

}
```