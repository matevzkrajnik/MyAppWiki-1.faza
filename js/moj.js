function preveriPrijavo() {
    document.getElementById("napakamail").style.visibility = "hidden";
    if (document.getElementById("vnosemail").value == "") {
        console.log("prazen email input");
        document.getElementById("napakamail").style.visibility = "visible";
        return false;
    }
    else if (document.getElementById("vnosgeslo").value == "") {
        console.log("prazen geslo input");
        document.getElementById("napakamail").style.visibility = "visible";
        return false;
    }
    else {
        var regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
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

$(document).ready(function(){

});