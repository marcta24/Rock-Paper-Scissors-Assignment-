// MARCUS TA 
// my variables set for the game
var clicks=0 ;
	//setting the function to stop after 10 clicks. 
	function myFunction(){
		clicks +=1; console.log(clicks);
		document.getElementById("demo").innerHTML = clicks;
		if(clicks>=10){ 
	var getInput = clicks;
	localStorage.setItem("gameOutcome",getInput);
		// i used the file path and posted it to redirect after the clicks.
			window.location.replace(`file:///C:/Users/marct/Desktop/BCSchoolWork/PROG109/rps/RPS3.html`);
			console.log(clicks);
		}
	}
var randomNum = 0;	
var srcRoll = [  "images/rock_over.jpg","images/paper_over.jpg", "images/sciss_over.jpg"];
var srcUser = [  "images/rock_user.jpg","images/paper_user.jpg","images/sciss_user.jpg"];
var srcComputer = [  "images/rock_computer.jpg","images/paper_computer.jpg", "images/sciss_computer.jpg"];

var humanList = document.getElementsByClassName("human");
var computerList = document.getElementsByClassName("computer")
//the 2 elements that are used in the game
var clickHandler = function() {
	var i = this.index;	
	//click handler is helping me count the clicks to redirect the page. 
computerList[randomNum].src = srcComputer[randomNum];

randomNum = Math.floor( Math.random() * 3 );
console.log(randomNum);
computerList[ randomNum ].src = srcRoll[ randomNum ];
	
	
}
//this is for the image rollover function, to see the 3rd photo that is in the same folder. the zoom session really did help with this part. 
var mouseoverHandler= function () {
var i = this.index;
	console.log( this );
	
	this.src= srcRoll[i];
	}
	
	var mouseoutHandler = function() {
	var i = this.index;
		this.src = srcUser[i];
		console.log(this.src);
		
	computerList[ randomNum ].src = srcComputer[randomNum];	
		console.log(computerList);
	}
	
	for (var i=0; i<humanList.length; i++) {
	var humanNode = humanList[i];
	console.log(humanNode);
		
		

	humanNode.onclick = clickHandler; 
	humanNode.onmouseover = mouseoverHandler; 
	humanNode.onmouseout = mouseoutHandler;
	humanNode.index = i; 	
	}
	
	
	
	
	
	


// JavaScript Document