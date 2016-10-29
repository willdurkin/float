$(document).ready(function() {

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

	// EYE ////////

	$('#small-bounce').animate
	
	$('#pupil').jqEye(function() {
		console.log('eye');
	});

	// FLOATERS ///////
	
	$('#float1').jqFloat({
		width: 500,
		height: 50,
		speed: 5000
	});

	$('#float2').jqFloat({
		width: 800,
		height: 800,
		speed: 5000,
		minHeight: 125
	});

	$('#ie').jqFloat({
		width: 1000,
		height: 1000,
		speed: 5000,
		minHeight: 125
	});

	function bounce(id) {
	    setInterval(function() {
	    	$(id).effect( "bounce", { distance: 15, times: 1 }, id, 100)
	    }, 500);
	};

	bounce("#small-float");

	$('#car').jqFloat({
		width: 3000,
		height: 30,
		speed: 2000,
	});

	// Draggable

	// $('#float1').Draggable()

	// Rotate ////////////

	$("#float2").rotate({bind:{
	  click: function(){
	    $(this).rotate({	
	      duration:6000,
	      angle: 0,
	      animateTo:360
	      })
	    }
	  }
	});


	var rotation = function (){
	  $("#ie").rotate({
	    angle:0,
	    animateTo:360,
	    duration:3000,
	    callback: rotation,
	    easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
	      return c*(t/d)+b;
	    }
	  });
	}

	$("#ie").rotate({
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

	function fadeOut(id) {
		$(id).fadeOut(400);
	}

	$('.spin1').on('click', function() {
		var spinners = document.getElementsByClassName('spin1');
		$(spinners).rotate({
			angle: 0,
			animateTo: 9000,
			duration: 200000,
		});
		$(spinners).fadeOut(4500);
		$('#spin2').rotate({
			angle: 0,
			animateTo: 90000,
			duration:4000000,
		});
	});

	$('#spin2').on('click', function() {
		// $('#spin3').animate({height: '100vw'}, 2000);
		// $('#spin3').animate({width: '100vh'}, 2000);
		// $('#spin3').animate({width: '2400px'}, 6000);
		// $('#spin3').animate({bottom: '300px'}, 2000);
		// $('#spin3').animate({right: '300px'}, 2000);
		$('#spin3').rotate({
			angle: 0,
			animateTo: 9000,
			duration: 900000,
		})
		$('#spin3').fadeOut(9000);
		$('#spin2').fadeOut(9000);
		$('.down').fadeIn(9000);
		location.href = "#i10";
	});

	// car

	$('#car').mouseenter(function(){
		console.log('open');
		$('#box1').addClass('open');
	})
	$('#car').mouseleave(function(){
		$('#box1').removeClass('open');
	})
	
	// document.getElementById('audio').autoplay;

	var audio = document.getElementById('audio');
	audio.autoplay;
	audio.loop = true;

	// CARL ///////

	var carlLines = [
		'Hi',
		"It's nice to see you",
		'Bye' 
	];

	var carlLinesLength = carlLines.length;
	var carlId

	// $('#carl-button').click(function() {
	// 	console.log('carl');
	// 	var carlID = 0
	// 	$('#carl-box').text(function() {
	// 		return carlLines[carlID];
	// 		carlID++;
			
	// 	})
	// })
});

