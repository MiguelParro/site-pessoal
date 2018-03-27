function setCookie(cname,cvalue) {
    document.cookie = cname + "=" + cvalue;
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function changeCookie(){
    if(getCookie("home") === "true"){
        setCookie("home", false);
        document.getElementById("home").classList.add('active');
    }   

    if(getCookie("about")==="true"){
        setCookie("about", false);
        document.getElementById("about").classList.add('active');
    }

    if(getCookie("contacts")==="true"){
        setCookie("contacts", false);
        document.getElementById("contacts").classList.add('active');
    }
}

function checkCookie() {
setCookie("home", true);
setCookie("about", true);
setCookie("contacts", true);
if(document.title==="Miguel Parro"){
        setCookie("about", false);
        setCookie("contacts", false);   
        changeCookie();
    }else if(document.title==="About - Miguel Parro"){
        setCookie("home", false);
        setCookie("contacts", false);   
        changeCookie();
    }else if(document.title==="Contacts - Miguel Parro"){
        setCookie("home", false);
        setCookie("about", false);   
        changeCookie();
    }
}

