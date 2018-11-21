import { connect } from 'react-redux';
import products from '../components/products';
import { getProducts, setOrder } from '../actions/products';

const mapStateToProps = state => ({
  products: state.products.list,
});

const mapDispatchToProps = dispatch => ({
  requestProductsList: () => dispatch(getProducts()),
  setOrder: (name, count, adress, number) => dispatch(setOrder(name, count, adress, number)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(products);
