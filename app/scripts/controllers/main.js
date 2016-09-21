'use strict';

/**
 * @ngdoc function
 * @name yuanjinweiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yuanjinweiApp
 */
angular.module('yuanjinweiApp')
	.controller('zhuye', function($scope, $http, $state) {
		$scope.dl = function() {
			$state.go('login')
		}
		$scope.zc = function() {
			$state.go('index.zc')
		}
		$scope.zhuanjia = function() {
			$state.go('index.zj')
		}
		$scope.sy = function() {
			$state.go('index.zhuye')
		}
		$scope.zcxx = function() {
			$state.go('index.zcxx')
		}
		$scope.rencai = function() {
			$state.go('index.rencai')
		}
		$scope.pxrz = function() {
			$state.go('index.pxrz')
		}
		$scope.sprz = function() {
			$state.go('index.sprz')
		}
		$scope.CYpTcl = function() {
			$state.go('index.syb')
		}
		$scope.xxkZc = function(e) {
			$scope.nba=e;
		}
		$('#znav ul li').hover(function() {
			$(this).find('ol').stop().animate({
				width: "100%",
				height: $(this).find("ol").children().length * 100 + '%',
			}, 200)
		}, function() {
			$(this).find('ol').stop().animate({
				width: "100%",
				height: "0%",
			}, 200)
		})
	})
	.controller('denglu', function($scope, $http, $state) {
		$scope.zhuce = function() {
			$state.go('zhuce')
		}
	})
	.controller('z_j', function($scope, $http, $state) {
		$scope.zjzd = function() {
			$state.go('index.zjzd')
		}
	})
	.controller('zc', function($scope, $http, $state) {
		$scope.zc = function() {
			console.log(1)
			$state.go('index.zczxS')
		}
		$scope.leftZc = function(e,k) {
			$scope.cba=e;
			if(k==0){
				$scope.cc="mainConterLeftHeActive";
				$scope.vv='';
			}else{
				$scope.vv="mainConterLeftHeActive";
				$scope.cc='';
			}
		}
	})
	.controller('lj', function($scope, $http, $state) {
		$scope.ImgClick = function() {
			$state.go('index.sybZx')
		}
		$scope.xqxwLj = function() {
	
			$state.go('index.sybTj')
		}
	})
	.controller('index', function($scope, $http, $state) {
	$scope.indexlunbo1=[
	{option: "翔坤集团_02.png"},
	{option: "03.jpg"},
	{option: "04.jpg"},
	{option: "06.png"},
	{option: "07.png"}]
	$scope.indexlunbo2=[
	{option: "翔坤集团_40.png"},
	{option: "翔坤集团_42.png"},
	{option: "翔坤集团_44.png"},
	{option: "翔坤集团_46.png"},
	{option: "翔坤集团_49.png"},
	{option: "翔坤集团_40.png"},
	{option: "翔坤集团_42.png"},
	{option: "翔坤集团_44.png"},
	{option: "翔坤集团_46.png"},
	{option: "翔坤集团_49.png"}]
	})
	.directive('lunbo',function($timeout){
		return{
			restrict: 'ECMA',
		    replace: true,
		    template:"<img ng-repeat='data in indexlunbo1' ng-src='../images/{{data.option}}'/>",
		    link:function(scope, elem, attrs){
		    	$timeout(function() {
		    		var className_index = $("." + $(elem).parent()[0].className);
					var i = 0,timer_index=null;
					timer_index = setInterval(slide, 3000);
					  function slide(){
					  	i++;
					  	if(i>=className_index.children("img").length){
                        		i=0
                        }
                            className_index.children("img").eq(i).fadeIn().siblings().fadeOut()	
                       };
                       // 清除定时器
						$(".index_lunbo1,.index_banner_left,.index_banner_right").hover(function() {
							clearInterval(timer_index);
						}, function() {
							clearInterval(timer_index);
							timer_index = setInterval(slide, 3000);
						})
						
						//点击换图
						$(".index_banner_left").click(function(){
							if(i==0){
								i=className_index.children("img").length;
							}
								i--;
							className_index.children("img").eq(i).fadeIn().siblings().fadeOut()
							
						})
						$(".index_banner_right").click(function(){
							i++;
							if(i==className_index.children("img").length){
								i=0;
							}
							className_index.children("img").eq(i).fadeIn().siblings().fadeOut()
						})
		    	},0)
		    }
		}
	})
	.directive('lunboxx',function($timeout){
		return{
			restrict: 'ECMA',
		    replace: true,
		    template:"<li ng-repeat='data in indexlunbo2'><a href='javascript:;'><img ng-src='../images/{{data.option}}'/></a></li>",
		    link:function(scope, elem, attrs){
		    	$timeout(function(){
		    		
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
          var tim_fanda=null
		  var className_index_fanda = getClass("lubno_fangda")[0];
		  var className_index_fanda_css=className_index_fanda.currentStyle||window.getComputedStyle(className_index_fanda,false)
		    			function hengxiang(){
			    				className_index_fanda.style.left=parseInt(className_index_fanda_css.left)-1+'px';
			    				if(parseInt(className_index_fanda_css.left)<=-180){
			    					className_index_fanda.style.left="0px";
			    					className_index_fanda.appendChild(first(className_index_fanda));
			    				}
		    				}
		    			tim_fanda=setInterval(hengxiang,30)
		    		 //----------hover停止调用函数，离开再次调用----------
                      className_index_fanda.onmouseover=function(){
	                       clearInterval(tim_fanda)
                            }
                      className_index_fanda.onmouseout=function(){
	                       tim_fanda=setInterval(hengxiang,30)  
	                      }  
		    	},0)
		    }
		}
	})


	
	.controller('lunbo', function($scope, $http, $state) {
	 $scope.indexlunbo1=[
	{option: "tu_04.png"},
	{option: "05.jpg"},
	{option: "06.png"},
	{option: "07.png"}] 
	})
	.directive('lunborccp',function($timeout){
		return{
			restrict: 'ECMA',
		    replace: true,
		    template:"<img ng-repeat='data in indexlunbo1' ng-src='../images/{{data.option}}'/>",
		    link:function(scope, elem, attrs){
		    	$timeout(function() {
		    	var className_rccp=$('#'+$(elem).parent()[0].id);
		    	var j = 0,timer_rccp=null;
		    	timer_rccp = setInterval(slide_rccp, 3000);
					  function slide_rccp(){
					  	j++;
					  	if(j>=className_rccp.children("img").length){
                        		j=0
                        }
                            className_rccp.children("img").eq(j).fadeIn().siblings().fadeOut()	
                       };
                 // 清除定时器
						className_rccp.hover(function() {
							clearInterval(timer_rccp);
						}, function() {
							clearInterval(timer_rccp);
							timer_rccp = setInterval(slide_rccp, 3000);
						})       
		    },0)
		 }   
		}
	})
	.controller('pxrz', function($scope, $http, $state) {
		 $scope.indexlunbo1=[
	{option: "banner.jpg"},
	{option: "banner_1.jpg"},
	{option: "banner_2.jpg"},
	{option: "banner_3.jpg"}] 
	})
	.directive('lunbopxrz',function($timeout){
		return{
			restrict: 'ECMA',
		    replace: true,
		    template:"<li ng-repeat='data in indexlunbo1'><a href='javascript:;'><img  ng-src='../images/{{data.option}}'/></a></li>",
		    link:function(scope, elem, attrs){
		    	$timeout(function(){
		    		var className_pxrz = $("." + $(elem).parent()[0].className);
					var k = 0,timer_pxrz=null;
					timer_pxrz = setInterval(slide_pxrz, 3000);
					  function slide_pxrz(){
					  	k++;
					  	if(k>=className_pxrz.children("li").length){
                        		k=0
                        }
                            className_pxrz.children("li").eq(k).fadeIn().siblings().fadeOut()	
                       };
                       // 清除定时器
						$(".img,.btnpeixun").hover(function() {
							clearInterval(timer_pxrz);
						}, function() {
							clearInterval(timer_pxrz);
							timer_pxrz = setInterval(slide_pxrz, 3000);
						})
						//点击换图
						$(".left").click(function(){
							if(k==0){
								k=className_pxrz.children("li").length;
							}
								k--;
							className_pxrz.children("li").eq(k).fadeIn().siblings().fadeOut()
							
						})
						$(".right").click(function(){
							k++;
							if(k==className_pxrz.children("li").length){
								k=0;
							}
							className_pxrz.children("li").eq(k).fadeIn().siblings().fadeOut()
						})
		    	},0)
		    }
		}
	})
	