//16. Ülesanne – Erinevad funktsioonid
// Klassikaline funktsioon
function minuNimi() {
    console.log("Ilja Tsalko");
}

minuNimi();

// Noolefunktsioon
const minuNimi2 = () => console.log("Ilja Tsalko");

minuNimi2();

//17. Ülesanne – Argumendiga funktsioon
function kuupaevEesti(kuupaev) {
    const kuud = [
        "jaanuar", "veebruar", "märts", "aprill",
        "mai", "juuni", "juuli", "august",
        "september", "oktoober", "november", "detsember"
    ];

    const kuu = (kuupaev[3] + kuupaev[4]) - 1;

    console.log(`${kuupaev[0]}${kuupaev[1]}. ${kuud[kuu]} 20${kuupaev[6]}${kuupaev[7]}`);
}

kuupaevEesti("01.11.26");

//18. Ülesanne – Teadmata hulk
function arvutaArvud(arvud) {
    let summa = 0;
    let koguarv = 0;

    arvud.forEach(arv => {
        summa = summa + arv;
        koguarv = koguarv + 1;
    });

    const keskmine = summa / koguarv;

    return [koguarv, keskmine];
}

const tulemus = arvutaArvud([2, 4, 6, 8]);

console.log("Arvude koguarv:", tulemus[0]);
console.log("Arvude keskmine:", tulemus[1]);

//19. Ülesanne – Salajane sõnum
const salajaneSonum = sonum => {
    return sonum.replace(/[aeiouõäöü]/gi, "*");
};

console.log(salajaneSonum("Tere maailm!"));

//20. Ülesanne – Unikaalsed nimed
const leiaUnikaalsedNimed = nimed => {
    const unikaalsed = [];

    nimed.forEach(nimi => {
        let olemas = false;

        unikaalsed.forEach(element => {
            if (element === nimi) {
                olemas = true;
            }
        });

        if (olemas === false) {
            unikaalsed[unikaalsed.length] = nimi;
        }
    });

    return unikaalsed;
};

const nimed = ["Kati", "Mati", "Kati", "Mari", "Mati", "Jüri"];

console.log(leiaUnikaalsedNimed(nimed))