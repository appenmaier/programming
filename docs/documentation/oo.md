---
title: Objektorientierte Programmierung
description: ''
sidebar_position: 130
tags: [oo]
---

Die reale Welt besteht aus Objekten mit individuellen Eigenschaften und individuellem Verhalten. Für ein einfacheres Verständnis werden Objekte kategorisiert, also zu sinnhaften Einheiten verbunden. In der objektorientierten Programmierung werden Beobachtungen 
aus der realen Welt zum Konzept der Objektorientierung zusammengefasst:
- Eine Kategorie von ähnlichen Objekten bezeichnet man als **Klasse**
- Konkrete Ausprägungen bzw. Instanzen einer Klasse werden wiederum als **Objekte** bezeichnet
- Die Eigenschaften von Objekten werden als **Attribute**, das Verhalten als **Methoden** bezeichnet

![image](https://user-images.githubusercontent.com/47243617/170762507-dc3f4d1f-0730-44c1-acbf-3b9090832c9b.png)

:::note Hinweis
Jedes Objekt ist eindeutig identifizierbar.
:::

## Datenkapselung
Ein wesentlicher Grundsatz der Objektorientierung ist, dass Attribute durch Methoden gekapselt werden. Datenkapselung bedeutet, dass Attribute nicht direkt geändert werden können, sondern nur durch den indirekten Zugriff über Methoden. Typische Methoden zum 
Lesen und Schreiben von Attributen sind die sogenannten Getter bzw. Setter.

![image](https://user-images.githubusercontent.com/47243617/170760689-edc2460c-b661-4c90-b93d-da03b2d8acd3.png)

## Sichtbarkeit von Attributen und Methoden
Um die Sichtbarkeit von Attributen und Methoden zu definieren, existieren verschiedene Zugriffsrechte. Die Sichtbarkeit bestimmt, von welchem Ort aus Attribute und Methoden verwendet bzw. aufgerufen werden dürfen.

| Zugriffsrecht | Zugriff aus gleicher Klasse | Zugriff von einer Klasse aus dem gleichen Paket | Zugriff von einer Unterklasse | Zugriff von einer beliebigen Klasse |
| ------------- | --------------------------- | ----------------------------------------------- | ----------------------------- | ----------------------------------- |
| public        | ja                          | ja                                              | ja                            | ja                                  |
| protected     | ja                          | ja                                              | ja                            | nein                                |
| package       | ja                          | ja                                              | nein                          | nein                                |
| private       | ja                          | nein                                            | nein                          | nein                                |

## Definition von Klassen
Klassen werden in Java mit dem Schlüsselwort `class` definiert. Die Angabe des Zugriffsrechts legt die Sichtbarkeit der Klasse fest.

```java
public class Foo { }
```

## Definition von Attributen
Die Attribute einer Klasse sind Datenobjekte und werdern daher analog zu Variablen und Konstanten definiert. Die Angabe des Zugriffsrechts legt die Sichtbarkeit des Attributs fest.

```java
public class Foo {

  public String bar;
  public int baz;

}
```

## Definition von Methoden
Methoden sind in der Programmierung eine Verallgemeinerung von mathematischen Funktionen. Eine Methode besteht aus einem Methodennamen, einer Liste von Eingabeparameter (optional), einem Rückgabewert (optional) sowie dem Methodenrumpf.

Methoden können entweder genau einen Rückgabewert oder keinen Rückgabewert besitzen. Methoden mit genau einem Rückgabewert müssen vor dem Methodennamen den Datentyp des Rückgabewerts angeben und am Ende des Methodenrumpfes immer die Anweisung `return` besitzen,
Methoden ohne Rückgabewert müssen dies mit dem Schlüsselwort `void` kenntlich machen.


```java
public class Foo {

  public void bar(Qux qux);
  public int baz();

}
```

:::note Hinweis
Die Signatur einer Methode setzt sich aus Methodenname und den Datentypen der Parameterliste zusammen.
:::

## Deklaration von Referenzvariablen
Technisch gesehen handelt es sich bei einer Klasse um einen komplexen Datentyp. Analog zu den primitiven Datentypen können auch für Klassen Variablen – sogenannte Referenzvariablen – definiert werden. 

Im Gegensatz zu "normalen" Variablen werden bei Referenzvariablen nicht die eigentlichen Werte in den Variablen gespeichert, sondern die Speicheradressen der erzeugten Objekte. Die Selbstreferenz `this` verweist innerhalb einer Klasse auf das eigene Objekt.

![image](https://user-images.githubusercontent.com/47243617/170764624-4e55faa5-179f-4100-b444-f197619fb671.png)

:::note Hinweis
Der Standarwert von Referenzvariablen ist `null`.
:::

## Erzeugen von Objekten
Beim Erzeugen eines Objekts mit Hilfe des Operators `new` wird der bei der Deklaration reservierte Speicherplatz durch das Objekt belegt.

```java
public class Foo { }

public class MainClass {

  public static void main(String[] args) {
    Foo foo = new Foo();
  }

}
```

:::danger Hinweis
Nach dem new-Operator muss immer ein Konstruktor der Klasse stehen.
:::

## Zugriff auf Attribute und Aufruf von Methoden
Erlauben die Zugriffsrechte den Zugriff auf ein Attribut, kann über die deklarierte Referenzvariable und einem nachgestellten Punkt auf das Attribut zugegriffen werden. Auch sichtbare Methoden werden über diese Syntax aufgerufen.

```java
public class Foo {

  public String bar;
  public void baz(Qux qux) { }

}

public class MainClass {

  public static void main(String[] args) {
    Foo foo = new Foo();
    foo.bar = "Hallo Welt";
    foo.baz(new Qux());
  }

}
```

:::danger Hinweis
Beim Aufruf einer Methode müssen alle Parameter in der richtigen Reihenfolge versorgt werden. Parameter, die diesem Prinzip folgen, bezeichnet man als **Positionsparameter**.
:::

## Überladene Methoden
Gleichnamige Methoden mit unterschiedlichen Parameterlisten einer Klasse werden in Java als überladene Methoden bezeichnet.

```java
public class Foo {

  public void bar() { }
  public void bar(Qux qux) { }
  public void bar(Qux qux, Quux quux) { }

}
```

:::danger Hinweis
Überladene Methoden können keine unterschiedlichen Rückgabewerte besitzen.
:::

## Konstruktoren
Bei Konstruktoren handelt es sich um spezielle Methoden, die zur Initialisierung eines Objekts verwendet werden. Konstruktoren heißen wie ihre Klasse und können eine beliebige Anzahl an Parametern haben. Allerdings kann für Konstruktoren kein Rückgabewert 
festgelegt werden, da diese implizit die Referenz auf das Objekt zurückgeben.

Im Gegensatz zu z.B. C++ existieren in Java keine Destruktoren, die nicht mehr benötigte Objekte aus dem Speicher entfernen. Stattdessen läuft im Hintergrund der sogenannte Garbage Collector, der nicht mehr benötigte Objekte (also Objekte, die nicht mehr über 
eine Referenzvariable angesprochen werden können) löscht.

```java
public class Foo {

  public Foo() { }
  public Foo(Qux qux) { }
  public Foo(Qux qux, Quux quux) { }

}
```

:::note Hinweis
Auch Konstruktoren können überladen werden.
:::

## Statische Attribute und Methoden
Neben "normalen" Attributen und Methoden kann eine Klasse auch statische Attribute und statische Methoden besitzen. Im Gegensatz zu "normalen" Attributen existieren statische Attribute nur einmal pro Klasse und besitzen daher für alle Objekte dieser Klasse 
dieselben Werte. Innerhalb einer statischen Methode kann nur auf die statischen Attribute der Klasse zugegriffen werden.

Bei der Deklaration von statischen Attributen und statischen Methoden kommt das Schlüsselwort `static` zum Einsatz. Für den Zugriff auf ein statisches Attribut bzw. den Aufruf einer statischen Methode wird keine Instanziierung benötigt, d.h. der der Zugriff 
bzw. Aufruf erfolgt über den Klassennamen.

```java
public class Foo {

  public static String bar;
  public static void baz() { }

}

public class MainClass {

  public static void main(String[] args) {
    Foo.bar = "Fubar";
    Foo.baz();
  }

}
```

:::note Hinweis
"Normale" Attribute und Methoden werden auch als Instanzattribute bzw. Instanzmethoden bezeichnet, statische Attribute und Methoden auch Klassenattribute bzw. Klassenmethoden.
:::
