function preveriPrijavo() {
    document.getElementById("napakamail").style.visibility = "hidden";
    if (document.getElementById("vnosemail").value == "") {
        console.log("prazen email input");
        $("vnosemail").setCustomValidity("sam da dela");
        document.getElementById("napakamail").style.visibility = "visible";
        return false;
    }
    else if (document.getElementById("vnosgeslo").value == "") {
        console.log("prazen geslo input");
        $("vnosgeslo").setCustomValidity("sam da dela");
        document.getElementById("napakamail").style.visibility = "visible";
        return false;
    }
    else {
        var regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        console.log("kaaaj")
        if(regex.test(document.getElementById("vnosemail").value)){
            return true;
        }
        else{
            console.log("Napačen format email-a");
            document.getElementById("napakamail").style.visibility = "visible";
            return false;
        }
    }

    return false;
}

function preveriRegistracijo() {
    document.getElementById("napaka").style.visibility = "hidden";
    var ime = document.getElementById("geslo1").value;
    var priimek = document.getElementById("priimek").value;
    var mail = document.getElementById("mail").value;
    var geslo1 = document.getElementById("geslo1").value;
    var geslo2 = document.getElementById("geslo2").value;
    var regexIme =  /[A-Za-z]+/i;
    var regexMail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var mailKul = regexMail.test(mail);
    //console.log(regexIme.test(ime));
    if(ime == "" || priimek == "" || !mailKul || geslo1 == "" || geslo2 == "" || geslo1 != geslo2){
        document.getElementById("napaka").style.visibility = "visible";
    }
    else {
        return true;
    }
    return false;
}

function pokazi(){
    console.log("radi");
    document.getElementById("sporocilo").style.visibility = "visible";
}

function skrij(){
    document.getElementById("sporocilo").style.visibility = "hidden";
}

function zapolni() {
    document.getElementById("naslov").value = "Splošno";
    document.getElementById("vsebina").value = "MyApp spletna storitev uporablja najnovejše tehnologije, da uporabnikom omogoči " +
        "vpogled v statistiko njihovih aplikacij. S povezavo do Google Play Store, iTunes App Store ter Windows Phone Apps naša storitev " +
        "dobi vse potrebne informacije ter jih predstavi na uporabniku prijazen način. Tako lahko tudi vsak začetnik razvijalec vidi, kako pogosto " +
        "uporabniki uporabljajo njegovo aplikacijo, kako dolgo jo imajo odprto, na katerih napravah jo uporabljajo, ... Te informacije so za vsakega " +
        "razvijalca pomembne, saj lahko na podlagi statistike uporabe svojo aplikacijo prilagodi za kar največjo uspešnost."
}

$(document).ready(function(){

});