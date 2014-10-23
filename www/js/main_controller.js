(function(){
  'use strict';

  angular.module('bc-calc')
  .controller('MainCtrl', ['$scope', function($scope){
    $scope.memory = '';

    $scope.clear = function(){
      if($scope.display === '0' && $scope.memory === '0'){return;}
      $scope.secondClear = !!!$scope.secondClear;

      $scope.display = '0';
      if($scope.secondClear === true){
        $scope.memory = '0';
        $scope.sym = '';
      }
    };

    $scope.calc = function(oldSym, newSym){
      console.log($scope.display);
      if($scope.display === '0'){return;}

      if(!oldSym){
        $scope.memory = $scope.display;
        $scope.display = '0';
        return;
        }

      var result,
          val1 = $scope.memory,
          val2 = $scope.display;

      switch(oldSym){
        case '+':
          result = (val1 * 1) + (val2 * 1);
          break;
        case '-':
          result = (val1 * 1) - (val2 * 1);
          break;
        case '*':
          result = (val1 * 1) * (val2 * 1);
          break;
        case '/':
          result = (val1 * 1) / (val2 * 1);
          break;
      }

      $scope.memory = result;
      $scope.display = '0';
    };

    $scope.number = function(num){
      $scope.secondClear = true;
      num = num.toString();
      if(num === '.' && $scope.display.indexOf('.') > -1){return;}
      if($scope.display === '0' && num !== '.'){
        $scope.display = num;
      }else{
        $scope.display += num;
      }
    };

    $scope.symbol = function(sym){
      var oldSym = $scope.sym;
      if(sym === '='){
        $scope.sym = '';
      }else{
        $scope.sym = sym;
      }
      $scope.calc(oldSym, sym);
    };

    $scope.clear();
  }]);
})();
