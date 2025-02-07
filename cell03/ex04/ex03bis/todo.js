$(document).ready(() => {
  const ft_list = $("#ft_list");
  let todos = getCookie('todos') ? JSON.parse(getCookie('todos')) : [];
  renderTodos(todos);
  $("#newItemButton").click(() => {
    const todo = prompt('Enter new to do:');
    if (todo) {
      todos.push(todo);
      setCookie('todos', JSON.stringify(todos), 365);
      renderTodos(todos);
    }
  });
  function renderTodos(todos) {
    ft_list.empty();

    todos.forEach((todo, index) => { 
      const div = $("<div>").text(todo);
      div.click(() => {
        if (confirm('Are you sure you want to delete this to do?')) {
          todos.splice(index, 1);
          setCookie('todos', JSON.stringify(todos), 365);
          renderTodos(todos);
        }
      });
      ft_list.append(div);
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
});