var app = angular.module('app', [
    'ngRoute'
]);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/info', {
                templateUrl: 'pages/info.html',
                controller: "mainController"
            }).
            when('/learn', {
                templateUrl: 'pages/learn.html',
                controller: 'aboutController'
            }).
            when('/addWord', {
                templateUrl: 'pages/addWord.html',
                controller: 'wordManagerController'
            });
    }]);

app.controller('mainController', function ($scope) {
    $scope.message = 'Everyone come and see how good I look!';
});

app.controller('aboutController', function ($scope) {
    $scope.message = 'Look! I am an about page.';
});

