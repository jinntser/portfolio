var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;
var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;
var mobiles = new Array
(
	"midp", "j2me", "avant", "docomo", "novarra", "palmos", "palmsource",
	"240x320", "opwv", "chtml", "pda", "windows ce", "mmp/",
	"blackberry", "mib/", "symbian", "wireless", "nokia", "hand", "mobi",
	"phone", "cdm", "up.b", "audio", "sie-", "sec-", "samsung", "htc",
	"mot-", "mitsu", "sagem", "sony", "alcatel", "lg", "eric", "vx",
	"NEC", "philips", "mmm", "xx", "panasonic", "sharp", "wap", "sch",
	"rover", "pocket", "benq", "java", "pt", "pg", "vox", "amoi",
	"bird", "compal", "kg", "voda", "sany", "kdd", "dbt", "sendo",
	"sgh", "gradi", "jb", "dddi", "moto", "iphone", "android",
	"iPod", "incognito", "webmate", "dream", "cupcake", "webos",
	"s8000", "bada", "googlebot-mobile"
)
var ua = navigator.userAgent.toLowerCase();
var isMobile = false;
cssstyle = $("head").children(":last");
for (var i = 0; i < mobiles.length; i++) {
	if (ua.indexOf(mobiles[i]) > 0) {
	isMobile = true;
	break;
	}
}
if ( isMobile == true ) {
	$("head").append('<link rel="stylesheet" type="text/css" href="css/style_m.css">');
}
else {
	$("head").append('<link rel="stylesheet" type="text/css" href="css/style_d.css">');
}
