app.controller('zc', function($scope, $http){
//	推荐
	$http({
		url:"http://123.56.227.177:2503/xiang-info",
		method:"GET",
		params:{'$skip':0,'$limit':2,toindex:1}
	}).success(function(e){
		$scope.data = e;
	})
	
//	政策信息
	$http({
		url:"http://123.56.227.177:2503/xiang-info",
		method:"GET",
		params:{'$skip':2,'$limit':5,classify:1}
	}).success(function(t){
		$scope.dataTwo = t
	})
	
//	就业指南
	$http({
		url:"http://123.56.227.177:2503/xiang-info",
		method:"GET",
		params:{'$skip':2,'$limit':5,classify:0}
	}).success(function(t){
		$scope.dataseve = t
	})
	
	//详情页
	$scope.xiangQing=function(){
		$http({
			url:"http://123.56.227.177:2503/xiang-info",
			method:"POST",
		}).success(function(e){
//			alert(54)
			$scope.id=e
		})
	}
})

	