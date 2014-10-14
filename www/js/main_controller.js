(function(){
  'use strict';

  angular.module('bc-calc')
  .controller('MainCtrl', ['$scope', function($scope){
    $scope.memory = '';

    $scope.clear = function(){
      $scope.display = '0';
    };

    $scope.number = function(num){
      num = num.toString();
      if(num === '.' && $scope.display.indexOf('.') > -1){return;}
      if($scope.display === '0' && num !== '.'){
        $scope.display = num;
      }else{
        $scope.display += num;
      }
    };

    $scope.clear();
  }]);
})();
