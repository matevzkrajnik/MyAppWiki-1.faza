function preveriPrijavo() {
    console.log("čista jeba");
    if (document.getElementById("vnosemail").value == "") {
        console.log("prazen email input");
        return false;
    }
    else if (document.getElementById("vnosgeslo").value == "") {
        console.log("prazen geslo input");
        return false;
    }
    else {
        var regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        console.log(regex.test(document.getElementById("vnosemail").value));
        if(regex.test(document.getElementById("vnosemail").value)){
            return true;
        }
        else{
            return false;
        }
    }

    return false;
}

function preveriRegistracijo() {
    console.log("ola");
}

$(document).ready(function(){

});