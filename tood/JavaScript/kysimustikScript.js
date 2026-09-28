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

    return valik;
}

// checkbox valik
function checkboxValik() {
    let vastus3 = document.getElementById('vastus3');
    let MaxReboBand = document.getElementById('MaxReboBand');
    let ModalNodes = document.getElementById('ModalNodes');
    let Metallica = document.getElementById('Metallica');
    let Rammstein = document.getElementById('Rammstein');

    let valik2 = "";

    if (MaxReboBand.checked) {
        valik2 += MaxReboBand.value + ', <br>';
    }

    if (ModalNodes.checked) {
        valik2 += ModalNodes.value + ', <br>';
    }

    if (Metallica.checked) {
        valik2 += Metallica.value + ', <br>';
    }

    if (Rammstein.checked) {
        valik2 += Rammstein.value + ', <br>';
    }

    if (valik2 === "") {
        valik2 = "Tee oma valik!";
    }

    vastus3.innerHTML = "Sinu lemmik on: " + valik2;
    vastus3.style.backgroundColor = "lightgreen";

    return valik2;
}

// range
function rangeValik() {
    let vastus4 = document.getElementById('vastus4');
    let tund = document.getElementById('tund');

    vastus4.innerHTML = "Sa kuuled muusikat: " + tund.value + " tundi";

    return tund.value;
}

// select valik
function selectValik() {
    let vastus5 = document.getElementById('vastus5');
    let stiil = document.getElementById('stiil');

    if (stiil.selectedIndex !== 0) {
        vastus5.innerHTML = "Sa valisid " + stiil.value;
    }
    else {
        vastus5.innerHTML = "palun tee oma valik";
    }

    return stiil.value;
}

// kasutab teisi funktsioone
function naitaKoike() {
    let vastuskoike = document.getElementById('vastuskoik');

    let nimi = nimiLugemineKastist();
    let valik = raadioValik();
    let valik2 = checkboxValik();
    let tund = rangeValik();
    let stiil = selectValik();

    vastuskoike.innerHTML = "Sinu nimi on: " + nimi + '<br>' +
        'Sinu lemmikud on: ' + valik2 + '<br>' +
        'Sa kasutad ' + valik + '<br>' +
        'Sa kuuled ' + tund + ' tundi' + '<br>' +
        'Sa valisid ' + stiil;
}

function puhasta() {
    let vastus1 = document.getElementById('vastus1');
    let vastus2 = document.getElementById('vastus2');
    let vastus3 = document.getElementById('vastus3');
    let vastus4 = document.getElementById('vastus4');
    let vastus5 = document.getElementById('vastus5');
    let vastuskoik = document.getElementById('vastuskoik');

    vastus1.innerHTML = "";
    vastus2.innerHTML = "";
    vastus3.innerHTML = "";
    vastus4.innerHTML = "";
    vastus5.innerHTML = "";
    vastuskoik.innerHTML = "";
}

