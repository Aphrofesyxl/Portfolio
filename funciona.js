document.addEventListener('DOMContentLoaded', function () {
    var galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(function (item) {
        item.addEventListener('click', function () {
            var modal = document.createElement('div');
            modal.className = 'modal';

            var modalImage = document.createElement('img');
            modalImage.src = this.dataset.image;
            modalImage.alt = this.dataset.alt;

            // Removido o width e height no modalImage.style para evitar diminuição
            modal.appendChild(modalImage);
            document.body.appendChild(modal);

            modal.addEventListener('click', function () {
                document.body.removeChild(modal);
            });
        });
    });
});

//  toogle navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='  + id + ']').classList.add('active');
            });

            sec.classList.add('.show-animate');
        }
        
        else {
            sec.classList.remove('.show-animate');
        }
    });

    //  sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /* remove toggle icon and navbar when click navbar links (scroll) */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}