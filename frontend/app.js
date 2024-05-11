document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'http://api.sagarchauhan.me/tasks'; 
  
    const fetchTasks = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch tasks.');
        }
        const data = await response.json();
        displayTasks(data.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
  
    const displayTasks = (tasks) => {
      const taskList = document.getElementById('taskList');
      taskList.innerHTML = '';
  
      tasks.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item', 'list-group-item');
        taskItem.innerHTML = `
          <h5 class="mb-1">${task.title}</h5>
          <p class="mb-1">${task.description}</p>
          <small>Status: ${task.status}</small>
          <div class="btn-group mt-2">
            <button class="btn btn-primary btn-sm" onclick="editTask('${task._id}', '${task.title}', '${task.description}', '${task.status}')">Edit</button>
            <button class="btn btn-danger btn-sm" onclick="deleteTask('${task._id}')">Delete</button>
          </div>
        `;
        taskList.appendChild(taskItem);
      });
    };
  
    const addTask = async (title, description, status) => {
      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ title, description, status })
        });
  
        if (!response.ok) {
          throw new Error('Failed to create task.');
        }
  
        fetchTasks();
      } catch (error) {
        console.error('Error adding task:', error);
      }
    };
  
    window.editTask = async (taskId, title, description, status) => {
      try {
        const newTitle = prompt('Enter new title:', title);
        const newDescription = prompt('Enter new description:', description);
        const newStatus = prompt('Enter new status (todo, in progress, done):', status);
  
        if (newTitle !== null && newDescription !== null && newStatus !== null) {
          const response = await fetch(`${apiUrl}/${taskId}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: newTitle, description: newDescription, status: newStatus })
          });
  
          if (!response.ok) {
            throw new Error('Failed to update task.');
          }
  
          fetchTasks(); 
        }
      } catch (error) {
        console.error('Error editing task:', error);
      }
    };
  
    window.deleteTask = async (taskId) => {
      try {
        const response = await fetch(`${apiUrl}/${taskId}`, {
          method: 'DELETE'
        });
  
        if (!response.ok) {
          throw new Error('Failed to delete task.');
        }
  
        fetchTasks(); 
      } catch (error) {
        console.error('Error deleting task:', error);
      }
    };
  
    fetchTasks();
  
    document.getElementById('taskForm').addEventListener('submit', (event) => {
      event.preventDefault();
      const title = document.getElementById('title').value;
      const description = document.getElementById('description').value;
      const status = document.getElementById('status').value;
      addTask(title, description, status);
    });
  });  