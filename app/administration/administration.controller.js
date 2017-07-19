(function() {
    'use strict';

    angular
        .module('app')
        .controller('AdminController', AdminController);

    AdminController.$inject = ['adminFactory', '$state', '$stateParams'];

    /* @ngInject */
    function AdminController(adminFactory, $state, $stateParams) {
        var vm = this;
        vm.title = 'AdminController';

        //Properties

        //Functions
        vm.logout = logout;

        activate();

        ////////////////

        function activate() {}

        function logout() {
            adminFactory.logout();

            $state.go('login');
        }
    }
})();
