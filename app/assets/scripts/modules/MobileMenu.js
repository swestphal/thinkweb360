import $ from 'jquery';

class MobileMenu{
    constructor() {
        this.menuIcon = $('.main-nav__menu-icon');
        this.navigation=$('.main-nav__items');
        this.hamburger=$('.main-nav__menu-icon');
        this.events();
    }

    events() {
       this.menuIcon.click(this.toggleTheMenu.bind(this)); 
    }

    toggleTheMenu() {
        this.navigation.toggleClass('main-nav__items--are-visible');
        this.hamburger.toggleClass('main-nav__menu-icon--is-open');
        
    }
}



export default MobileMenu;