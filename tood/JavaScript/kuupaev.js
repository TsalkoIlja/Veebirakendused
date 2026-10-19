const now = new Date();

const paev = now.getDate();
console.log("Tänane päev " + paev + " päev");

const kuu = now.getMonth() + 1; // tagastab kuu 0-11
console.log("Kuu number on " + kuu);

const aasta = now.getFullYear();
console.log("Aasta " + aasta);

const nadalapaev = now.getDay(); // 0-6, kus on 0-pühapäev
console.log("Nadalapaeva number on: " + nadalapaev);

const tund = now.getHours();
const minut = now.getMinutes();

function tana(){
    let vastus = document.getElementById("vastus");
    vastus.innerHTML = "Täna on " + paev + "." + kuu + "." + aasta;
}

function kell() {
    let vastus = document.getElementById("vastus");
    vastus.innerHTML = "Kell on " + tund + ":" + minut;
}


function konsultatsioonPaevad() {
    const konsultatsioon = new Date(2026, 11, 2); // Kuud 0-11 (11 = detsember)
    const vahe = konsultatsioon.getTime() - now.getTime();
    const konspaev = Math.floor(vahe / (1000 * 60 * 60 * 24));

    let vastus = document.getElementById("vastus");
    vastus.innerHTML = "Konsultatsioonini on jäänud " + konspaev + " päeva.";
}


function synnipaevPaevad() {
    const synnipaev = new Date(2027, 5, 11); // Näiteks 1. juuni 2027 (5 = juuni)
    const vahe = synnipaev.getTime() - now.getTime();
    const synniPaevad = Math.floor(vahe / (1000 * 60 * 60 * 24));

    let vastus = document.getElementById("vastus");
    vastus.innerHTML = "Sünnipäevani on jäänud " + synniPaevad + " päeva.";
}