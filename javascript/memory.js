
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


