
let auto = {
    mark: "Toyota",
    mudel: "Corolla L",
    aasta: 2022,
    varv: "punane",
    omadused: ["kliimaseade", "elektriaknad", "navigatsioonisüsteem"],

    taisnimi() {
        return this.mark + " " + this.mudel;
    },

    kuvaOmadused() {
        this.omadused.forEach(omadus => console.log(omadus));
    }
};

auto.kuvaOmadused();

console.log(auto.taisnimi());



console.log(auto);


console.log(auto.mark);
console.log(auto.mudel);
console.log(auto.aasta);
console.log(auto.varv);
console.log(auto.omadused);

let autod = [
    { mark: "Toyota", mudel: "Corolla", aasta: 2007 },
    { mark: "Honda", mudel: "Civic", aasta: 2012 },
    { mark: "Tesla", mudel: "Model 3", aasta: 2019 },
    { mark: "Ford", mudel: "Focus", aasta: 2020 },
    { mark: "BMW", mudel: "320i", aasta: 2015 }
];

// Autode sorteerimine aasta järgi
autod.sort((a, b) => a.aasta - b.aasta);

console.log(autod);



const array = [1, 2, 3, 4, 5];

array.forEach(element => console.log(element));



const number = 5;

const isEven = number => number % 2 === 0 ? "paaris" : "paaritu";

console.log(isEven(number));


let nimed = ["Kati", "Marta", "Andres", "Jüri", "Liisa"];

// Anonüümne callback-funktsioon
const kasutaja = function(nimi) {
    console.log(`<li>${nimi}</li>`);
};

nimed.forEach(kasutaja);

// Noolefunktsioon
const kasutaja2 = nimi => console.log(`<li>${nimi}</li>`);

nimed.forEach(kasutaja2);

// Lühendatud noolefunktsioon
nimed.forEach(nimi => console.log(`<li>${nimi}</li>`));


const teostaAJAXPäring = (url, callback) => {
    setTimeout(() => {
        const vastus = "Vastus andmebaasist";
        callback(vastus);
    }, 2000);
};

const callbackFunktsioon = (vastus) => {
    console.log("Vastus saadud:", vastus);
};

teostaAJAXPäring("https://api.example.com/data", callbackFunktsioon);


// Klassikaline funktsioon
function kuvaNimi() {
    console.log("Ilja Tsalko");
}

kuvaNimi();

// Noolefunktsioon
const kuvaNimi2 = () => {
    console.log("Ilja Tsalko");
};

kuvaNimi2();












