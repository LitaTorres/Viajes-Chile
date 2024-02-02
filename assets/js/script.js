
$(document).ready(function(){
    alert("Bienvenido(a) a Viajes Chile");

    $(".btn").click(function(){
        alert("El mensaje ha sido enviado correctamente")
    });

    $(".card-title").click(function(){
    $(".card-text2").toggle();    
    });

});

$(document).ready(function(){
    $(".nav-link").on('click', function(){
        $(this).css({
            "font-weight": "bold",
            "font-size": "20px",
            "color": "#0022ff"
        });
    });
});




$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function () {
                window.location.hash = hash;
            });
        }
    });
});



// Tooltip

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))