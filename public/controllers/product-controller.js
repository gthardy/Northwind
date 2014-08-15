app.controller('productController', function($scope, $http){
	$scope.Title = "Products";

	$http.get('/api/product')
		.success(function(data, status, headers, config) {
      		$scope.products = data;
	    });

    $scope.open = function(id){
    	$http.get('/api/product/' + id)
    		.success(function(data, status, headers, config){
    			$scope.product = data;
    		})
    };
});