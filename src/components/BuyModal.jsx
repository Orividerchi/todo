/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable require-jsdoc */
import React from 'react';
import {
  Modal, Button, Form, Input,
} from 'antd';
import PropTypes from 'prop-types';

const FormItem = Form.Item;

/* eslint-disable react/prefer-stateless-function */
class BuyModal extends React.PureComponent {
  handleOk = () => {
    const {
      maxValue, minValue, setter, closer,
    } = this.props;
    const { getFieldValue } = this.props.form;
    const newMinimum = getFieldValue('minValue');
    const newMaximum = getFieldValue('maxValue');
    if (maxValue !== newMaximum || minValue !== newMinimum) {
      setter(newMinimum, newMaximum);
    }
    closer();
  };

  validatorMin = (value, callback) => {
    const { getFieldValue } = this.props.form;
    const newMaximum = Number.parseFloat(getFieldValue('maxValue'));
    if (Number(value) || value === '0') {
      if (value < newMaximum) return callback();
      return callback('Minimum value must be smaller then maximum value');
    }
    return callback('New minimum value must be the float or integer number');
  };

  validatorMax = (value, callback) => {
    const { getFieldValue } = this.props.form;
    const newMinimum = Number.parseFloat(getFieldValue('minValue'));
    if (Number(value) || value === '0') {
      if (value > newMinimum) return callback();
      return callback('Maximum value must be higher then minimum value');
    }
    return callback('New maximum value must be the float or integer number');
  };

  render() {
    const {
      isModalVisible, loading, minValue, maxValue, closer,
    } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <Modal
        autoFocusButton={null}
        visible={isModalVisible}
        onOk={this.handleOk}
        onCancel={closer}
        title="Set sensor minimum/maximum values"
        footer={[
          <Button key="back" onClick={closer}>
            Cancel
          </Button>,
          <Button loading={loading} key="submit" type="primary" onClick={this.handleOk}>
            Submit
          </Button>,
        ]}
      >
        <Form layout="horizontal" onSubmit={this.handleSubmit}>
          <FormItem labelCol={{ span: 8 }} wrapperCol={{ span: 10 }} label="New minimum value">
            {getFieldDecorator('minValue', {
              rules: [
                {
                  validator: (rule, value, callback) => this.validatorMin(value, callback),
                },
              ],
              initialValue: minValue,
            })(<Input />)}
          </FormItem>
          <FormItem labelCol={{ span: 8 }} wrapperCol={{ span: 10 }} label="New maximum value">
            {getFieldDecorator('maxValue', {
              rules: [
                {
                  validator: (rule, value, callback) => this.validatorMax(value, callback),
                },
              ],
              initialValue: maxValue,
            })(<Input />)}
          </FormItem>
        </Form>
      </Modal>
    );
  }
}

BuyModal.propTypes = {
  maxValue: PropTypes.number,
  minValue: PropTypes.number,
  setter: PropTypes.func,
  closer: PropTypes.func,
  isModalVisible: PropTypes.bool,
  loading: PropTypes.bool,
  form: PropTypes.object,
};

export default Form.create()(BuyModal);
