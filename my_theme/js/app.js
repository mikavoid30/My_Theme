$('document').ready(function(){
    //Fullscreen
    function fullscreen_init()
    {
        var $screenY = $(document).height(); 
        $('.fullscreen').css('minHeight', ($screenY + 80)+'px');
        $('.fullscreen').css('height', ($screenY + 80)+'px');
        $('.fullscreen').css('width', '100%');
        $('.fullscreen').css('padding', '0');
        $('.fullscreen').css('margin', '0');
    }
    
    //Init fullscreen
    fullscreen_init();
    $(window).on('resize', function(){
      fullscreen_init();
    });
    
    /*$(window).on('scroll', function(){
      if ($(window).scrollTop() > 50)
          {
              $('nav').animate({
                  'height': '50px',
                  'lineHeight': '50px'
           }, 500);
              $('.button.menu-toggle').animate({
                  'height': '48px',
                  'fontSize': '20px'
              }, 500);
            $('nav img').css('opacity', '0');

          }
        else
        {
            $('nav').animate({
                    'height': '90px',
                    'lineHeight': '90px'
              }, 500);
            $('nav img').css('opacity', '1');
        }
    });*/

});