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
    createProject('Test project', 'This is a sample project description. It can be very, very long. Incididunt commodo fugiat culpa ex. Culpa in amet magna ex culpa aute ex in deserunt. Esse proident deserunt deserunt laborum proident amet cillum esse. Magna sunt est proident duis. Ullamco ipsum id id exercitation velit nostrud minim. Sunt dolore anim minim nostrud.\nDolore deserunt deserunt duis laborum. Aute dolore aliquip irure ut amet voluptate eu anim culpa nulla exercitation fugiat. Consectetur exercitation irure ullamco in voluptate. Voluptate officia dolor ad tempor ea ullamco ut ut consectetur occaecat tempor.\nLabore sint eiusmod reprehenderit voluptate aliqua incididunt minim commodo ut veniam et eiusmod amet ex. Veniam nulla aliqua sit laboris commodo eiusmod incididunt Lorem. Do culpa laboris laborum reprehenderit excepteur reprehenderit nulla incididunt duis sit minim anim. Adipisicing ex cupidatat est laborum occaecat elit quis et exercitation do anim quis ea. Qui sint ex amet laboris reprehenderit sint laborum deserunt. Mollit id qui id sit cillum exercitation tempor fugiat est pariatur aliquip.');
}