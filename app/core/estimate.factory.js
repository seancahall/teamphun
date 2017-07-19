(function() {
    'use strict';

    angular
        .module('app')
        .factory('estimateFactory', estimateFactory);

    estimateFactory.$inject = ['$http', 'localStorageService', 'apiUrl', '$q'];

    /* @ngInject */
    function estimateFactory($http, localStorageService, apiUrl, $q) {
        var service = {
            getAll: getAll,
            getById: getById,
            create: create,
            update: update,
            remove: remove,
            getCustomerById: getCustomerById
        };
        return service;

        ////////////////

        function getAll() {
            return $http.get(apiUrl + '/estimates');
        }

        function getById(id) {
            return $http.get(apiUrl + '/estimates/' + id);
        }

        function getCustomerById(id) {

            var defer = $q.defer();

            $http({
                method:'GET',
                url: apiUrl + '/customers/' + id

            })

            .then(function(response) {

                if (typeof response.data === "object") {

                    defer.resolve(response.data);
                
                } else {

                    defer.reject(response);
                }
    
            },

            function(error) {

                defer.reject(error);

            });

            return defer.promise;

        }

        function create(obj) {
            return $http.post(apiUrl + '/estimates', obj);
        }

        function update(id, obj) {
            return $http.put(apiUrl + '/estimates/' + id, obj);
        }

        function remove(id) {
            return $http.delete(apiUrl + '/estimates/' + id);
        }
    }
})();
