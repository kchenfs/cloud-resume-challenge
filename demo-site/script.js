// Some code thanks to @chrisgannon

var select = function(s) {
  return document.querySelector(s);
}

function randomBetween(min,max)
{
    var number = Math.floor(Math.random()*(max-min+1)+min);
  
    if ( number !== 0 ){
      return number;
    }else {
      return 0.5;
    }
}

var tl = new TimelineMax();

for(var i = 0; i < 20; i++){

  var t = TweenMax.to(select('.bubble' + i), randomBetween(1, 1.5), {
    x: randomBetween(12, 15) * (randomBetween(-1, 1)),
    y: randomBetween(12, 15) * (randomBetween(-1, 1)), 
    repeat:-1,
    repeatDelay:randomBetween(0.2, 0.5),
    yoyo:true,
    ease:Elastic.easeOut.config(1, 0.5)
  })

  tl.add(t, (i+1)/0.6)
}

tl.seek(50);

'use strict';

$(document).ready(() => {
	// Make an AJAX request to get the visitor count from the API
	$.post('https://nalc88bl2l.execute-api.us-east-1.amazonaws.com/Prod/visit')
	  .done(visitor_counter => {
		// Hide the loader icon
		$('#loader').hide();
  
		// Convert the visitor counter object to a string
		const visitorCountString = JSON.stringify(visitor_counter);
  
		// Update the 'visits' span with the visitor count string
		$('#visits').text(visitorCountString);
	  })
	  .fail(e => {
		console.log('Error');
		console.log(e);
	  });
  });
  