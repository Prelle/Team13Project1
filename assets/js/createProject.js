const submit = document.querySelector("#submit");
const projectName = document.querySelector("#projectName");
const description = document.querySelector("#projectDescription");
const error = document.querySelector('#errorText')

if(readProject()!== null) {
    loadNewPage()
}

function loadNewPage() {
    console.log('log')
    window.location = "project.html"; 
};


submit.addEventListener("click", function(event){
    event.preventDefault();
    const name = projectName.value.trim()
    const projectDescription = description.value.trim()
    if (name === ""){
        error.textContent = 'Please Enter Project Name'
        error.classList.remove('d-none')
        return
    }
    if (projectDescription === ""){
        error.textContent = 'Please Enter Project Description'
        error.classList.remove('d-none')
        return
    }
    createProject(name, projectDescription);
    loadNewPage();
} );





