var elementPosition = $('#end').offset();

$(window).scroll(function(){
        if($(window).scrollBottom() > elementPosition.bottom){
              $('#end').css('position','fixed').css('bottom','0');
        } else {
            $('#end').css('position','static');
        }    
});