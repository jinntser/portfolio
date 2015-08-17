// JavaScript Document
var b_h,temp,
	pages=$(".page").length,
	selec=0,
	m_ps=0,
	m_p_cur = 0,
	w_w = $(window).width();
	m_w = $("#menu").width();
	b_w = $(".menu_btn").width();
	p_w = $(".page").width();
	_page = document.getElementById("p_wrap");
	_bd = document.getElementById("bd");
function ini(){
		for( m_ps = 1 ; m_ps < pages/3 ; m_ps++ ){};
		m_p_l = m_ps - 1 ;
	setTimeout('b_h = window.innerHeight',200);
	setTimeout('$("#wrap,#bd").css("min-height",b_h)',201);
	setTimeout('document.getElementById("bd").width = window.innerWidth;',201);
	setTimeout('swit_p();',201);
	ini_ctr();
	$("#btn_wrap").css("overflow","hidden");
	_page.addEventListener("touchstart", tou_s, false);
	_page.addEventListener("touchmove", tou_m, false);
	_page.addEventListener("touchend", tou_e, false);
};
$(window).resize(function(e) {
    w_w = $(window).width();
	m_w = $("#menu").width();
	b_w = $(".menu_btn").width();
	p_w = $(".page").width();
	b_h = window.innerHeight;
	$("#wrap,#bd").css("min-height",b_h);
	document.getElementById("bd").width = window.innerWidth;
	ini_ctr();
	swit_p();
});
$(document).ready(function(e) {
	$('.ctr').bind('click', function(){
		m_p_cur = ($(this).attr('id')=='right') ? m_p_cur+1 : m_p_cur-1;
		manageControls(m_p_cur);
		$("#btn_sli").css({marginLeft:540*(-m_p_cur)});
	});
	$('.ctr_p').bind('click', function(){
		selec = ($(this).attr('id')=='next') ? selec+1 : selec-1;
		manageCtr(selec);
		$("#btn_sli").css({marginLeft:200*(-selec)});
		swit_p();
	});
});
function ini_ctr(){
	$("#btn_sli").css("width",(b_w+20)*pages);
	if( m_w != 200 ){
		for( temp = 1 ; temp < (selec+1)/3 ; temp++ ){};
		m_p_cur = temp - 1 ;
		$('.ctr_p').hide(0);
	$("#btn_sli").css({marginLeft:540*(-m_p_cur)});	
		manageControls(m_p_cur);
	}else{
		m_p_cur = selec+1;
		$('.ctr').hide(0);
	$("#btn_sli").css({marginLeft:200*(-selec)});
		manageCtr(selec);
	}
};
function manageControls(position){
	if(position==0){ $('#left').fadeOut(0) } else{ $('#left').fadeIn(0) }
	if(position==m_p_l){ $('#right').fadeOut(0) } else{ $('#right').fadeIn(0) }
}
function manageCtr(position){
	if(position==0){ $('#prev').fadeOut(0) } else{ $('#prev').fadeIn(0) }
	if(position==pages-1){ $('#next').fadeOut(0) } else{ $('#next').fadeIn(0) }
}
function swit_p(){
	$(".menu_btn").removeClass("btn_act");
	$(".menu_btn").eq(selec).addClass("btn_act");
	for( i=0 ; i<pages ; i++ ){
		if( i==selec ){
			$('.page').eq(i).css({transform:'rotateY(0deg)',zIndex:500,left:0,opacity:0.8,height:"auto",minHeight:b_h*0.7});
		};
		if( i<selec ){
			$('.page').eq(i).css({transform:'rotateY('+(85-(i-selec)*5)+'deg)',zIndex:500+i-selec,left:p_w*(-0.55)+(i-selec)*0.1*p_w,opacity:0.5+(i-selec)/10,height:b_h*0.6,minHeight:"50%"});
		};
		if( i>selec ){
			$('.page').eq(i).css({transform:'rotateY('+(-85-(i-selec)*5)+'deg)',zIndex:500-i+selec,left:p_w*0.55+(i-selec)*0.1*p_w,opacity:0.5-(i-selec)/10,height:b_h*0.6,minHeight:"50%"});
		};
	};
}
$(".menu_btn").click(function(e) {
    selec = $(".menu_btn").index(this);
	swit_p();
});
$(".page").click(function(e) {
    selec = $(".page").index(this);
	swit_p();
	ini_ctr();
});
if( isMobile == true && ua.indexOf("firefox") > 0){
	$("#wrap").css("overflow","hidden");
	document.getElementById("state").innerHTML = "true";
	_bd.addEventListener("touchstart", sc_s, false);
	_bd.addEventListener("touchmove", sc_m, false);
	_bd.addEventListener("touchend", sc_e, false);
}
var s_o,s_e,s_n;
function sc_s(e){
	s_o = e.touches[0].pageY;
	s_n = $("#wrap").scrollTop();
}
function sc_m(e){
	s_e = -e.touches[0].pageY+s_o+s_n;
	if( $("#wrap").height()-window.innerHeight > 0 ){
		if( s_e > $("#wrap").height()-window.innerHeight ){
			s_e = $("#wrap").height()-window.innerHeight;
		}
		if( s_e < 0 ){
			s_e = 0;
		}
	}
	if( $("#wrap").height()-window.innerHeight < 0 ){
		s_e = 0;
	}
	$("#wrap").scrollTop(s_e);
}
function sc_e(e){
	return false;
}
var t_o,t_e;
function tou_s(e){
	t_o = e.touches[0].pageX;
}
function tou_m(e){
	t_e = e.touches[0].pageX-t_o;
}
function tou_e(e){
	if( t_e > w_w*0.3 ){selec--;};
	if( t_e < w_w*(-0.3) ){selec++;};
	if( selec<0 ){selec=0;};
	if( selec==pages ){selec=pages-1;};
	swit_p();
	ini_ctr();
}