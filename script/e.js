// JavaScript Document
if ( isMobile == true ) {
	window.onscroll = function() {
		document.getElementById('main_menu_top').style.top = window.pageYOffset + 'px';
	};
	$("#logo img").attr("src","images/logo_m.png");
	var pages = $(".btn").length;
	$(".btn").click(function(){
		$("#wrap, #content").css("min-height",$(window).height());
		var to_page = $(".btn").index(this);
		var btn_width = $(".btn").css("width").replace(/[^-\d\.]/g, '')
		if( btn_width == 140 ){
			$("#main_menu").fadeOut(300,function(){
				$("#main_menu").attr("id","main_menu_top");
				$(".btn").css({
					margin:0,
					width:"100%"
				},0);
				$("#menu_m_btn").show(0);
				$("#logo img").hide(0);
				$("#logo").css({
					height:60,
					margin:0
				});
				$("#main_menu, #main_menu_top").css({top:0,height:60,width:"100%"});
				$("#main_menu, #main_menu_top").slideDown(300,function(){
					$("#content").fadeIn(300,function(){
						$("#content .page").eq(to_page).siblings(".page").fadeOut(300);
						if( $("#content .page").eq(to_page).is(':hidden'))
							$("#content .page").eq(to_page).fadeIn(300);
					});
				});
			});
		}
		else {
			$("#content .page").eq(to_page).siblings(".page").fadeOut(300,function(){
				if( $("#content .page").eq(to_page).is(':hidden'))
					$("#content .page").eq(to_page).fadeIn(300);
			});
			$("#main_menu_top").animate({
				height:60
			},200);
		};
		$(this).css({backgroundColor:"#555", color:"#fff"});
		$(this).siblings(".btn").css({backgroundColor:"#aaa", color:"#000"});
	});
	$("#logo").click(function(){
		if($("#main_menu_top").css("top").replace(/[^-\d\.]/g, '') == 0 ){
			$(".page").slideUp(300,function(){
				$("#content").fadeOut(100);
				$("#main_menu_top").slideUp(300,function(){
					$("#menu_m_btn").hide(0);
					$("#main_menu_top").attr("id","main_menu");
					$("#main_menu, #main_menu_top").css({
						top:"calc(50% - 160px )",
						height:320,
						width:320
					});
					$("#logo").css({
						height:"auto",
						margin:"20px 0 20px 0"
					});
					$("#logo img").show(0)
					$("#main_menu").fadeIn(300);
					$(".btn").css({
						margin:10,
						width:140
					},0);

				});
			});
		};
		$(".btn").css({backgroundColor:"#aaa", color:"#000"});
	});
	$("#menu_m_btn").click(function(){
		if( $("#main_menu_top").css("height").replace(/[^-\d\.]/g, '') == 60 ){
			$("#main_menu_top").animate({
				height:60 + (50*pages)
			},200);
		}
		else{
			$("#main_menu_top").animate({
				height:60
			},200);
		}
	});
	$(document).ready(function(){
		$("#wrap, #content").css("height",$(window).height());
	});
}
else {
	var wrap_w = $("#wrap").css("width").replace(/[^-\d\.]/g, '');
	if ( wrap_w > 1600 ) { wrap_w = 1600 }
	if ( wrap_w < 1000 ) { wrap_w = 1000 }
	$(window).resize(function() {
	  wrap_w = $("#wrap").css("width").replace(/[^-\d\.]/g, '');
	});
	window.onscroll = function() {
	  document.getElementById('main_menu_steady').style.top =
		 window.pageYOffset + 'px';
	};
	$("#wrap, #sidemenu_bg, #content").css("min-height",h);
	$("#main_menu").css({"left":wrap_w*0.3475,"top":h*0.25});
	$(window).resize(function() {
		$("#main_menu").css({"left":wrap_w*0.3475,"top":h*0.25});
	});
	$(document).mousemove(function(event){
		$mx=event.pageX*0.02+wrap_w*0.5-200;
		$my=event.pageY*0.02+h*0.25;
		$("#main_menu").css({"top":$my,"left":$mx});
	});
	$("#logo").mouseenter(function(){
		$("#logo_shadow").fadeIn(100);
	});
	$("#logo").mouseleave(function(){
		$("#logo_shadow").fadeOut(100);
	});
	$(".btn").click(function(){
		var to_page = $(".btn").index(this);
			var btn_width = $(".btn").css("width").replace(/[^-\d\.]/g, '')
			if( btn_width == 180 ){
				$("#main_menu").attr("id","main_menu_steady");
				$(".btn").fadeOut(300,function(){
					$(".btn").css({
						margin:0,
						width:"100%"
					});
					$("#main_menu, #main_menu_steady, #main_menu_shadow").animate({
						left:0,
						top:0,
						height:h,
						width:250
					},300,function(){
						$("#sidemenu_bg").animate({
							width:250,
							height:h
						},300);
						$("#content").animate({
							width:wrap_w-250,
							paddingLeft:250
						},300,function(){
							$("#content .page").eq(to_page).siblings(".page").slideUp(300);
							if( $("#content .page").eq(to_page).is(':hidden'))
								$("#content .page").eq(to_page).slideDown(300);
							});
						$(".btn").fadeIn(300);
					});
				});
			}
			else {
				$("#content .page").eq(to_page).siblings(".page").slideUp(300,function(){
					if( $("#content .page").eq(to_page).is(':hidden'))
						$("#content .page").eq(to_page).slideDown(300);
				});
			};
		$(this).css({backgroundColor:"#555", color:"#fff"});
		$(this).siblings(".btn").css({backgroundColor:"#aaa", color:"#000"});
	});
	$("#logo").click(function(){
		if($("#main_menu_steady").css("left").replace(/[^-\d\.]/g, '') == 0 ){
			
			$(".btn").fadeOut(300,function(){
				$(".btn").css({
					width:180,
					margin:"10px"
				});
			});
			$(".page").slideUp(300,function(){
				$("#content").animate({
					width:0,
					paddingLeft:0
					},300,function(){
						$("#sidemenu_bg").animate({
							width:"0px",
						},300,function(){
							$("#main_menu_shadow").animate({
								width:400,
								height:400
							},300);
							$("#main_menu, #main_menu_steady").animate({
								left:$mx,
								top:$my,
								height:400,
								width:400,
							},300,function(){
								$("#main_menu_steady").attr("id","main_menu");
								$(".btn").fadeIn(300);
								});
						});
				});
			});
		};
		$(".btn").css({backgroundColor:"#aaa", color:"#000"});
	});
}
