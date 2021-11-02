// formsubmit api 
$(function(){

    $('.contact-form').on('submit', (event) => {
        event.preventDefault();    
        let emailValue = $('#email').val();
        let nameValue = $('#name').val();
        let textareaValue = $('#contact-textarea').val();
        $('.contact-form')[0].reset();
        $('.contact-form-overlay').css({display: 'flex'});

        $.ajax({
            url: "https://formsubmit.co/ajax/baf6f2f077f9f8497948a7d66fd2092e",
            method: "POST",
            dataType: "json",
            data: {
                email: emailValue,
                name: nameValue,
                textarea: textareaValue
            },
            success: () => {
                console.log('success')
                $('.contact-form-spinner').css({display: 'none'});
                $('.contact-form-overlay').text('Your message has been sent');
                setTimeout(()=> {
                    $('.contact-form-overlay').css({display: 'none'});
                    $('.contact-form-spinner').css({display: 'flex'});
                }, 3000);
            },
            error: (err) => {
                console.log(err)
                $('.contact-form-spinner').css({display: 'none'});
                $('.contact-form-overlay').text('Your message was not successfull <br><br> Please contact me directly at <br><br> james.t.wotherspoon@gmail.com');
                setTimeout(()=> {
                    $('.contact-form-overlay').css({display: 'none'});
                    $('.contact-form-spinner').css({display: 'flex'});
                }, 10000);
            }
        })
    })

})();