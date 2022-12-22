---
title: Stellenangebot
description: ''
tags: [inheritance, polymorphy, io-streams]
---

Setze das abgebildete Klassendiagramm vollständig um. Erstelle zum Testen eine ausführbare Klasse und/oder eine Testklasse.

## Klassendiagramm
![image](https://user-images.githubusercontent.com/47243617/209169641-39f0e148-f65d-4212-9b61-16117787297c.png)

## Allgemeine Hinweise
- Aus Gründen der Übersicht werden im Klassendiagramm keine Getter und Object-Methoden dargestellt
- So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die Object-Methoden wie gewohnt implementiert werden

## Hinweis zur Klasse Applicant
Die Methode `void addApplicationDocument(applicationDocument: ApplicationDocument)` soll den Bewerbungsunterlagen (`applicationDocuments`) das eingehende Dokument hinzufügen.

## Hinweis zur Klasse JobOffer
Die Methode `void addApplicant(applicant: Applicant)` soll der Bewerberliste (`applicants`) den eingehenden Bewerber hinzufügen.

## Hinweis zur klasse JobOffers
Die Methode `ArrayList<JobOffer> getJobOffers(file: File)` soll die Stellenangebote der eingehenden Datei zurückgeben.
