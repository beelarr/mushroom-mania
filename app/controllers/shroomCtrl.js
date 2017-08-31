"use strict";
console.log('controller for shrooms');

app.controller('ShroomCtrl', function ($scope, ShroomFactory) {

    ShroomFactory.getShrooms()
        .then(function (shroomCollection) {
            $scope.mushrooms = shroomCollection;
            console.log('shrooms from Ctrl', $scope.mushrooms);
        });
});