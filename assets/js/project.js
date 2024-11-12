const emptyDiv = document.body.querySelector('#emptyDiv');
const projectDiv = document.body.querySelector('#projectDiv');
const nameElement = projectDiv.querySelector('#name');
const descriptionElement = projectDiv.querySelector('#description');
const taskListElement = projectDiv.querySelector('#taskList');
const addTaskButton = projectDiv.querySelector('#addTask');

function init() {
    const project = readProject();

    console.log(project);

    if (project) {
        nameElement.textContent = project.name;
        descriptionElement.textContent = project.description;

        if (project.tasks) {
            // Replace the default text with a list of tasks that can be checked off
            taskListElement.innerHTML = '';
            const ul = document.createElement('ul');

            for (let i = 0; i < project.tasks.length; i++) {            
                const task = project.tasks[i];
                
                if (!task.isComplete) {
                    // Create an li for the task including the name and a Complete button
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
            }

            taskListElement.appendChild(ul);
        }

        emptyDiv.classList.add('d-none');
        projectDiv.classList.remove('d-none');
    }
}

function taskCompleteListener(event) {
    const button = event.target;
    const taskId = button.dataset.taskId;
    const project = readProject();

    markTaskComplete(taskId);

    window.location.reload();
}

init();