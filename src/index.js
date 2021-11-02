import 'detect-autofill';
import { Input } from 'mdb-ui-kit/src/js/free/input';
import './styles.scss';

$(function(){

    // navbar
    //home 
    $('#nav-home-link').on('click', function open(){
            window.open('./index.html', '_self')
        }
    );
    // About
    $('#nav-about-link').on('click', function open(){
            window.open('./about.html', '_self')
        }
    );
    // Resume
    $('#nav-cv-link').on('click', function open(){
            window.open('./cv.html', '_self')
        }
    );
    // Github 
    $('#nav-github-link').on('click', function(){
        window.open('https://github.com/JamesWotherspoon?tab=repositories');
    })
    // Contact nav
    $('#nav-contact-link').on('click', function(){
        console.log(window.location.href);
        if ($('body').is('.about')){
            window.open('./index.html?contact=true', '_self');
        };
        let $linkDestination =  $($(this).data('link')).offset().top;
        $(window).scrollTop($linkDestination);
    })




    // stack triggered to fall
    if ($('body').is('.index')){

        if(new URLSearchParams(window.location.search).get('contact') ){
            let $linkDestination =  $('.contact-content').offset().top;
            $(window).scrollTop($linkDestination);
            window.history.replaceState({}, document.title, "/" + "index.html");
        };

        // projects 
        $('.project-one-image-container').on('click', projectOneOpen);

        function projectOneOpen(){
            window.open('https://jameswotherspoon.github.io/dashboard/');
        }

        $('.project-two-image-container').on('click', projectTwoOpen)

        function projectTwoOpen(){
            window.open('https://jameswotherspoon.github.io/airbnb_clone/');
        }

    }
    // open default email account
    $('#email-address-container').on('click', function(){
        window.location.href = "mailto:james.t.wotherspoon@gmail.com?subject=Hi!";
    })

    // footer 
    $('#btn-scroll-top').on('click', function(){
        $(window).scrollTop(0);
    })

});
