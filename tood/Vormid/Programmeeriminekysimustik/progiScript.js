// 1. Checkbox valik (Programmeerimiskeeled)
function keeledValik() {
    let vastusKeeled = document.getElementById('vastusKeeled');
    let js = document.getElementById('js');
    let py = document.getElementById('py');
    let java = document.getElementById('java');
    let cs = document.getElementById('cs');
    let php = document.getElementById('php');

    let valik = "";

    if (js.checked) {
        valik += js.value + ', ';
    }
    if (py.checked) {
        valik += py.value + ', ';
    }
    if (java.checked) {
        valik += java.value + ', ';
    }
    if (cs.checked) {
        valik += cs.value + ', ';
    }
    if (php.checked) {
        valik += php.value + ', ';
    }

    if (valik === "") {
        vastusKeeled.innerHTML = "Tee oma valik!";
        vastusKeeled.style.backgroundColor = "";
    } else {
        vastusKeeled.innerHTML = "Sinu valitud programmeerimiskeeled: " + valik;
        vastusKeeled.style.backgroundColor = "lightgreen";
    }

    return valik;
}

// 2. Textarea (Arvamus õppimisest)
function arvamusLugemine() {
    let vastusArvamus = document.getElementById('vastusArvamus');
    let arvamus = document.getElementById('arvamus');

    vastusArvamus.innerHTML = "Sinu arvamus: " + arvamus.value;
    vastusArvamus.style.backgroundColor = "lightgreen";

    return arvamus.value;
}

// 3. Range (Tunnid nädalas)
function tunnidValik() {
    let vastusTunnid = document.getElementById('vastusTunnid');
    let tunnid = document.getElementById('tunnid');

    vastusTunnid.innerHTML = "Tegeled programmeerimisega " + tunnid.value + " tundi nädalas.";
    vastusTunnid.style.backgroundColor = "lightgreen";

    return tunnid.value;
}

// 4. Radio valik
function meeldibValik() {
    let vastusMeeldib = document.getElementById('vastusMeeldib');
    let meeldibPilt = document.getElementById('meeldibPilt');
    let meeldibJah = document.getElementById('meeldibJah');
    let meeldibEi = document.getElementById('meeldibEi');

    let tekst = "";

    if (meeldibJah.checked) {
        vastusMeeldib.innerHTML = "Programmeerimine meeldib!";
        meeldibPilt.src = "smile.png";
        meeldibPilt.classList.remove('peidetud'); // Показываем картинку
        tekst = "Jah";
    } else if (meeldibEi.checked) {
        vastusMeeldib.innerHTML = "Programmeerimine ei meeldi.";
        meeldibPilt.src = "kurb.png";
        meeldibPilt.classList.remove('peidetud'); // Показываем картинку
        tekst = "Ei";
    }

    vastusMeeldib.style.backgroundColor = "lightgreen";

    return tekst;
}

// 5. Text (Tööriistad)
function tooriistadLugemine() {
    let vastusTooriistad = document.getElementById('vastusTooriistad');
    let tooriistad = document.getElementById('tooriistad');

    vastusTooriistad.innerHTML = "Sinu nimetatud tööriistad: " + tooriistad.value;
    vastusTooriistad.style.backgroundColor = "lightgreen";

    return tooriistad.value;
}

// 6. Select valik (Soovitud keel)
function soovitudKeelValik() {
    let vastusSoovitudKeel = document.getElementById('vastusSoovitudKeel');
    let soovitudKeel = document.getElementById('soovitudKeel');

    if (soovitudKeel.selectedIndex !== 0) {
        vastusSoovitudKeel.innerHTML = "Sinu valik: " + soovitudKeel.value;
        vastusSoovitudKeel.style.backgroundColor = "lightgreen";
    } else {
        vastusSoovitudKeel.innerHTML = "palun tee oma valik";
        vastusSoovitudKeel.style.backgroundColor = "";
    }

    return soovitudKeel.value;
}

// Nupp "Saada" (Kokkuvõte)
function naitaKoike() {
    let vastuskoik = document.getElementById('vastuskoik');

    let keeled = keeledValik();
    let arvamus = arvamusLugemine();
    let tunnid = tunnidValik();
    let meeldib = meeldibValik();
    let tooriistad = tooriistadLugemine();
    let soovitudKeel = soovitudKeelValik();

    vastuskoik.innerHTML =
        "<b>KOKKUVÕTE:</b><br>" +
        "Valitud keeled: " + keeled + "<br>" +
        "Arvamus: " + arvamus + "<br>" +
        "Tunde nädalas: " + tunnid + "<br>" +
        "Kas meeldib: " + meeldib + "<br>" +
        "Tööriistad: " + tooriistad + "<br>" +
        "Soovitud keel: " + soovitudKeel;

    vastuskoik.style.backgroundColor = "lightgreen";
}

// Nupp "Puhasta"
function puhasta() {
    let vastusKeeled = document.getElementById('vastusKeeled');
    let vastusArvamus = document.getElementById('vastusArvamus');
    let vastusTunnid = document.getElementById('vastusTunnid');
    let vastusMeeldib = document.getElementById('vastusMeeldib');
    let vastusTooriistad = document.getElementById('vastusTooriistad');
    let vastusSoovitudKeel = document.getElementById('vastusSoovitudKeel');
    let vastuskoik = document.getElementById('vastuskoik');
    let meeldibPilt = document.getElementById('meeldibPilt');
    meeldibPilt.classList.add('peidetud');

    vastusKeeled.innerHTML = "";
    vastusKeeled.style.backgroundColor = "";

    vastusArvamus.innerHTML = "";
    vastusArvamus.style.backgroundColor = "";

    vastusTunnid.innerHTML = "";
    vastusTunnid.style.backgroundColor = "";

    vastusMeeldib.innerHTML = "";
    vastusMeeldib.style.backgroundColor = "";

    vastusTooriistad.innerHTML = "";
    vastusTooriistad.style.backgroundColor = "";

    vastusSoovitudKeel.innerHTML = "";
    vastusSoovitudKeel.style.backgroundColor = "";

    vastuskoik.innerHTML = "";
    vastuskoik.style.backgroundColor = "";

    meeldibPilt.src = "";
    meeldibPilt.style.display = "none";
}