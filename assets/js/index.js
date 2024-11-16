const emptyDiv = document.body.querySelector('#emptyDiv');
const projectDiv = document.body.querySelector('#projectDiv');
const nameElement = projectDiv.querySelector('#name');
const descriptionElement = projectDiv.querySelector('#description');
const createProjectButton = emptyDiv.querySelector('#createProject');

function init() {
const project = readProject();

    if (project) {
        nameElement.textContent = project.name;
        console.log(renderHtml(project.description));
        descriptionElement.innerHTML = renderHtml(project.description);
        emptyDiv.classList.add('d-none');
        projectDiv.classList.remove('d-none');
    } else {
        createProjectButton.addEventListener('click',createProject);
    }
}
function createProject(event){
    window.location = 'createProject.html';
}

init();