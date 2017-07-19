(function() {
    'use strict';

    angular
        .module('app')
        .controller('CalculationController', CalculationController);

    CalculationController.$inject = ['calculationFactory', '$state', '$stateParams'];

    /* @ngInject */
    function CalculationController(calculationFactory, $state, $stateParams) {
        var vm = this;
        vm.title = 'CalculationController';

        //Properties

        //Functions

        activate();

        ////////////////

        function activate() {}
    }
})();
