function createProject(name, description) {
    if(localStorage.getItem('project')){
        return 'Project already made';
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

function deleteProject() {
    const project = readProject();

    if(!project) {
        console.log('No project to delete');
        return;
    }

    localStorage.removeItem('project');
}

// For debugging purposes only
function createTestProject() {
    createProject('Test project', 'This is a sample project description. It can be very, very long.');
}