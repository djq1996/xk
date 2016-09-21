angular.module('yuanjinweiApp')
	.controller('syb_c', function($scope, $http, $state,$stateParams) {
		$scope.syb_c_lunbo=[
	{option: "banner1_c.png"},
	{option: "banner1_c.png"},
	{option: "banner1_c.png"},
	{option: "banner1_c.png"}]
		$scope.syb_c_lunbo1=[
		{"option": "recommend1.png","conten":"寻找999位背包客，共建大理客栈梦想孵化基地爱上"},
		{"option": "recommend1.png","conten":"寻找999位背包客，共建大理客栈梦想孵化基地爱上"},
		{"option": "recommend1.png","conten":"寻找999位背包客，共建大理客栈梦想孵化基地爱上"},
		{"option": "recommend1.png","conten":"寻找999位背包客，共建大理客栈梦想孵化基地爱上"},
		{"option": "recommend1.png","conten":"寻找999位背包客，共建大理客栈梦想孵化基地爱上"}]
//------------------------选项卡----------------------------			
		$scope.tabnav_left="tabControlHover_c";
		$scope.conter_left=true;
		$scope.clickleft=function(){
			$scope.tabnav_left="tabControlHover_c";
			$scope.tabnav_right="";
			$scope.conter_left=true;
			$scope.conter_right=false;
		}
		$scope.clickright=function(){
			$scope.tabnav_left="";
			$scope.tabnav_right="tabControlHover_c";
			$scope.conter_left=false;
			$scope.conter_right=true;
		}	
	}).directive('lunbosybc',function($timeout){
		return{
			restrict: 'ECMA',
		    replace: true,
		    template:"<img ng-repeat='data in syb_c_lunbo' ng-src='../images/{{data.option}}'/>",
		    link:function(){
		    	$timeout(function(){
//------------------------轮播----------------------------
		    		var oS3=$('.bannerBox_c');
		            var timer_syb_c=null;
		            var syb_c_1=1;
		            function ssk(){
			          if(syb_c_1>3){
				         syb_c_1=0;
			          }
			              oS3.stop().animate({left:-oS3.width()/4*syb_c_1},1000)	
			                syb_c_1++;
		                  };
		            timer_syb_c=setInterval(ssk,3000);
		            $(".leftBox_c banner").stop().hover(function(){
			           clearInterval(timer_syb_c)
		                 },function(){
			        timer_syb_c=setInterval(ssk,3000)
		            })
		    	},0)
		    }
		}
	})
	.directive('lunbosybc1',function($timeout){
		return{
			restrict: 'ECMA',
		    replace: true,
		    template:"<li ng-repeat='data in syb_c_lunbo1'><img ng-src='../images/{{data.option}}'/><p class='xmtjText1_c'>{{data.conten}}</p><a ng-click='xqxwLj()'>[详情]</a></li>",
		    link:function(){
		    	$timeout(function(){
//------------------------纵向轮播----------------------------			    		
var tim=null;
function getClass(className) { //className      
	if(document.getElementsByClassName) {
		return document.getElementsByClassName(className);
	} else {
		var All = document.getElementsByTagName('*')
		var arr = [];
		for(var i = 0; i < All.length; i++) {
			if(All[i].className == className) {
				arr.push(All[i])
			}
		}
		return arr;
	}
}
function first(obj) { //第一个节点的
	if(obj.firstElementChild) {
		return obj.firstElementChild
	} else {
		return obj.firstChild
	}

}
                var xmtjContent_c=getClass("xmtjContent_c")[0];
                var xmtjContent_c_css1=xmtjContent_c.currentStyle||window.getComputedStyle(xmtjContent_c,false)
                  function zongxiang(){
	                     xmtjContent_c.style.top=parseInt(xmtjContent_c_css1.top)-1+'px';
	                       if(parseInt(xmtjContent_c_css1.top)%151==0){
		                     xmtjContent_c.style.top='0px';
                             xmtjContent_c.appendChild(first(xmtjContent_c))
                              }
                            }
                     tim=setInterval(zongxiang,30);
                       //----------hover停止调用函数，离开再次调用----------
                      xmtjContent_c.onmouseover=function(){
	                       clearInterval(tim)
                            }
                      xmtjContent_c.onmouseout=function(){
	                  tim=setInterval(zongxiang,30) 
                    }
		    	},0)
		    }
		}
	})



















