function fix_sidemenu() {

    if (window.innerWidth > 768) {
        if (scrolltop() > 158) {
            document.getElementById("navBar").style.position = "fixed";
            document.getElementById("navBar").style.top = "0";
            document.getElementById("navBar").style.padding = "0";
            document.getElementById("navBar").style.width = "100%"; /*98.80%*/

        } else {
            document.getElementById("navBar").style.top = "0";
            document.getElementById("navBar").style.position = "relative";
            document.getElementById("navBar").style.width = "1350px";

        }

    } else {

        if (scrolltop() > 41) {
            document.getElementById("navBar").style.position = "fixed";
            document.getElementById("navBar").style.top = "0";
            document.getElementById("navBar").style.padding = "0";
            document.getElementById("navBar").style.width = "100%";		/*after it pinaka una 95.60%*/		 /* Dati dati tag pinaka una 94.50%*/

        } else {
            document.getElementById("navBar").style.top = "0";
            document.getElementById("navBar").style.position = "relative";
            document.getElementById("navBar").style.width = "100%";

        }

    }


}


function scrolltop() {
    var top = 0;
    if (typeof (window.pageYOffset) == "number") {
        top = window.pageYOffset;
    } else if (document.body && document.body.scrollTop) {
        top = document.body.scrollTop;
    } else if (document.documentElement && document.documentElement.scrollTop) {
        top = document.documentElement.scrollTop;
    }
    return top;
}