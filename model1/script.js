
/*-----------------     menu bar    -----------------*/

var navlinks=document.getElementById("nav-links");
    function showmenu(){
        navlinks.style.right="0";
    }
    function hidemenu(){
        navlinks.style.right="-200px";
    }

/*-----------------     progressive counter script    -----------------*/

jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});


