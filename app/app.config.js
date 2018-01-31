angular.module("Bangazon").config(function ($routeProvider) {

    $routeProvider.
    when("/partials/Products", {
        templateUrl: "app/partials/Products.html",
        controller: "ProductController",
    })
    .when('/partials/Computers', {
        templateUrl: "app/partials/Computers.html",
        controller: 'ComputerController',
    })
    .when('/partials/Employees', {
        templateUrl: "app/partials/Employees.html",
        controller: 'EmployeeController',
    })
    .when('/partials/Customers', {
        templateUrl: "app/partials/Customers.html",
        controller: 'CustomerController',
    })
    .when('/partials/Orders', {
        templateUrl: "app/partials/Orders.html",
        controller: 'OrderController',
    })
    .when('/partials/PaymentTypes', {
        templateUrl: "app/partials/PaymentTypes.html",
        controller: 'PaymentTypeController',
    })
    .when('/partials/ProductTypes', {
        templateUrl: "app/partials/ProductTypes.html",
        controller: 'ProductTypeController',
    })
    .when('/partials/TrainingPrograms', {
        templateUrl: "app/partials/TrainingPrograms.html",
        controller: 'TrainingProgramController',
    })
    .otherwise("/partials/Welcome")
})