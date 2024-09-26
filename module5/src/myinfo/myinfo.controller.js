(function() {
    'use strict';
  
    angular.module('restaurant')
    .controller('MyInfoController', MyInfoController);
  
    MyInfoController.$inject = ['MenuService'];
    function MyInfoController(MenuService) {
      var myinfoCtrl = this;
      myinfoCtrl.user = MenuService.getUserInfo();
  
      if (myinfoCtrl.user) {
        MenuService.getMenuItem(myinfoCtrl.user.favoriteDish)
        .then(function(response) {
          myinfoCtrl.menuItem = response;
        });
      }
    }
  })();
  