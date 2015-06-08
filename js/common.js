$(function(){
	// okay jquery.

	// linster for navi
	$(".navi .one").mouseover(function(event) {
		$(".navi .one.on").addClass("cache").removeClass("on");
		$(this).addClass("on");
	});
	$(".navi .one").mouseout(function(event) {
		$(this).removeClass("on");
		$(".navi .one.cache").removeClass("cache").addClass("on");
	});
	// linster for navi end

	// left or right
	$(".rollIcons .icon").click(function(){
		// click
		if ($(this).attr("class").indexOf('right')<0)
		{
			changeRollsInt-= 2;
		}
		changeRolls();
	});
	// change icon
	$(".rollIcons .icos .onei").click(function(){
		var thisIndex = $(this).index();
		changeRollsInt = thisIndex+ 100;
		changeRolls();
	});
	// close box
	$(".tagBox .close").click(function(event) {
		$(this).parent(".tagBox").fadeOut(200);
	});

	// share wx
	$(".shareGrp .s1").hover(function(){
		$(".shareGrp .wxqr").show();
	}, function(){
		$(".shareGrp .wxqr").hide();
	});

	// reset message bg size
	var newMessage = $(".newMessage").text();
	if(newMessage.length> 1) $(".newMessage").addClass("big");

	// init
	changeRolls();

});


// change boxs
var changeRollsInt = 100;
var changeRollsTimer = null;
function changeRolls()
{
	var nowEq = changeRollsInt% 5;
	$(".rollSisters ul").animate({
				left: "-"+ nowEq * 155+ "px"
	}, 0);
	$(".rollIcons .icos .onei").removeClass("on");
	$(".rollIcons .icos .onei").eq(nowEq).addClass("on");
	changeRollsInt++;
	clearInterval(changeRollsTimer);
	changeRollsTimer = setInterval("changeRolls()", 3500);
}

function replaceReg(str){ 
       var reg = /\b(\w)|\s(\w)/g; 
       str = str.toLowerCase(); 
       return str.replace(reg,function(m){return m.toUpperCase()}) 
 }


function GetRandomNum(Min,Max)
{   
	var Range = Max - Min;
	var Rand = Math.random();
	return(Min + Math.round(Rand * Range));
}
var chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
function generateMixed(n) {
     var res = "";
     for(var i = 0; i < n ; i ++) {
         var id = Math.ceil(Math.random()*35);
         res += chars[id];
     }
     return res;
}

function unLogin()
{
	location.href = config.login;
}