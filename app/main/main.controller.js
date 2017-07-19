(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    MainController.$inject = ['mainFactory', '$state', '$stateParams', 'localStorageService'];

    /* @ngInject */
    function MainController(mainFactory, $state, $stateParams, localStorageService) {
        var vm = this;
        vm.title = 'MainController';

        //Functions
        vm.logout = logout;

        activate();

        ////////////////

        function activate() {

        }

        function logout() {
            mainFactory.logout();

            $state.go('login');
        }

    }
})();
