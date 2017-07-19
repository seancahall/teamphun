(function() {
    'use strict';

    angular
        .module('app')
        .factory('adminFactory', adminFactory);

    adminFactory.$inject = ['$http', 'localStorageService', 'apiUrl'];

    /* @ngInject */
    function adminFactory($http, localStorageService, apiUrl) {
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
