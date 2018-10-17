import { connect } from 'react-redux';
import AddTodo from '../components/AddTodo';
import { addTodoRequest } from '../actions/addTodo';
// import { getTodos } from '../actions/requestTodoList';

const mapStateToProps = () => ({
  state: [],
});

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodoRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
