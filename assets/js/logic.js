function createProject(name, description) {
    if(localStorage.getItem('project')){
        console.log("Project Already Made");
        return
    }

    const project = {
        name,
        description,
        tasks: []
    };

    localStorage.setItem('project',JSON.stringify(project));

}

function readProject(){
    return JSON.parse(localStorage.getItem("project"));
}

function markTaskComplete(taskId) {
    const project = readProject();

    if (!project) {
        return 'No project to update';
    }

    if (project.tasks.length <= taskId) {
        return "Specified task doesn't exist";
    }

    project.tasks[taskId].isComplete = true;

    localStorage.setItem('project', JSON.stringify(project));
}

function addTask(name) {
    const project = readProject();

    if (!project) {
        return 'No project to update';
    }

    const newTask = {
        name,
        isComplete: false
    };

    project.tasks.push(newTask);

    localStorage.setItem('project', JSON.stringify(project));
}

