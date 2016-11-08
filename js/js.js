$(document).ready(function() {
	var $ie = $('#ie');

	// WAYPOINTS ////

	// var $i10wp = $('#i10wp');

	// $i10wp.waypoint(function() {
	// 	console.log('waypoint!');
	// })

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

	function bounce(id) {
	    setInterval(function() {
	    	$(id).effect( "bounce", { distance: 5, times: 2 }, id, 100)
	    }, 1500);
	};

	bounce("#start");

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

	$('#spin2').on('click', function() {
		$('#spin3').rotate({
			animateTo: 9000,
			duration: 900000,
		})
		$('.spin1').rotate({
			angle: 0,
			animateTo: 9000,
			duration: 200000,
		});
		$('.spin1').fadeOut(4500);
		$('#spin2').rotate({
			angle: 0,
			animateTo: 90000,
			duration:4000000,
		});
		$('#spin3').fadeOut(5000);
		$('#spin2').fadeOut(5000);
		$('#smile1').delay(8000).fadeIn(100)
			.animate({'left': '+=58%'}, 5000, 'linear')
	});

	// SMILES ////

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

	//bird

	$('#bird').click(function() {
		$(this).removeClass('flip-h').animate({'right':'+=3000px'}, 1500, 'linear').fadeOut();
		$('#h10prev').delay(1000).fadeIn(400);
	})

	$('#tree1').click(function() {
		$(this).effect( "bounce", { distance: 15, times: 3})
	})

	$('#tree2').click(function() {
		$(this).effect( "bounce", { distance: 15, times: 3})
	})

	$('#tree3').click(function() {
		$(this).effect( "bounce", { distance: 15, times: 3})
	});

	$('#cloud3').click(function() {
		$(this)
		.css('pointer-events', 'none')
		.animate({'left':'+=25px'}, 1000, 'linear')
		.animate({'top':'+=25px'}, 1000, 'linear')
		.animate({'left':'+=50px'}, 2000, 'linear')
		.animate({'top':'+=50px'}, 2000, 'linear')
		.animate({'left':'+=2000px'}, 25000, 'linear')
		.fadeOut(3000);
	});

	$('#cloud1').jqFloat({
		width: 500,
		height: 10,
		speed: 20000
	});

	$('#cloud2').jqFloat({
		width: 500,
		height: 10,
		speed: 17000
	});

	// bird
	
	var birdClick = 0;

	$('#bird2').click(function() {
		if(birdClick === 4) {
			$(this).toggleClass('flip-h').animate({'left':'+=1000px'}).fadeOut();
		} else {
			$(this).toggleClass('flip-h');
			birdClick++;	
		}
	});

	// g10

	// rock

	var ieFloat = false;

	$('#rock').click(function() {
		if(ieFloat === false) {
			$('#ie')
				.css('display', 'block')
				.animate({'top':'-=300px'}, 'fast')
				.animate({'left':'+=150px'}, 'fast')
				.animate({'top':'+=80px'}, 'fast')
				.animate({'left':'-=1500px'}, 'fast')
				.animate({'left':'+=1350px'}, 'fast')
				.effect( "bounce", { distance: 15, times: 3})
				.prependTo('#content')
			ieFloat = true;
		} 
	});

	// ie

	var ieFloat2 = false;

	$ie.click(function() {
		if(ieFloat2 === false) {
			$('#ie').jqFloat({
				width: 1000,
				height: 1000,
				speed: 5000,
				minHeight: 125
			}).css('z-index', 2);
			$('#ieAudio')[0].play();
			$('#g10 .prev').delay(1000).fadeIn()
		};
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

	var ieSpin = false;

	$("#ie").rotate({
	  bind:
	  {
	    click : function() {
			if(ieSpin === false) {
				console.log('if')    
			    $(this).rotate({
			    	animateTo:360,
			    	duration:3000,
			    	callback: rotation,
			    	easing: function (x,t,b,c,d){        
			    	// t: current time, b: begInnIng value, c: change In value, d: duration
			    	  return c*(t/d)+b;
			    	}
			    })
			   	ieSpin = true;
			} else {
				console.log('else')
				$(this).stopRotate();
				$(this).rotate({
					animate: 0
				});
				ieSpin = false;
			}
		}
	  }
	});

	// f10

	var float1Click = 1;

	$('#floater1').click(function() {
		if(float1Click === 1){
			$(this)	
				.animate({'left':'-=300px'}, 'slow')
				.delay(250)
				.animate({'top':'-=50px'}, 1200)
				.prependTo('#content')
				$('#hide1').fadeOut();
			float1Click++;
		// } else if(float1Click === 2) {
		// 	$('#face1')
		// 		.addClass('flip-h')
		// 		.delay(1000)
		// 		.removeClass('flip-h');
		// 	
		// 	console.log(float1Click);
		// 	float1Click++;
		} else {
			$(this).jqFloat({
				width: 500,
				height: 500,
				speed: 5000
			});
			$('#floater2').animate({'left':'+=20px'})
		}
	});

	

	$('#floater2').click().jqFloat({
		width: 800,
		height: 800,
		speed: 5000,
		minHeight: 125
	});

	

	$('#floater2').click(function() {
		$(this).prependTo('#content')
	})

	// car

	// $('#car').mouseenter(function(){
	// 	console.log('open');
	// 	$('#box1').addClass('open');
	// })
	// $('#car').mouseleave(function(){
	// 	$('#box1').removeClass('open');
	// })
	
	// $('#car').jqFloat({
	// 	width: 3000,
	// 	height: 30,
	// 	speed: 2000,
	// });

	// Rotate ////////////

	$("#floater2").rotate({bind:{
	  click: function(){
	    $(this).rotate({	
	      duration:6000,
	      angle: 0,
	      animateTo:360
	      })
	    }
	  }
	});

	function fadeOut(id) {
		$(id).fadeOut(400);
	}
	

	// e10

	var $b10prev = $('.b10prev');

	$b10prev.rotate({bind:{
	  click: function(){
	    $b10prev.rotate({	
	      duration:6000,
	      angle: 0,
	      animateTo:360
	      })
	    }
	  }
	});

	var audio = document.getElementById('audio');
	audio.autoplay;
	audio.loop = true;
	
	// bounce('#welcome');

	$('#welcome').click(function(){
		$('#welcomeAudio')[0].play();
		// $('#i2 div .down').delay(1000).fadeIn(400);
	})

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

