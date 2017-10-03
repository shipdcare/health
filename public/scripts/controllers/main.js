'use strict'
angular.module('healthApp')
.controller('healthCtrl',function($scope,dataService){
    dataService.getAppointments(function(response){
        console.log(response.data);
        $scope.appointments=response.data;
    });

    $scope.appointment = {
        id: "",
        name: "",
        phone: "",
        time: ""
    }
    $scope.addAppointment = function(appointment){
        $scope.appointments.unshift(appointment);
        $scope.appointment= {
            id: "",
            name: "",
            phone: "",
            time: ""
        };
        $scope.appointmentForm.$setPristine();
        $scope.appointmentForm.$error = {};
    }
})