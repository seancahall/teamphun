(function() {
    'use strict';

    angular
        .module('app')
        .controller('EstimateController', EstimateController);

    EstimateController.$inject = ['estimateFactory', '$state', '$stateParams'];

    /* @ngInject */
    function EstimateController(estimateFactory, $state, $stateParams) {
        var vm = this;
        vm.title = 'EstimateController';

        //Properties
        vm.estimates = [];
        vm.customer = [];
        vm.estimatesSelected = [];
        vm.date = new Date();

        //Functions
        vm.getSelectedCustomer = getSelectedCustomer;
 
        activate();

        ////////////////

        function activate() {
            //getEstimate();
            getSelectedCustomer();
            //  getSelectedEstimate();


        }

        // grabing customer id from customer select and making the data avaliable to estimate select
        function getSelectedCustomer() {
            if($stateParams.customerId) {
            estimateFactory
                .getCustomerById($stateParams.customerId)
                .then(function(response) {
                    vm.customer = response;
                }, function(error) {
                    console.log(error);
                })
            }
        }

    }
})();
