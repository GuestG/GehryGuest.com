(function ($) {
  "use strict";

  $(function () {
    var header = $(".start-style");
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();

      if (scroll >= 10) {
        header.removeClass("start-style").addClass("scroll-on");
      } else {
        header.removeClass("scroll-on").addClass("start-style");
      }
    });
  });

  //Animation
  $(document).ready(function () {
    $("body.hero-anime").removeClass("hero-anime");
  });

  //Menu On Hover

  $("body").on("mouseenter mouseleave", ".nav-item", function (e) {
    if ($(window).width() > 750) {
      var _d = $(e.target).closest(".nav-item");
      _d.addClass("show");
      setTimeout(function () {
        _d[_d.is(":hover") ? "addClass" : "removeClass"]("show");
      }, 1);
    }
  });

  //background animation functions
  $("#nmberone").click(function () {
    $("#mainCoantiner, #formBg").removeClass("mystyleSec");
    $("#mainCoantiner, #formBg").removeClass("mystylethird");
    event.stopPropagation();
  });


  //Full Screen Image
  $(document).ready(function () {
    $(".Case-Study-Image-Container img").click(function () {
        if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) { // Safari
                document.webkitExitFullscreen();
            } else if (document.mozCancelFullScreen) { // Firefox
                document.mozCancelFullScreen();
            } else if (document.msExitFullscreen) { // IE/Edge
                document.msExitFullscreen();
            }
        } else {
            if (this.requestFullscreen) {
                this.requestFullscreen();
            } else if (this.webkitRequestFullscreen) { // Safari
                this.webkitRequestFullscreen();
            } else if (this.mozRequestFullScreen) { // Firefox
                this.mozRequestFullScreen();
            } else if (this.msRequestFullscreen) { // IE/Edge
                this.msRequestFullscreen();
            }
        }
    });
});



  // document.onclick = (event) => {
  // 	if (document.fullscreenElement) {
  // 	  document
  // 		.exitFullscreen()
  // 		.then(() => console.log("Document Exited from Full screen mode"))
  // 		.catch((err) => console.error(err));
  // 	} else {
  // 	  document.documentElement.requestFullscreen();
  // 	}
  //   };

  // scroll to top

  // page transition
  // $(document).ready(function() {
  // 	// Intercept all clicks on <a> tags
  // 	$('a[id="Project-Link"], .Footer-Project-Links').click(function(event) {
  // 		// Prevent the default behavior of following the link
  // 		event.preventDefault();

  // 		// Get the href attribute of the clicked link
  // 		var url = $(this).attr('href');

  // 		// Load the content of the new page using AJAX
  // 		$.ajax({
  // 			url: url,
  // 			type: 'GET',
  // 			dataType: 'html',
  // 			success: function(response) {
  // 				// Replace the content of the current page with the content of the new page
  // 				$('body').fadeOut('fast', function() {
  // 					$(this).html(response).fadeIn('fast');
  // 				});
  // 			}
  // 		});
  // 	});
  // });

  //fade in on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
      // else {
      // 	entry.target.classList.remove("show");
      // }
    });
  });

  const hiddenElements = document.querySelectorAll(
    ".hidden-l, .hidden-r, .hidden-u"
  );
  hiddenElements.forEach((el) => observer.observe(el));

})(jQuery);
