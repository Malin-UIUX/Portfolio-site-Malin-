// This will print a message in the browser console
console.log("Hey, welcome to my portfolio site!")


function menuToggle() { 
    var nav = document.getElementById("myNavtoggle"); 
    if (nav.className === "navtoggle") { 
        nav.className += " responsive"; } 
    else { nav.className = "navtoggle"; 
    } 
}

$(document).ready(function(){ 
    $("a[href^='#']").on('click', function(e) { 
        e.preventDefault(); 
        var target = this.hash; 
        $('html, body').animate({ 
            scrollTop: $(target).offset().top 
        }, 600); 
    }); 
});