function jookideValik(){
    let vastus2 = document.getElementById('vastus2');
    let joogiValik = document.getElementById('joogiValik');
    let kogus = document.getElementById('kogus');
    let vastusepilt2 = document.getElementById('vastusepilt2');

    const kohv = 1.50;
    const cola = 2.20;
    const fanta = 2.00;
    const vesi = 0;

    if (joogiValik.selectedIndex === 1){
        vastus2.innerHTML = kogus.value + ' Kohvi hind on ' + (kogus.value * kohv) + ' €';
        vastus2.style.color = "green";
        vastusepilt2.src = "https://espresso.ee/wp-content/uploads/2018/10/Kohvi_valmistamise_reeglid_2.jpg";
    } else if (joogiValik.selectedIndex === 2){
        vastus2.innerHTML = kogus.value + ' Vesi on tasuta!';
        vastus2.style.color = "green";
        vastusepilt2.src = "https://lh6.googleusercontent.com/proxy/lD9bqH4ovuRmJrYozxukM9D9QWtfEQne_gTBYEMI2GR_IECF78TFpwaR5JH6y4VU1nZFA8-S4TnlaFetvB5F4nlAPQ6asbeTB-5v13obpg";
    } else if (joogiValik.selectedIndex === 3){
        vastus2.innerHTML = kogus.value + ' Coca-Cola hind on ' + (kogus.value * cola) + ' €';
        vastus2.style.color = "green";
        vastusepilt2.src = "https://rimibaltic-res.cloudinary.com/image/upload/b_white,c_limit,dpr_auto,f_webp,q_auto:low,w_auto/d_ecommerce:backend-fallback.png/MAT_1350156_PCE_EE";
    } else if (joogiValik.selectedIndex === 4){
        vastus2.innerHTML = kogus.value + ' Fanta hind on ' + (kogus.value * fanta) + ' €';
        vastus2.style.color = "green";
        vastusepilt2.src = "https://rimibaltic-res.cloudinary.com/image/upload/b_white,c_limit,dpr_auto,f_webp,q_auto:low,w_auto/d_ecommerce:backend-fallback.png/MAT_1352600_PCE_EE";
    }
}
