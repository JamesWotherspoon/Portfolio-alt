

$(function(){
    if ($('body').is('.index')){
        //greeting message typed animation

        const message = `James`;
        const messageArray = message.split('');
        let $cursor = $('.greeting-h1-cursor');

        $cursor.delay(400).queue(function(){
            $(this).append('|');

            const toggleCursor = setInterval(() => {
                $cursor.toggle();
            }, 500);
            let i = 0;

            const printLetters = setInterval(() => {
                if (i < messageArray.length) {
                    $('.greeting-h1-name').append(`${messageArray[i]}`);
                    i++;
                } else { 
                    clearInterval(printLetters);

                    setTimeout(() => {
                        let i = 0;
                        setInterval(() => {
                            $('.feature-fade-ready').eq(i).addClass('fade-in');
                            i++;
                        }, 200);
                    }, 200);

                    setTimeout(() => {
                        clearInterval(toggleCursor);
                        $cursor.empty();
                    }, 3000);
                };
            }, 140);
        });

        // on scroll stack fall 

        $(window).on('scroll', triggerStackFall);

        function triggerStackFall(){
            let $viewportTriggerPoint = $(window).scrollTop() + ($(window).height() * 0.9);
            if($('.stack-section').offset().top + $('.stack-section').height() < $viewportTriggerPoint){
                $('.stack-icon').addClass('trigger-fall');
                console.log('stack fall fired ')
                $(window).off('scroll', triggerStackFall);
            }
        }
    }
})();