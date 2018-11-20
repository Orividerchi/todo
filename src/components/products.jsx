/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * @returns {JSX} code
 */
class Product extends React.Component {
  state = {
    isModalVisible: false,
  };

  /**
   * @returns {Array} products
   */
  componentWillMount() {
    const { requestProductsList } = this.props;
    requestProductsList();
  }

  onOpenModal = () => {
    this.setState({
      isModalVisible: true,
    });
  };

  onCloseModal = () => {
    this.setState({
      isModalVisible: false,
    });
  };

  /**
   * @returns {JSX} code
   */
  content = () => {
    const { products } = this.props;
    if (products[1]) {
      return products.map(product => (
        <div className="card" style={{ width: '18rem' }} key={product.Title}>
          <img className="card-img-top" src=".../100px180/" alt="" />
          <div className="card-body">
            <h5 className="card-title">{product.Title}</h5>
            <p className="card-text">{product.Text}</p>
            <b className="card-text">{product.price}</b>
            <button type="submit" onClick={this.onOpenModal} className="btn btn-primary">
              Buy
            </button>
          </div>
        </div>
      ));
    }
    return <p>Loading</p>;
  };

  /**
   * @returns {JSX} - main form
   */
  render() {
    const { isModalVisible } = this.state;
    const visibility = isModalVisible ? 'visible' : 'hidden';
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-3">{this.content()}</div>
        </div>
        <div style={{ visibility }}>
          <form>
            <div className="form-group">
              <input placeholder="Name, Surname" type="text" className="form-control" />
            </div>
            <div className="form-group">
              <input placeholder="count" type="number" className="form-control" />
            </div>
            <div className="form-group">
              <input placeholder="adress" type="text" className="form-control" />
            </div>
            <div className="form-group">
              <input placeholder="Mobile" type="tel" className="form-control" />
            </div>
            <div className="form-group">
              <input placeholder="Date" type="date" className="form-control" />
            </div>
            <button type="submit" className="btn btn-success">
              Confirm
            </button>
            <button onClick={this.onCloseModal} type="reset" className="btn btn-danger">
              Cancel
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Product;

Product.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  products: PropTypes.array.isRequired,
  requestProductsList: PropTypes.func.isRequired,
};
