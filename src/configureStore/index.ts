import { TODO } from "../constants";
import { TodoModel } from "../models";
import { TodoStore } from "../store";

// default fixtures for TodoStore
const defaultTodos: TodoModel[] = [
  new TodoModel("Live without dying"),
  new TodoModel("Die Trying"),
  new TodoModel("Use Mobx"),
  new TodoModel("Use React", true)
];

// prepare MobX stores
const todoStore = new TodoStore(defaultTodos);

const rootStores = {
  [TODO]: todoStore
};

export default rootStores;
