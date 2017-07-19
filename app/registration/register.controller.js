(function() {
    'use strict';

    angular
        .module('app')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['authFactory', '$state', '$stateParams'];

    /* @ngInject */
    function RegisterController(authFactory, $state, $stateParams) {
        var vm = this;
        vm.title = 'RegisterController';

        //Properties

        vm.registration = {
            username: '',
            emailAddress: '',
            password: '',
            confirmPassword: ''
        }

        //Functions

        vm.register = register;


        activate();

        ////////////////

        function activate() {}


        function register() {
            authFactory
                .register(vm.registration)
                .then(function(response) {

                    swal('Sucessful registration!', vm.registration.username + ' can now login.', 'success');

                    //clears form to add another user
                    vm.registration = {
                        username: '',
                        emailAddress: '',
                        password: '',
                        confirmPassword: ''
                    }

                })
                .catch(function(error) {
                    swal('Error!', 'Bad registration, user ' + vm.registration.username + ' is not registered.', 'error');
                });
        }
    }
})();
