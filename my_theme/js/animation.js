$(document).ready(function(){
    var display_contact = false;
   
    var speed = 4;
    var direction = true;
    var element = $('.front-cv .front-wrapper').height(0);
    var mds = $('.mds').height(0);
    var contact = $('.contact');
    var boxes = $('#animated-logo');
    var tl = new TimelineLite();
    var tl2 = new TimelineLite();
    var tl3 = new TimelineLite();
    
    tl.staggerFrom(boxes.find('.box'), speed, {rotation : 360}, 0.1);
    tl3.to(contact, 1, {alpha: 1, height : 80});
    tl3.pause();
    $('.btn-contact').click(function(){
        display_contact = !display_contact;
        if (display_contact)
            {
                tl3.play();
            }
        else
        {
            tl3.reverse();
        }
        
        
    });
    
        
    //tl.to(boxes, 1, {rotation: 45}, 0.2);
    function logo()
    {
        direction = !direction;
        if (direction)
            {
                tl.play();
            }
        else{
                tl.reverse();
        }
        //tl.staggerFrom(boxes.find('.box'), speed, {rotation : +180}, 0.1);
    }

    setInterval(logo, speed*1000 + 1000);
    
    
    
    tl2.to(element, 3, {alpha: 1, top : +200});
    tl2.staggerTo(element.find('.btn'), 0.5, {autoAlpha: 1}, 0.5, '-=2.5');
    tl2.to(mds, 1, {zIndex: 2, height : +150});
    tl2.staggerTo(mds.find('.rs'), 1, {autoAlpha : 1, marginTop: 0, height : 120, zIdex : 90}, 0.3, '-=2');


});