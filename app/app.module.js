(function() {
    'use strict';

    angular
        .module('app', ['ui.router', 'LocalStorageModule', 'oitozero.ngSweetAlert', 'mgo-angular-wizard', 'siyfion.sfTypeahead'])
         .value('apiUrl', 'http://localhost:11111/api')
       // .value('apiUrl', 'http://teamphun.azurewebsites.net/api')
        .config(function($stateProvider, $urlRouterProvider, $httpProvider) {

            $httpProvider.interceptors.push('authInterceptorService');

            //default URL to login state
            $urlRouterProvider.otherwise('login');

            //links to different login states
            $stateProvider
                .state('login', {
                    url: '/login',
                    templateUrl: 'app/login/login.html',
                    controller: 'LoginController',
                    controllerAs: 'loginCtrl'
                })
                .state('main', {
                    url: '/main',
                    templateUrl: 'app/main/main.html',
                    controller: 'MainController',
                    controllerAs: 'mainCtrl',
                    secure: true
                })
                //States to add or updae a quote
                .state('main.customerSelect', {
                    url: '/customerSelect',
                    templateUrl: 'app/customer/customerSelect.html',
                    parent: 'main',
                    controller: 'CustomerController',
                    controllerAs: 'customerCtrl',
                    secure: true
                })
                .state('main.customerAddNew', {
                    url: '/customerAddNew',
                    templateUrl: 'app/customer/customerAddNew.html',
                    parent: 'main',
                    controller: 'CustomerController',
                    controllerAs: 'customerCtrl',
                    secure: true
                })
                .state('main.calculation', {
                    url: '/calculation',
                    templateUrl: 'app/calculation/calculation.html',
                    parent: 'main',
                    controller: 'CalculationController',
                    controllerAs: 'calculationCtrl',
                    secure: true
                })
                .state('main.estimateSelect', {
                    url: '/estimateSelect',
                    templateUrl: 'app/estimate/estimateSelect.html',
                    parent: 'main',
                    controller: 'EstimateController',
                    controllerAs: 'vm',
                    params: {customerId: null},
                    secure: true
                })
                .state('main.estimateUpdate', {
                    url: '/estimateUpdate/:CustomerId/:EstimateId',
                    templateUrl: 'app/estimate/estimateUpdate.html',
                    parent: 'main',
                    controller: 'EstimateController',
                    controllerAs: 'estimateCtrl',
                    secure: true
                })
                .state('main.estimateLineItems', {
                    url: '/estimateLineItems',
                    templateUrl: 'app/estimate/estimateLineItems.html',
                    parent: 'main',
                    controller: 'EstimateController',
                    controllerAs: 'vm',
                    params: {customerId: null},
                    secure: true
                })
                .state('main.estimateOverview', {
                    url: '/estimateOverview',
                    templateUrl: 'app/estimate/estimateOverview.html',
                    parent: 'main',
                    controller: 'EstimateController',
                    controllerAs: 'estimateCtrl',
                    secure: true
                })
                //states used for management of data
                .state('admin', {
                    url: '/administration',
                    templateUrl: 'app/administration/administration.html',
                    controller: 'AdminController',
                    controllerAs: 'adminCtrl',
                    secure: true
                })
                //manage users access to application
                .state('admin.registration', {
                    url: '/register',
                    templateUrl: 'app/registration/registration.html',
                    parent: 'admin',
                    controller: 'RegisterController',
                    controllerAs: 'registerCtrl',
                    secure: true
                })
                .state('admin.registrationManager', {
                    url: '/registerManager',
                    templateUrl: 'app/registration/registrationManager.html',
                    parent: 'admin',
                    controller: 'RegisterController',
                    controllerAs: 'registerCtrl',
                    secure: true
                })

            //manage customers
            .state('admin.customer', {
                    url: '/customer',
                    templateUrl: 'app/customer/customer.html',
                    parent: 'admin',
                    controller: 'CustomerAdminController',
                    controllerAs: 'customerAdminCtrl',
                    secure: true
                })
                .state('admin.customerAdminAddNew', {
                    url: '/customerAdminAddNew',
                    templateUrl: 'app/customer/customerAdminAddNew.html',
                    parent: 'admin',
                    controller: 'CustomerAdminController',
                    controllerAs: 'customerAdminCtrl',
                    secure: true
                })
                .state('admin.customerManager', {
                    url: '/customerManager',
                    templateUrl: 'app/customer/customerManager.html',
                    parent: 'admin',
                    controller: 'CustomerAdminController',
                    controllerAs: 'customerAdminCtrl',
                    secure: true
                })
                .state('admin.customerUpdate', {
                    url: '/customerUpdate/:CustomerId',
                    templateUrl: 'app/customer/customerUpdate.html',
                    parent: 'admin',
                    controller: 'CustomerAdminController',
                    controllerAs: 'customerAdminCtrl',
                    secure: true
                })
                .state('admin.estimateManager', {
                    url: '/estimateManager',
                    templateUrl: 'app/estimate/estimateManager.html',
                    parent: 'admin',
                    controller: 'EstimateController',
                    controllerAs: 'estimateCtrl',
                    secure: true
                })

            //manage pricing
            .state('admin.pricing', {
                url: '/pricing',
                templateUrl: 'app/pricing/pricing.html',
                parent: 'admin',
                controller: 'PricingController',
                controllerAs: 'pricingCtrl',
                secure: true
            });
        });
})();
