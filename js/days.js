var sliderElem = document.getElementById('slider');

    var slider = new Slider({
      elem: sliderElem,
      max: 100
    });
/*
    var day = { 
      0 : 'дней',
      1 : 'день', 
      2 : 'дня', 
      3 : 'дня', 
      4 : 'дня', 
      5 : 'дней', 
      6 : 'дней', 
      7 : 'дней', 
      8 : 'дней', 
      9 : 'дней',
      10 : 'дней',
      11 : 'дней',
      12 : 'дней',
      13 : 'дней',
      14 : 'дней'
    };
    
    sliderElem.addEventListener('slide', function(event) {
		//console.log(event);
		var ostatok10 = event.detail%10;
		//console.log(ostatok10);
      var sufix;
      //console.log({res: event.detail%100});
      if((event.detail%100)<15) {
        sufix = day[event.detail%100];
		  console.log({res: event.detail%100, detail: event.detail});
      }
      else { 
        sufix = day[event.detail%10];
		  console.log({res: event.detail%10, detail: event.detail});
      }
      document.getElementById('thumb').innerHTML = event.detail + ' ' + sufix;
    });
	*/