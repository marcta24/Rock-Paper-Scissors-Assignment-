// JavaScript Document// JavaScript Document
var randomNum = 0;	
var srcRoll = [  "images/rock_over.jpg","images/paper_over.jpg", "images/sciss_over.jpg"];
var srcUser = [  "images/rock_user.jpg","images/paper_user.jpg","images/sciss_user.jpg"];
var srcComputer = [  "images/rock_computer.jpg","images/rock_computer.jpg", "images/sciss_computer.jpg"];

var humanList = document.getElementsByClassName("human");
var computerList = document.getElementsByClassName("computer")

var clickHandler = function() {
	var i = this.index;	
	
computerList[randomNum].src = srcComputer[randomNum];

randomNum = Math.floor( Math.random() * 3 );
	
computerList[ randomNum ].src = srcRoll[ randomNum ];
	
	
}
var mouseoverHandler= function () {
var i = this.index;
	console.log( this );
	
	this.src= srcRoll[i];
	}
	
	var mouseoutHandler = function() {
	var i = this.index;
		this.src = srcUser[i];
	computerList[ randomNum ].src = srcComputer[randomNum]
;		
	}
	
	for (var i=0; i<humanList.length; i++) {
	var humanNode = humanList[i];
		
		
	humanNode.onclick = clickHandler; 
	humanNode.onmouseover = mouseoverHandler; 
	humanNode.onmouseout = mouseoutHandler;
	humanNode.index = i; 	
	}
	
	
	
	
	
	

//
//// JavaScript Document
////wrapper {
//	font-family: arial, helvetica, sans-serif;
//	width: 700px;
//	margin: 50px auto;
//	border: 5px solid #2B0C0C;
//	padding: 20px;
//	background-image: url(../images/wood.jpg);
////