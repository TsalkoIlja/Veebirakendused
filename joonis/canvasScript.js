const canvas = document.getElementById('canvas');
const tx = canvas.getContext('2d');

// Puhasta funktsioon
function puhasta() {
    tx.clearRect(0, 0, canvas.width, canvas.height);
}

// 1. Kere funktsioon
function kere() {
    tx.fillStyle = '#1394d6';
    tx.fillRect(70, 230, 220, 70);
}

// 2. Katus funktsioon
function katus() {
    tx.fillStyle = '#1c4663';
    tx.fillRect(110, 160, 130, 70);
}

// 3. Aknad funktsioon
function aknad() {
    tx.fillStyle = "lightblue";
    // Esimene aken
    tx.fillRect(120, 175, 50, 40);
    // Tagumine aken
    tx.fillRect(180, 175, 50, 40);
}

// 4. Rattad funktsioon
function rattad() {
    // Vasak ratas
    tx.beginPath();
    tx.fillStyle = '#000000';
    tx.strokeStyle = '#471717';
    tx.lineWidth = 10;
    tx.arc(110, 300, 20, 0, 2 * Math.PI, true);
    tx.fill();
    tx.stroke();

    // Parem ratas
    tx.beginPath();
    tx.fillStyle = '#000000';
    tx.strokeStyle = '#471717';
    tx.lineWidth = 10;
    tx.arc(250, 300, 20, 0, 2 * Math.PI, true);
    tx.fill();
    tx.stroke();
}

// 5. Tuled funktsioon (kasutab jooni nagu näites)
function tuled() {
    tx.beginPath();
    tx.strokeStyle = '#cf8686';
    tx.lineWidth = 4;

    // Esimene tuli
    tx.moveTo(290, 245);
    tx.lineTo(305, 255);

    // Teine tuli (alumine)
    tx.moveTo(290, 265);
    tx.lineTo(310, 275);

    tx.stroke();
}

// Funktsioon, mis joonistab kõik osad korraga
function koik() {
    puhasta();
    kere();
    katus();
    aknad();
    rattad();
    tuled();
}