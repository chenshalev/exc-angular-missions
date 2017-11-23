
todosApp.factory("tasks", function() {
    var tasks = [];

    function getAll() {
        return tasks;
    }

 
    function addTask(task) {
        tasks.push(task);
    }
    function settasks() {
        tasks = [];
    }

 
    return {
        getAll: getAll,
        addTask: addTask
    }
})

