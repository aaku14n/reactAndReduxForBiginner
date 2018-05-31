export const ADD_TODO_REQUEST = "ADD_TODO_REQUEST";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const ADD_TODO_FAILURE = "ADD_TODO_FAILURE";
export const TEST_FOR_FAILURE = "TEST_FOR_FAILURE"
export const TEST_FOR_LOADING = "TEST_FOR_LOADING"
const SUCCESS = "success";
const ERROR = "error";
const REQUESTING = "requesting";
export function addTodoRequest() {
  return {
    type: ADD_TODO_REQUEST,
    status: REQUESTING
  };
}
export function addTodoSuccess(todo) {
  return {
    type: ADD_TODO_SUCCESS,
    status: SUCCESS,
    todo
  };
}
export function addTodoFailure(error) {
  return {
    type: ADD_TODO_FAILURE,
    status: ERROR,
    error
  };
}
export function addTodo(todo, testForCheck) {
  return async dispatch => {
    dispatch(addTodoRequest());
    try {
      // we can make async call here
      if (testForCheck === TEST_FOR_FAILURE) {
        throw new Error("Failed");
        return ;
      } else if (testForCheck === TEST_FOR_LOADING) {
        setTimeout(() => dispatch(addTodoSuccess(todo)),2000);
      } else {
        dispatch(addTodoSuccess(todo));
      }
    } catch (e) {
      dispatch(addTodoFailure(e.message));
    }
  };
}
