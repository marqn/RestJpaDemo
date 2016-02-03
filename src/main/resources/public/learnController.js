angular.module('app').controller('learnController', ['$scope', '$http', function ($scope, $http) {

    // **********  VARIABLES  ******************
    var wordsTab, randomTab, typeOfGame, currentWordItem;

    $scope.numberOfWords = "0";
    $scope.wordIndex;
    $scope.isChecked = false;
    $scope.isSummary = false;
    $scope.wiemCount = false;
    $scope.niewiemCount = false;

    // **********  FUNCTIONS  ******************
    $http.get("/words").success(function (data) {

        wordsTab = data._embedded.words;

        $scope.wordIndex = $scope.numberOfWords = wordsTab.length;

        resetData();
        randomTab = randomizeOrder($scope.wordIndex);
        nextWord();

        console.log("typeOfGame:" + typeOfGame);
        //console.log(randomTab);
    });

    $scope.clickAction = function (typeButton) {
        gotoSummary();
        if (!$scope.isChecked) {
            showHiddenWord();
            $scope.isChecked = true;
        } else if ($scope.isChecked) {
            nextWord();
            $scope.isChecked = false;
        }


        if (typeButton == "wiem") {
            saveWiem();
        } else if (typeButton == "niewiem") {
            saveNiewiem();
        }
    };

    function resetData() {
        currentWordItem = [];
        typeOfGame = $_GET('f');
        $scope.niewiemCount = $scope.wiemCount = 0;
    }

    function randomizeOrder(length) {

        var tab = [];
        for (var i = 0; i < length; i++) {
            tab[i] = i;
        }

        for (var j = 0; j <= length; j++) {
            var r1 = Math.floor((Math.random() * length));
            var r2 = Math.floor((Math.random() * length));
            var temp = tab[r1];
            tab[r1] = tab[r2];
            tab[r2] = temp;
        }

        return tab;
    }

    function nextWord() {

        $scope.wordIndex--;
        var index = randomTab[$scope.wordIndex];
        currentWordItem = wordsTab[index];

        $scope.first = "???";
        if (typeOfGame == 0)
            $scope.second = currentWordItem.first;
        else
            $scope.second = currentWordItem.second;

        return $scope.wordIndex;
    }

    function showHiddenWord() {
        var index = randomTab[$scope.wordIndex];
        if (typeOfGame == 0)
            $scope.first = currentWordItem.second;
        else
            $scope.first = currentWordItem.first;
    }

    function updateWord(item) {
        $http.patch(item._links.word.href, item).success(function (data, status) {
            console.log("status:" + status);
        }).error(function(data, status) {
            console.log(data + "Request failed. " + status);
        });
    }

    function saveWiem() {
        $scope.wiemCount++;
        increment(currentWordItem, "refresh");
        increment(currentWordItem, "wiem");
        updateWord(currentWordItem);
    }

    function saveNiewiem() {
        $scope.niewiemCount++;
        increment(currentWordItem, "refresh");
        increment(currentWordItem, "niewiem");
        updateWord(currentWordItem);
    }

    function increment(item, paramName) {
        if (item[paramName] == null)
            item[paramName] = 1;
        else
            item[paramName]++;
    }

    function gotoSummary() {
        if ($scope.wordIndex <= 0) {
            $scope.isSummary = true;
        }
    }

    function $_GET(param) {
        var vars = {};
        window.location.href.replace(
            /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
            function (m, key, value) { // callback
                vars[key] = value !== undefined ? value : '';
            }
        );

        if (param) {
            return vars[param] ? vars[param] : null;
        }
        return vars;
    }
}]);