
	var arr = ["red","blue","green","yellow"];
	var temp = [];
	var c = 0;
	var counter;
	document.addEventListener('keypress', start);

	
	
	function start(){
	var x = document.getElementById("level").innerHTML = "Level ";
		var value = arr[Math.floor(Math.random() * arr.length)];

		document.getElementById(value).style.backgroundColor = "white";
			
		function changeDiv(){
			document.getElementById(value).style.backgroundColor = value;
		}
		
		/*
	if(value == 'red'){
		var audio = document.getElementById("blueaudio");
	}
         
      if(value == 'blue') {
		var audio = document.getElementById("blueaudio");
	  } 
		
	if(value == 'yellow') {
		var audio = document.getElementById("yellowaudio");
	}
		
	if(value == 'green'){
		var audio = document.getElementById("greenaudio");
	}
		
	audio.play();*/
	playSound(value);
	temp.push(value);
	c = temp.length;
	
	var counter = countMyself();
	document.getElementById("xxx").innerHTML = counter;
	document.getElementById("demo").innerHTML = temp;
}


function myFunc(id)
            {
					if(temp[c - 1] == id){
						document.getElementById(id).style.backgroundColor  = "white";
						setTimeout(function(){ document.getElementById(id).style.backgroundColor  = id}, 1000);
						playSound(id);
						c--;
						document.getElementById("demo2").innerHTML = c;
						if(c == 0)
							setTimeout(function(){start()},2000);
						
					}else{
						var audio = document.getElementById("wrong");
						audio.play();
						document.getElementById("level").innerHTML = "Game Over, Press Any Key To Restart!!";
						document.getElementById("xxx").innerHTML = "";
						
					}
			}
	  

function countMyself() {
    // Check to see if the counter has been initialized
	if ( typeof countMyself.counter == 'undefined' ) {
        // It has not... perform the initialization
        countMyself.counter = 0;
    }
	// Do something stupid to indicate the value
     ++countMyself.counter;
	 return countMyself.counter;
	 
}

