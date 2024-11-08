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

