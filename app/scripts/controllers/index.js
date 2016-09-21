app.controller('index', function($scope, $http, $state) {
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
                url:server+"/xiang-info/"
           }).success(function(e){
            	console.log(e)
                $scope.data_jiuyexinxi=e
            }).error(function(){
            	
            })
            
            
            $scope.did = function(id){
            	$state.go('.zczxS',{id:id})
            }
	})
		
	.directive('lunbo',function($timeout){
		return{
			restrict: 'ECMA',
		    replace: true,
		    template:"<img ng-repeat='x in data' ng-src='http://123.56.227.177/bi/public/xiang_upload/images/{{x.img}}'/>",
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