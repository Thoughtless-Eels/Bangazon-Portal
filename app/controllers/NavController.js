angular.module("Bangazon")
    .controller("NavController", function ($scope, $location) {
    
    $scope.toDepartments = function() {
        $location.url("/partials/Departments")
    }

    $scope.toEmployees = function() {
        $location.url("/partials/Employees")
    }

    $scope.toCustomers = function() {
        $location.url("/partials/Customers")
    }

    $scope.toProducts = function() {
        $location.url("/partials/Products")
    }

    $scope.toOrders = function() {
        $location.url("/partials/Orders")
    }

    $scope.toComputers = function() {
        $location.url("/partials/Computers")
    }

    $scope.toTrainingPrograms = function() {
        $location.url("/partials/TrainingPrograms")
    }

    $scope.toProductTypes = function() {
        $location.url("/partials/ProductTypes")
    }

    $scope.toPaymentTypes = function() {
        $location.url("/partials/PaymentTypes")
    }
        


})
