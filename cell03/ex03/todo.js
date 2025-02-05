window.onload = () => {
  const ft_list = document.getElementById('ft_list');
  let todos = getCookie('todos') ? JSON.parse(getCookie('todos')) : [];
  renderTodos(todos);
  window.newItem = () => {
    const todo = prompt('Enter new to do:');
    if (todo) {
      todos.push(todo);
      setCookie('todos', JSON.stringify(todos), 365);
      renderTodos(todos);
    }
  }
  function renderTodos(todos) {
    ft_list.innerHTML = '';
    todos.forEach((todo, index) => {
      const div = document.createElement('div');
      div.textContent = todo;
      div.onclick = () => {
        if (confirm('Are you sure you want to delete ?')) {
          todos.splice(index, 1);
          setCookie('todos', JSON.stringify(todos), 365);
          renderTodos(todos);
        }
      }
      ft_list.appendChild(div);
    });
  }
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
  }
}