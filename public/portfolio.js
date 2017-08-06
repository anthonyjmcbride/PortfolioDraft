$(document).ready(function() {
  // PARALLAX EFFECT
  function hideElement(element) {
    $(element).hide().animate({ opacity: '0'});
  };

  hideElement(".frontend-badge");
  hideElement(".backend-badge");




  $(window).scroll(function() {
    var windowScroll = $(this).scrollTop();
    function animateElement(element) {
        $(element).show().animate({
          opacity: '1',
          marginTop: '-10px'
        });
    };
    if (windowScroll > 560) {
      animateElement(".frontend-badge");
      animateElement(".backend-badge");
    }
    // console.log(windowScroll);
  });


  // $(".frontgradient-line",".backgradient-line").hide();
  //
  // $(".label-div").mouseenter(function() {
  //   $(".frontgradient-line").fadeIn();
  // });
  //
  // $(".label-div").mouseenter(function() {
  //   $(".backgradient-line").fadeIn();
  // });



  // animateElement(".frontend-div",".frontend-badge");
  // animateElement(".backend-div",".backend-badge");

});
