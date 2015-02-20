angular.module( 'FindMe.Color', [
  'ui.router'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'colors', {
    url: '/colors',
    controller: 'ColorsCtrl',
    templateUrl: 'color/colors.tpl.html'
  })
    .state('color', {
      url: '/color/:color',
      controller: 'ColorCtrl',
      templateUrl: 'color/color.tpl.html'
    });
})

.controller( 'ColorsCtrl', function ColorsController( $scope, Colors ) {
    $scope.colors = Colors;
})
.controller( 'ColorCtrl', function ColorController( $scope, $stateParams ) {
    $scope.color = $stateParams.color;
})

;

