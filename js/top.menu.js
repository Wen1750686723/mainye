$(function(){
	// ok jquery
	


	// sgroup hover
	$(".sgroup").hover(function(){
		$(this).find(".sgroups").stop().fadeIn(200);
	}, function(){
		$(this).find(".sgroups").stop().fadeOut(300);
	});

	$(".select_box").hover(function(){
		$(this).find(".sgroups_one").stop().fadeIn(200);
	}, function(){
		$(this).find(".sgroups_one").stop().fadeOut(300);
	});


	// manu hover
	$(".alink").hover(function(){
		var $submenu = $(this).find(".sub-menu");
		$submenu.fadeIn(400);
		//$submenu.find(".first-group").find("li").first().trigger("mouseover");
	}, function(){
		$(this).find(".sub-menu").fadeOut(500);
	});
	// submenu
	$(".first-group li").mouseover(function(){
		$firstGroup = $(this).parents(".first-group");
		$firstGroup.find("li").removeClass("on");
		$(this).addClass("on");
		var index = $(this).index();
		$firstGroup.next(".second-group").find("ul").hide().eq(index).show();
	});
	// .site-group
	$(".site-group").hover(function(){
		$(this).find(".group-in").show();
	}, function(){
		$(this).find(".group-in").hide();
	});
	// search hover
	$(".search").hover(function(){
		$(this).find(".search-box").show();
	}, function(){
		$(this).find(".search-box").hide();
	});
	// search keyword
	$(".search-box .kw").focus(function(){
		$(this).val(($(this).val()=="搜索")? "": $(this).val());
	});
	$(".search-box .kw").focusout(function(){
		$(this).val(($(this).val()=="")? "搜索": $(this).val());
	});



});