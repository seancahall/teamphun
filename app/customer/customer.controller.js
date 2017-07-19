(function() {
    'use strict';

    angular
        .module('app')
        .controller('CustomerController', CustomerController);

    CustomerController.$inject = ['customerFactory', '$state', '$stateParams'];

    /* @ngInject */
    function CustomerController(customerFactory, $state, $stateParams) {
        var vm = this;
        vm.title = 'CustomerController';

        //Properties
        vm.customers = [];
        vm.newCustomer = {
            firstName: '',
            lastName: '',
            business: '',
            phone: '',
            email: '',
            streetAddress: '',
            city: '',
            state: '',
            zipCode: '',
            note: ''
        }

        //Functions
        vm.getCustomer = getCustomer;
        vm.addCustomer = addCustomer;



        activate();

        ////////////////

        function activate() {
            getCustomer();
        }

        function getCustomer() {
            customerFactory
                .getAll()
                .then(function(response) {
                    vm.customers = response.data;
                })
        }

        // function getCustomerById() {

        // }

        function addCustomer() {
            customerFactory
                .create(vm.newCustomer)
                .then(function(response) {

                    $state.go('main.estimateSelect', {customerId:response.data.customerId});
                    // vm.customers.push(response.data);
                    // //swal('Sucess!', vm.newCustomer.business + ' has been saved', 'success');
                    // swal({
                    //         title: "Success!",
                    //         text: "Do you want to create an estimate for " + vm.newCustomer.business + "?",
                    //         type: "success",
                    //         html: true,
                    //         showCancelButton: true,
                    //         confirmButtonText: "Yes",
                    //         cancelButtonText: "No",
                    //         closeOnConfirm: false,
                    //         closeOnCancel: false
                    //     },
                    //     function(isConfirm) {
                    //         if (isConfirm) {
                    //             $state.go('main.estimateSelect', {customerId:response.data.customerId});
                    //         } else {
                    //             swal("Success!", "Please slect a new customer", "success");
                    //             $state.go('main.customerSelect');
                    //         }
                    //     });
                    // $state.go('main.estimateSelect');

                })
                .catch(function(error) {
                    swal('Error!', 'Customer was not added, please try again.', 'error');
                });
        }
    }
})();
