$(document).ready(function() {


	$('#andras1Audio').ready(function() {
		console.log('loader')
		$('.loader').delay(3000).fadeOut(2000);	
	});

	// loader

	

	// unveil

	$("img").unveil(400, function() {
		console.log('unveil');
	});

	// music //


	// LocalScroll //
	
	jQuery(function( $ ){
        $.localScroll.defaults.axis = 'yx';
        $.localScroll.hash({
            target: '#content', 
            queue:true,
            duration:1000,
        });
        
        $.localScroll({
            target: '#content', 
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
		$('#spin2').fadeIn(3000);
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
		$('#spin3').fadeOut(9000);
		$('#spin2').fadeOut(3500);
		$('#smile1').delay(13000).fadeIn(100)
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
		$(this).effect( "bounce", { distance: 15, times: 3}).fadeOut();
		smileCount ++;
		console.log(smileCount);
		if (smileCount === 10) {
			$('#h10prev').delay(1000).fadeIn(400, function() {
				bounce($h10prev);	
			});
			
		}
	})

	//bird

	$('#bird').click(function() {
		$(this).removeClass('flip-h').animate({'right':'+=3000px'}, 1500, 'linear').fadeOut();
		$('#g10prev').delay(1000).fadeIn(400, function() {
			bounce('#g10prev');
		});
		
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
		.animate({'left':'+=8000px'}, 130000, 'linear')
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
			$('#f10prev').fadeIn(400, function() {
				bounce('#f10prev');	
			});
			
		} else {
			$(this).toggleClass('flip-h');
			birdClick++;	
		}
	});

	$andras1Audio = $('#andras1Audio');

	$('#f10prev').click(function(){
		console.log('stop');
		$andras1Audio.animate({volume: 0}, 1000);;
		andras2Audio.play().loop();
	})

// floaters //

	var $floater1 = $('#floater1');
	var float1Enter = true;
	var floater1Go = true;
	var float2Out = false;
	var floater1Box = false;

	$floater1.click(function() {
		$('#floater1Audio')[0].play();  
		if(floater1Box === false) {
			if(float1Enter){
				$(this)	
					.animate({'top':'-=65%'},'fast')
					.animate({'left':'-=15%'}, 300)
					.appendTo('#content')
					$('#hide1').fadeOut();
				float1Enter = false;
			} else if(floater1Go) {
				$(this).jqFloat({
					width: 500,
					height: 500,
					speed: 5000
				});
				if(float2Out === false){
					$('#floater2').delay(3000).animate({'left':'+=39px'}, 1000);
					float2Out = true;
				}
				floater1Go = false;
			} else if(floater1Go === false) {
				$floater1.stop();
				$floater1.draggable();
				floater1Go = true;
				console.log('stop');
			}
		}
	});

	var $floater2 = $('#floater2')
	var float2Enter = true;
	var float2Go = true;
	var floater2Box = false;

	$floater2.click(function() {
		$('#floater2Audio')[0].play(); 
		if(floater2Box === false){
			if(float2Enter){
				$(this)	
					.animate({'left':'+=65%'}, 600, 'linear')
					.appendTo('#content')
				float2Enter = false;
			} else if(float2Go) {
				$(this).jqFloat({
					width: 800,
					height: 800,
					speed: 5000
				});
				$(this).rotate({	
				  duration:6000,
				  angle: 0,
				  animateTo:360
				})
				$('#floater2').draggable();
				$('#e10prev').delay(2000).fadeIn(400, function() {
					bounce('#e10prev');	
				});
				
				float2Go = false;
			} else if(float2Go === false) {
				$floater2.stop();
				$floater2.draggable();
				float2Go = true;
			}
		}
	});

	// ie

	var $ie = $('#ie');

	var rotation = function (){
	  $ie.rotate({
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

	var ieGo = true;
	var ieFloat = false;
	var ieBox = false;

	$ie.rotate({
	  bind:
	  {
	    click : function() {
	    	$('#ieAudio')[0].play(); 
	    	if(ieBox === false){
		    	if(ieGo) {
		    		$ie
		    			.animate({'left':'+=10%'}, 100)
		    			.animate({'top':'-=30%'}, 200)
		    			.delay(600)
		    			.animate({'left':'-=200%'}, 400)
		    			.animate({'top':'-=100%'}, 900)
		    			.animate({'left':'+=205%'}, 400)
		    			.delay(2000)
		    			.animate({'top':'+=115%'}, 900)
		    			.appendTo('#content')
		    			.effect( "bounce", { distance: 15, times: 3})
		    		ieGo = false;
		    		ieFloat = true;
		    	} else if(ieFloat){
		    		$('#ie').jqFloat({
		    			width: 1000,
		    			height: 1000,
		    			speed: 5000,
		    		})
		    		$(this).rotate({
		    			animateTo:360,
		    			duration:3000,
		    			callback: rotation,
		    			easing: function (x,t,b,c,d){        
		    			// t: current time, b: begInnIng value, c: change In value, d: duration
		    			  return c*(t/d)+b;
		    			}
		    		})
		    		
		    		$('#b2prev').delay(1000).fadeIn(400, function() {
		    			bounce('#b2prev');
		    		});
		    		

		    		ieFloat = false;
		    		
		    	} else if(ieFloat === false) {
					$(this).stopRotate();
					$(this).rotate({
						animate: 0
					});
					$ie.stop();
					$ie.draggable();

					ieFloat = true;
				}
			}
		}
	}
	});

	// balloons

	// var $balloon = $('#balloon')
	// var balloonGo = true;

	// function balloonFloat() {
	// 	if(balloonGo) {
	// 		$balloon.jqFloat({
	// 			width: 500,
	// 			height: 1000,
	// 			speed: 5000
	// 		});
	// 		console.log('goooo')
	// 	}
	// }

	// balloonFloat();

	// $('#balloon').click(function(){
	// 	$(this).animate({'left':'+=100%'}, 1500)
	// 	$('#gull2').animate({'left':'-=400%'}, 7000).fadeOut(300);
	// 	$('#gull').delay(6000).animate({'left':'+=400%'}, 2000).fadeOut(50);

	// 	balloonGo = false;
	// });
	
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
		if(d10count === 9) {
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

//d10

	//d10cont

	$b10prev1 = $('#b10prev1')
	$b10div = $('#b10cont div')
	$b10prev1.click(function(){
		$(this).fadeOut(2000);
		// $('#b10cont').css('pointer-events', 'none')
		$b10div
			.delay(3000)
			.fadeIn(2000)
			.delay(4000)
			.fadeOut(3000);
		$('#box').delay(1000).fadeIn(3000)
	})

	// box

		var boxCount = 0;

		function whiteBox(){
			$('#box').css({'background-color': '#fff'});
		}

		function handleDrop(event, ui) {
			whiteBox();
			var dragger = ui.draggable
			if(dragger.is('#floater1')){
				floater1Box = true;
			} else if(dragger.is('#floater2')){
				floater2Box = true;
			} else if(dragger.is('#ie')){
				ieBox = true;
			};

			ui.draggable.draggable('disable');
			
			ui.draggable.fadeOut(3000, function(){
				$('#box').removeAttr('style');
			});
			boxCount += 1;
			console.log(boxCount)
			if(boxCount === 3) {
				$('#b10prev').delay(4000).fadeIn(400, function() {
					$($b10prev1).hide();
					bounce('#b10prev');	
				});
				
			}
		}

		$('#box').droppable({
		  classes: {
		          "ui-droppable-hover": "ui-state-hover"
		        },
		  drop: handleDrop
		});

		$('#box').mouseenter(function(){
			console.log('open');
			$('#box1').addClass('open');
		})
		$('#box').mouseout(function(){
			$('#box1').removeClass('open');
		})

// CARL //

	var carlLines = [
		"#",
		'<p class="speech">How did you get here?</p>',
		'<p class="speech">You... should not have come</p>',
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
			$('#a10up').delay(1000).fadeIn(2000, function() {
				bounce('#a10up');
			});
		}
		console.log('carl');
		$('#carl-box').text(function() {
			carlID += 1;
			$('#carl-box').html(carlLines[carlID]);
		})
	})
		
//sun

	var $andras2Audio = $('#andras2Audio');

	$('#a10up').click(function(){
		$andras1Audio.animate({volume: 0}, 4000);;
		$andras2Audio.animate({volume: 0}, 4000);;
		// dreamaticAudio.play();
	})

	$('#sun-button').click(function(){
		dreamaticAudio.play();
	})

	var laughCount = 0;

	$('#laughter').click(function(){
		$('#laughterAudio')[0].play(); 
		laughCount += 1;
		if(laughCount === 2) {
			$('#form-container').fadeIn(2000).css({'display':'flex'});
		}
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

