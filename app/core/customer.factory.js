(function() {
    'use strict';

    angular
        .module('app')
        .factory('customerFactory', customerFactory);

    customerFactory.$inject = ['$http', 'localStorageService', 'apiUrl'];

    /* @ngInject */
    function customerFactory($http, localStorageService, apiUrl) {
        var service = {
            getAll: getAll,
            getById: getById,
            create: create,
            update: update,
            remove: remove
        };
        return service;

        ////////////////

        //http.verb(<url>, <data>, [<options>]);

        function getAll() {
            return $http.get(apiUrl + '/customers');
        }

        function getById(id) {
            return $http.get(apiUrl + '/customers/' + id);
        }

        function create(obj) {
            return $http.post(apiUrl + '/customers', obj);
        }

        function update(id, obj) {
            return $http.put(apiUrl + '/customers/' + id, obj);
        }

        function remove(id) {
            return $http.delete(apiUrl + '/customers/' + id);
        }

    }
})();
