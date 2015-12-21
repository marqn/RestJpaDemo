app.controller('wordManagerController', function ($scope, $http) {
    $scope.message = 'Contact us! JK. This is just a demo.';

    $scope.clearAll = function () {
        $scope.firstText = "";
        $scope.secondText = "";
    };

    $scope.sendWord = function () {
        var data =
        {
            first: $scope.firstText,
            second: $scope.secondText
        };

        $http({
            url: "/words",
            method: "POST",
            data: data,
            headers: {'Content-Type': 'application/json'}
        }).success(function (data, status, headers, config) {
            $scope.message = "send succesfull: " + status;
            $scope.clearAll();
        }).error(function (data, status, headers, config) {
            $scope.message = status + ' ' + headers;
        });
    }


});