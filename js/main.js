// Author - Clayton Fussell
// date 17/12/2014
// Version 1.0.0



// 1. read in the JSON data
// 2. iterate through it
// 3. display each verb conjugation on a separate line in a single card for the verb falar
// 4. insert a link to the audio
// 5. have the card flip around and give a timed memory test of the conjugation that flips the card back again when the timer has finished and presents the score
// 6. allow the user to reset the card

$(document).on('ready',function(){
	



	

	$.getJSON('data/verbData.min.json',function(verbData){
		//--- handlebars setup for verb card template
		source = $('#verbTemplate').html();
		template = Handlebars.compile(source);
		output = template(verbData.data);
		$('body').append(output);
		//--- end of handlebars setup

$('.verb').fadeIn(600);

		//timer




// function countdown() {
// 	var d = 10;
// 	var timer = setInterval(function(){ theTimer() }, 1000);
// 	function theTimer() {
// 		d = d-1;
//     	$('#theTime').html(d);
// 		if(d==0){
// 			clearInterval(timer);
// 			function checkResults() {

// 			};
// 		};
// 	};

// }; 









    













		// flip the verb card when click on the 'take the test button'
		// I think this code is bloated and repetitive - any suggestions for improvements welcome. Thanks.
		$('.flipper').on('click',function(){
			
			//console.log(x);
			var verbFront = $(this).parents().eq(2).children().eq(0);
			var verbBack = $(this).parents().eq(2).children().eq(1);
			
			var timerEl = $(verbBack).children().eq(1);
			//console.log(timerEl);

			$(verbFront).css({'transform':'rotateY(180deg)'});
			$(verbBack).css({'transform':'rotateY(0deg)'});
			var counter = 11;
			var timer = setInterval(function(){ theTimer() }, 1000);
			function theTimer() {
				
				counter = counter-1;
				//console.log(test.html());
				//console.log(counter);
				$(timerEl).html(counter);
				if(counter==0){
					clearInterval(timer);
					function checkResults() {

					};
				};
			};

			

			return false;	
			
		});
		// flip the verb card back when click on the 'view the result button'
		$('.flipped').on('click',function(){

			

			var verbFront = $(this).parents().eq(2).children().eq(0);
			var verbBack = $(this).parents().eq(2).children().eq(1);
			
			$(verbFront).css({'transform':'rotateY(0deg)'});
			$(verbBack).css({'transform':'rotateY(-180deg)'});

			return false;
			
		});

//}; // end of testF function

   
		


	});

});