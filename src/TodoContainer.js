import { connect } from "react-redux";
import TodoWrapper from "./components/todoWrapper";
import { addTodo } from "./action";
const mapDispatchToProps = dispatch => {
  return {
    addTodo: (todo, testForCheck) => {
      dispatch(addTodo(todo, testForCheck));
    }
  };
};
const mapStateToProps = state => {
  return {
    todo: state.todo,
    loading: state.loading,
    error: state.error
  };
};
const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(TodoWrapper);
export default TodoContainer;
