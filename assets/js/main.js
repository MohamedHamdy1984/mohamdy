// ********************   navbar
// Change active nav-item according to position
const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('header .nav-item a');

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY + 120;
    // console.log(scrollPosition);
    

    sections.forEach(section => {
        if (scrollPosition >= section.offsetTop) {
            links.forEach(link => {
                link.classList.remove('active');
                if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active');
                }
            });
        }
    });
});


// function onScroll(event){
//     var scrollPos = $(document).scrollTop();
//     $('header .nav-item a').each(function () {
//         var currLink = $(this);
//         var refElement = $(currLink.attr("href"));
//         if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//             $('header .nav-item a.active').removeClass("active");
//             currLink.addClass("active");
//         }
//         else{
//             currLink.removeClass("active");
//         }
//     });
// }
// $(document).ready(function () {
//     $(document).on("scroll", onScroll);
// });
















// ********************   Section projects 
// - Show selected cards and hide other



let projects_title = document.querySelectorAll('#projects .projects-filter input');
let cards = document.querySelectorAll('#projects .card-box');
for (let i = 0; i < projects_title.length; i++) {
    projects_title[i].addEventListener("click", function(){

        const value = this.getAttribute('id');
        if(value == 'all'){
            cards.forEach(function(card){
                card.classList.remove('hide');
                card.classList.remove('order-last');
            })
        } else {
            cards.forEach(function(card){
                if(card.classList.contains(value)){
                    card.classList.remove('hide');
                    card.classList.remove('order-last');
                } else {
                    card.classList.add('hide');
                    card.classList.add('order-last');
                }
            })
        }
    })
}

// let projects_title = document.querySelectorAll('#projects .projects-filter input');
// let cards = document.querySelectorAll('#projects .card-box');
// for (let i = 0; i < projects_title.length; i++) {
//     projects_title[i].addEventListener("click", function(){
//         // document.querySelector('#projects .projects-filter li.active')?.classList.remove('active')
//         // this.classList.add('active');

//         const value = this.getAttribute('data-filter');
//         if(value == 'all'){
//             cards.forEach(function(card){
//                 card.classList.remove('hide');
//                 card.classList.remove('order-last');
//             })
//         } else {
//             cards.forEach(function(card){
//                 if(card.classList.contains(value)){
//                     card.classList.remove('hide');
//                     card.classList.remove('order-last');
//                 } else {
//                     card.classList.add('hide');
//                     card.classList.add('order-last');
//                 }
//             })
//         }
//     })
// }

        // *********** same code but with  JQuery *********** //


// $(document).on('click', '.projects-filter li', function(){
//     $(this).addClass('active').siblings().removeClass('active');
// })

// $(document).ready(function () {
//     $('.projects-filter li').click(function () { 
//         const value = $(this).attr('data-filter');
//         if(value == 'all'){
//             $('.card-box').show('1000');
//         } else {
//             $('.card-box').not('.'+value).hide('1000');
//             $('.card-box').filter('.'+value).show('1000');
//         }
//     });
// });
