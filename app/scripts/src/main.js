window.addEventListener('DOMContentLoaded', function(event) {

    var hero = tns({
        container: '.hero__wrapper',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        axis: 'vertical',
        controls: false,
        navPosition: 'bottom',
        speed: 500
    });

    var features = tns({
        container: '.features__carousel',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        controls: false,
        navPosition: 'bottom',
        speed: 500,
        responsive: {
            768: {
                items: 3
            }
        }
    });

    var team = tns({
        container: '.team__carousel',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        controls: false,
        navPosition: 'bottom',
        speed: 500,
        responsive: {
            768: {
                items: 2
            },
            1024: {
                items: 4
            }
        }
    });

    var toggle = document.querySelector('.toggle-menu');
    var header = document.querySelector('.header');
    var modal = document.querySelector('.modal');
    var body = document.body;

    var open_menu = function(event) {
        header.classList.toggle('open');
        toggle.classList.toggle('is-active');
        modal.classList.toggle('active');
        body.classList.toggle('overflow-hidden');
    }

    toggle.addEventListener('click', function(event) { open_menu(event) })
    modal.addEventListener('click', function(event) { open_menu(event) })

});
