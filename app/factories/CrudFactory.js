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
                value: function (urlString) {
                    return $http({
                        method: "GET",
                        url: `${urlString}` //fill in this url
                    }).then(response => {
                        // CODE  GOES HERE
                        return response
                    })
                }
            },
            "POST": {
                value: function (urlString) {
                    return $http({
                        method: "POST",
                        url: `${urlString}/` //fill in this url
                    
                    }).then(response => {
                    // CODE  GOES HERE
                    return response
                }).catch(function (error) {
                    window.alert("Couldn't fetch Data")
                })
            }},
            "PUT": {
                value: function (urlString, jSawnObj) {
                    return $http({
                        method: "PUT",
                        url: `${urlString}`,
                        data: {jSawnObj}
                    }).then(response => {
                        // CODE  GOES HERE
                        return response
                    })
                }
            },
            "DELETE": {
                value: function (urlString) {
                        return $http({
                            method: "PUT",
                            url: `${bangazonURL}`,
                            data: {}
                        }).then(response => {
                            // CODE  GOES HERE
                            return response
                        })
                    }
                }
            }
        )
    }
)
                