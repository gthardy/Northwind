app.controller('orderController', function($scope, $http){
	
    $scope.Title = "Orders";

	$http.get('/api/order')
		.success(function(data, status, headers, config) {
      		$scope.orders = data;
	    });

    $scope.open = function(id){
    	$http.get('/api/order/' + id)
    		.success(function(data, status, headers, config){
    			$scope.order = data;
    		})
    };
});