(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: (target.offset().top - 48)
            }, 1000, "easeInOutExpo");
            return false;
        }
    }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 54
    });

    // Collapse Navbar
    var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    // navbarCollapse();
    // Collapse the navbar when page is scrolled
    //$(window).scroll(navbarCollapse);

})(jQuery); // End of use strict

$(document).ready(function(){  
    var $window = $(window);
    var fadeOnScroll = function ($cssElement) {
        var height = $cssElement.parent().outerHeight()*1/2;
        var prevOpacity = Infinity;

        $window.scroll(function() {
            var scrollTop = Math.max(0, $window.scrollTop()), 
            scrollBottom = $window.height() + scrollTop, 
			opacity       = 1 - (scrollTop / height);

            if (opacity < 0 && prevOpacity < 0) return;

            $cssElement.css({
                opacity: opacity
            });

            prevOpacity = opacity;
        });
    }
    fadeOnScroll($('.masthead .intro-body'));

	// Handles expansion/contraction of Courses section
    var $divView = $('div.view');
    $divView.addClass('view');
      
    $('div.slide').click(function() {
		var expandingDiv = ($divView.height() == 500) ? true : false;
			
        $('div.view').animate({
			height: (expandingDiv ? $divView.get(0).scrollHeight  : "500px") 
			} , 500);

		$('#course-dropdown-icon').toggleClass("down"); 
		$('div.slide').toggleClass("down"); 

		if (expandingDiv) {
			document.getElementById("course-dropdown-text").innerHTML = "Collapse Courses";
		} else {
			document.getElementById("course-dropdown-text").innerHTML = "Expand Courses";
		}
        return false;
    });
});
