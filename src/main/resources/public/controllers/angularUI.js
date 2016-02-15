angular
    .module('app', ['ngMaterial', "ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider.when("/info", {
            templateUrl: "/info/info.html"
        });
        $routeProvider.when("/menuLearn", {
            templateUrl: "/learn/menuLearn.html"
        });
        $routeProvider.when("/learn", {
            templateUrl: "/learn/learn.html",
            controller: 'learnController',
        });
        $routeProvider.when("/manager", {
            templateUrl: "/wordManager/start.html"
        });

    })
    .controller('AppCtrl', AppCtrl);

function AppCtrl($scope, $log) {
    var imagePath = './img/statement.png';
    $scope.todos = [
        {
            face: imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
        }, {
            face: imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
        }, {
            face: imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
        }, {
            face: imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
        },
    ];
}