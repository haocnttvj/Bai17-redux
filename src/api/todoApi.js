let todos = [];

const todoApi = {
  getAllTodos: () => {
    return new Promise((resolve) => {
      resolve([...todos]); // Trả về một bản sao của danh sách todos
    });
  },
  createTodo: (todo) => {
    return new Promise((resolve) => {
      const newTodo = { ...todo, id: Date.now() };
      todos.push(newTodo);
      resolve(newTodo);
    });
  },
  updateTodo: (id, updatedTodo) => {
    return new Promise((resolve, reject) => {
      const index = todos.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        todos[index] = { ...todos[index], ...updatedTodo };
        resolve(todos[index]);
      } else {
        reject(new Error("Todo not found"));
      }
    });
  },
  deleteTodo: (id) => {
    return new Promise((resolve, reject) => {
      const index = todos.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        todos.splice(index, 1);
        resolve();
      } else {
        reject(new Error("Todo not found"));
      }
    });
  },
  resetTodos: () => {
    todos = []; // Đặt lại danh sách todos về trạng thái ban đầu
  },
};

export default todoApi;
