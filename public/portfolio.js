$(document).ready(function() {


  // Animted.css effect | Entrance animation
  $(".title-name").addClass('animated fadeInDown');

  // Before hide functions
  function hideElement(element) {
    $(element).hide().animate({ opacity: '0'});
  };
  function hideElementWidth(element) {$(element).hide().animate({ opacity: '0', width: 0});};
  hideElement(".top-badge");
  hideElement(".bottom-badge");
  hideElement(".tech-stack-text");
  hideElementWidth(".gradient-line");

  // FADE IN ANIMATION via scroll
  $(window).scroll(function() {
    // Measures scroll from Top of the page
    var windowScroll = $(this).scrollTop();
    // Function executing FadeIn
    function animateElement(element) {
        $(element).show().animate({
          opacity: '1',
          marginTop: 20
        },1500);
    };
    if (windowScroll > 380) {
      // Elements targeted
      animateElement(".top-badge");
      animateElement(".bottom-badge");
      animateElement(".tech-stack-text");
        }
    console.log(windowScroll);
  });


  // GRADIENT LINE ANIMATION
  $(window).scroll(function() {
    // Measures scroll from Top of the page
    var windowScroll = $(this).scrollTop();
    // Function revealing gradient line
    function animateElementWidth(element) {
        $(element).show().animate({
          opacity: '1',
          width: 490,
        },500);
    };
    if (windowScroll > 373) {
      // Elements tageted
      animateElementWidth(".gradient-line");
        }
  });

  // $(window).scroll(function() {
  //   var windowScroll = $(this).scrollTop();
  //   function animatedFadeIn(element) {
  //     $(element).addClass('animated fadeIn');
  //   };
  //     if (windowScroll > 1037) {
  //       animatedFadeIn("div#exTab3.container");
  //     }
  //   });


  // animateElement(".frontgradient-line");
  // animateElement(".backgradient-line");

});
