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