/*
Author: Tatár Mátyás Bence
https://tatarmb4s.github.io/portfolioBuild/
*/

// const siteName = "Vasember trilógia"; // A weboldal neve, ami megjelenik a menüben
// const menuPontok = [
//     {
//         name: "Főoldal", //Odal megjelenő neve, fontos hogy egyezzen a beállított oldal címmel mert különben nem fogja aktívvá tenni az oldal címet a navbarban
//         link: "index.html" // Oldal elérésu útja a gyökérhez képest, fontos hogy nem a js file hoz képset. pl: index.html
//     }, //fontos hogy egy ilyen blokk után vesszőt tegyünk
//     {
//         name: "Vasember",
//         link: "ironman1.html"
//     }, 
//     {
//         name: "Vasember 2",
//         link: "ironman2.html"
//     }, 
//     {
//         name: "Vasember 3",
//         link: "ironman3.html"
//     }, 
// ]
const nextPage = () => {
    jelenlegiOldal = menuPontok.find(e => e.name == document.title);
    if (jelenlegiOldal == undefined) {
        return;
    }
    if (jelenlegiOldal.link == menuPontok[menuPontok.length - 1].link) {
        return menuPontok[0].link;
    }
    nextOldal = menuPontok[menuPontok.indexOf(jelenlegiOldal) + 1];
    console.log(nextOldal);
    return nextOldal.link;
}
const author = "Tatár Mátyás Bence"; // Az oldal szerzője
const authorLink = "https://tatarmb.hu/";
const footerHTML = `
<div class="container p-4">
    <div class="row">
        <div class="col-12 mb-3">
            <a name="" id="" class="btn btn-info bg-black color-white" href="${nextPage()}" role="button">Tovább</a>
        </div>
        <div class="col-12">
            <img src="favicon.png" alt="ARC Reactor" style="width: calc(4rem + 2.1vw);">
        </div>
  </div>
</div>
<div class="text-center p-3 text-white" style="background-color: rgba(0, 0, 0, 0.2);">
  © 2022 Copyright: <a class="text-info" href="${authorLink}" target="_blank">${author}</a>
</div>
`;


/* Ez a rész a kód már, ebbe ne matassatok bele */



const menuMAker = (menus) => {
    const menu = document.getElementById("navbarMenu");
    var menuHTML = "";
    var menuItems = "";
    const activeSite = document.title;
    console.log(activeSite);
    for (let i = 0; i < menuPontok.length; i++) {
        const e = menuPontok[i];
        console.log(e)
        const active = e.name == activeSite ? "active" : "";
        menuItems += `
            <li class="nav-item">
                <a class="nav-link ${active}" aria-current="page" href="${e.link}">${e.name}</a>
            </li>
            `;
    }
    menuHTML = `
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html">
                <img src="favicon.png" alt="Logo" width="30" height="30" class="rounded-3">
                ${siteName}
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    ${menuItems}
                </ul>
            </div>
        </div>
    `;
    menu.innerHTML = menuHTML;
}

menuMAker(menuPontok);

var favicon = document.querySelector("link[rel~='icon']");
if (!favicon) {
    favicon = document.createElement('link');
    favicon.rel = 'icon';
    document.getElementsByTagName('head')[0].appendChild(favicon);
}
favicon.href = "favicon.ico";


const footer = document.querySelector("#footer");
footer.innerHTML = footerHTML;
