const emptyDiv = document.body.querySelector('#emptyDiv');
const projectDiv = document.body.querySelector('#projectDiv');
const nameElement = projectDiv.querySelector('#name');
const descriptionElement = projectDiv.querySelector('#description');
const taskListElement = projectDiv.querySelector('#taskList');
const addTaskButton = projectDiv.querySelector('#addTask');
const deleteProjectButton = projectDiv.querySelector('#deleteProject');

// Modal elements
const confirmButton = document.querySelector('#confirm');
const cancelButton = document.querySelector('#cancel');
const errorText = document.querySelector('#errorText');
const confirmDeleteButton = document.querySelector('#confirmDeletion');
const cancelDeleteButton = document.querySelector('#cancelDeletion');

// Needed to properly show and hide the Add Task modal via Bootstrap
const addTaskModal = new bootstrap.Modal(document.querySelector('#addTaskModal'));
const deleteConfirmModal = new bootstrap.Modal(document.querySelector('#deleteConfirmModal'));

// For debugging only

if (localStorage.getItem('isTest') === 'true') {
    if (!readProject()) {
        const createTestProjectButton = document.querySelector('#createTestProject');

        createTestProjectButton.addEventListener('click', function (event) 
        {
            createTestProject();
            window.location.reload();
        });

        createTestProjectButton.classList.remove('d-none');
    }
}

function init() {
    const project = readProject();

    if (project) {
        nameElement.textContent = project.name;
        descriptionElement.innerHTML = renderHtml(project.description);

        if (project.tasks) {
            // Replace the default text with a list of tasks that can be checked off
            taskListElement.innerHTML = '';
            const ul = document.createElement('ul');

            for (let i = 0; i < project.tasks.length; i++) {            
                const task = project.tasks[i];
                
                // Create an li element for the task containing the name and a Complete button
                const li = document.createElement('li');                
                
                const p = document.createElement('p');
                p.textContent = task.name;

                const button = document.createElement('button');
                button.dataset.taskId = i;
                button.textContent = '✅';
                button.addEventListener('click', taskCompleteListener);
                
                li.appendChild(p);                
                li.appendChild(button);

                ul.appendChild(li);
            }
            
            // Add the completed tasks to the end of the list
            for (let i = 0; i < project.completedTasks.length; i++) {
                const task = project.completedTasks[i];

                // Create an li element for the task with just the name
                const li = document.createElement('li');
                li.classList.add('completed-task');

                const p = document.createElement('p');
                p.textContent = task.name;

                li.appendChild(p);

                ul.appendChild(li);
            }

            taskListElement.appendChild(ul);
        }

        addTaskButton.addEventListener('click', addTaskListener);

        confirmButton.addEventListener('click', confirmListener);
        cancelButton.addEventListener('click', cancelListener);

        deleteProjectButton.addEventListener('click', deleteProjectListener);
        confirmDeleteButton.addEventListener('click', confirmDeleteListener);
        cancelDeleteButton.addEventListener('click', cancelListener);

        // Show the project
        emptyDiv.classList.add('d-none');
        projectDiv.classList.remove('d-none');

        // Enter key should add another task
        addTaskButton.focus();
    }
}

function taskCompleteListener(event) {
    const button = event.target;

    const taskId = button.dataset.taskId;    

    markTaskComplete(taskId);

    window.location.reload();
}

function addTaskListener(event) {    
    errorText.classList.add('d-none'); // In case the modal was previously opened
    addTaskModal.show();
    document.querySelector('#taskName').focus();
}

function confirmListener(event) {
    event.preventDefault();
    
    const name = document.querySelector('#taskName').value.trim();

    if(name !== "") {
        addTask(name);

        window.location.reload();
    } else {
        // Display error message
        errorText.classList.remove('d-none');
    }    
}

function deleteProjectListener(event) {
    deleteConfirmModal.show();
}

function confirmDeleteListener(event) {
    deleteProject();
    window.location = 'index.html';
}

function cancelListener(event) {
    addTaskModal.hide();
    deleteConfirmModal.hide();
}

init();