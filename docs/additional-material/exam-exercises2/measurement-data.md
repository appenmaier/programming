---
title: Messdaten
description: ''
tags: [java-stream-api]
---

- Erstelle die Klasse `MeasurementData` anhand des abgebildeten Quellcodes
- Erstelle eine ausführbare Klasse, welche mit Hilfe der Java Stream API folgende Informationen auf der Konsole ausgibt:
    - die durchschnittliche Temperatur gruppiert nach Ländern
    - alle Messdaten aus Japan, bei denen die Temperatur im Oktober 202_x_ bei mindestens 30° lag
    - die Antwort auf die Frage, ob es einen Messdatensatz gibt, der folgende Kriterien erfüllt: Land = Deutschland, Datum > 01.01.202_x_, Temperatur < 20 
    - die Anzahl aller Messdaten gruppiert nach den Prozentsatzbereichen (0-10, 10-20,…)
    - alle Messdaten aus dem Jahr 202_x_ der Kategorie _F_ absteigend sortiert nach dem Prozentsatz
    - ...

## Quellcode
```java
public record MeasurementData(String country, LocalDate date, double temperature, int percentage,
    char category) {

  private final static int NUMBER_OF_ENTRIES = 100;
  private final static int MAX_DAYS = 2000;
  private final static int MAX_TEMPERATURE = 40;
  private final static int MAX_PERCENTAGE = 101;
  private final static List<String> COUNTRIES =
      List.of("USA", "Brasilien", "Deutschland", "Japan", "Indien");
  private final static List<Character> CATEGORIES = List.of('D', 'X', 'F');

  public static ArrayList<MeasurementData> getMeasurementData() {
    ArrayList<MeasurementData> measurementData = new ArrayList<>();

    Random rnd = new Random();
    LocalDate now = LocalDate.now();

    for (int i = 0; i < NUMBER_OF_ENTRIES; i++) {
      LocalDate date = now.minusDays(rnd.nextInt(MAX_DAYS));
      double temperature = rnd.nextDouble(MAX_TEMPERATURE);
      int percentage = rnd.nextInt(MAX_PERCENTAGE);
      String country = COUNTRIES.get(rnd.nextInt(COUNTRIES.size()));
      char category = CATEGORIES.get(rnd.nextInt(CATEGORIES.size()));
      measurementData.add(new MeasurementData(country, date, temperature, percentage, category));
    }

    return measurementData;
  }

}
```
