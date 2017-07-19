(function() {
    'use strict';

    angular
        .module('app')
        .controller('PricingController', PricingController);

    PricingController.$inject = ['pricingFactory', '$state', '$stateParams', 'localStorageService'];

    /* @ngInject */
    function PricingController(pricingFactory, $state, $stateParams, localStorageService) {
        var vm = this;
        vm.title = 'PricingController';

        activate();

        ////////////////

        function activate() {}
    }
})();
