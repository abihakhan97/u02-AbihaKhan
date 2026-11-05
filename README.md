# U02 – Reflektion

### Datans väg
För att visa mina projekt på portfoliosidan använder jag GitHubs API. Med hjälp av `fetch()` skickar JavaScript en förfrågan till GitHub för att hämta information om mina repositories. GitHub skickar tillbaka ett svar i JSON-format som jag sedan omvandlar till JavaScript-objekt med `response.json()`.

Därefter går jag igenom informationen och använder den för att skapa HTML-element som visar projekten på min sida. På så sätt behöver jag inte lägga till varje projekt manuellt i HTML.

### Två datakällor
Mitt CV och mina projekt hämtas från två olika källor. CV-informationen har jag själv skrivit i en lokal JSON-fil, `cv.json`, medan projekten hämtas från GitHubs API.

Den största skillnaden är att jag själv har kontroll över innehållet och strukturen i min JSON-fil. Informationen från GitHub kan däremot förändras när jag lägger till eller uppdaterar mina repositories.

Båda hämtas med `fetch()`, men med GitHub behöver jag även tänka på att API:et kan vara otillgängligt eller skicka tillbaka ett fel.

### DOM och händelser
Jag använder JavaScript för att skapa och lägga till innehåll på sidan istället för att skriva allting direkt i HTML.

I min CV-del har jag exempelvis skapat funktionerna `createCvEntry()` och `createLanguageEntry()`. De använder `document.createElement()` för att skapa nya element och `textContent` för att lägga in informationen.

När informationen har hämtats lägger jag till elementen på rätt plats i DOM:en med hjälp av bland annat `append()`.

**[Komplettera med vilka event listeners du använder för exempelvis temaväxling, meny eller andra knappar.]**

### Semantik och tillgänglighet
När jag skapade innehåll med JavaScript försökte jag behålla samma struktur som i min ursprungliga HTML från U01.

Jag använde bland annat `article` för CV-poster, `h3` för rubriker och `p` för organisation och datum. På så sätt får innehållet en tydlig struktur även när det skapas dynamiskt.

Jag använde också `textContent` istället för `innerHTML` när jag lade till text. Det gör att innehållet behandlas som vanlig text och minskar risken för att oönskad HTML-kod körs på sidan.

### Temaväxlingen
**[Anpassa denna del när temaväxlingen är färdig.]**

För att kunna växla mellan ljust och mörkt läge använder jag CSS-variabler för sidans färger. När användaren byter tema ändrar JavaScript vilken klass eller vilket attribut som används på sidan, medan CSS bestämmer hur färgerna ska se ut.

Fördelen med detta är att jag kan ändra färgerna på ett ställe i CSS istället för att behöva ändra varje element genom JavaScript. Det gör också koden enklare att förstå och underhålla.

### När det inte går som tänkt
När jag arbetade med mitt CV stötte jag på problem där informationen inte visades på sidan. Jag fick bland annat felmeddelandet att CV:t inte kunde laddas. Jag upptäckte att det är viktigt att kontrollera JSON-filens struktur, sökvägarna och hur JavaScript hanterar informationen.


Jag har lärt mig att det är viktigt att ge besökaren någon form av återkoppling när information inte kan laddas, istället för att bara visa en tom sida.

### Styrkor och brister
Jag tycker att en av styrkorna med min portfolio är att den har blivit mer dynamisk jämfört med U01. Nu kan jag uppdatera informationen i min JSON-fil utan att behöva ändra direkt i HTML.

Jag har också fått en bättre förståelse för hur JavaScript, HTML och JSON fungerar tillsammans. Något jag tyckte var svårt var att få innehållet att visas på rätt plats och att förstå varför vissa delar inte fungerade trots att koden såg rätt ut.

Om jag hade haft mer tid skulle jag vilja förbättra kodens struktur och göra felhanteringen tydligare. Jag skulle även vilja fortsätta utveckla designen och användarupplevelsen.

### AI-verktyg
Jag har använt ChatGPT som hjälpmedel under arbetets gång, främst för att förstå JavaScript och felsöka problem i min kod.

När mitt CV inte visades korrekt använde jag ChatGPT för att undersöka möjliga orsaker, bland annat problem med JSON-filen, `fetch()` och hur elementen skapades i DOM:en.

Jag har inte bara kopierat förslagen direkt, utan försökt förstå vad de olika delarna gör och anpassat dem efter min egen kod. Ibland fungerade inte lösningarna direkt, och då behövde jag testa olika ändringar för att komma vidare.

Det har hjälpt mig att förstå mer om hur JavaScript fungerar i praktiken och hur jag själv kan felsöka liknande problem i framtiden.