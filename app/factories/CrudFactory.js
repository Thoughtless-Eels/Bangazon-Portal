// Imports
angular.module("Bangazon")
    // naming the factory, passing in appropriate angular methods
    .factory("CrudFactory", function ($http, $timeout, $location, $route) {
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
                value: function (urlString, JSONOBJ) {
                    return $http.post(urlString, JSONOBJ).then(response => {
                    // CODE  GOES HERE
                    return response
                    })
                }
            },
            "PUT": {
                value: function (urlString, JSONOBJ) {
                    return $http({
                        method: "PUT",
                        url: `${urlString}`,
                        data: JSONOBJ
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
                