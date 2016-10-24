$(document).ready(function() {
	$('#floater').jqFloat({
		width: 500,
		height: 50,
		speed: 5000
	});

	$('#float2').jqFloat({
		width: 900,
		height: 900,
		speed: 5000,
		minHeight: 50
	});

	$('#img').jqFloat({
		width: 900,
		height: 900,
		speed: 5000,
		minHeight: 50
	});

	$("#float2").rotate({bind:{
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
	  $("#img").rotate({
	    angle:0,
	    animateTo:360,
	    duration:3000,
	    callback: rotation,
	    easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
	      return c*(t/d)+b;
	    }
	  });
	}

	$("#img").rotate({
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

	
	document.getElementById('audio').autoplay;

	var audio = document.getElementById('audio');
	audio.autoplay;
	audio.loop = true;
	
});