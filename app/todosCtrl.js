
todosApp.controller("todosCtrl", function ($scope,Task,tasks, $log, $http, $location) {
    tasks=[]; 
    $scope.tasks=tasks;
    
    $scope.funcadd = function() {
        tasks.push(new Task($scope.name));
        $scope.name="";
     }

});