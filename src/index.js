import "./styles.css";
import homecreate from "./landing.js";
import reset from "./reset.js";
import menucreate from "./menu.js";
import aboutuscreate from "./about.js";

//IIFE
const websiteinterface = function(){
    //start with home and greet
    homecreate();
    //get all buttons
    const toHome = document.getElementById('home');
    const toMenu = document.getElementById('menu');
    const toAbout = document.getElementById('about');
    
    //add all 3 event listeners
    toHome.addEventListener('click', () => {
        reset();
        homecreate();
    });

    toMenu.addEventListener('click', () => {
        reset();
        menucreate();
    });

    toAbout.addEventListener('click', () => {
        reset();
        aboutuscreate();
    });
}();