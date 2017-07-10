$(document).ready(function() {

  //  $('body').hide(0).delay(200).fadeIn(3000);

   $(window).scroll(function() {

     var windowScroll = $(this).scrollTop();
     console.log(windowScroll);

     $('.bio').css({
       'transform' : 'translate(0px,' + windowScroll /160 + '%)'
     });

     $('.bio2').css({
       'transform' : 'translate(0px,' + windowScroll /80 + '%)'
     });

     $('.bio3').css({
       'transform' : 'translate(0px,' + windowScroll /80 + '%)'
     });

   });
});
