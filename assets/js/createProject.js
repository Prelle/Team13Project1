const submit = document.querySelector("#submit");
const projectName = document.querySelector("#projectName");
const description = document.querySelector("#projectDescription");
const error = document.querySelector('#errorText')



function loadNewPage(event) {
    console.log('log')
    event.preventDefault();
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
    loadNewPage(event);
} );




// Need to make a button (html, delete button) that needs an event listener, on click, remove project key(localstorage.removeitem)

