$(document).ready(function() {
  // PARALLAX EFFECT
  function hideElement(element) {
    $(element).hide().animate({ opacity: '0'});
  };

  function hideElementWidth(element) {
    $(element).hide().animate({ opacity: '0', width: 0});
  };


  hideElement(".frontend-badge");
  hideElement(".backend-badge");
  hideElement(".front-text");
  hideElement(".back-text");
  hideElementWidth(".frontgradient-line");
  hideElementWidth(".backgradient-line");




  $(window).scroll(function() {
    var windowScroll = $(this).scrollTop();
    function animateElement(element) {
        $(element).show().animate({
          opacity: '1',
          marginTop: 20
        },1500);
    };
    if (windowScroll > 500) {
      animateElement(".frontend-badge");
      animateElement(".backend-badge");
      animateElement(".front-text");
      animateElement(".back-text");
        }
    console.log(windowScroll);
  });

  $(window).scroll(function() {
    var windowScroll = $(this).scrollTop();
    function animateElementWidth(element) {
        $(element).show().animate({
          opacity: '1',
          width: 490,
        },500);
    };
    if (windowScroll > 500) {
      animateElementWidth(".frontgradient-line");
      animateElementWidth(".backgradient-line");
        }
    // console.log(windowScroll);
  });

  // animateElement(".frontgradient-line");
  // animateElement(".backgradient-line");

});
