// Raamatu objekt
let raamat = {
    pealkiri: "Kevade",
    autor: "Oskar Luts",
    aasta: 1912,

    kirjeldus() {
        return this.pealkiri + " - " + this.autor + " (" + this.aasta + ")";
    },

    muudaAasta(uusAasta) {
        this.aasta = uusAasta;
    }
};

// Raamatukogu objekt
let raamatukogu = {
    raamatud: [
        raamat,
        { pealkiri: "Harry Potter", autor: "J. K. Rowling", aasta: 1997 },
        { pealkiri: "Kaka ja kevad", autor: "Andrus Kivirähk", aasta: 2009 }
    ],

    // Kõikide raamatute kuvamine
    kuvaRaamatud() {
        this.raamatud.forEach((r) => {
            console.log(`
                Pealkiri: ${r.pealkiri},
                Autor: ${r.autor},
                Aasta: ${r.aasta}
            `);
        });
    },

    // Uue raamatu lisamine
    lisaRaamat(uusRaamat) {
        this.raamatud.push(uusRaamat);
    },

    // Raamatute koguarv
    raamatuteArv() {
        return this.raamatud.length;
    },

    // Raamatud pärast 2000. aastat
    parast2000() {
        return this.raamatud.filter(r => r.aasta > 2000).length;
    },

    // Oma meetod - raamatu otsimine
    otsiRaamat(pealkiri) {
        return this.raamatud.find(r => r.pealkiri === pealkiri);
    }
};

// Raamatu kirjelduse kuvamine
function kuvaKirjeldus() {
    let tulemus = raamat.kirjeldus();

    console.log(tulemus);

    document.getElementById("vastus").innerHTML = tulemus;
}

// Raamatu aasta muutmine
function muudaAasta() {
    raamat.muudaAasta(1913);

    let tulemus = raamat.kirjeldus();

    console.log("Uus aasta:", raamat.aasta);
    console.log(tulemus);

    document.getElementById("vastus").innerHTML = tulemus;
}

// Kõikide raamatute kuvamine
function kuvaRaamatud() {
    raamatukogu.kuvaRaamatud();

    let vastus = document.getElementById("vastus");
    vastus.innerHTML = "";

    raamatukogu.raamatud.forEach((r) => {
        vastus.innerHTML +=
            "Pealkiri: " + r.pealkiri +
            ", Autor: " + r.autor +
            ", Aasta: " + r.aasta + "<br>";
    });
}

// Uue raamatu lisamine
function lisaRaamat() {
    raamatukogu.lisaRaamat({
        pealkiri: "Mees, kes teadis ussisõnu",
        autor: "Andrus Kivirähk",
        aasta: 2007
    });

    console.log("Uus raamat lisatud!");
    raamatukogu.kuvaRaamatud();

    kuvaRaamatud();
}

// Raamatute arvu kuvamine
function kuvaArv() {
    let tulemus = raamatukogu.raamatuteArv();

    console.log("Raamatute arv:", tulemus);

    document.getElementById("vastus").innerHTML =
        "Raamatute arv: " + tulemus;
}

// Pärast 2000. aastat ilmunud raamatute arv
function kuvaUuemad() {
    let tulemus = raamatukogu.parast2000();

    console.log("Pärast 2000. aastat:", tulemus);

    document.getElementById("vastus").innerHTML =
        "Pärast 2000. aastat: " + tulemus;
}

// Raamatu otsimine
function otsiRaamat() {
    let leitud = raamatukogu.otsiRaamat("Kevade");

    let tulemus = leitud
        ? leitud.pealkiri + " - " + leitud.autor + " (" + leitud.aasta + ")"
        : "Raamatut ei leitud";

    console.log(tulemus);

    document.getElementById("vastus").innerHTML = tulemus;
}
