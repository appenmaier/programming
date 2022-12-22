---
title: Entwurfsmuster (Design Patterns)
description: ''
sidebar_position: 20
tags: []
---

Entwurfsmuster (Design Patterns) sind Lösungsansätze für wiederkehrende Probleme der Softwareentwicklung und sollen dabei helfen, Programmierfehler zu vermeiden, Programmentwürfe wiederverwendbar und möglichst effizient zu gestalten. Sie können u.a. in 
Erzeugungsmuster (z.B. Einzelstück), Strukturmuster (z.B. Adapter) und Verhaltensmuster (z.B. Beobachter) unterteilt werden.

Der Begriff Entwurfsmuster wurde maßgeblich durch das 1994 erschienene Buch _Design Patterns – Elements of Reusable Object-Oriented Software_ von Richard Helm, Ralph Johnson und John Vlissides (auch bekannt als _Gang of Four_) geprägt.

## Das Adapater-Entwurfsmuster
Adapterklassen (auch Hüllenklassen oder Wrapper-Klassen) ermöglichen die Kommunikation zwischen Klassen mit zueinander inkompatiblen Schnittstellen. Bekannte Adapterklassen in Java sind die sind Wrapper-Klassen `Short`, `Byte`, `Integer`, `Long`, `Float`, 
`Double`, `Character`, `Boolean`. Das Adapter-Entwurfsmuster gehört zu den Strukturmustern.

![image](https://user-images.githubusercontent.com/47243617/209140087-e32d7d52-3b35-423b-945f-b68748685a15.png)

## Das MVC-Entwurfsmuster
Das MVC (_Model-View-Controller_)-Entwurfmuster stellt einen gängigen Ansatz zur Entwicklung von grafischen Benutzeroberflächen dar, bei dem die grafische Benutzeroberfläche in drei Bereiche unterteilt wird:
- Das _Model_ ist für die Datenhaltung und -verwaltung zuständig
- Die _View_ ist für die Darstellung der Oberfläche zuständig, welche wiederum in Aufbau und Aussehen unterteilt ist
- Der _Controller_ übernimmt die Ereignisbehandlung und ermöglicht so die Benutzerinteraktion

![image](https://user-images.githubusercontent.com/47243617/209140124-fb51408c-c00a-4b5d-b427-050d8908bba1.png)

:::note Hinweis
Der Begriff MVC wird oft auch als Synonym für MVC-ähnliche Varianten wie z.B. MVP (_Model-View-Presenter_) oder MVVM (_Model-View-ViewModel_) verwendet.
:::

## Das Beobachter-Entwurfsmuster
Das Beobachter-Entwurfsmuster ermöglicht, dass sich Objekte (_Observer_) bei einem anderen Objekt (_Subject_) registrieren und von diesem informiert werden, wenn es sich ändert. Die Ereignisbehandlung in grafischen Benutzeroberflächen ist eine konkrete Umsetzung 
des Beobachter-Entwurfsmusters. Es gehört zu den Verhaltensmustern.

![image](https://user-images.githubusercontent.com/47243617/209140161-d96c30bd-b60e-452d-bb80-f29b3980c537.png)

## Das Einzelstück-Entwufsmuster
Das Einzelstück-Entwurfsmuster stellt sicher, dass zu einer Klasse genau ein Objekt (_Singleton_) zur Laufzeit existiert. Ein Anwendungsbeispiel für das Einzelstück-Entwurfsmuster ist das Model in einer grafischen Benutzeroberfläche. Es gehört zu den 
Erzeugungsmustern.

![image](https://user-images.githubusercontent.com/47243617/209140193-a26d42c4-cbe6-47a9-b865-bf5f2ebfccd6.png)

