angular.module("Bangazon")
.controller("WelcomeController", function ($scope, $location, CrudFactory) {
    CrudFactory.GET()
})