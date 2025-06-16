# 📌 Rättningsrapport – fed24d-the-last-todos-DulamaA

## 🎯 Uppgiftens Krav:
# Inlämningsuppgift Todo

I denna inlämningsuppgift kommer ni att skapa er egen todo-lista i en react-applikation.
Sidan skall visa ett antal punkter som skall göras. Dessa skall då komma upp på skärmen i form av en lista. När uppgiften är slutförd skall användaren kunna markera uppgiften som slutförd och uppgiften skall då tas bort från listan.

## Betyg G

- Skapa en hårdkodad lista med punkter att göra (hitta på egna punkter, dessa skall inte bara vara en text)
- Presentera listan på skärmen, helst med lite kontroll. Detta betyder i en html-struktur t.ex. i en ul/li-lista
- Implementera klickhändelse för att hantera borttagandet av en todo.
- Todo markeras som klar/tas bort från skärmen och markeras som klar i javascript-listan.

## Betyg VG

- Alla punkter under G
- Kunna visa även klara händelser och klicka tillbaka den så att de blir oklara igen.
- Skapa ett formulär som tillåter att en användare skapar nya todos efterhand.
- Använda lifting state up för att dela upp dina komponenter bättre.
- Kunna sortera ordningen på dina todos.
- Implementera ett valfritt grafiskt ramverk till din todolista, t.ex. material ui eller tailwind.
- Egen css får gärna skrivas och då skall ni ha en bra struktur och använda flex eller grid på ett bra sätt.

## Allmänt

Projektet ni har är ett vite-projekt. D.v.s. ni måste köra:

```shell
npm i
```

och

```shell
npm run dev 
```

för att köra projektet.

- Det finns många sätt att lösa denna uppgift på. Om ni känner er osäkra på någonting, fråga hellre någon gång för mycket så att ni känner er säkra på vad ni utvecklar.
- Ni får gärna ändra strukturen i projektet, detta är bara en grund.
- Börja med att planera ert arbete, börja inte med Visual Studio Code, även om det är lockande.
- Gör ert bästa att inte stressa. Lättare sagt än gjort, jag vet. Men ingen mår bättre av att stressa.
- Ha roligt, skratta när det blir fel och fortsätt att vara nyfiken :)


## 🔍 ESLint-varningar:
- C:\Work\AssignmentCorrector\backend\repos\fed24d-the-last-todos-DulamaA\src\models\TodoTypes.ts - no-unused-vars - 'id' is defined but never used.,no-unused-vars - 'id' is defined but never used.,no-unused-vars - 'id' is defined but never used.,no-unused-vars - 'id' is defined but never used.,no-unused-vars - 'titel' is defined but never used.

## 🏆 **Betyg: VG**
📌 **Motivering:** Koden uppfyller samtliga kriterier för både G och VG. Todo-listan är hårdkodad och presenteras med en genomtänkt HTML-struktur. Implementationen inkluderar både tillståndshantering och klickhändelser för att märka en todo som klar, samt ta bort den från skärmen och listan i JavaScript. Vidare tillhandahåller implementationen funktionalitet för att visa klara händelser och markera om dem som oklara, möjlighet att sortera todo-listan och inkluderar ett formulär för att lägga till nya todos. State har lyfts upp på en korrekt sätt och TailwindCSS används, vilket ger en bra visuell upplevelse tillsammans med egen anpassad CSS.

💡 **Förbättringsförslag:**  
En eventuell förbättring kan vara att lägga till en validering eller feedback till användaren om de försöker lägga till en todo utan titel. Ytterligare förbättringar kan omfatta mer avancerad felhantering, t.ex. att hantera JSON.parse-fel när data hämtas från localStorage, samt att inkludera en enhetstestning för att säkerställa kodens robusthet.