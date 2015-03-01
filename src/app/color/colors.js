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

/**
 * This directive helps our list of colors expand to the height of the viewport.
 * This directive will set the height of an element to: viewport height / number set to equal-height attribute.
 */
.directive('equalHeight', function equalHeightDirective(){
  return function (scope, elem, attr) {
    attr.$observe('equalHeight', function(numberOfChildren){
      elem[0].style.height = (document.documentElement.clientHeight / numberOfChildren) + 'px';
    });
  };
})

;

