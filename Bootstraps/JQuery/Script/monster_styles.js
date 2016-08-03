$(document).ready(function(){
	
var headclix = 0, eyeclix = 0, noseclix = 0, mouthclix = 0;

		lightning_one();
		lightning_two();
		lightning_three();
	
	  $("#head").click(function(){		
	  
		if (headclix < 9){
	$("#head").animate({left:"-=367px"},500);
		headclix+=1;
		}
		else{
			$("#head").animate({left:"0px"},500);
			headclix = 0;
		}
	
	});
	
	
	$("#eyes").click(function(){
	
		if (eyeclix < 9){
		$("#eyes").animate({left:"-=367px"},500);
			eyeclix+=1;
		}
		else{
			$("#eyes").animate({left:"0px"},500);
			eyeclix = 0;
		}
	});
	
	
	$("#nose").click(function(){
		if (noseclix < 9){
	$("#nose").animate({left:"-=367px"},500);
		noseclix+=1;
		}
		else{
			$("#nose").animate({left:"0px"},500);
			noseclix = 0;
		}
	});//end click
	
	 $("#mouth").click(function(){
	
	if (mouthclix < 9){
	$("#mouth").animate({left:"-=367px"},500);
		mouthclix+=1;
		}
		else{
			$("#mouth").animate({left:"0px"},500);
			mouthclix = 0;
		}
	
	});
	golightning();
window.onblur=stoplightning;
window.onfocus=golightning;
var int1,int2,int3;
function stoplightning(){
   window.clearInterval(int1);
   window.clearInterval(int2);
   window.clearInterval(int3);
}
function lightning_one(){
    $("#container #lightning1").fadeIn(250).fadeOut(250);
};
function lightning_two(){
    $("#container #lightning2").fadeIn(250).fadeOut(250);
};
function lightning_three(){
    $("#container #lightning3").fadeIn(250).fadeOut(250);
};
function golightning(){
   int1=setInterval(function(){
       lightning_one();
   },4000);
   int2=setInterval(function(){
       lightning_two();
   },5000);
   int3=setInterval(function(){
       lightning_three();
   },7000);
};


});//end doc.onready function

function lightning_one(){
	$("#container #lightning1").fadeIn(250).fadeOut(250);
	setTimeout("lightning_one()",4000);
};

function lightning_two(){
	$("#container #lightning2").fadeIn("fast").fadeOut("fast");
	setTimeout("lightning_two()",5000);
};

function lightning_three(){
	$("#container #lightning3").fadeIn("fast").fadeOut("fast");
	setTimeout("lightning_three()",7000);
};
