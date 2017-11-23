
todosApp.controller("todosCtrl", function ($scope,Task,tasks, $log, $http, $location) {
    tasks=[{"name":"chen"},{"name":"shalev"}]; 
    $scope.tasks=tasks;
    
    $scope.funcadd = function() {
        tasks.push(new Task("Susita"));
     }
    
})