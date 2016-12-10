$(document).ready(function() {

	// unveil

	$("img").unveil(200);

	// music //


	// LocalScroll //
	
	jQuery(function( $ ){
        /**
         * Most jQuery.localScroll's settings, actually belong to jQuery.ScrollTo, check it's demo for an example of each option.
         * @see http://flesler.demos.com/jquery/scrollTo/
         * You can use EVERY single setting of jQuery.ScrollTo, in the settings hash you send to jQuery.LocalScroll.
         */
        
        // The default axis is 'y', but in this demo, I want to scroll both
        // You can modify any default like this
        $.localScroll.defaults.axis = 'yx';
        
        // Scroll initially if there's a hash (.something) in the url 
        $.localScroll.hash({
            target: '#content', // Could be a selector or a jQuery object too.
            queue:true,
            duration:1000,
        });
        
        /**
         * NOTE: I use $.localScroll instead of $('#navigation').localScroll() so I
         * also affect the >> and << links. I want every link in the page to scroll.
         */
        $.localScroll({
            target: '#content', // could be a selector or a jQuery object too.
            queue:true,
            duration:1500,
            hash:true,
            onBefore:function( e, anchor, $target ){
                    // The 'this' is the settings object, can be modified
            },
            onAfter:function( anchor, settings ){
                    // The 'this' contains the scrolled element (#content)
            }
        });
	});

	// bounce

	function bounce(id) {
	    setInterval(function() {
	    	$(id).effect( "bounce", { distance: 5, times: 2 }, id, 100)
	    }, 1500);
	};

	bounce("#start");

	// welcome

	$('#welcome').click(function(){
		$('#welcomeAudio')[0].play();
	})

	// cubetunnel

	var $h10prev = $('#h10prev')

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
		$('#spin2').fadeIn(4500);
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
		if (smileCount === 5) {
			$('.clickRemove').effect( "bounce", { distance: 15, times: 3});
			$('.clickRemove').delay(1000).fadeOut(400);
			$('#h10prev').delay(1000).fadeIn(400);
		}
	})

	//bird

	$('#bird').click(function() {
		$(this).removeClass('flip-h').animate({'right':'+=3000px'}, 1500, 'linear').fadeOut();
		$('#g10prev').delay(1000).fadeIn(400).delay(250);
		bounce('#g10prev');
	})

	$('#tree1').click(function() {
		$(this).effect( "bounce", { distance: 15, times: 3})
	})

	$('#tree2').click(function() {
		$(this).effect( "bounce", { distance: 15, times: 3})
	})

	$('#tree3').click(function() {
		$(this).effect( "bounce", { distance: 15, times: 3})
	})
	$('#cloud3').click(function() {
		$(this)
		.css('pointer-events', 'none')
		// .animate({'top':'+=25px'}, 1000, 'linear')
		// .animate({'left':'+=500px'}, 4000, 'linear')
		// .animate({'top':'+=150px'}, 4000, 'linear')
		.animate({'left':'+=2000px'}, 25000, 'linear')
		.fadeOut(3000);
	});

	$('#cloud1').jqFloat({
		width: 500,
		height: 10,
		speed: 20000
	});

	var cloudFlip = false;

	$('#cloud1').rotate({bind:{
		click: function(){
	  		if(cloudFlip === false){
		  		$(this).rotate({	
		  		  duration:2000,
		  		  angle: 0,
		  		  animateTo:180
		  		})	
		  	cloudFlip = true;
	  		}
	  	}
	}
	});

	$('#cloud2').rotate({bind:{
	  click: function(){
	    $(this).rotate({	
	      duration:2000,
	      angle: 0,
	      animateTo:360
	      })
	    }
	  }
	});

	$('#cloud2').jqFloat({
		width: 500,
		height: 10,
		speed: 17000
	});

