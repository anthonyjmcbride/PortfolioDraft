$(document).ready(function() {
  // PARALLAX EFFECT
  $(window).scroll(function() {
    var windowScroll = $(this).scrollTop();
    console.log(windowScroll);
  });

  $(".jquery-badge").hide();
  // $(".frontgradient-line").hide();
  // $(".backgradient-line").hide();

  $(".language-div").mouseenter(function() {
    $(".frontgradient-line").fadeIn(600);
  });

  $(".language-div").mouseenter(function() {
    $(".backgradient-line").fadeIn(600);
  });


  $(".frontend-badge").hide().animate({
    	opacity: '0'
    });
    $(".frontend-div").mouseenter(function() {
        $(".frontend-badge").show().animate({
        	opacity: '1',
          marginTop: '-3px'
        });
    });

    $(".backend-badge").hide().animate({
      	opacity: '0'
      });
      $(".backend-div").mouseenter(function() {
          $(".backend-badge").show().animate({
          	opacity: '1',
            marginTop: '-3px'
          });
      });

    });
