const mobile_nav = document.querySelector(".mobile-navbar-btn");
const header = document.querySelector(".header");

const toggleNavbar =  () =>{
    header.classList.toggle('active');
};

mobile_nav.addEventListener("click", () => toggleNavbar());

window.addEventListener('scroll', function(){
    const stickyHeader = document.querySelector('.header');
    stickyHeader.classList.toggle("sticky", this.window.scrollY > 50);
});

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    grabCurser: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });