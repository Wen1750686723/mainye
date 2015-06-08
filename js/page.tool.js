$(function(){
	// okay jquery.

	// toolScorll
	$('.toolScorll .marquee').kxbdSuperMarquee({
		distance: 795,
		time: 3,
		duration:0,
		btnGo:{left:'#mqright',right:'#mqleft'},
		direction:'left',
		navId:'.naviBox',
		eventNav:'click'
	});
	$(".naviBox").each(function(){
		$lis = $(this).find("ul li");
		$lis.each(function(){
			$(this).html("");
		});
	});

	$(window).load(function(){
		var mh = $(".contentMain .middle").height();
		var rh = 418;
		if(mh< rh) $(".middle").animate({ height: rh }, 100);
	});

});