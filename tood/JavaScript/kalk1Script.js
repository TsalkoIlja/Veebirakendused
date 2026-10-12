function teisendamine() {
    let vastus = document.getElementById("vastus");
    let valik = document.getElementsByName("valik");
    let arv=document.getElementById("arv")

    const toll=39.97;
    const meeter=0.0254;


    //tsükli
    for(let i=0;i<valik.length;i++){
        if(valik[i].checked){
            if(valik[i].value==="meeter"){
                vastus.innerHTML=arv.value +' meetri '+
                    arv.value*toll +' tolli';
                vastus.style.color = "red";
                vastusepilt.scr="https://www.trailerplus.ee/6-tolli.html"
            } else if(valik[i].value==="tolli"){
                vastus.innerHTML=arv.value +' meetri= '+
                arv.value*meeter +'meetri';
                vastus.style.color = "green";
                vastusepilt.scr="https://www.taskutark.ee/meeter/"
            }
            else {
                vastus.innerHTML= " Vali ühiku - kas meeter või toll"
            }
        }
        }
    }