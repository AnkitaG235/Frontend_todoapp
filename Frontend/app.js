document.getElementById('signup-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    }).then(response => response.json())
      .then(data => alert('User registered successfully'))
      .catch(err => alert('Error registering user'));
  });
  
  document.getElementById('login-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(users => {
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
          window.location.href = 'index.html';  // Redirect to todo list page
        } else {
          alert('Invalid credentials');
        }
      });
  });
  
  // Load Todos on the Index Page
  if (document.getElementById('todo-list')) {
    fetch('http://localhost:3000/todos')
      .then(response => response.json())
      .then(todos => {
        todos.forEach(todo => {
          const todoItem = document.createElement('li');
          todoItem.textContent = todo.title;
          document.getElementById('todo-list').appendChild(todoItem);
        });
      });
  }
  