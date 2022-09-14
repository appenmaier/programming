---
title: Entwurfsmuster (Design Patterns)
description: ""
sidebar_position: 20
tags: [entwurfmuster, mvc, beobachter, einzelstück, adapter]
---

Entwurfsmuster (Design Patterns) sind Lösungsansätze für wiederkehrende Probleme der Softwareentwicklung und sollen dabei helfen, Programmierfehler zu vermeiden, Programmentwürfe wiederverwendbar und möglichst effizient zu gestalten. Sie können u.a. in 
Erzeugungsmuster (z.B. Einzelstück), Strukturmuster (z.B. Adapter) und Verhaltensmuster (z.B. Beobachter) unterteilt werden.

Der Begriff Entwurfsmuster wurde maßgeblich durch das 1994 erschienene Buch _Design Patterns – Elements of Reusable Object-Oriented Software_ von Richard Helm, Ralph Johnson und John Vlissides (auch bekannt als _Gang of Four_) geprägt.

## Das Adapater-Entwurfsmuster
Adapterklassen (auch Hüllenklassen oder Wrapper-Klassen) ermöglichen die Kommunikation zwischen Klassen mit zueinander inkompatiblen Schnittstellen. Bekannte Adapterklassen in Java sind die sind Wrapper-Klassen `Short`, `Byte`, `Integer`, `Long`, `Float`, 
`Double`, `Character`, `Boolean`. Das Adapter-Entwurfsmuster gehört zu den Strukturmustern.

## Das MVC-Entwurfsmuster
Das MVC (Model-View-Controller)-Entwurfmuster stellt einen gängigen Ansatz zur Entwicklung von grafischen Benutzeroberflächen dar, bei dem die grafische Benutzeroberfläche in drei Bereiche unterteilt wird:
- Das **Model** ist für die Datenhaltung und -verwaltung zuständig
- Die **View** ist für die Darstellung der Oberfläche zuständig, welche wiederum in Aufbau und Aussehen unterteilt ist
- Der **Controller** übernimmt die Ereignisbehandlung und ermöglicht so die Benutzerinteraktion

![image](https://user-images.githubusercontent.com/47243617/175276227-7ad23517-2a5b-42c4-9a2f-27338cf34644.png)

:::note Hinweis
Der Begriff MVC wird oft auch als Synonym für MVC-ähnliche Varianten wie z.B. MVP (Model-View-Presenter) oder MVVM (Model-View-ViewModel) verwendet.
:::

## Das Beobachter-Entwurfsmuster
Das Beobachter-Entwurfsmuster ermöglicht, dass sich Objekte (Observer) bei einem anderen Objekt (Subject) registrieren und von diesem informiert werden, wenn es sich ändert. Die Ereignisbehandlung in grafischen Benutzeroberflächen ist eine konkrete Umsetzung 
des Beobachter-Entwurfsmusters. Es gehört zu den Verhaltensmustern.

![image](https://user-images.githubusercontent.com/47243617/175276105-c2f3545e-2228-437d-abab-b0785a77bb23.png)

## Das Einzelstück-Entwufsmuster
Das Einzelstück-Entwurfsmuster stellt sicher, dass zu einer Klasse genau ein Objekt (Singleton) zur Laufzeit existiert. Ein Anwendungsbeispiel für das Einzelstück-Entwurfsmuster ist das Model in einer grafischen Benutzeroberfläche. Es gehört zu den 
Erzeugungsmustern.

```java
public class Singleton {

    private static Singleton instance;
  
    private Singleton() { }
  
    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }

}
```
