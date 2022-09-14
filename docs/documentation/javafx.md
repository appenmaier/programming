---
title: JavaFX-Anwendungen
description: ""
sidebar_position: 330
tags: []
---

JavaFX stellt ein Framework zur Entwicklung plattformübergreifender grafischer Benutzeroberflächen dar. Eine grafische Benutzeroberfläche oder auch GUI (Graphical User Interface) hat die Aufgabe, Programme mittels grafischer Bildschirmelemente bedienbar zu 
machen:
- Controls wie Eingabefelder, Drucktasten und Ausgabefelder ermöglichen die Interaktion mit der Anwendung
- Container wie Horizontalboxen und Bereichscontainer ermöglichen die strukturierte Darstellung und Verwaltung anderer Bildschirmelemente:
- Dialoge wie Nachrichtendialoge und Dateiauswahl-Dialoge stellen vordefinierte Oberflächen dar, mit deren Hilfe wiederkehrende Anwendungsfälle abgedeckt werden können

![image](https://user-images.githubusercontent.com/47243617/170096955-acb2be70-1dea-40a8-820a-b66792c45460.png)

## Aufbau einer JavaFX-Anwendung
Eine JavaFX-Anwendung besteht aus einer oder mehreren Bühnen (Stages), die beliebig vielen Szenen (Scenes) enthalten können, wobei jede Szene wiederum beliebig viele Bildschirmelemente (Nodes) enthalten kann:
- Die Bühne stellt den Rahmen für den tatsächlichen Inhalt bereit
- Eine Szene verwaltet den sogenannten **Szenegraphen**, der den sichtbaren Teil einer grafischen Benutzeroberfläche repräsentiert
- Ein Bildschirmelement ist Teil des Szenegraphen und kann entweder zur Strukturierung (Container) oder zur Interaktion (Control) genutzt werden

![image](https://user-images.githubusercontent.com/47243617/170097082-91fb3635-d5a6-46c4-aaa5-a082abe42bad.png)

## Der Szenegraph
Der Szenegraph verwaltet die einzelnen Bildschirmelemente einer Szene. Die Elemente eines Graphen werden als Knoten, der Ursprung des Graphen als Wurzel-Knoten 
bezeichnet.

![image](https://user-images.githubusercontent.com/47243617/170097162-be77b953-e445-4e7a-bbdf-2fedf2295e6f.png)

::: note Hinweis
Beim Szenegraphen ist der Wurzel-Knoten vom Typ `Parent`.
:::

## Lebenszyklus einer JavaFX-Anwendung
JavaFX-Anwendungen sind Unterklassen der Klasse `Application`, die die verschiedenen Lebenszyklus-Methoden bereitstellt:
- Die Methode `void launch(String[])` speichert die Parameter, erzeugt ein Objekt der eigenen Klasse und ruft die weiteren Lebenszyklus-Methoden auf
- Die Methode `void init()` kann genutzt werden, um z.B. die Aufrufparameter auszulesen
- Die Methode `void start(Stage)` bekommt eine Bühne übergeben und wird dazu verwendet, die Bühne zu gestalten und die erste Szene aufzurufen
- Die Methode `void stop()` wird aufgerufen, bevor der Prozess gestoppt wird und kann genutzt werden, um Aufräumarbeiten durchzuführen

## Aufbau einer Szene
Der Aufbau einer Szene erfolgt deklarativ mit Hilfe von FXML-Dokumenten. FXML stellt eine auf XML-basierende Sprache dar und ermöglicht eine klare Trennung zwischen Layout und Code:
1. Die Main-Klasse ruft den FXML-Loader auf
2. Der FXML-Loader überführt das FXML-Dokument in einen Szenegraphen
3. Der FXML-Loader instanziiert den Controller und ruft die (optionale) initialize-Methode auf

![image](https://user-images.githubusercontent.com/47243617/170098136-eb627556-61e9-4b79-a942-26a9f1ee54e4.png)

:::note Hinweis
XML (Extensible Markup Language) stellt eine Auszeichnungssprache zur Beschreibung strukturierter Daten dar.
:::

## Definition von FXML-Dokumenten
Die einzelnen Bildschirmelemente der Szene werden in einem FXML-Dokument als geschachtelte Elemente dargestellt.

```xml
<?xml version="1.0" encoding="UTF-8"?>

<?import javafx.geometry.Insets?>
<?import javafx.scene.control.Button?>
<?import javafx.scene.control.Label?>
<?import javafx.scene.control.TextField?>
<?import javafx.scene.layout.VBox?>

<VBox spacing="5.0" xmlns:fx="http://javafx.com/fxml/1">
   <children>
      <Button text="Drucktaste" />
      <Label text="Ausgabefeld" />
      <TextField promptText="Eingabefeld" />
   </children>
   <padding>
      <Insets bottom="25.0" left="25.0" right="25.0" top="25.0" />
   </padding>
</VBox>
```

## Verwenden von FXML-Dokumenten
Die statische Methode `Parent load(URL)` der Klasse `FXMLLoader` überführt das angegebene FXML-Dokument in einen Szenegraphen und gibt den dazugehörigen Wurzelknoten vom Typ `Parent` zurück, mit dessen Hilfe anschließend die Szene erstellt werden kann.

```java
public class MainClass extends Application {

  public void start(Stage primaryStage) throws IOException {
    Parent root = FXMLLoader.load(getClass().getResource("View.fxml"));
    Scene scene = new Scene(root);
    primaryStage.setTitle("Aufbau einer Szene");
    primaryStage.setScene(scene);    
    primaryStage.show();
  }

}
```

## Initialisieren einer Szene
Die Methode `void initialize(URL, ResourceBundle)` der Schnittstelle `Initializable` wird vom FXML-Loader vor Anzeige der dazugehörigen Szene aufgerufen und ermöglicht es, die Szene dynamisch anzupassen.

```java
public class Controller implements Initializable {

    @FXML
    private Label label;

    public void initialize(URL location, ResourceBundle resources) {
        Random random = new Random();
        int randomNumber = random.nextInt(100);
        label.setText(String.valueOf(randomNumber));
    }

}
```

## Ereignisbehandlung
Ereignisse sind Nachrichten, die über das System weitergeleitet werden. Auf grafischen Benutzeroberflächen werden Ereignisse z.B. durch das Betätigen einer Drucktaste ausgelöst. In Java wird die Ereignisbehandlung durch das Delegationsmodell festgelegt:
1. Empfänger können sich beim Sender für ein Ereignis registrieren
2. Der Sender löst das Ereignis aus und übergibt das erzeugte Ereignis-Objekt an alle registrierten Empfänger
3. Die Empfänger nehmen das Ereignis-Objekt entgegen und haben dadurch die Möglichkeit, auf das Ereignis zu reagieren

![image](https://user-images.githubusercontent.com/47243617/170099750-69e5778c-d55c-4769-84cd-019f4b8b4e74.png)

## JavaFX Ereignisse
JavaFX stellt verschiedene Ereignisse bereit, die auf unterschiedliche Art und Weise ausgelöst werden:
- Ein `ActionEvent` wird bei verschiedenen Interaktionen mit den Controls ausgelöst, z.B. durch das Betätigen einer Drucktaste
- Ein `MouseEvent` wird bei verschiedenen Maus-Aktivitäten ausgelöst, z.B. durch das Betätigen einer Maustaste
- Ein `KeyEvent` wird durch Tastatureingaben ausgelöst
- Ein `WindowEvent` wird ausgelöst, wenn sich der Zustand eines Fensters ändert

## Ereignisbehandlung nach dem MVC-Entwurfsmuster
Die Ereignisbehandlung in JavaFX kann nach dem [MVC-Entwurfsmuster](design/design-patterns.md) umgesetzt werden. Hierbei übernimmt eine Klasse (Controller) die Ereignisbehandlung für ein konkretes FXML-Dokument (View). Im FXML-Dokument wird über die 
Eigenschaft `fx:controller` die verantwortliche Klasse für die Ereignisbehandlung festgelegt. Den zu behandelnden Ereignissen kann über die Eigenschaft `onAction` eine Behandlermethode der Ereignisbehandler-Klasse zugewiesen werden. Um in der 
Ereignisbehandler-Klasse auf die jeweiligen Elemente des FXML-Dokuments zugreifen zu können, müssen diesen über die Eigenschaft `fx:id` entsprechende Ids zugewiesen werden.

```xml
<?xml version="1.0" encoding="UTF-8"?>

<?import javafx.geometry.Insets?>
<?import javafx.scene.control.Button?>
<?import javafx.scene.control.TextField?>
<?import javafx.scene.layout.VBox?>

<VBox spacing="5.0" xmlns:fx="http://javafx.com/fxml/1" fx:controller="Controller">
  <children>
    <TextField fx:id="inputTextField" promptText="Eingabe" />
    <Button text="Eingabe ausgeben" onAction="printInput"/>
  </children>
  <padding>
    <Insets bottom="25.0" left="25.0" right="25.0" top="25.0" />
  </padding>
</VBox>
```

In der Ereignisbehandler-Klasse werden die Behandlermethoden implementiert. Diese müssen zwingend den Parameter `ActionEvent` besitzen, mit dessen Hilfe auf das ausgelöste Ereignis zugegriffen werden kann. Das Verknüpfen von Attributen der 
Ereignisbehandler-Klasse mit den Elementen des FXML-Dokuments erfolgt über die Annotation `@FXML` und der Namensgleichheit zwischen dem Attribut der Ereignisbehandler-Klasse und dem Wert der Eigenschaft `fx:id` des entsprechenden Elements des FXML-Dokuments.

```java
public class Controller {

    @FXML
    private TextField inputTextField;

    public void printInput(ActionEvent actionEvent) {
        String input = inputTextField.getText();
        System.out.println(input);
    }

}
```

## Wechsel zwischen Szenen
Der Wechsel von Szenen erfolgt über die Methode `void setScene(Scene)` der Klasse `Stage`. Die Methode `Object getSource()` der Klasse `ActionEvent` gibt das Bildschirmelement zurück, welches das Ereignis ausgelöst hat; die Methode `Window getWindow()` der 
Klasse `Scene` die Bühne, auf der die aktuelle Szene aufgeführt wird.

```java
public class Controller {

    public void goToOutput(ActionEvent actionEvent) throws IOException {  
        Parent root = FXMLLoader.load(getClass().getResource("View.fxml"));
        Scene scene = new Scene(root);
        Node node = (Node) actionEvent.getSource();
        Stage stage = (Stage) node.getScene().getWindow();
        stage.setScene(scene);
        stage.show();
    }

}
```

## Kommunikation zwischen Szenen
Da die verschiedenen Ereignisbehandler-Klassen in einer JavaFX-Anwendung nur lose miteiander gekoppelt sind, wird zur Kommunikation zwischen Szenen eine eindeutige Model-Klasse benötigt. Dies kann über das 
[Einzelstück-Entwurfsmuster (Singleton-Pattern)](design/design-patterns.md) erreicht werden.

Die Klasse `Model` umfasst neben der Einzelstück-Implementierung das Attribut `input` sowie die dazugehörige set- und get-Methode.

```java
public class Model {

    private static Model instance;
    private String input;
  
    private Model() { }
  
    public static Model getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
    
    public void setInput(String input) {
        this.input = input;
    }
    
    public String getInput() {
        return input;
    }

}
```

In der Methode `void initialize(URL, ResourceBundle)` der Klasse `InputController` wird das Attribut `model` initialisiert; in der Methode `void goToOutput(ActionEvent)` wird zunächst die Eingabe in der Model-Klasse gespeichert und anschließend zur View `Output`
gewechselt.

```java
public class InputController implements Initializable {

    @FXML
    private TextField inputTextField;
  
    private Model model;

    public void initialize(URL location, ResourceBundle resources) {
        model = Model.getInstance();    
    }

    public void goToOutput(ActionEvent actionEvent) { 
        String input = inputTextField.getText();
        model.setInput(input);
            
        Parent root = FXMLLoader.load(getClass().getResource("OutputView.fxml"));
        Scene scene = new Scene(root);
        Node node = (Node) actionEvent.getSource();
        Stage stage = (Stage) node.getScene().getWindow();
        stage.setScene(scene);
        stage.show();
    }

}
```

In der Methode `void initialize(URL, ResourceBundle)` der Klasse `OuputController` wird zunächst das Attribut `model` initialisiert, anschließend die Eingabe aus dem Model ausgelesen und abschließend die Eingabe dem Ausgabefeld zugewiesen.

```java
public class OutputController implements Initializable {

    @FXML
    private Label inputLabel;
  
    private Model model;

    public void initialize(URL location, ResourceBundle resources) {
        model = Model.getInstance();    
        String input = model.getInput();
        inputLabel.setText(input);
    }

}
```