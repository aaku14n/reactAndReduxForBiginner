import * as todoActions from "./action";
const todoReducer = (
  state = {
    todo: [],
    status: null,
    loading: false
  },
  action
) => {
  
  switch (action.type) {
    case todoActions.ADD_TODO_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: true
      });
    case todoActions.ADD_TODO_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        todo: action.todo,
        loading: false
      });
    case todoActions.ADD_TODO_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        status: action.status,
        error: action.error
      });
    default:
      return state;
  }
};
export default todoReducer;
