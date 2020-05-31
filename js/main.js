$(document).ready(function(){

    let index = 0;

    let finalIndex = $('.testimonials').last().index();
    
    // console.log(finalIndex);

    $('a.next').click(function(e){

        index++;

        // console.log(index);

        if (index <= finalIndex) {

            $('.testimonials').removeClass('active').eq(index).addClass('active');

        } else {

            index--;

            console.log('No more persons!');

        }
    
    
    })

    $('a.prev').click(function(e){

        if (index > 0) {

            index--;
            
            $('.testimonials').removeClass('active').eq(index).addClass('active');

        } else {

            console.log('No more persons!');

        }

    })

})