const btnElement = document.getElementById("btn");
const nameElement = document.getElementById("name");
const tbody = document.querySelector("#todoList tbody");

function randomId(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

if (btnElement && nameElement) {
  btnElement.addEventListener("click", () => {
    const name = nameElement.value.trim();
    if (!name) {
      alert("Vui lòng nhập tên!");
      return;
    }

    const todoList = JSON.parse(localStorage.getItem("todo")) || [];
    const mytodo = {
      id: randomId(1, 999),
      name: name,
    };

    todoList.push(mytodo);
    localStorage.setItem("todo", JSON.stringify(todoList));

    window.location.href = "table.html";
  });
}

function generateTable() {
  if (!tbody) return;

  const todoList = JSON.parse(localStorage.getItem("todo")) || [];
  tbody.innerHTML = "";

  todoList.forEach((value) => {
    tbody.innerHTML += `
      <tr>
        <td>${value.id}</td>
        <td>${value.name}</td>
        <td>
          <button data-id="${value.id}" class="btn-delete">Xóa</button>
        </td>
      </tr>
    `;
  });
}

function handleDeleteTodo(id) {
  const todoList = JSON.parse(localStorage.getItem("todo")) || [];
  const newTodo = todoList.filter((todo) => todo.id !== Number(id));
  localStorage.setItem("todo", JSON.stringify(newTodo));
  generateTable();
}

if (tbody) {
  tbody.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-delete")) {
      const id = e.target.getAttribute("data-id");
      handleDeleteTodo(id);
    }
  });
}
generateTable();
