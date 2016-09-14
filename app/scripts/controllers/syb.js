angular.module('yuanjinweiApp')
	.controller('syb_c', function($scope, $http, $state) {
//------------------------轮播----------------------------
		var oS3=$('.bannerBox_c');
		var timer=null;
		var i=1;
		function ssk(){
			if(i>3){
				i=0;
			}
			oS3.stop().animate({left:-oS3.width()/4*i},1000)	
			i++;
		};
		timer=setInterval(ssk,3000)
		$(".leftBox_c banner").stop().hover(function(){
			clearInterval(timer)
		},function(){
			timer=setInterval(ssk,3000)
		})
//------------------------选项卡----------------------------
		$(".tabControl_c a").eq(0).addClass("tabControlHover_c");
		$(".leftBox_c ul").eq(0).css("display","block").siblings("ul").css("display","none");
		$(".tabControl_c a").click(function(){
			$(".tabControl_c a").removeClass()
			$(this).addClass("tabControlHover_c")
			$(".leftBox_c ul").eq($(this).index()).css("display","block").siblings("ul").css("display","none")
		});
//------------------------纵向轮播----------------------------	
         var tim=null;
         $(".xmtjContent_c").html($(".xmtjContent_c").html()+$(".xmtjContent_c").html())
         function zongxiang(){
         	if(parseInt($(".xmtjContent_c").css("top"))<=-$(".xmtjContent_c").height()){
        		$(".xmtjContent_c").css("top","0px")
        	}else{
        	$(".xmtjContent_c").animate({"top":parseInt($(".xmtjContent_c").css("top"))-1+'px'},0)
        	}
         }
        tim=setInterval(function(){
        	zongxiang()
        },24)
	    $(".xmtjContentBox_c").mouseover(function(){
	    	clearInterval(tim)
	    })
	    $(".xmtjContentBox_c").mouseout(function(){
	    	tim=setInterval(function(){
	        	zongxiang()
	        },24)
	    })
//------------------------字体隐藏----------------------------	
//      $(".text_title_c").html($(".text_title_c").html().slice(0,15)+'……');
//		$(".text_c").html($(".text_c").html().slice(0,85)+'……');
//		$(".news1_c h2").html($(".news1_c h2").html().slice(0,12)+'……');
//		$(".news1_c p").html($(".news1_c p").html().slice(0,45)+'……');
//		$(".xmtjText1_c").html($(".xmtjText1_c").html().slice(0,45)+'……');
































})