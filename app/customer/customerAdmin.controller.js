(function() {
    'use strict';

    angular
        .module('app')
        .controller('CustomerAdminController', CustomerAdminController);

    CustomerAdminController.$inject = ['customerFactory', '$state', '$stateParams'];

    /* @ngInject */
    function CustomerAdminController(customerFactory, $state, $stateParams) {
        var vm = this;
        vm.title = 'CustomerAdminController';

        //Properties

        vm.customers = [];
        vm.customerSelected = [];
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
        vm.updateCustomer = updateCustomer;
        vm.deleteCustomer = deleteCustomer;
        //vm.populateCustomerData = populateCustomerData;
        vm.getSelectedCustomer = getSelectedCustomer;

        activate();

        ////////////////

        function activate() {
            getCustomer();
            getSelectedCustomer()
        }

        function getCustomer() {
            customerFactory
                .getAll()
                .then(function(response) {
                    vm.customers = response.data;
                })
        }

        function getSelectedCustomer() {
            customerFactory
                .getById($stateParams.CustomerId)
                .then(function(response) {
                    vm.customerSelected = response.data;

                })
                .catch(function(error) {

                })
        }

        function addCustomer() {
            customerFactory
                .create(vm.newCustomer)
                .then(function(response) {
                    vm.customers.push(response.data);

                    swal('Sucess!!', vm.newCustomer.firstName + ' ' + vm.newCustomer.lastName + ' has been saved', 'success');

                    //clears form so you can add another customer
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
                })
                .catch(function(error) {
                    swal('Error!', 'Customer was not added, please try again.', 'error');
                });
        }
        //this is an attempt to populate the customer form to be edited
        // function populateCustomerData(customer) {

        //     vm.newCustomer.business = customer.business;
        //     vm.newCustomer.firstName = customer.firstName;
        //     vm.newCustomer.lastName = customer.lastName;
        //     vm.newCustomer.phone = customer.phone;
        //     vm.newCustomer.email = customer.email;
        //     vm.newCustomer.streetAddress = customer.streetAddress;
        //     vm.newCustomer.city = customer.city;
        //     vm.newCustomer.state = customer.state;
        //     vm.newCustomer.zipCode = customer.zipCode;
        //     vm.newCustomer.note = customer.note;
        // }




        //not sure if this update method is working properly at this time
        function updateCustomer(customerId) {
            customerFactory
                .update(customerId)
                .then(function(response) {
                    vm.customers.push(response.data);
                    swal('Sucess!!', vm.newCustomer.firstName + ' ' + vm.newCustomer.lastName + ' has been saved', 'success');
                })
                .catch(function(error) {
                    swal('Error!', 'Customer record was not updated, please try again.', 'error');
                });
        }


        function deleteCustomer(customerID) {

            swal({
                    title: "Are you sure?",
                    text: "Your will not be able to recover this customer's record!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Yes, delete it!",
                    closeOnConfirm: false
                },
                function() {
                    customerFactory
                        .remove(customerID)
                        .then(function(response) {
                            swal('Sucess!!', 'The customer\'s record has been deleted', 'success');
                            //pushs the response to the page without refreshing
                            activate();
                        }).catch(function(error) {
                            swal('Error!', 'The customer\'s record was not deleted', 'error');
                        });
                });
        }
    }
})();
