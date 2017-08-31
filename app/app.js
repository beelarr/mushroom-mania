"use strict";

var app = angular.module('ShroomApp', ['ngRoute', 'angular-toArrayFilter']
)
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/greeting.html'
            })
            .when('/showall', {
                templateUrl: 'partials/shroom-list.html',
                controller: 'ShroomCtrl'
            })
            .when('/edible', {
                templateUrl: 'partials/edibleShroom.html',
                controller: 'ShroomCtrl'
            })
            .when('/nonedible',{
                templateUrl: 'partials/nonEdibleShroom.html',
                controller: 'ShroomCtrl'
            })
            .otherwise('/');
    });