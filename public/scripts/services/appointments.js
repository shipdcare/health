'use strict'

angular.module('healthApp')
.service('dataService',function($http){
    this.getAppointments=function(callback){
        $http.get('mock/appointments.json')
        .then(callback)
    };
})