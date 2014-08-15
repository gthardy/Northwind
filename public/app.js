'use strict';

var app = angular.module('Northwind', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', 
	function($routeProvider, $locationProvider){
	$routeProvider

		// Home Page
		.when('/', { 
			templateUrl: '/views/main/index.html', 
			controller: 'mainController'
		})

		// Customers
		.when('/customers', {
			templateUrl: '/views/customers/index.html',
			controller: 'customerController'
		})
		
		// Orders
		.when('/orders', {
			templateUrl: '/views/orders/index.html',
			controller: 'orderController'
		})

		// Products
		.when('/products', {
			templateUrl: '/views/products/index.html',
			controller: 'productController'
		})

		// Suppliers
		.when('/suppliers', {
			templateUrl: '/views/suppliers/index.html',
			controller: 'supplierController'
		})

		.otherwise({ redirectTo: '/' });		

	$locationProvider.html5Mode(true);
}]);