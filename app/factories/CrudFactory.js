// Imports
angular.module("Bangazon")
    // naming the factory, passing in appropriate angular methods
    .factory("CrudFactory", function ($http, $timeout, $location, $route) {
            const bangazonURL = "http://bangazon.com:5000/api"
            return Object.create(null, {
                    "cache": {
                        value: null,
                        writable: true
                    },
                    "GET": {
                        value: function () {
                            return $http({
                                method: "GET",
                                url: `${bangazonURL}` //fill in this url
                            }).then(response => {
                                // CODE  GOES HERE
                                return this.cache
                            })
                        }
                    },
                    "POST": {
                        value: function () {
                            return $http({
                                    method: "POST",
                                    url: `${bangazonURL}/` //fill in this url,
                                }
                            }).then(response => {
                            // CODE  GOES HERE
                            return this.cache
                        }).catch(function (error) {
                            window.alert("Couldn't fetch Data")
                        })
                    })
            }
        },
        "PUT": {
            value: function () {
                return $http({
                    method: "PUT",
                    url: `${bangazonURL}`,
                    data: {}
                }).then(response => {
                    // CODE  GOES HERE
                    return this.cache
                })
            })
    },
    "DELETE": {
        value: function () {
                    return $http({
                        method: "PUT",
                        url: `${bangazonURL}`,
                        data: {}
                    }).then(response => {
                        // CODE  GOES HERE
                        return this.cache
                    })
                })