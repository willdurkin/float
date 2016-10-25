$(document).ready(function() {
	$('.floater').jqFloat({
		width: 500,
		height: 50,
		speed: 5000
	});

	$('.float2').jqFloat({
		width: 800,
		height: 800,
		speed: 5000,
		minHeight: 125
	});

	$('.img').jqFloat({
		width: 1000,
		height: 1000,
		speed: 5000,
		minHeight: 125
	});

	function bounce(id) {
	    setInterval(function() {
	    	$(id).effect( "bounce", { distance: 5, times: 2 }, id, 1000)
	    }, 3000);
	};

	// function bounce() {
	// 	var elem = document.getElementById("small-float");
	// 	  var width = 0;
	// 	  var id = setInterval(frame, 10);
	// 	  function frame() {
		    
	// 	  }
	// }

	bounce("#small-float");
	

	// $('.small-float').jqFloat({
	// 	width: 1,
	// 	height: 20,
	// 	speed: 900
	// })

	// Rotate ////////////

	$(".float2").rotate({bind:{
	  click: function(){
	  	console.log('rotate');
	    $(this).rotate({	
	      duration:6000,
	      angle: 0,
	      animateTo:360
	      })
	    }
	  }
	});


	var rotation = function (){
	  $(".img").rotate({
	    angle:0,
	    animateTo:360,
	    duration:3000,
	    callback: rotation,
	    easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
	      return c*(t/d)+b;
	    }
	  });
	}

	$(".img").rotate({
	  bind:
	  {
	    mouseover : function() {
	    $(this).rotate({
	    	angle:0,
	    	animateTo:360,
	    	duration:3000,
	    	callback: rotation,
	    	easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
	    	  return c*(t/d)+b;
	    	}
	    })
	    rotation();
	  },
	  mouseout : function() {
	    $(this).rotate({animateTo:0})
	    }
	  }
	});



	
	// document.getElementById('audio').autoplay;

	var audio = document.getElementById('audio');
	audio.autoplay;
	audio.loop = true;

	// LocalScroll /////////////////
	
	jQuery(function( $ ){
        /**
         * Most jQuery.localScroll's settings, actually belong to jQuery.ScrollTo, check it's demo for an example of each option.
         * @see http://flesler.demos.com/jquery/scrollTo/
         * You can use EVERY single setting of jQuery.ScrollTo, in the settings hash you send to jQuery.LocalScroll.
         */
        
        // The default axis is 'y', but in this demo, I want to scroll both
        // You can modify any default like this
        $.localScroll.defaults.axis = 'xy';
        
        // Scroll initially if there's a hash (.something) in the url 
        $.localScroll.hash({
            target: '#content', // Could be a selector or a jQuery object too.
            queue:true,
            duration:1200,
            easing: 'easeOutBounce'
        });
        
        /**
         * NOTE: I use $.localScroll instead of $('#navigation').localScroll() so I
         * also affect the >> and << links. I want every link in the page to scroll.
         */
        $.localScroll({
            target: '#content', // could be a selector or a jQuery object too.
            queue:true,
            duration:1200,
            hash:true,
            onBefore:function( e, anchor, $target ){
                    // The 'this' is the settings object, can be modified
            },
            onAfter:function( anchor, settings ){
                    // The 'this' contains the scrolled element (#content)
            }
        });
	});
});