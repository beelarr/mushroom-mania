"use strict";
console.log('controller for shrooms');

app.controller('ShroomCtrl', function ($scope, ShroomFactory) {
    $scope.mushroom = [];
    ShroomFactory.getShrooms()
        .then(function (shroomCollection) {
            for (var key in shroomCollection){
                console.log('key', shroomCollection[key]);
                $scope.mushroom.push(shroomCollection[key]);
            }
            // console.log('shrooms from Ctrl', $scope.mushrooms);
            console.log('shroomArray', $scope.mushroom);
        });

        // $scope.filterMushrooms = $scope.mushroom.filter((shroom)=>{
        //     return shroom.name;
        // });
});