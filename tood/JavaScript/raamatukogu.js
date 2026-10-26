// OSA 1. RAAMATU OBJEKT


// 1. Loome objekti nimega raamat.
// Objektil on kolm omadust: pealkiri, autor ja aasta.
let raamat = {
    pealkiri: "Kevade",       // Raamatu pealkiri
    autor: "Oskar Luts",     // Raamatu autor
    aasta: 1912,            // Väljaandmise aasta

    // 2. Meetod kirjeldus() koostab raamatu kirjelduse.
    // this viitab praegusele objektile.
    // return tagastab pealkirja, autori ja aasta.
    kirjeldus() {
        return this.pealkiri + " - " + this.autor + " (" + this.aasta + ")";
    },

    // 3. Meetod muudaAasta() muudab raamatu aastat.
    // uusAasta on uus väärtus, mis salvestatakse objekti.
    muudaAasta(uusAasta) {
        this.aasta = uusAasta;
    }
};


// Kuvame raamatu kirjelduse ja vana aasta konsoolis.
console.log("Raamatu kirjeldus:", raamat.kirjeldus());
console.log("Vana aasta:", raamat.aasta);

// Muudame raamatu aasta 1912-st 1913-ks.
raamat.muudaAasta(1913);

// Kontrollime, kas aasta muutus.
console.log("Uus aasta:", raamat.aasta);
console.log("Uus kirjeldus:", raamat.kirjeldus());



// OSA 2. RAAMATUKOGU


// 1. Loome objekti raamatukogu.
// Omadus raamatud sisaldab raamatute massiivi.
let raamatukogu = {
    raamatud: [
        raamat,
        { pealkiri: "Harry Potter", autor: "J. K. Rowling", aasta: 1997 },
        { pealkiri: "Kaka ja kevad", autor: "Andrus Kivirähk", aasta: 2009 }
    ],

    // 2. Meetod kuvaRaamatud() kuvab kõik raamatud.
    // forEach() käib läbi kõik massiivi elemendid.
    // console.log() kuvab andmed konsoolis.
    kuvaRaamatud() {
        this.raamatud.forEach((r) => {
            console.log(`
                Pealkiri: ${r.pealkiri}
                Autor: ${r.autor}
                Aasta: ${r.aasta}
            `);
        });
    },

    // 3. Meetod lisaRaamat() lisab uue raamatu.
    // push() lisab raamatu massiivi lõppu.
    lisaRaamat(uusRaamat) {
        this.raamatud.push(uusRaamat);
    },

    // 4. Meetod raamatuteArv() loendab kõik raamatud.
    // length näitab massiivi elementide arvu.
    raamatuteArv() {
        return this.raamatud.length;
    },

    // 5. Meetod parast2000() loendab uuemad raamatud.
    // filter() valib raamatud, mille aasta on suurem kui 2000.
    // length annab sobivate raamatute arvu.
    parast2000() {
        return this.raamatud.filter(r => r.aasta > 2000).length;
    },

    // 6. MINU ENDA MEETOD: otsiRaamat()
    // Meetod otsib raamatu pealkirja järgi.
    // find() leiab esimese sobiva raamatu.
    // Kui raamatut ei leita, tagastatakse undefined.
    otsiRaamat(pealkiri) {
        return this.raamatud.find(r => r.pealkiri === pealkiri);
    }
};



// OSA 3. MEETODITE KASUTAMINE


// Lisame raamatukogusse neljanda raamatu.
raamatukogu.lisaRaamat({
    pealkiri: "Mees, kes teadis ussisõnu",
    autor: "Andrus Kivirähk",
    aasta: 2007
});

// Kuvame kõik raamatud konsoolis.
console.log("Kõik raamatud:");
raamatukogu.kuvaRaamatud();

// Kuvame raamatute koguarvu.
console.log("Raamatute arv:", raamatukogu.raamatuteArv());

// Kuvame pärast 2000. aastat ilmunud raamatute arvu.
console.log("Pärast 2000. aastat:", raamatukogu.parast2000());

// Otsime raamatut Kevade ja kuvame tulemuse.
let leitud = raamatukogu.otsiRaamat("Kevade");
console.log("Otsitud raamat:", leitud);



// OSA 4. TULEMUSTE KUVAMINE HTML-LEHEL


// Loome tühja muutuja HTML-teksti salvestamiseks.
let tulemus = "";

// Lisame raamatu kirjelduse ja aasta muutmise tulemuse.
// += lisab uue teksti olemasolevale tekstile.
tulemus += `
    <h2>Raamatu objekt</h2>
    <p><b>Raamatu kirjeldus:</b> ${raamat.kirjeldus()}</p>
    <p><b>Vana aasta:</b> 1912</p>
    <p><b>Uus aasta:</b> ${raamat.aasta}</p>
    <hr>
    <h2>Raamatukogu</h2>
`;

// forEach() käib läbi kõik raamatud.
// Iga raamatu andmed lisatakse HTML-teksti.
// br viib teksti järgmisele reale.
raamatukogu.raamatud.forEach((r) => {
    tulemus += `
        <p>
            <b>Pealkiri:</b> ${r.pealkiri}<br>
            <b>Autor:</b> ${r.autor}<br>
            <b>Aasta:</b> ${r.aasta}
        </p>
        <hr>
    `;
});

// Lisame raamatute arvu, uuemate raamatute arvu
// ja otsitud raamatu andmed HTML-lehele.
tulemus += `
    <p><b>Raamatute arv:</b> ${raamatukogu.raamatuteArv()}</p>
    <p><b>Pärast 2000. aastat:</b> ${raamatukogu.parast2000()}</p>
    <p><b>Otsitud raamat:</b> ${leitud.pealkiri} - ${leitud.autor}</p>
`;

// Otsime HTML-lehelt elemendi id-ga "vastus".
let vastus = document.getElementById("vastus");

// innerHTML kuvab kõik tulemused veebilehel.
vastus.innerHTML = tulemus;