// f10
	
	var birdClick = 0;

	$('#bird2').click(function() {
		if(birdClick === 4) {
			$(this).toggleClass('flip-h').animate({'left':'+=200%'}, 1000).fadeOut();
			$('#f10prev').fadeIn(400);
			bounce('#f10prev');
		} else {
			$(this).toggleClass('flip-h');
			birdClick++;	
		}
	});

		$andras1Audio = $('#andras1Audio');

	$('#f10prev').click(function(){
		console.log('stop');
		$andras1Audio.animate({volume: 0}, 1000);;
		andras2Audio.play();
	})

	
	var float1Click = 1;
	var float2Out = false;

	$('#floater1').click(function() {
		$('#floater1Audio')[0].play();  
		if(float1Click === 1){
			$(this)	
				.animate({'top':'-=2%'}, 'slow')
				.delay(500)
				.animate({'top':'-=65%'},'fast')
				.animate({'left':'-=15%'}, 300)
				.appendTo('#content')
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
			if(float2Out === false){
				$('#floater2').delay(3000).animate({'left':'+=39px'}, 1000);
				float2Out =true;
			}
		}
	});

	var float2Click = 1;

	$('#floater2').click(function() {
		$('#floater2Audio')[0].play(); 
		if(float2Click === 1){
			$(this)	
				.animate({'left':'+=65%'}, 1200, 'linear')
				.animate({'top':'+=10%'}, 500, 'linear')
				.appendTo('#content')
			float2Click++;
		// } else if(float1Click === 2) {
		// 	$('#face1')
		// 		.addClass('flip-h')
		// 		.delay(1000)
		// 		.removeClass('flip-h');
		// 	
		// 	console.log(float1Click);
		// 	float1Click++;
		} else if(float2Click === 2) {
			$(this).jqFloat({
				width: 800,
				height: 800,
				speed: 5000
			});
			$('#e10prev').delay(2000).fadeIn(400);
		}
	});


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
	
	// d10

	var $d10prev = $('.d10prev');

	var d10count = 0;

	$d10prev.on('click', function() {
		$d10prev.rotate({
			angle: 0,
			animateTo: 360,
			duration: 6000,
		});
		d10count+=1;
		if(d10count === 5) {
			alert('Which one is different?');
		}
	})

	var $d10special = $('#d10special');
	var $d10special2 = $('#d10special2');

	$d10special.click(function(){
		$d10prev.fadeOut(2000);
		$d10special.effect( "bounce", { distance: 7, times: 3}).fadeOut(2000);
		$d10special2.delay(2500).fadeIn(2000)

	})

	
	// ie

	var $ie = $('#ie');
	var ieFloat = true;
	var ieFloat2 = false;
	var ieSpin = true;
	var c10prev = true;

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

	rotation();

	$("#ie").rotate({
	  bind:
	  {
	    click : function() {
	    	if(ieFloat) {
	    		$ie
	    			.animate({'left':'+=65%'}, 4000)
	    			.animate({'top':'+=200%'}, 400)
	    			.delay(400)
	    			.animate({'top':'-=170%'}, 300)
	    			.appendTo('#content')
	    			.effect( "bounce", { distance: 15, times: 3})
	    		ieFloat = false;
	    		ieFloat2 = true;
	    	} else if(ieFloat2){
	    		$('#ie').jqFloat({
	    			width: 1000,
	    			height: 1000,
	    			speed: 5000,
	    		})
	    		ieFloat2 = false;
	    		$('#c2prev').delay(1000).fadeIn(400);
	    		bounce('#c2prev');
	    	}
			
			if(ieSpin === false) {
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
			} else if(ieSpin === true) {
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

	// c4 //

	$('#c4prev').click(function(){
		$ie.appendTo('#c4');
	})


	// c10 //

	$('#c10prev').click(function(){
		$('#floater1').appendTo('#c10');
		$('#floater2').appendTo('#c10');
	})

	// CARL //

	var carlLines = [
		"#",
		'<p class="speech">Who are you</p>',
		'<p class="speech">You... should not be here</p>',
		'<p class="speech">He will find you</p>',
		'<p class="speech">...</p>',
		'<p class="speech">..</p>',
		'<p class="speech">...</p>',
		'<p class="speech">..</p>',
		'<p class="speech">...</p>',
		'<p class="speech">..</p>',
		'<p class="speech">Very well...</p>',
		'<p class="speech">I will show you the way</p>',
		'<p class="speech">Now go</p>',
	];

	var carlLinesLength = carlLines.length;
	var carlID = 0;

	$('#carl-button').click(function() {
		if (carlID === 11) {
			$('#carl-box').fadeOut(3000);
			$('#a10up').fadeIn(400);
			bounce('#a10up');
		}
		console.log('carl');
		$('#carl-box').text(function() {
			carlID += 1;
			$('#carl-box').html(carlLines[carlID]);
		})
	})

	$('#a10up').click(function(){
		andras2Audio.pause();
		andras1Audio.pause();
		dreamaticAudio.play();
	})

	$('#laughter').click(function(){
		$('#laughterAudio')[0].play(); 
	})

	console.log('hi');
});

	// $('#carl-button').click(function() {
	// 	console.log('carl');
	// 	$('#carl-box').text(function() {
	// 		$('carl-box').html('<p>' + carlLines[carlID] + '</p>');
	// 		carlID += 1;
	// 	})
	// })




// var waypoint = new Waypoint({
//   element: document.getElementById('i10'),
//   handler: function(direction) {
//   	console.log('hi');
//     notify('Direction: ' + direction)
//   },
//   offset: '5%'
// })

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