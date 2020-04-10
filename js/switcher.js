/*-----------------------------------------------------------------------------------
/* Styles Switcher
-----------------------------------------------------------------------------------*/

window.console = window.console || (function(){
	var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function(){};
	return c;
})();


jQuery(document).ready(function($) {
	
		// Color Changer
		$(".green" ).click(function(){
			$("#colors" ).attr("href", "css/colors/green.css" );
			return false;
		});
		
		$(".blue" ).click(function(){
			$("#colors" ).attr("href", "css/colors/blue.css" );
			return false;
		});
		
		$(".orange" ).click(function(){
			$("#colors" ).attr("href", "css/colors/orange.css" );
			return false;
		});
	
		
		$(".navy" ).click(function(){
			$("#colors" ).attr("href", "css/colors/navy.css" );
			return false;
		});
		
		$(".yellow" ).click(function(){
			$("#colors" ).attr("href", "css/colors/yellow.css" );
			return false;
		});
		
		$(".peach" ).click(function(){
			$("#colors" ).attr("href", "css/colors/peach.css" );
			return false;
		});
		
		$(".beige" ).click(function(){
			$("#colors" ).attr("href", "css/colors/beige.css" );
			return false;
		});

		$(".purple" ).click(function(){
			$("#colors" ).attr("href", "css/colors/purple.css" );
			return false;
		});

		$(".red" ).click(function(){
			$("#colors" ).attr("href", "css/colors/red.css" );
			return false;
		});

		$(".pink" ).click(function(){
			$("#colors" ).attr("href", "css/colors/pink.css" );
			return false;
		});
		
		$(".celadon" ).click(function(){
			$("#colors" ).attr("href", "css/colors/celadon.css" );
			return false;
		});
		
		$(".brown" ).click(function(){
			$("#colors" ).attr("href", "css/colors/brown.css" );
			return false;
		});
		
		$(".cherry" ).click(function(){
			$("#colors" ).attr("href", "css/colors/cherry.css" );
			return false;
		});
		
		$(".gray" ).click(function(){
			$("#colors" ).attr("href", "css/colors/gray.css" );
			return false;
		});
		
		$(".dark" ).click(function(){
			$("#colors" ).attr("href", "css/colors/dark.css" );
			return false;
		});
		
		$(".cyan" ).click(function(){
			$("#colors" ).attr("href", "css/colors/cyan.css" );
			return false;
		});
		
		$(".olive" ).click(function(){
			$("#colors" ).attr("href", "css/colors/olive.css" );
			return false;
		});
		
		$(".dirty-green" ).click(function(){
			$("#colors" ).attr("href", "css/colors/dirty-green.css" );
			return false;
		});
		
		
		// Layout Switcher
		$(".boxed" ).click(function(){
			$("#layout" ).attr("href", "css/boxed.css" );
			return false;
		});


		$("#layout-switcher").on('change', function() {
			$('#layout').attr('href', $(this).val() + '.css');
		});;

		
		// Style Switcher	
		$('#style-switcher').animate({
			left: '-260px'
		});
		
		//点击空白关闭
 		$(document).click(function(e){

 		 var _div = $('#style-switcher');   // 设置目标区域

 		 if(!_div.is(e.target) && _div.has(e.target).length === 0){

     			  $('#style-switcher').animate({
					left: '-260px'
				});

		  }

		});
		$('#style-switcher h2 a').click(function(e){
			e.preventDefault();
			var div = $('#style-switcher');
			console.log(div.css('left'));
			if (div.css('left') === '-260px') {
				$('#style-switcher').animate({
					left: '0px'
				}); 
			} else {
				$('#style-switcher').animate({
					left: '-260px'
				});
			}
		})
		
		$('.colors li a').click(function(e){
			e.preventDefault();
			$(this).parent().parent().find('a').removeClass('active');
			$(this).addClass('active');
		})
		//背景图片
		$('.bg li a').click(function(e){
			e.preventDefault();
			$(this).parent().parent().find('a').removeClass('active');
			$(this).addClass('active');

			var bg = $(this).css('backgroundImage');
			
				window.localStorage.removeItem('bgColor')		
				$('body').css('backgroundImage',bg)
				localStorage.setItem('bgImg',bg);//将图片赋值给bgsave，本地储存
					
		})
		
		var getBg=localStorage.getItem('bgImg');//将图片赋值给bgsave，本地获取
		if(getBg){		
		$('body').css('backgroundImage',getBg);
		}else if(getColor){
			$('body').css('backgroundColor',bgcolor).css('backgroundImage','none')
		}else
		{$('body').css('background','none');
		}

		//背景颜色
		$('.bgsolid li a').click(function(e){
			e.preventDefault();
			$(this).parent().parent().find('a').removeClass('active');
			$(this).addClass('active');
			var bgcolor = $(this).css('backgroundColor');
			window.localStorage.removeItem('bgImg')
			$('body').css('backgroundColor',bgcolor).css('backgroundImage','none')
			localStorage.setItem('bgColor',bgcolor);
		})
		var getColor=localStorage.getItem('bgColor');
		if(getColor){
		$('body').css('backgroundColor',getColor).css('backgroundImage','none')
		}
		


		$('#reset').click(function(e){
			//var bg = $(this).css('backgroundImage')
			//$(body).css('background-image','none')
			//$(body).css('background-Image',none)
			
			window.localStorage.removeItem('bgImg')
			window.localStorage.removeItem('bgColor')
		
		})
		$('#reset1').click(function(e){
			
			window.localStorage.removeItem('bgImg')
		

		})
		$('#reset2').click(function(e){
			
			
			window.localStorage.removeItem('bgColor')
			

		})
	
			

	});


//--透明度---
     $().ready(function () {
	var bgOpacity =localStorage.getItem('bgOpacity');//定义变量接住缓存的数据
   	 if(bgOpacity){//如果已经有缓存，说明至少已经点击过一次
 	//此时应该使用缓存中的皮肤状态
	 var val=bgOpacity;		//将localStorage中textrange的值复制给val
	 $("#txtRangeValue").val(val);    //将本地存储的localStorage赋值给文本框
	
     	 $("body").css({filter:"alpha("+val+")",opacity:val/100});
	}

            $("#trange").bind('change',function () {
                var val=$("#trange").val();
                $("#txtRangeValue").val(val);    //赋值
//                透明度设置
//                $("#myDiv").get(0).style.filter="alpha("+val+")";
//                $("#myDiv").get(0).style.opacity=val/100;
               $("body").css({filter:"alpha("+val+")",opacity:val/100});
	localStorage.setItem('bgOpacity',val);//将range赋值给bgsave，本地储存
 
            });
		});

	/*	var options=$("#layout-switcher option:selected");  //获取选中的项
		$('.night').click(function(){
			$('body').css('backgroundImage','none')
			window.localStorage.removeItem('bgImg')
		});
		*/



<!--
作者:YeJoe
主页：
github：https://github.com/YeJoe/Mo-Maek/
日期：2020-4-7
版权所有，请勿删除
❶❷❸❹❺❻❼❽❾❿
-->
