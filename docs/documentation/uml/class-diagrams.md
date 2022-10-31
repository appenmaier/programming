---
title: Klassendiagramme
description: ''
sidebar_position: 10
tags: [uml, class-diagrams]
---

Klassendiagramme sind ein Diagrammtyp der UML und gehören dort zum Bereich der Strukturdiagramme. Das Klassendiagramm dient zur leicht lesbaren Dokumentation des Aufbaus von Klassen und deren Beziehungen (Relationen). Klassendiagramme können Informationen zu 
den Attributen, den Methoden und weiteren Klassen-Bestandteilen enthalten.

![image](https://user-images.githubusercontent.com/47243617/170685059-5d955c86-51e6-45f2-aa70-fbc9a756af42.png)

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

![image](https://user-images.githubusercontent.com/47243617/170685479-c07e9088-31c5-40cf-a2ef-700e6846e525.png)

## Darstellung von Schnittstellen
Schnittstellen werden im Klassendiagramm durch den Stereotypen `interface` kenntlich gemacht. Dieser impliziert, dass alle Methoden der Schnittstelle abstrakt sind.

![image](https://user-images.githubusercontent.com/47243617/170686174-3586d100-ba10-4632-bac7-74d9a61feb23.png)

## Darstellung von Aufzählungen
Aufzählungen werden im Klassendiagramm durch den Stereotypen `enumeration` kenntlich gemacht. Die Aufzählungskonstanten werden in einem zusätzlichen Bereich aufgeführt.

![image](https://user-images.githubusercontent.com/47243617/170686310-f1cdb38b-1a69-4af1-92ae-a116b84137b2.png)

## Darstellung von lokalen Klassen
Lokale Klassen werden mit einem Kreuz hin zur Top-Level-Klasse kenntlich gemacht.

![image](https://user-images.githubusercontent.com/47243617/170687487-b173f44d-ce62-4593-97d7-c8f571a1fd98.png)

## Darstellung von Assoziationen
Assoziationen stellen allgemeine Relationen zwischen zwei Klassen dar, bei der eine Klasse eine andere Klasse verwendet. Assoziationen können in eine Richtung (unidirektional) und in beide Richtungen (bidirektional) vorliegen. 

Aggregationen und Kompositionen stellen spezielle Formen von Assoziationen dar, bei denen ein Objekt der einen Klasse Teil einer anderen Klasse ist. Im Gegensatz zu Aggregationen hängen bei Kompositionen die Teile von der Existenz des Ganzen ab. Aggregationen 
werden daher auch als ist-Teil-von-Relationen, Kompositionen als existenzabhängige ist-Teil-von-Relationen bezeichnet.

![image](https://user-images.githubusercontent.com/47243617/170686505-ee43d95d-8f83-4d64-a8dc-d2da78f384c2.png)

Assoziationen werden mit einem offenen Pfeil hin zur verwendeten Klasse dargestellt, Aggregationen mit einer nicht ausgefüllten Raute hin zur besitzenden Klasse und Kompositionen mit einer ausgefüllten Raute hin zur besitzenden Klasse.

![image](https://user-images.githubusercontent.com/47243617/170687823-14567433-0128-4b4a-a9ae-6c5db0e10839.png)

:::note Hinweis
Assoziationen können gerichtet und ungerichtet dargestellt werden.
:::

## Darstellung von Vererbungs-und Realisierungs-Beziehungen
Vererbungs-Beziehungen werden mit einem geschlossenen Pfeil hin zur Oberklasse sowie einer durchgezogenen Linie dargestellt, Realisierungs-Beziehungen mit einem geschlossenen Pfeil hin zur Schnittstelle sowie einer gestrichelten Linie.

![image](https://user-images.githubusercontent.com/47243617/170689169-b130d88d-0ff2-47be-8425-245ea0313e9f.png)

## Darstellung von Multiplizitäten
Die Multiplizität einer Beziehung legt fest, mit wie vielen Objekten der gegenüberliegenden Klasse ein Objekt in Beziehung stehen kann. Die Multiplizität wird als Intervall aus nicht-negativen ganzen Zahlen dargestellt und wird in der Form 
_[untere Schranke]..[obere Schranke]_ angegeben. Besitzen beide Schranken den gleichen Wert, muss nur eine der beiden Schranken angegeben werden. Eine nach oben unbeschränkte Schranke wird mit **\*** angegeben.
