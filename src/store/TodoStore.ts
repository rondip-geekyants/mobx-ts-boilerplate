import { computed, observable } from "mobx";
import { TodoModel } from "../models";

class TodoStore {
  @observable
  public todos: TodoModel[];

  constructor(fixtures: TodoModel[]) {
    this.todos = fixtures;
  }

  @computed
  get completedTodos() {
    return this.todos.filter(todo => todo.completed);
  }
}

export default TodoStore;
