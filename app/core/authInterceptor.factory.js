(function() {
    'use strict';

    angular
        .module('app')
        .factory('authInterceptorService', authInterceptorService);

    authInterceptorService.$inject = ['$q', '$location', 'localStorageService'];

    /* @ngInject */
    function authInterceptorService($q, $location, localStorageService) {
        var service = {
            request: request,
            responseError: responseError
        };
        return service;

        ////////////////

        function request(httpRequest) {
            httpRequest.headers = httpRequest.headers || {};

            var authData = localStorageService.get('authorizationData');

            if (authData) {
                httpRequest.headers.Authorization = 'Bearer' + authData.token;
            }

            return httpRequest;
        }

        function responseError(httpResponse) {
            if (httpResponse.status === 401) {
                swal('Error!', 'You need to register or login to use that function', 'error');
                $location.path('/login');
            }
            return $q.reject(httpResponse);

        }
    }
})();
