(function() {
    'use strict';

    angular
        .module('app')
        .factory('pricingFactory', pricingFactory);

    pricingFactory.$inject = ['$http', 'localStorageService', 'apiUrl'];

    /* @ngInject */
    function pricingFactory($http, localStorageService, apiUrl) {
        var service = {
            func: func
        };
        return service;

        ////////////////

        function func() {}
    }
})();
