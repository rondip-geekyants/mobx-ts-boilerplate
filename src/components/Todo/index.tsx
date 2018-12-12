import * as React from "react";

import { TodoModel } from "../../models";

interface ITodoListProps {
  todos: TodoModel[];
}

class TodoList extends React.Component<ITodoListProps, {}> {
  public render() {
    const { todos } = this.props;
    return (
      <div>
        <ul>
          {todos.map(item => {
            return <li key={item.id}>{item.text}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
