import { observable } from "mobx";

class TodoModel {
  private static generateId() {
    return Math.random();
  }

  public readonly id: number;
  @observable public text: string;
  @observable public completed: boolean;

  constructor(text: string, completed: boolean = false) {
    this.id = TodoModel.generateId();
    this.text = text;
    this.completed = completed;
  }
}

export default TodoModel;
