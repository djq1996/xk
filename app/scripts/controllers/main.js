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
			$state.go('index.zczxS')
		}
	})
	.controller('lj', function($scope, $http, $state) {
		$scope.ImgClick = function() {
			$state.go('index.sybZx')
		}
		$scope.xqxwLj = function() {
			alert(99)
			$state.go('index.sybTj')
		}
	})