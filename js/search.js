var mj= document.getElementById("mj");
var sm = document.getElementById("sm");
var baidu = document.getElementById("baidu");
var sogou = document.getElementById("sogou");
var bing = document.getElementById("bing");
var so = document.getElementById("360");
var google = document.getElementById("google");
var cili = document.getElementById("cili");
var yingshi = document.getElementById("yingshi");

var scc = document.getElementById("searchCheck");
var sc = document.getElementById("search");
var bbox = document.getElementById("bbox");
var scbtn = document.getElementById("scbtn");
var simg = document.getElementById("sChoiceBtnImg");
var clear = document.getElementsByClassName("clear")[0];
var searchInput = document.getElementsByClassName("textb")[0];

sc.onclick = function(){
bbox.style.display='none';
clear.style.display='inline';
sc.scrollTop=document.body.scrollHeight;
}
clear.onclick = function(){
searchInput.value='';
sc.click();
}


document.addEventListener("click", function(e){
	if( e.target !== sc ){
		clear.style.display = "none";
	}
});

mj.onclick = function(){
scc.action="https://mijisou.com/?q=";
sc.name='q';
bbox.style.display='none';
simg.src="img/mj.svg";
search.placeholder=" ✎...  偷得浮生半日闲～";
}
sm.onclick = function(){
scc.action="https://quark.sm.cn/s";
sc.name='q';
bbox.style.display='none';
simg.src="img/sm.svg";
search.placeholder="神马-输入关键词搜索";
}

baidu.onclick = function(){
scc.action="https://www.baidu.com/s";
sc.name='wd';
bbox.style.display='none';
simg.src="img/baidu.svg";
search.placeholder="百度-输入关键词搜索";
}

sogou.onclick = function(){
scc.action="https://www.sogou.com/web";
sc.name='query';
bbox.style.display='none';
simg.src="img/sogou.svg";
search.placeholder="搜狗-输入关键词搜索";
}

bing.onclick = function(){
scc.action="https://cn.bing.com/search";
sc.name='q';
bbox.style.display='none';
simg.src="img/bing.svg";
search.placeholder="必应-输入关键词搜索";
}



google.onclick = function(){
scc.action="https://www.google.com/search";
sc.name='q';
bbox.style.display='none';
simg.src="img/google.svg";
search.placeholder="谷歌-输入关键词搜索";
}
github.onclick = function(){
scc.action="https://github.com/search";
sc.name='q';
bbox.style.display='none';
simg.src="img/github.svg";
search.placeholder="Github-输入关键词搜索";
}
yandex.onclick = function(){
scc.action="https://https://yandex.com.tr/search?text=";
sc.name='q';
bbox.style.display='none';
simg.src="img/yandex.svg";
search.placeholder="Yandex-输入关键词搜索";
}
cili.onclick = function(){
scc.action="http://pianyuan.la/search";
sc.name='q';
bbox.style.display='none';
simg.src="img/cili.svg";
search.placeholder="磁力-输入关键词搜索";
}

yingshi.onclick = function(){
scc.action="http://www.tv6699.com/vodsearch/-------------/";
sc.name='wd';
bbox.style.display='none';
simg.src="img/yingshi.svg";
search.placeholder="影视-输入关键词搜索";
}


scbtn.onclick = function(){
bbox.style.display='inline';
bbox.style.animation='popin .3s ease';
}


//上传图片
var getAddbg=localStorage.getItem('bgImg');
if(getAddbg){//获取本地储存图片值，有就加载
	window.localStorage.removeItem('bgColor')
	 $("body").css({"backgroundImage":"url('"+getAddbg+"')"});
	  
}
						  
	$('#verborgen_file').hide();
	$('#uploadButton').on('click', function () {
		  $('#verborgen_file').click();
	});
	
	$('#verborgen_file').change(function () {
	  var file = this.files[0];
	  var reader = new FileReader();
	reader.onloadend = function () {
		 // $('body').css('background-image', 'url("' + reader.result + '")');
		 window.localStorage.removeItem('bgColor')
		 $("body").css({"backgroundImage":"url('"+reader.result+"')"});
		localStorage.setItem('bgImg',reader.result);//将图片赋值给bgsave，本地储存
		}
		
		if (file) {
		reader.readAsDataURL(file);		
		} else {}
	  			
	    
	});
	