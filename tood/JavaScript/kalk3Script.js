function yhikuteTeisendamine() {
    let vastus3 = document.getElementById("vastus3");
    let yhik = document.getElementsByName("yhik");
    let arv3 = document.getElementById("arv3");
    let vastusepilt3 = document.getElementById("vastusepilt3");

    const kmMiil = 0.621371;
    const miilKm = 1.60934;
    const kgNael = 2.20462;
    const naelKg = 0.453592;

    for (let i = 0; i < yhik.length; i++) {
        if (yhik[i].checked) {

            if (yhik[i].value === "km_miil") {
                vastus3.innerHTML = arv3.value + ' km = ' + (arv3.value * kmMiil).toFixed(2) + ' miili';
                vastus3.style.color = "darkgreen";
                vastusepilt3.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0gSLeFuFj0H1XjgofKm6tAuKUfjHN1Hn6kzjOUw8LiZ1sEjiVKYER1kO1&s=10";
            }
            if (yhik[i].value === "miil_km") {
                vastus3.innerHTML = arv3.value + ' miili = ' + (arv3.value * miilKm).toFixed(2) + ' km';
                vastus3.style.color = "darkblue";
                vastusepilt3.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPV2wmEMosIm8uUq01xzWRgzCOFk7UklLJ1THlS0Yr0QTmCxO0ZBg_l90B&s=10";
            }
            if (yhik[i].value === "kg_nael") {
                vastus3.innerHTML = arv3.value + ' kg = ' + (arv3.value * kgNael).toFixed(2) + ' naela';
                vastus3.style.color = "brown";
                vastusepilt3.src = "https://thumbs.dreamstime.com/b/1-269431146.jpg";
            }
            if (yhik[i].value === "nael_kg") {
                vastus3.innerHTML = arv3.value + ' naela = ' + (arv3.value * naelKg).toFixed(2) + ' kg';
                vastus3.style.color = "saddlebrown";
                vastusepilt3.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR75xb5DqWqM0OofDOnVeDNOkJWDwUH03HprxIkMFLIVyIirQVR_qwRwGE&s=10";
            }
            if (yhik[i].value === "c_f") {
                vastus3.innerHTML = arv3.value + ' °C = ' + ((arv3.value * 9/5) + 32).toFixed(1) + ' °F';
                vastus3.style.color = "crimson";
                vastusepilt3.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1bRjg3u9vX0gqVCqvupybsYpRaf_8D2xV_AJfqS4R54g-ty2IhtsOhnCV&s=10";
            }

            if (yhik[i].value === "f_c") {
                vastus3.innerHTML = arv3.value + ' °F = ' + ((arv3.value - 32) * 5/9).toFixed(1) + ' °C';
                vastus3.style.color = "darkred";
                vastusepilt3.src = "https://www.shutterstock.com/image-vector/converting-between-fahrenheit-celsius-temperature-260nw-2214114169.jpg";
            }

        }
    }
}