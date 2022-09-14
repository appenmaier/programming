---
title: Übungsaufgabe Operators02
---

Welche Ausgabe erwartest Du nach Ablauf des abgebildeten Codings?

## Coding

```java
int a = 0; int b = 0; int c = 0;
int d = 5; int e = 3; int f = 4;
int g = 0; int h = 2;

a = 3 * ++b;
c = 3 * a++;

d *= 6 + ++e;
e = --f - 5 - f--;
f = f + d % (e * 2);

g = (h-- + 2) * (1 + --h);

System.out.println("a: " + a);
System.out.println("b: " + b);
System.out.println("c: " + c);
System.out.println("d: " + d);
System.out.println("e: " + e);
System.out.println("f: " + f);
System.out.println("g: " + g);  
System.out.println("h: " + h);
```
