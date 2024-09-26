(function() {
    'use strict';
  
    angular.module('restaurant')
    .service('MenuService', MenuService);
  
    MenuService.$inject = ['$http'];
    function MenuService($http) {
      var service = this;
      var userInfo = null;
  
      service.getMenuItem = function(shortName) {
        var url = "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/" + shortName[0].toUpperCase() + "/menu_items/" + (shortName.substring(1) - 1) + ".json";
        return $http.get(url).then(function(response) {
          return response.data;
        });
      };
  
      service.saveUserInfo = function(user) {
        userInfo = user;
      };
  
      service.getUserInfo = function() {
        return userInfo;
      };
    }
  })();
  