var app = angular.module('app', []);

app.controller('CashController', function($scope, $http) {
	$scope.numbers = [1,2,3,4,5,6,7,8,9,0];
	$scope.value = '';
	$scope.add = function(num) {
		$scope.value += num;
	};
	$scope.cancel = function() {
		$scope.value = '';
	};
	$scope.cash = function () {
		if($scope.value){
			params = {
		        'param1' : $scope.value
		    };

			var method = 'POST';
			var url = 'cash.php';
			$scope.codeStatus = "";
			$http({
			  method: method,
			  url: url,
			  data: params,
			  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			}).
			success(function(data, status, headers, config) {
				$scope.result = data;
				$scope.value = '';
			}).
			error(function(data, status, headers, config) {
				$scope.result = "throw NoteUnavailableException";
			});
		}
	}
});