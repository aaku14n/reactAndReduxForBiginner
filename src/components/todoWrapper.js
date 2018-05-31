import React from "react";
import {cloneDeep} from "lodash"
import "./css/todo.css";
import { TEST_FOR_LOADING, TEST_FOR_FAILURE } from "../action";
export default class TodoWrapper extends React.Component {
  onAddTodo(todo, testCase) {
    const currentTodo = cloneDeep(this.props.todo);
    currentTodo.push(todo);
    this.props.addTodo(currentTodo, testCase);
  }
  render() {
    return (
      <div className="base">
        <div className="addTodoSection">
          <AddTodoSection
            addTodo={(todo, testCase) => this.onAddTodo(todo, testCase)}
          />
        </div>
        <div className="showTodoSection">
          <ShowTodos {...this.props} />
        </div>
      </div>
    );
  }
}
class AddTodoSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ""
    };
  }
  onChange(todo) {
    this.setState({ todo });
  }
  onClick(testCase) {
    if (this.state.todo !== "") {
      this.props.addTodo(this.state.todo, testCase);
      this.setState({ todo: "" });
    }
  }
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={e => this.onChange(e.target.value)}
          value={this.state.todo}
        />
        <br />
        <button onClick={() => this.onClick()}>Add me Success</button>
        <button onClick={() => this.onClick(TEST_FOR_LOADING)}>
          Add me Request
        </button>
        <button onClick={() => this.onClick(TEST_FOR_FAILURE)}>
          Add me Error
        </button>
      </div>
    );
  }
}
class ShowTodos extends React.Component {
  render() {
    if (this.props.loading) {
      return <div>Loading...</div>;
    }
    return this.props.todo.length > 0 ? (
      this.props.todo.map((todo, i) => {
        return <div key={i}>{todo}</div>;
      })
    ) : (
      <div> No Todo Yet</div>
    );
  }
}
