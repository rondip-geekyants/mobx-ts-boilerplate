import { inject, observer } from "mobx-react";
import * as React from "react";

import { TODO } from "../../constants";
import { TodoStore } from "../../store";

import { TodoList } from "../../components";

interface ITodoProps {
  todo?: TodoStore;
}

@inject(TODO)
@observer
class TodoContainer extends React.Component<ITodoProps, {}> {
  public render() {
    console.log("props in todo", this.props);

    const { todos } = this.props[TODO];
    console.log("todos", todos);
    return (
      <div>
        <TodoList todos={todos} />
      </div>
    );
  }
}

export default TodoContainer;
