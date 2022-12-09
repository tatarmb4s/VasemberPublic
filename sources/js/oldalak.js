const siteName = "Vasember trilógia"; // A weboldal neve, ami megjelenik a menüben
const menuPontok = [
    {
        name: "Főoldal", //Odal megjelenő neve, fontos hogy egyezzen a beállított oldal címmel mert különben nem fogja aktívvá tenni az oldal címet a navbarban
        link: "index.html" // Oldal elérésu útja a gyökérhez képest, fontos hogy nem a js file hoz képset. pl: index.html
    }, //fontos hogy egy ilyen blokk után vesszőt tegyünk
    {
        name: "Vasember",
        link: "ironman1.html"
    }, 
    {
        name: "Vasember 2",
        link: "ironman2.html"
    }, 
    {
        name: "Vasember 3",
        link: "ironman3.html"
    }, 
]