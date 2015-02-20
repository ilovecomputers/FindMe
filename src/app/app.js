angular.module( 'FindMe', [
  'templates-app',
  'templates-common',
  'FindMe.Color',
  'ui.router'
])

.config( function myAppConfig ( $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/colors' );
})

.controller( 'AppCtrl', function AppCtrl ( $scope ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data ) && angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle;
    }
  });
})

;

