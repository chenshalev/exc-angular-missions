

todosApp.factory("Task", function() {
    
    // Car Constructor
    function Task(name) {
        this.name = name;
        this.accomplished = false;
        
        }
    return Task;
  })