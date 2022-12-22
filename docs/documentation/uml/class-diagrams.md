---
title: Klassendiagramme
description: ''
sidebar_position: 10
tags: [uml, class-diagrams]
---

Klassendiagramme sind ein Diagrammtyp der UML und gehören dort zum Bereich der Strukturdiagramme. Das Klassendiagramm dient zur leicht lesbaren Dokumentation des Aufbaus von Klassen und deren Beziehungen (Relationen). Klassendiagramme können Informationen zu 
den Attributen, den Methoden und weiteren Klassen-Bestandteilen enthalten.

![image](https://user-images.githubusercontent.com/47243617/209097570-66e9f911-561c-46d8-885d-6b0d3bf591b3.png)

## Darstellung von Klassen
Klassen werden im Klassendiagramm als Rechteck mit verschiedenen Bereichen (Klassenname, Attribute, Methoden und weitere Klassen-Bestandteile) dargestellt:
- Der Klassenname wird zentriert, fett gedruckt und mit einem Großbuchstaben beginnend dargestellt
- Attribute werden nach dem Muster _[Sichtbarkeit]_ _[Attributname]: [Datentyp] = [Anfangswert]_ dargestellt
- Methoden nach dem Muster _[Sichtbarkeit]_ _[Methoden-Signatur]: [Datentyp des Rückgabewertes]_ dargestellt
- Statische Attribute und Methoden werden durch Unterstriche kenntlich gemacht
- Durch geschweifte Klammern können Attribute, Methoden und Klassen um zusätzliche Merkmale ergänzt werden
- Die Sichtbarkeit von Attributen und Methoden wird durch (farbige) Symbole dargestellt:
    - Die Sichtbarkeit `public` wird durch das Symbol **+** bzw. die Farbe **grün** dargestellt
    - Die Sichtbarkeit `protected` wird durch das Symbol **#** bzw. die Farbe **gelb** dargestellt
    - Die Sichtbarkeit `packaged` wird durch das Symbol **~** bzw. die Farbe **blau** dargestellt
    - Die Sichtbarkeit `private` wird durch das Symbol **-** bzw. die Farbe **rot** dargestellt

![image](https://user-images.githubusercontent.com/47243617/209098191-98db853b-d786-4ae3-a102-ec56d77a2bb5.png)

## Darstellung von Schnittstellen
Schnittstellen werden im Klassendiagramm durch den Stereotypen `interface` kenntlich gemacht. Dieser impliziert, dass alle Methoden der Schnittstelle abstrakt sind.

![image](https://user-images.githubusercontent.com/47243617/209098380-6f11ab79-52ca-43d5-9806-3f29451b9c77.png)

## Darstellung von Aufzählungen
Aufzählungen werden im Klassendiagramm durch den Stereotypen `enumeration` kenntlich gemacht. Die Aufzählungskonstanten werden in einem zusätzlichen Bereich aufgeführt. Der Stereotyp impliziert, dass alle Aufzählungskonstanten öffentliche, statische Konstanten vom Typ der Aufzählung sind. zudem impliziert der Stereotyp, dass es einen passenden, privaten Konstruktor sowie ggbfs. passende Getter gibt.

![image](https://user-images.githubusercontent.com/47243617/209119681-d2113e1c-8af2-4bd9-9d84-f2f38fbdf760.png)

## Darstellung von lokalen Klassen
Lokale Klassen werden mit einem Kreuz hin zur Top-Level-Klasse kenntlich gemacht.

![image](https://user-images.githubusercontent.com/47243617/209119807-c1052a01-30d4-45fd-8842-3b7c1d5d943a.png)

## Darstellung von Assoziationen
Assoziationen stellen allgemeine Relationen zwischen zwei Klassen dar, bei der eine Klasse eine andere Klasse verwendet. Assoziationen können in eine Richtung (unidirektional) und in beide Richtungen (bidirektional) vorliegen. 

Aggregationen und Kompositionen stellen spezielle Formen von Assoziationen dar, bei denen ein Objekt der einen Klasse Teil einer anderen Klasse ist. Im Gegensatz zu Aggregationen hängen bei Kompositionen die Teile von der Existenz des Ganzen ab. Aggregationen 
werden daher auch als ist-Teil-von-Relationen, Kompositionen als existenzabhängige ist-Teil-von-Relationen bezeichnet.

![image](https://user-images.githubusercontent.com/47243617/209120430-c8ce835a-436b-49b6-ba1b-eeb4b5d05735.png)

Assoziationen werden mit einem offenen Pfeil hin zur verwendeten Klasse dargestellt, Aggregationen mit einer nicht ausgefüllten Raute hin zur besitzenden Klasse und Kompositionen mit einer ausgefüllten Raute hin zur besitzenden Klasse.

![image](https://user-images.githubusercontent.com/47243617/209131609-17490a59-c8b0-4515-b251-1333701d5349.png)

:::note Hinweis
Assoziationen können gerichtet und ungerichtet dargestellt werden.
:::

## Darstellung von Vererbungs-und Realisierungs-Beziehungen
Vererbungs-Beziehungen werden mit einem geschlossenen Pfeil hin zur Oberklasse sowie einer durchgezogenen Linie dargestellt, Realisierungs-Beziehungen mit einem geschlossenen Pfeil hin zur Schnittstelle sowie einer gestrichelten Linie.

![image](https://user-images.githubusercontent.com/47243617/209131716-0978d3b1-1a2b-44a2-b231-10c2be60ad24.png)

## Darstellung von Multiplizitäten
Die Multiplizität einer Beziehung legt fest, mit wie vielen Objekten der gegenüberliegenden Klasse ein Objekt in Beziehung stehen kann. Die Multiplizität wird als Intervall aus nicht-negativen ganzen Zahlen dargestellt und wird in der Form 
_[untere Schranke]..[obere Schranke]_ angegeben. Besitzen beide Schranken den gleichen Wert, muss nur eine der beiden Schranken angegeben werden. Eine nach oben unbeschränkte Schranke wird mit **\*** angegeben.
