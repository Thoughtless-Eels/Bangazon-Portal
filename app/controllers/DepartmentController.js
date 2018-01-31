angular.module("Bangazon")
.controller("DepartmentController", function ($scope, $location, CrudFactory) {
   
    
    $scope.makeDept = function (name, budget) {
        let url = "http://bangazon.com/api/Department"
        let newBudge = parseInt(budget)
        const newDept = {
            "Name": name,
            "Budget": newBudge
        }

        CrudFactory.POST(url, newDept).then(results => {
            console.log(results)
        })
    }
})