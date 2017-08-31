"use strict";

console.log('shroom factory');

app.factory('ShroomFactory', function ($q, $http) {
    let getShrooms = ()=>{
        return $q ((resolve,reject)=>{
            $http.get('https://donut-test-data-e898b.firebaseio.com/mushrooms.json')
                .then((itemObject) =>{
                console.log('itemObject', itemObject.data);
                let shroomCollection = itemObject.data;
                resolve(shroomCollection);
                })
                .catch((error)=>{
                reject(error);
                });
        });
    };
    return {getShrooms};
});