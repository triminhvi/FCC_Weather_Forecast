var app = angular.module("weatherForecast", []);
app.controller("weatherCtrl", function($scope, $http){
	
	
	$scope.getWeather = function(city_zipcode){
		var api = "http://api.openweathermap.org/data/2.5/forecast/daily?zip=";
		var units = "&units=metric";
		var appid = "&appid=fedb5f074f6b6256d41bb8cd72d8cc81";
		//var cb = "&callback=JSON_CALLBACK";
		var url = api + city_zipcode + units+ appid; //+ cb;
		$http.get(url).
		success(function(data){
			$scope.dataArray = [];
			console.log(data);
			console.log(data.city);
			data.list.forEach(function(item){
				$scope.Data = {};
				$scope.Data.temp = item.temp.day;
				$scope.Data.minTemp = item.temp.min;
				$scope.Data.maxTemp = item.temp.max;
				$scope.Data.pressure = item.pressure;
				$scope.Data.humidity = item.humidity;
				$scope.Data.des = item.weather[0].description;
				$scope.Data.windSpeed = item.speed;
				$scope.dataArray.push($scope.Data);
			})
		}).
		error(function(data, status){
			console.log("Error " + status);
		})
	}
});