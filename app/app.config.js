angular.module("Bangazon").config(function ($routeProvider) {

    $routeProvider.
    when("/partials/Products", {
            templateUrl: "app/partials/Products.html",
            controller: "ProductController",
        })
        .when('', {
            templateUrl: '',
            controller: '',
        })
        .when('', {
            templateUrl: '',
            controller: '',
        })
})