angular.module('yuanjinweiApp')
	.controller('syb_c', function($scope, $http, $state) {
		$scope.syb_c_lunbo = [{
			option: "banner1_c.png"
		}, {
			option: "banner2_c.png"
		}, {
			option: "banner3_c.png"
		}, {
			option: "banner4_c.png"
		}]

		$http({
			url: "http://123.56.227.177:2503/xiang-chuangye",
			params: {
				classify: 0
			},
			method: "get"
		}).success(function(e) {
			$scope.data = e
		})

		$http({
			url: "http://123.56.227.177:2503/xiang-chuangye",
			params: {
				classify: 1,
				"$skip": 0,
				"$limit": 10
			},
			method: "get"
		}).success(function(e) {
			$scope.data1 = e
		})

		$http({
			url: "http://123.56.227.177:2503/xiang-chuangye",
			params: {
				classify: 2,
				"$skip": 0,
				"$limit": 10
			},
			method: "get"
		}).success(function(e) {
			$scope.data2 = e
		})

		$http({
			url: "http://123.56.227.177:2503/xiang-chuangye",
			params: {
				classify: 3
			},
			method: "get"
		}).success(function(e) {
			$scope.data3 = e
		})

		//------------------------选项卡----------------------------			
		$scope.tabnav_left = "tabControlHover_c";
		$scope.conter_left = true;
		$scope.clickleft = function() {
			$scope.tabnav_left = "tabControlHover_c";
			$scope.tabnav_right = "";
			$scope.conter_left = true;
			$scope.conter_right = false;

		}
		$scope.clickright = function() {
			$scope.tabnav_left = "";
			$scope.tabnav_right = "tabControlHover_c";
			$scope.conter_left = false;
			$scope.conter_right = true;
		}
		
//------------------------选项卡的点击事件----------------------------------
		$scope.xq_c=function(abc){
			$state.go('index.sybZx',{id:abc.id,gushi:'创业资讯'})
		}
		$scope.xq1_c=function(abc){
			$state.go('index.sybZx',{id:abc.id,gushi:'创业故事'})
		}
		
		$scope.xqxwLj=function(abcd){
			$state.go('index.sybTj',{id:abcd.id})
		}
		
	}).directive('lunbosybc', function($timeout) {
		return {
			restrict: 'ECMA',
			replace: true,
			template: "<img ng-repeat='data in syb_c_lunbo' ng-src='../images/{{data.option}}'/>",
			link: function() {
				$timeout(function() {
					//------------------------轮播----------------------------
					var oS3 = $('.bannerBox_c');
					var timer_syb_c = null;
					var syb_c_1 = 1;

					function ssk() {
						if(syb_c_1 > 3) {
							syb_c_1 = 0;
						}
						oS3.stop().animate({
							left: -oS3.width() / 4 * syb_c_1
						}, 1000)
						syb_c_1++;
					};
					timer_syb_c = setInterval(ssk, 3000);
					$(".leftBox_c banner").stop().hover(function() {
						clearInterval(timer_syb_c)
					}, function() {
						timer_syb_c = setInterval(ssk, 3000)
					})
				}, 0)
			}
		}
	})
	.directive('lunbosybc1', function($timeout) {
		return {
			restrict: 'ECMA',
			replace: true,
			template: "<li ng-repeat='data in data3'><img ng-src='http://123.56.227.177/bi/public/xiang_upload/images/{{data.img}}'/><p class='xmtjText1_c' ng-bind-html='data.content | jieweijiadian:30'></p><a ui-sref='index.sybTj({id:data.id})'>[详情]</a></li>",
			link: function() {
				$timeout(function() {
					//------------------------纵向轮播----------------------------			    		
					var tim = null;

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
					var xmtjContent_c = getClass("xmtjContent_c")[0];
					var xmtjContent_c_css1 = xmtjContent_c.currentStyle || window.getComputedStyle(xmtjContent_c, false)

					function zongxiang() {
						xmtjContent_c.style.top = parseInt(xmtjContent_c_css1.top) - 1 + 'px';
						if(parseInt(xmtjContent_c_css1.top) % 151 == 0) {
							xmtjContent_c.style.top = '0px';
							xmtjContent_c.appendChild(first(xmtjContent_c))
						}
					}
					tim = setInterval(zongxiang, 30);
					//----------hover停止调用函数，离开再次调用----------
					xmtjContent_c.onmouseover = function() {
						clearInterval(tim)
					}
					xmtjContent_c.onmouseout = function() {
						tim = setInterval(zongxiang, 30)
					}
				}, 0)
			}
		}
	}).filter("jieweijiadian", function() {
		return function(shuzu, number1) {
			
			if(shuzu.length > number1) {
				shuzu = shuzu.substring(0, number1) + "..."
			}
			return shuzu
		}
	}).controller('sybZx_c', function($scope, $http, $state,$stateParams) {
		$scope.zixun_c=$stateParams.gushi;
		$http({
			url: "http://123.56.227.177:2503/xiang-chuangye",
			params: {
				id:$stateParams.id
			},
			method: "get"
		}).success(function(e) {
			$scope.data4 = e
		})
	}).controller('sybTj_c', function($scope, $http, $state,$stateParams){
		$scope.sybtjclunbo_id=$stateParams.id;
		$scope.sybtjclunbo_xiangqing=function(sybtjclunbo){
			$scope.sybtjclunbo_id=sybtjclunbo.id;
				$http({
					url: "http://123.56.227.177:2503/xiang-chuangye",
					params: {
						id:$scope.sybtjclunbo_id
					},
					method: "get"
				}).success(function(e) {
					$scope.data5 = e
				});
		}
		$http({
			url: "http://123.56.227.177:2503/xiang-chuangye",
			params: {
				id:$scope.sybtjclunbo_id
			},
			method: "get"
		}).success(function(e) {
			$scope.data5 = e
		});
		$http({
			url: "http://123.56.227.177:2503/xiang-chuangye",
			params: {
				classify: 3
			},
			method: "get"
		}).success(function(e) {
			$scope.data6 = e
		})
	}).directive('sybtjclunbo', function($timeout) {
		return {
			restrict: 'ECMA',
			replace: true,
			template: "<li ng-repeat='data in data6' ng-click='sybtjclunbo_xiangqing(data)'><img ng-src='http://123.56.227.177/bi/public/xiang_upload/images/{{data.img}}'/><p class='xmtjText1_c' ng-bind-html='data.content | jieweijiadian:30'></p></li>",
			link: function() {
				$timeout(function() {
					var tim_sybtjclunbo = null;

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
					var xmtjContent2_c = getClass("xmtjContent2_c")[0];
					var xmtjContent2_c_css1 = xmtjContent2_c.currentStyle || window.getComputedStyle(xmtjContent2_c, false);
					function zongxiang_1() {
						xmtjContent2_c.style.top = parseInt(xmtjContent2_c_css1.top) - 1 + 'px';
						if(parseInt(xmtjContent2_c_css1.top) % 151 == 0) {
							xmtjContent2_c.style.top = '0px';
							xmtjContent2_c.appendChild(first(xmtjContent2_c))
						}
					}
					tim_sybtjclunbo = setInterval(zongxiang_1, 30);
					//----------hover停止调用函数，离开再次调用----------
					xmtjContent2_c.onmouseover = function() {
						clearInterval(tim_sybtjclunbo)
					}
					xmtjContent2_c.onmouseout = function() {
						tim_sybtjclunbo = setInterval(zongxiang_1, 30)
					}
				},0)
			}
		}
	})
