import * as mdb from 'mdb-ui-kit';
import './styles.scss';

var $ = require("jquery"); // navbar
// About - test this isn't linked up #about 


$('#nav-about-link').on('click', function openCv() {
  window.open('./about.html', '_self');
}); // Resume

$('#nav-cv-link').on('click', function openCv() {
  window.open('./cv.html', '_self');
}); // Github 

$('#nav-github-link').on('click', function () {
  window.open('https://github.com/JamesWotherspoon?tab=repositories');
}); // Contact nav

$('#nav-contact-link').on('click', function () {
  var $linkDestination = $($(this).data('link')).offset().top;
  $(window).scrollTop($linkDestination);
}); // stack triggered to fall

$(window).on('scroll', triggerStackFall);

function triggerStackFall() {
  var $viewportMiddle = $(window).scrollTop() + $(window).height() * 0.9;

  if ($('.stack-section').offset().top + $('.stack-section').height() < $viewportMiddle) {
    $('.stack-icon').addClass('trigger-fall');
    console.log('fired');
    $(window).off('scroll', triggerStackFall);
  }
} // projects 


$('.project-one-image-container').on('click', projectOneOpen);

function projectOneOpen() {
  window.open('https://jameswotherspoon.github.io/dashboard/');
}

$('.project-two-image-container').on('click', projectTwoOpen);

function projectTwoOpen() {
  window.open('https://jameswotherspoon.github.io/airbnb_clone/');
} // contact 
// formsubmit api 


$('.contact-form').on('submit', function (event) {
  event.preventDefault();
  var emailValue = $('#email').val();
  var nameValue = $('#name').val();
  var textareaValue = $('#contact-textarea').val();
  $.ajax({
    url: "https://formsubmit.co/ajax/baf6f2f077f9f8497948a7d66fd2092e",
    method: "POST",
    dataType: "json",
    data: {
      email: emailValue,
      name: nameValue,
      textarea: textareaValue
    },
    success: function success() {
      console.log('success');
      $('.contact-form')[0].reset();
      /*$('.contact-form-overlay').css('display', 'flex').text('Your message has been sent');
      setTimeout(()=> {
          $('.contact-form-overlay').css('display', 'none');
      }, 3000); */
    },
    error: function error(err) {
      console.log('error');
      $('.contact-form')[0].reset();
      /*
      $('.contact-form-overlay').empty().css('display', 'flex').html('Your message was not successfull <br><br> Please contact me directly at <br><br> james.t.wotherspoon@gmail.com');
      setTimeout(()=> {
          $('.contact-form-overlay').css('display', 'none');
      }, 12000); */
    }
  });
}); // open default email account

$('#email-address-container').on('click', function () {
  window.location.href = "mailto:james.t.wotherspoon@gmail.com?subject=Hi!";
}); // footer 

$('#btn-scroll-top').on('click', function () {
  $(window).scrollTop(0);
});