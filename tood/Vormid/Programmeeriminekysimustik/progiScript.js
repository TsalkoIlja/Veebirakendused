$(document).ready(function() {
    // 1. Peidame vead alguses
    $('.viga').hide();

    // Reaalajas tagasiside väljade muutumisel
    $('input[name="keeled"]').change(function() {
        keeledValik();
    });

    $('#arvamus').on('input', function() {
        arvamusLugemine();
    });

    $('#tunnid').on('input', function() {
        tunnidValik();
    });

    $('input[name="meeldib"]').change(function() {
        meeldibValik();
    });

    $('#tooriistad').on('input', function() {
        tooriistadLugemine();
    });

    $('#soovitudKeel').change(function() {
        soovitudKeelValik();
    });

    // Puhastusnupp
    $('#puhasta').click(function() {
        $('#progiVorm')[0].reset();
        $('.viga').hide();
        puhastaVastused();
    });

    // Vormi saatmise valideerimine (jQuery submit)
    $('#progiVorm').submit(function(event) {
        let valid = true;

        // 1. Checkbox valideerimine
        if ($('input[name="keeled"]:checked').length === 0) {
            $('#vigaKeeled').show();
            valid = false;
        } else {
            $('#vigaKeeled').hide();
        }

        // 2. Textarea valideerimine
        if ($('#arvamus').val().trim() === "") {
            $('#vigaArvamus').show();
            valid = false;
        } else {
            $('#vigaArvamus').hide();
        }

        // 3. Radio valideerimine
        if ($('input[name="meeldib"]:checked').length === 0) {
            $('#vigaMeeldib').show();
            valid = false;
        } else {
            $('#vigaMeeldib').hide();
        }

        // 4. Text (tööriistad) valideerimine
        if ($('#tooriistad').val().trim() === "") {
            $('#vigaTooriistad').show();
            valid = false;
        } else {
            $('#vigaTooriistad').hide();
        }

        // 5. Select valideerimine
        if ($('#soovitudKeel').val() === "vali" || $('#soovitudKeel').val() === "") {
            $('#vigaSoovitudKeel').show();
            valid = false;
        } else {
            $('#vigaSoovitudKeel').hide();
        }

        // Kui on vead, peatame vormi saatmise
        if (!valid) {
            event.preventDefault();
        } else {
            event.preventDefault(); // Ei lase lehel päriselt uuesti laadida, vaid näitab kokkuvõtet
            naitaKoike();
        }
    });
});

// Abifunktsioonid reaalajas andmete kuvamiseks
function keeledValik() {
    let valikud = [];
    $('input[name="keeled"]:checked').each(function() {
        valikud.push($(this).val());
    });

    let vastusKeeled = $('#vastusKeeled');
    if (valikud.length === 0) {
        vastusKeeled.html("Tee oma valik!");
        vastusKeeled.css("background-color", "");
        return "";
    } else {
        let tekst = valikud.join(', ');
        vastusKeeled.html("Sinu valitud programmeerimiskeeled: " + tekst);
        vastusKeeled.css("background-color", "lightgreen");
        return tekst;
    }
}

function arvamusLugemine() {
    let arvamus = $('#arvamus').val();
    let vastusArvamus = $('#vastusArvamus');
    vastusArvamus.html("Sinu arvamus: " + arvamus);
    vastusArvamus.css("background-color", "lightgreen");
    return arvamus;
}

function tunnidValik() {
    let tunnid = $('#tunnid').val();
    let vastusTunnid = $('#vastusTunnid');
    vastusTunnid.html("Tegeled programmeerimisega " + tunnid + " tundi nädalas.");
    vastusTunnid.css("background-color", "lightgreen");
    return tunnid;
}

function meeldibValik() {
    let vastusMeeldib = $('#vastusMeeldib');
    let meeldibPilt = $('#meeldibPilt');
    let valitud = $('input[name="meeldib"]:checked').val();

    if (valitud === "smile.png") {
        vastusMeeldib.html("Programmeerimine meeldib!");
        meeldibPilt.attr("src", "smile.png");
        meeldibPilt.removeClass('peidetud');
        vastusMeeldib.css("background-color", "lightgreen");
        return "Jah";
    } else if (valitud === "kurb.png") {
        vastusMeeldib.html("Programmeerimine ei meeldi.");
        meeldibPilt.attr("src", "kurb.png");
        meeldibPilt.removeClass('peidetud');
        vastusMeeldib.css("background-color", "lightgreen");
        return "Ei";
    }
    return "";
}

function tooriistadLugemine() {
    let tooriistad = $('#tooriistad').val();
    let vastusTooriistad = $('#vastusTooriistad');
    vastusTooriistad.html("Sinu nimetatud tööriistad: " + tooriistad);
    vastusTooriistad.css("background-color", "lightgreen");
    return tooriistad;
}

function soovitudKeelValik() {
    let keel = $('#soovitudKeel').val();
    let vastusSoovitudKeel = $('#vastusSoovitudKeel');

    if (keel !== "vali" && keel !== "") {
        vastusSoovitudKeel.html("Sinu valik: " + keel);
        vastusSoovitudKeel.css("background-color", "lightgreen");
        return keel;
    } else {
        vastusSoovitudKeel.html("palun tee oma valik");
        vastusSoovitudKeel.css("background-color", "");
        return "";
    }
}

function naitaKoike() {
    let keeled = keeledValik();
    let arvamus = arvamusLugemine();
    let tunnid = tunnidValik();
    let meeldib = meeldibValik();
    let tooriistad = tooriistadLugemine();
    let soovitudKeel = soovitudKeelValik();

    $('#vastuskoik').html(
        "<b>KOKKUVÕTE:</b><br>" +
        "Valitud keeled: " + keeled + "<br>" +
        "Arvamus: " + arvamus + "<br>" +
        "Tunde nädalas: " + tunnid + "<br>" +
        "Kas meeldib: " + meeldib + "<br>" +
        "Tööriistad: " + tooriistad + "<br>" +
        "Soovitud keel: " + soovitudKeel
    ).css("background-color", "lightgreen");
}

function puhastaVastused() {
    $('#vastusKeeled, #vastusArvamus, #vastusTunnid, #vastusMeeldib, #vastusTooriistad, #vastusSoovitudKeel, #vastuskoik').html("").css("background-color", "");
    $('#meeldibPilt').addClass('peidetud').attr("src", "");
}