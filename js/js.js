$(document).ready(function() {

	// WAYPOINTS ////

	var $i10wp = $('#i10wp');

	$i10wp.waypoint(function() {
		console.log('waypoint!');
	})

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
	
	$('#pupil').jqEye(function() {
		console.log('eye');
	});

	// FLOATERS ///////
	
	// $('#float1').jqFloat({
	// 	width: 500,
	// 	height: 50,
	// 	speed: 5000
	// });

	// $('#float2').jqFloat({
	// 	width: 800,
	// 	height: 800,
	// 	speed: 5000,
	// 	minHeight: 125
	// });

	// $('#ie').jqFloat({
	// 	width: 1000,
	// 	height: 1000,
	// 	speed: 5000,
	// 	minHeight: 125
	// });

	function bounce(id) {
	    setInterval(function() {
	    	$(id).effect( "bounce", { distance: 15, times: 1 }, id, 100)
	    }, 500);
	};

	bounce("#small-float");

	// $('#car').jqFloat({
	// 	width: 3000,
	// 	height: 30,
	// 	speed: 2000,
	// });

	// Draggable

	// $('#float1').Draggable()

	var $i10prev = $('#i10prev')


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

	function right() {

	}

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
		$('#spin3').fadeOut(1000);
		$('#spin2').fadeOut(1000);
		$('#smile1').delay(3000).fadeIn(100)
			.animate({'left': '+=60%'}, 5000, 'linear')
			
			
			
			
		// $('#i10prev').jqFloat({
		// 	width: 100,
		// 	height: 100,
		// 	speed: 4000,
		// });
	});

	$('#smile1').click(function(){
		$(this).effect( "bounce", { distance: 15, times: 3}).fadeOut(400);
		$('#smile2').delay(1000).fadeIn(400).effect( "bounce", { distance: 15, times: 3});
	})

	$('#smile2').click(function(){
		$(this).effect( "bounce", { distance: 15, times: 3}).fadeOut(400);
		$('#smile3').delay(1000).fadeIn(400).effect( "bounce", { distance: 15, times: 3});
	})

	$('#smile3').click(function(){
		$(this).effect( "bounce", { distance: 15, times: 3}).fadeOut(400);
		$('#smile4').delay(1000).fadeIn(400).effect( "bounce", { distance: 15, times: 3});
		$('#smile5').delay(1000).fadeIn(400).effect( "bounce", { distance: 15, times: 3});
		$('#smile6').delay(1000).fadeIn(400).delay(100).effect( "bounce", { distance: 15, times: 3});
		$('#smile7').delay(1000).fadeIn(400).effect( "bounce", { distance: 15, times: 3});
		$('#smile8').delay(1000).fadeIn(400).effect( "bounce", { distance: 15, times: 3});
		$('#smile9').delay(1000).fadeIn(400).delay(100).effect( "bounce", { distance: 15, times: 3});
		$('#smile10').delay(1000).fadeIn(400).delay(200).effect( "bounce", { distance: 15, times: 3});
		$('#smile11').delay(1000).fadeIn(400).delay(300).effect( "bounce", { distance: 15, times: 3});
		$('#smile12').delay(1000).fadeIn(400).effect( "bounce", { distance: 15, times: 3});
		$('#smile13').delay(1000).fadeIn(400).delay(200).effect( "bounce", { distance: 15, times: 3});
	})

	var smileCount = 0;

	
	var $clickRemove = $('.clickRemove')

	$clickRemove.click(function(){
		$(this).fadeOut();
		smileCount ++;
		console.log(smileCount);
		if (smileCount === 10) {
			$('#i10prev').delay(1000).fadeIn(400);
		}

	})

	// car

	$('#car').mouseenter(function(){
		console.log('open');
		$('#box1').addClass('open');
	})
	$('#car').mouseleave(function(){
		$('#box1').removeClass('open');
	})
	

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
	    click : function() {
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
	  click : function() {
	    $(this).rotate({animateTo:0})
	    }
	  }
	});

	function fadeOut(id) {
		$(id).fadeOut(400);
	}

	
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



console.log('hi');

// var waypoint = new Waypoint({
//   element: document.getElementById('i10'),
//   handler: function(direction) {
//   	console.log('hi');
//     notify('Direction: ' + direction)
//   },
//   offset: '5%'
// })

