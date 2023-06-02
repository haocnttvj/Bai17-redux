import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import TodoList from "./components/TodoList";
import todoApi from "./api/todoApi";

const store = configureStore();

// Đặt lại danh sách todos trước khi render ứng dụng
todoApi.resetTodos();

ReactDOM.render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.getElementById("root")
);
