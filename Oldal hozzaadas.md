# 10CSuneirse

# Oldalhozzáadási útmutató

A templateOldal szöveg egy helyettesítő szöveg, az a file név, amit a másolandó.

1. Másold le a `templateOldal.html` fájlt.
2. Írd át a fájl nevét `amitakarsz.html` re.
3. Az `amitakarsz.html`-ben írd át az oldal nevét a `valaszottCim` re.
4. A `sources/js/oldalak.js`-ben a 3. sortól kezdődő listába szórj be még egy objektumot a minta alapján.
```js
    {
        name: "valaszottCim", //Odal megjelenő neve, fontos hogy egyezzen a beállított oldal címmel mert különben nem fogja aktívvá tenni az oldal címet a navbarban
        link: "amitakarsz.html" // Oldal elérésu útja a gyökérhez képest, fontos hogy nem a js file hoz képset. pl: index.html
    }, //fontos hogy egy ilyen blokk után vesszőt tegyünk
```
**Fontos: Az objektum lezárása után mindíg tegyél vesszőt, mert különben elhasal a script!!! Az objektum a két `[   ]` közé kerüljön, pontosan így:**
```js
 const menuPontok = [
    {
        name: "Főoldal", //Odal megjelenő neve, fontos hogy egyezzen a beállított oldal címmel mert különben nem fogja aktívvá tenni az oldal címet a navbarban
        link: "index.html" // Oldal elérésu útja a gyökérhez képest, fontos hogy nem a js file hoz képset. pl: index.html
    }, //fontos hogy egy ilyen blokk után vesszőt tegyünk
    {
        name: "TemplateOldal",
        link: "templateOldal.html"
    },
    {
        name: "valaszottCim",
        link: "amitakarsz.html"
    },
]
```
