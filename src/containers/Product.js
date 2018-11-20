import { connect } from 'react-redux';
import products from '../components/products';
import { getProducts } from '../actions/products';

const mapStateToProps = state => ({
  products: state.products.list,
});

const mapDispatchToProps = dispatch => ({
  requestProductsList: () => dispatch(getProducts()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(products);
