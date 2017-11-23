

todosApp.factory("Task", function() {
    
    // Car Constructor
    function Task(name) {
        this.name = name;
        this.selected = false;
        
        }
    return Task;
  })