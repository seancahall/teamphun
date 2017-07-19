(function() {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['authFactory', '$state', '$stateParams', 'localStorageService'];

    /* @ngInject */
    function LoginController(authFactory, $state, $stateParams, localStorageService) {
        var vm = this;
        vm.title = 'LoginController';

        //Functions
        vm.login = login;
        vm.logout = logout;

        activate();

        ////////////////

        function activate() {}

        function login() {
            authFactory
                .login(vm.loginUsername, vm.loginPassword)
                .then(function() {
                    $state.go('main.customerSelect');
                })
                .catch(function(error) {
                    console.log(error);
                    swal('Error!', 'Incorrect username or password.', 'error');
                });
        }

        function logout() {
            adminFactory.logout();

            $state.go('login');
        }

    }
})();
