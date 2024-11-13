const submit = document.querySelector("#submit");
const projectName = document.querySelector("#projectName");
const description = document.querySelector("#projectDescription");


function loadNewPage(event) {
    console.log('log')
    event.preventDefault();
    window.location = "project.html"; 
};


submit.addEventListener("click", function(event){
    event.preventDefault();
    createProject(projectName.value,description.value);
    loadNewPage(event);
} );
// Need to make a button (html, delete button) that needs an event listener, on click, remove project key(localstorage.removeitem)

