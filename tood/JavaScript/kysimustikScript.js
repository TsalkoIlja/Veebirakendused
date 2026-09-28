function nimiLugemineKastist() {
    let vastus1 = document.getElementById('vastus1');
    let nimi = document.getElementById('nimi');

    vastus1.innerHTML = "Sisestatud nimi on: " + nimi.value;
    vastus1.style.backgroundColor = "lightgreen";

    return nimi.value;
}

// radio valikud
function raadioValik() {
    let vastus2 = document.getElementById('vastus2');
    let spotify = document.getElementById('spotify');
    let radio = document.getElementById('radio');
    let vinyyl = document.getElementById('vinüülplaat');

    let valik = "";

    if (spotify.checked) {
        valik = spotify.value;
    }
    else if (radio.checked) {
        valik = radio.value;
    }
    else if (vinyyl.checked) {
        valik = vinyyl.value;
    }

    vastus2.innerHTML = "Valik: " + valik;
    vastus2.style.backgroundColor = "lightgreen";

    return valik;
}

// checkbox valik (Muusikud/ansamblid)
function checkboxValik() {
    let vastus3 = document.getElementById('vastus3');
    let MaxReboBand = document.getElementById('MaxReboBand');
    let ModalNodes = document.getElementById('ModalNodes');
    let Metallica = document.getElementById('Metallica');
    let Rammstein = document.getElementById('Rammstein');

    let valik2 = "";

    if (MaxReboBand.checked) {
        valik2 += MaxReboBand.value + ', ';
    }

    if (ModalNodes.checked) {
        valik2 += ModalNodes.value + ', ';
    }

    if (Metallica.checked) {
        valik2 += Metallica.value + ', ';
    }

    if (Rammstein.checked) {
        valik2 += Rammstein.value + ', ';
    }

    if (valik2 === "") {
        valik2 = "Tee oma valik!";
        vastus3.style.backgroundColor = "";
    } else {
        vastus3.style.backgroundColor = "lightgreen";
    }

    vastus3.innerHTML = "Sinu valitud muusikud: " + valik2;
    vastus3.style.backgroundColor = "lightgreen";

    return valik2;
}

// arvamus koolis kuulamisest (Textarea)
function arvamusLugemine() {
    let vastusArvamus = document.getElementById('vastusArvamus');
    let arvamus = document.getElementById('arvamus');

    vastusArvamus.innerHTML = "Sinu arvamus: " + arvamus.value;
    return arvamus.value;
}

// range
function rangeValik() {
    let vastus4 = document.getElementById('vastus4');
    let tund = document.getElementById('tund');

    vastus4.innerHTML = "Sa kuulad muusikat " + tund.value + " tundi päevas";
    vastus4.style.backgroundColor = "lightgreen";

    return tund.value;
}

// Raadio kuulamine (Jah/Ei)
function raadioKuulamineValik() {
    let vastusRaadio = document.getElementById('vastusRaadio');
    let raadioJah = document.getElementById('raadioJah');
    let raadioEi = document.getElementById('raadioEi');

    let valik = "";

    if (raadioJah.checked) {
        valik = raadioJah.value;
    } else if (raadioEi.checked) {
        valik = raadioEi.value;
    }

    vastusRaadio.innerHTML = "Raadio kuulamine: " + valik;

    return valik;
}

// Raadiojaamad (Text)
function jaamadLugemine() {
    let vastusJaamad = document.getElementById('vastusJaamad');
    let jaamad = document.getElementById('jaamad');

    vastusJaamad.innerHTML = "Sinu nimetatud jaamad: " + jaamad.value;

    return jaamad.value;
}

// select valik (6 stiili)
function selectValik() {
    let vastus5 = document.getElementById('vastus5');
    let stiil = document.getElementById('stiil');

    if (stiil.selectedIndex !== 0) {
        vastus5.innerHTML = "Sinu vastus: " + stiil.value;
    }
    else {
        vastus5.innerHTML = "palun tee oma valik";
    }

    return stiil.value;
}

// kasutab teisi funktsioone (Nupp "Saada")
function naitaKoike() {
    let vastuskoike = document.getElementById('vastuskoik');

    let nimi = nimiLugemineKastist();
    let muusikud = checkboxValik();
    let arvamus = arvamusLugemine();
    let tund = rangeValik();
    let raadio = raadioKuulamineValik();
    let jaamad = jaamadLugemine();
    let stiil = selectValik();
    let platvorm = raadioValik();

    vastuskoike.innerHTML =
        "<b>KOKKUVÕTE:</b><br>" +
        "Sinu nimi on: " + nimi + '<br>' +
        "Sinu valitud muusikud: " + muusikud + '<br>' +
        "Sinu arvamus: " + arvamus + '<br>' +
        "Sa kuulad muusikat " + tund + " tundi päevas<br>" +
        "Raadio kuulamine: " + raadio + '<br>' +
        "Sinu nimetatud jaamad: " + jaamad + '<br>' +
        "Sinu vastus (stiil): " + stiil + '<br>' +
        "Sa kasutad platvormi: " + platvorm;
}

function puhasta() {
    let vastus1 = document.getElementById('vastus1');
    let vastus2 = document.getElementById('vastus2');
    let vastus3 = document.getElementById('vastus3');
    let vastus4 = document.getElementById('vastus4');
    let vastus5 = document.getElementById('vastus5');
    let vastusArvamus = document.getElementById('vastusArvamus');
    let vastusRaadio = document.getElementById('vastusRaadio');
    let vastusJaamad = document.getElementById('vastusJaamad');
    let vastuskoik = document.getElementById('vastuskoik');

    vastus1.innerHTML = "";
    vastus1.style.backgroundColor = "";
    vastus2.innerHTML = "";
    vastus3.innerHTML = "";
    vastus3.style.backgroundColor = "";
    vastus4.innerHTML = "";
    vastus5.innerHTML = "";
    if (vastusArvamus) vastusArvamus.innerHTML = "";
    if (vastusRaadio) vastusRaadio.innerHTML = "";
    if (vastusJaamad) vastusJaamad.innerHTML = "";
    vastuskoik.innerHTML = "";
}

