(function() {
    'use strict';
  
    angular.module('restaurant')
    .controller('SignupController', SignupController);
  
    SignupController.$inject = ['MenuService'];
    function SignupController(MenuService) {
      var signupCtrl = this;
      signupCtrl.user = {};
      signupCtrl.saved = false;
      signupCtrl.invalidDish = false;
  
      signupCtrl.submit = function() {
        MenuService.getMenuItem(signupCtrl.user.favoriteDish)
        .then(function(response) {
          if (response === null) {
            signupCtrl.invalidDish = true;
          } else {
            signupCtrl.invalidDish = false;
            // Save the user's data
            MenuService.saveUserInfo(signupCtrl.user);
            signupCtrl.saved = true;
          }
        });
      };
    }
  })();
  