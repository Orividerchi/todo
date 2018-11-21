/* eslint-disable valid-jsdoc */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * @returns {JSX} code
 */
class Product extends React.Component {
  state = {
    isModalVisible: false,
    name: false,
    count: false,
    adress: false,
    number: false,
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

  submit = () => {
    const {
      name, count, adress, number, isModalVisible,
    } = this.state;
    if (!name || !count || !adress || !number) {
      alert('All field must be fullfield');
    } else if (count <= 0) {
      alert('Count must be >0');
    } else {
      const { setOrder } = this.props;
      setOrder(name, count, adress, number, isModalVisible);
      this.setState({
        isModalVisible: false,
      });
    }
  };

  nameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  countChange = (e) => {
    this.setState({
      count: e.target.value,
    });
  };

  adressChange = (e) => {
    this.setState({
      adress: e.target.value,
    });
  };

  numberChange = (e) => {
    this.setState({
      number: e.target.value,
    });
  };

  /**
   * @returns {JSX} - main form
   */
  render() {
    const { isModalVisible } = this.state;
    const content = () => {
      const display1 = isModalVisible ? 'inline' : 'none';
      const display2 = isModalVisible ? 'none' : 'inline';
      return (
        <div className="content">
          <div className="row" style={{ display: display2 }}>
            <div className="col-lg-3">{this.content()}</div>
          </div>
          <div style={{ display: display1 }}>
            <div className="form-group">
              <label>Name, Surname</label>
              <input
                placeholder="Name, Surname"
                type="text"
                className="form-control"
                onChange={e => this.nameChange(e)}
              />
            </div>
            <div className="form-group">
              <label>Count products</label>
              <input
                placeholder="count"
                type="number"
                className="form-control"
                onChange={e => this.countChange(e)}
              />
            </div>
            <div className="form-group">
              <label>Adress</label>
              <input
                placeholder="adress"
                type="text"
                className="form-control"
                onChange={e => this.adressChange(e)}
              />
            </div>
            <div className="form-group">
              <label>Mobile number</label>
              <input
                placeholder="Mobile"
                type="tel"
                className="form-control"
                onChange={e => this.numberChange(e)}
              />
            </div>
            <button onClick={this.submit} className="btn btn-success">
              Confirm
            </button>
            <button onClick={this.onCloseModal} type="reset" className="btn btn-danger">
              Cancel
            </button>
          </div>
        </div>
      );
    };
    return content();
  }
}

export default Product;

Product.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  products: PropTypes.array.isRequired,
  requestProductsList: PropTypes.func.isRequired,
  setOrder: PropTypes.func.isRequired,
};
