		$(document).ready(function(){

			resetImage();
			
			tl = new TimelineMax({delay:2, repeat:-1, onUpdate:updateSlider, onComplete: logit}),
			tl.add("explode", "+=15");
			function updateSlider(){
				//console.log(tl.progress().toFixed(2));
				if (tl.progress().toFixed(2) ==1){
					tl.restart();
					resetImage();
				}
			}

			function logit(){
				//console.log("HERE");
			}

			$( ".frame" ).each(function( index ) {
			
				tl.from(this, 5, {delay:Math.random()*1.5, scale:0, x:randomNumber(-1000,1000), y:randomNumber(-1000,1000), z:-1, opacity:0, rotation:randomNumber(-360, 360), rotationX:randomNumber(-360, 360), rotationY:randomNumber(-360, 360)}, Math.random()*.5);
	
	 			tl.to(this, 5, {x:randomNumber(-2000,2000), y:randomNumber(-500,1000), z:-1, z:randomNumber(100, 500), opacity:0, rotation:randomNumber(360, 720), rotationX:randomNumber(-360, 360), rotationY:randomNumber(-360, 360)}, "explode+=" + Math.random()*.5);

		});

			
		
		function resetImage() {
			//$.getJSON( "/api/get/users", function( data ) {
			//for local testing
			$.getJSON( "http://digitalpolaroids.herokuapp.com/api/get/users", function( data ) {
				var students = data.students;
				for(var i =0; i<students.length; i++){
					if(students[i] != null){
						var firstName = data.students[i].name.firstName;
						var lastName = data.students[i].name.lastName;
						var description = data.students[i].description;
						console.log(firstName + " " + lastName);
						console.log(description);
						var photo = data.students[i].photo;
						var gif = document.getElementById(i);
						gif.style.background="url("+photo+") no-repeat";
						gif.style.backgroundSize="cover";
					}
				}

			});
		};

		
		$frames = $(".frame");

		$frames.click(function(event) {
			console.log("clickedFrame");
			tl.paused(!tl.paused());	
		});

		//var pauseBtn = document.getElementById("pause");	
		// pauseBtn.onclick = function() {
		//   tl.paused(!tl.paused());
		//   pauseBtn.innerHTML = tl.paused() ? "play" : "pause";
		// }
			
		});
				
		function randomNumber(min, max){
		  return Math.floor(Math.random() * (1 + max - min) + min);
		}