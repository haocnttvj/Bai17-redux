import todoApi from "../api/todoApi";

// Action types
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const UPDATE_TODO_SUCCESS = "UPDATE_TODO_SUCCESS";
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";

// Action creators
export const fetchTodosSuccess = (todos) => ({
  type: FETCH_TODOS_SUCCESS,
  payload: todos,
});

export const addTodoSuccess = (todo) => ({
  type: ADD_TODO_SUCCESS,
  payload: todo,
});

export const updateTodoSuccess = (todo) => ({
  type: UPDATE_TODO_SUCCESS,
  payload: todo,
});

export const deleteTodoSuccess = (id) => ({
  type: DELETE_TODO_SUCCESS,
  payload: id,
});

// Thunk actions
export const fetchTodos = () => {
  return async (dispatch) => {
    try {
      const todos = await todoApi.getAllTodos();
      dispatch(fetchTodosSuccess(todos));
    } catch (error) {
      console.log("Error:", error);
    }
  };
};

export const addTodo = (todo) => {
  return async (dispatch) => {
    try {
      const newTodo = await todoApi.createTodo(todo);
      dispatch(addTodoSuccess(newTodo));
    } catch (error) {
      console.log("Error:", error);
    }
  };
};

export const updateTodo = (id, todo) => {
  return async (dispatch) => {
    try {
      const updatedTodo = await todoApi.updateTodo(id, todo);
      dispatch(updateTodoSuccess(updatedTodo));
    } catch (error) {
      console.log("Error:", error);
    }
  };
};

export const deleteTodo = (id) => {
  return async (dispatch) => {
    try {
      await todoApi.deleteTodo(id);
      dispatch(deleteTodoSuccess(id));
    } catch (error) {
      console.log("Error:", error);
    }
  };
};
