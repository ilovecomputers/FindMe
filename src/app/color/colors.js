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
.factory('Colors', function(){
  return [
    {color: 'red', hex: randomColor({ luminosity: 'bright', hue: 'red' })},
    {color: 'orange', hex: randomColor({ luminosity: 'bright', hue: 'orange' })},
    {color: 'yellow', hex: randomColor({ luminosity: 'bright', hue: 'yellow' })},
    {color: 'green', hex: randomColor({ luminosity: 'bright', hue: 'green' })},
    {color: 'blue', hex: randomColor({ luminosity: 'bright', hue: 'blue' })},
    {color: 'purple', hex: randomColor({ luminosity: 'bright', hue: 'purple' })},
    {color: 'pink', hex: randomColor({ luminosity: 'bright', hue: 'pink' })}
  ];
})
.controller( 'ColorsCtrl', function ColorsController( $scope, Colors ) {
    $scope.colors = Colors;
})
.controller( 'ColorCtrl', function ColorController( $scope, $stateParams ) {
    $scope.color = $stateParams.color;
})

;

