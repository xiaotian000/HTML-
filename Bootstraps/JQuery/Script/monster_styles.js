$(document).ready(function(){
	
var headclix = 0, eyeclix = 0, noseclix = 0, mouthclix = 0;

		lightning_one();
		lightning_two();
		lightning_three();
	var clix=[0,0,0,0];
	  $("#head").click(function(){		
	    moveMe(0,this);
	});
	
	$("#eyes").click(function(){
	    moveMe(1,this);
	});
	
	$("#nose").click(function(){
        moveMe(2,this);
	});//end click
	
	 $("#mouth").click(function(){
	   moveMe(3,this);
	});
    function moveMe(i,obj){
        if(clix[i]<9){
            $(obj).animate({left:"-=367px"},500);
            clix[i]=clix[i]+1;
        }else{
            clix[i]=0;
            $(obj).animate({left:"0px"},500);
        }
    }
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
var w =367;
var m =10;
$("#btnRandom").click(randomize);
$("#btnReset").click(reset);
function getRandom(num){
    var my_random_num=Math.floor(Math.random()*num);
    return my_random_num;
}
function randomize(){
    $(".face").each(function(index){
        var target_position=getRandom(m);
        var current_position=clix[index];
        clix[index]=target_position;
        if(target_position>current_position){
            var move_to=(target_position-current_position)*w;
            $(this).animate({left:"-="+move_to+"px"},500);
        }else if(target_position<current_position){
            var move_to=(current_position-target_position)*w;
            $(this).animate({left:"+="+move_to+"px"},500);
        }else{

        }
    });
}
function reset(){
    $(".face").each(function(index){
        clix[index]=0;
        $(this).animate({left:"0px"},500);
    });
}
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
