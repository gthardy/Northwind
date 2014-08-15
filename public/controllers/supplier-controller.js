app.controller('supplierController', function($scope, $http){
	$scope.Title = "Suppliers";

	$http.get('/api/supplier')
		.success(function(data, status, headers, config) {
      		$scope.suppliers = data;
	    });

    $scope.open = function(id){
    	$http.get('/api/supplier/' + id)
    		.success(function(data, status, headers, config){
    			$scope.supplier = data;
    		})
    };
});