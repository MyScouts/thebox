const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const urlRegex = ['home', 'projects', 'contact-us', 'about-us'];
window.onhashchange = function () {
    const currentUrl = window.location.href;
    urlRegex.forEach((regex) => {
        if (currentUrl.includes(regex)) {
            const activeMenu = document.getElementsByClassName('active')
            for (let index = 0; index < activeMenu.length; index++) {
                activeMenu[index].classList.remove('active');
            }

            const menuSelect = document.getElementsByClassName(regex);
            if(menuSelect.length > 0){
                menuSelect[0].classList.add('active');
            }
        }
    });
}