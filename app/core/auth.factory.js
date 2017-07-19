(function() {
    'use strict';

    angular
        .module('app')
        .factory('authFactory', authFactory);

    authFactory.$inject = ['$http', 'localStorageService', 'apiUrl'];

    /* @ngInject */
    function authFactory($http, localStorageService, apiUrl) {
        var service = {
            initialize: initialize,
            logout: logout,
            register: register,
            login: login,
            isLoggedIn: false,
            username: ""

        };
        return service;

        ////////////////

        function register(registrationData) {
            return $http.post(apiUrl + '/users/register', registrationData)
        }

        function login(username, password) {

            var data = "grant_type=password" +
                "&username=" + username +
                "&password=" + password;
            //logs out user so that you can log in using new credentials
            logout();

            return $http
                .post(apiUrl + "/users/login", data, {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
                .then(function(response) {
                    localStorageService.set("authorizationData", {
                        token: response.data.access_token,
                        username: username
                    });

                    service.isLoggedIn = true;
                    service.username = username;

                    return response.data;

                });
        }

        function initialize() {
            var authorizationData = localStorageService.get("authorizationData");

            service.isLoggedIn = authorizationData == true;
            service.username = authorizationData.username;
        }

        function logout() {
            localStorageService.remove("authorizationData");

            service.isLoggedIn = false;
            service.username = "";
        }


    }
})();
