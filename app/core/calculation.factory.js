(function() {
    'use strict';

    angular
        .module('app')
        .factory('calculationFactory', calculationFactory);

    calculationFactory.$inject = ['$http', 'localStorageService', 'apiUrl'];

    /* @ngInject */
    function calculationFactory($http, localStorageService, apiUrl) {
        var service = {
            func: func
        };
        return service;

        ////////////////

        function func() {}
    }
})();
