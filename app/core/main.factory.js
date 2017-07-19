(function() {
    'use strict';

    angular
        .module('app')
        .factory('mainFactory', mainFactory);

    mainFactory.$inject = ['$http', 'localStorageService', 'apiUrl'];

    /* @ngInject */
    function mainFactory($http, localStorageService, apiUrl) {
        var service = {
            logout: logout

        };
        return service;

        ////////////////

        function logout() {
            localStorageService.remove("authorizationData");

            service.isLoggedIn = false;
            service.username = "";
        }

    }
})();
