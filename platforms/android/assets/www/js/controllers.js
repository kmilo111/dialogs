angular.module('app.controllers', ['ngCordova'])
  
.controller('pageCtrl', ['$scope', '$stateParams', '$cordovaDialogs',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaDialogs) {
    $scope.getDialogAlert = function(){
		$cordovaDialogs.alert('El usuario se informo', 'informacion', 'ok')
		    .then(function() {
		      localStorage.setItem('alert','el usuario se informo');
		    });
		};

	$scope.getDialogConfirm = function(){
		$cordovaDialogs.confirm('El usuario selecciona la opcion', 'info', ['si','no'])
		    .then(function(buttonIndex) {
		      // no button = 0, 'OK' = 1, 'Cancel' = 2
		      var btnIndex = buttonIndex;
              localStorage.setItem('confirm', 'selecciona'+ btnIndex);
		      console.log(btnIndex);
    		});
	};

  
     $scope.getDialogPromtp = function(){
     	$cordovaDialogs.prompt('Este es el mensaje', 'info', ['aceptar','cancelar'], 'Nombre completo')
		    .then(function(result) {
		      var input = result.input1;
		      // no button = 0, 'OK' = 1, 'Cancel' = 2
		      var btnIndex = result.buttonIndex;
               localStorage.setItem('prompt','El nombre del usuario: '+input+' ' +btnIndex);
		      console.log(input, btnIndex);
    	});
     };

}])
 