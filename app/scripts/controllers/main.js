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
			window.location.href='http://localhost:9000/#/index/zczxS'
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
	