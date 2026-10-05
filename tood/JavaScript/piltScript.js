function juhuslikPilt(){
    pildid=[
        '../images/smile.png',
        '../images/kurb.png',
        '../images/neutral.png',
        '../images/lill.png',
    ]
    const pilt=pildid[Math.floor(Math.random()*pildid.length)];
    let randomPilt=document.getElementById('randomPilt');

    randomPilt.src=pilt;

}
function selectValik(){
    let vastus=document.getElementById('vastus');
    let valik=document.getElementById('valik');
    let randomPilt=document.getElementById('randomPilt');

    if (randomPilt.getAttribute('src') == valik.value) {
        vastus.innerHTML = "ÕIGE!";
        vastus.style.color = "green";
    } else {
        vastus.innerHTML = "VALE!";
        vastus.style.color = "red";
    }
}
function raadioValik() {
    let piltValik = document.getElementById('piltValik');
    let valitudPilt = document.getElementById('valitudPilt');

for (let i = 0; i < piltValik.length; i++) {
    if(piltValik[i].checked) {
        valitudPilt.src = piltValik[i].value;

        }else{
        //alert('tee oma valiku')
    }

    }
}



