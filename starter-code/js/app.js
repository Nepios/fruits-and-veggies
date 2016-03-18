/* setup your angular app here */
var app = angular.module("veggieApp", []);
app.controller('veggieCtrl', ['$scope', function($scope){
  var poolList = fruit.concat(vegetables);
  $scope.myVeggies = [];
  $scope.myFruits = [];


function shuffle(array) {
 var m = array.length, t, i;

 // While there remain elements to shuffle…
 while (m) {

   // Pick a remaining element…
   i = Math.floor(Math.random() * m--);

   // And swap it with the current element.
   t = array[m];
   array[m] = array[i];
   array[i] = t;
 }

 return array;
}
 $scope.shufflepool = shuffle(poolList);

 function checkwin(){
  if ($scope.shufflepool.length == 0){
    for (var i =0; i < $scope.myFruits.length; i++) {
      if (fruit.indexOf($scope.myFruits[i]) == -1){
        return false
      }
    }
    for (var i =0; i < $scope.myVeggies.length; i++){
      if (vegetables.indexOf($scope.myVeggies[i]) == -1){
        return false
      }
    }
    return true
  }
   }

 $scope.moveCenterFromLeft = function(idx){
  $scope.shufflepool.push($scope.myFruits[idx]);
  $scope.myFruits.splice(idx, 1);

 }
 $scope.moveCenterFromRight = function(idx){
  $scope.shufflepool.push($scope.myVeggies[idx]);
  $scope.myVeggies.splice(idx, 1);

 }

  $scope.moveRight = function(idx){
    $scope.myVeggies.push($scope.shufflepool[idx]);
    $scope.shufflepool.splice(idx, 1);
    if (checkwin()){
      alert("you won");
    };
  }


  $scope.moveLeft = function(idx){
    $scope.myFruits.push($scope.shufflepool[idx]);
    $scope.shufflepool.splice(idx, 1);
    if (checkwin()){
      alert("you won");
    };
  };
}]);

//debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruit.length);
console.log('Veggie count', vegetables.length);