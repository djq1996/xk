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
		$http({
			method:'get',
			url:'http://123.56.227.177:2503/xiang-zhuanjia'
		}).success(function(e){
			$scope.data=e
		})
	})
	.controller('rccp',function ($scope,$http,$state){
		$http({
			url:'http://123.56.227.177:2503/xiang-info',
			method:'get',
		}).success(function (e){
			$scope.data = e
		})
	})
	.controller('zc', function($scope, $http, $state) {
		$scope.zc = function() {

			$state.go('index.zczxS')

			//window.location.href='http://localhost:9000/#/index/zczxS'

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
		//推荐
			 	$http({
				    url:'http://123.56.227.177:2503/xiang-info',
				    method:"GET",
				    params:{"$skip":0,"$limit":2,"toindex":1}
				}).success(function(e){
					$scope.data=e;
				})
				//政策信息
				$http({
				    url:'http://123.56.227.177:2503/xiang-info',
				    method:"GET",
				    params:{"$skip":3,"$limit":5,"classify":0}
				}).success(function(e){
					$scope.data2=e;
				})
				
				//就业指南
				$http({
				    url:'http://123.56.227.177:2503/xiang-info',
				    method:"GET",
				    params:{"$skip":0,"$limit":8,"classify":1}
				}).success(function(e){
					$scope.data3=e;
				})

	})
	.controller('lj', function($scope, $http, $state) {
		$scope.ImgClick = function() {
			$state.go('index.sybZx')
		}
		$scope.xqxwLj = function() {
	
			$state.go('index.sybTj')
		}
	})

	.directive('lunbo',function($timeout){
		return{
			restrict: 'ECMA',
		    replace: true,
		    template:"<img ng-repeat='x in data' ng-src='http://123.56.227.177/bi/public/xiang_upload/images/{{x.img}}' />",
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

	.controller('lunbo', function($scope, $http, $state) {
	    
		    $http({
                url:"http://123.56.227.177:2503/xiang-auto",
                method:"GET"
            }).success(function(e){
            	//debugger
            	//alert($stateParams.id)
                $scope.data=e
            })
	})
	.directive('lunborccp',function($timeout){
		return{
			restrict: 'ECMA',
		    replace: true,
		    template:"<img ng-repeat='x in data' ng-src='http://123.56.227.177/bi/public/xiang_upload/images/{{x.img}}'/>",
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
	}).controller('detail',function($scope,$http,$stateParams){
			
		    $http({
                url:"http://123.56.227.177:2503/xiang-info",
               	params:{id:$stateParams.id},
                method:"GET"
            }).success(function(e){
            	//debugger
            	//alert($stateParams.id)
                $scope.data=e
            })
	}).directive('lunboxx',function(){
		return {
			template:'<div class="index_interact_img"><img src="../images/翔坤集团_52.png" class="index_interact_img_left"/><ul class="index_interact_img_center"><img src="../images/翔坤集团_40.png"/><img src="../images/翔坤集团_42.png"/><img src="../images/翔坤集团_44.png"/><img src="../images/翔坤集团_46.png"/><img src="../images/翔坤集团_49.png"/></ul><img src="../images/翔坤集团_55.png" class="index_interact_img_right"/></div>',
			scope:{},
			link:function(s,a,e){
				var tim=null;
			function a(){
				$('.index_interact_img_center').append('<img src="'+$('.index_interact_img_center img:eq(0)').attr('src')+'">')
				$('.index_interact_img_center img:eq(2)').stop().animate({width:'120px',height:'140px',margin:'20px 15px'},800)
				$('.index_interact_img_center img:eq(3)').stop().animate({width:'180px',height:'210px',margin:'0px 15px'},800)
				$('.index_interact_img_center img:eq(0)').remove()
							
			}
			function b(){
				$('.index_interact_img_center').prepend('<img src="'+$('.index_interact_img_center img:eq(4)').attr('src')+'">')
				$('.index_interact_img_center img:eq(5)').remove()
				$('.index_interact_img_center img:eq(3)').stop().animate({width:'120px',height:'140px',margin:'20px 15px'},800)
				$('.index_interact_img_center img:eq(2)').stop().animate({width:'180px',height:'210px',margin:'0px 15px'},800)
			}
			a()
			tim=setInterval(a,2000)
			$('.index_interact_img_left').click(function(){
					b()
					clearInterval(tim);
					tim=setInterval(b,2000)
			})	
			$('.index_interact_img_right').click(function(){
					a()
					clearInterval(tim);
					tim=setInterval(a,2000)
			})
			}
		}
	}).controller('zjzd',function($scope,$http,$stateParams){
		 $http({
                url:"http://123.56.227.177:2503/xiang-zhuanjia",
               	params:{id:$stateParams.id},
                method:"GET"
            }).success(function(e){
            	//debugger
            	console.log(e)
            	//alert($stateParams.id)
                $scope.data=e
            })
	})
	
	.controller('index', function($scope, $http, $state) {
		 var server="http://123.56.227.177:2503";
	$http({
				method:"GET",
                url:server+"/xiang-auto/"
           }).success(function(e){
            	console.log(e)
                $scope.data=e
            }).error(function(){
            	
            })
    $http({
				method:"GET",
                url:server+"/xiang-info/",
                params:{"$skip":0,"$limit":9}
           }).success(function(e){
           	//	debugger
            	console.log(e)
                $scope.data_jiuyexinxi=e
            }).error(function(){
            	
            })
            
            
            
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

	