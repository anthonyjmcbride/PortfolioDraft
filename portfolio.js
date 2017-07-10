$(document).ready(function() {

  // PARALLAX EFFECT
  $(window).scroll(function() {
    var windowScroll = $(this).scrollTop();
    console.log(windowScroll);

    $('.parallax-container').css({
      'transform' : 'translate(0px,' + windowScroll /80 + '%)'
    });

    $('.parallax-container2').css({
      'transform' : 'translate(0px,' + windowScroll /80 + '%)'
    });

    $('.parallax-container3').css({
      'transform' : 'translate(0px,' + windowScroll /80 + '%)'
    });

    $('.parallax-container4').css({
      'transform' : 'translate(0px,' + windowScroll /320 + '%)'
    });

  });

  // DROP DOWN EFFECTS
  $('.bio-list').hide(0);

    $('.parallax-container').on('mouseover', 'p', function() {
     $('.bio-list').slideDown(1500);
   });

   $('.bio-list2').hide(0);

     $('.parallax-container2').on('mouseover', 'p', function() {
      $('.bio-list2').slideDown(1500);
    });

    $('.bio-list3').hide(0);

      $('.parallax-container3').on('mouseover', 'p', function() {
       $('.bio-list3').slideDown(1500);
     });
});
