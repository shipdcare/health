angular.module('healthApp')
.directive('appointments',function(){
    return{
        templateUrl:'/templates/appointments.html',
        controller:'healthCtrl'
    }
})