app.controller('customerController', function($scope, $http){
	$scope.Title = "Customers";

	$http.get('/api/customer')
		.success(function(data, status, headers, config) {
      		$scope.customers = data;
	    });

    $scope.open = function(id){
    	$http.get('/api/customer/' + id)
    		.success(function(data, status, headers, config){
    			$scope.customer = data;
    		})
    };
});
