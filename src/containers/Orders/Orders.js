import React, { Component } from 'react';
import { connect } from 'react-redux';

import withErrorHandler from '../../hoc//withErrorHandler';

import Order from '../../components/Order/Order';

import axios from '../../axios';
import { Spin } from 'antd';
import * as actions from '../../store/actions/index';

class Orders extends Component {
  componentDidMount () {
    this.props.onFetchOrders(this.props.userId, this.props.token);
  }

  render() {
    let orders = <Spin />;

    if ( !this.props.loading ) {
      orders = this.props.orders.map( order => (
        <Order 
          key={order.id}
          films={order.films}
          price={order.price} />
     ) )
    }

    return (
      <div>
        { orders }
      </div>
     );
   }
}

const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    user: state.auth.user,
    token: state.auth.token,
    userId: state.auth.user.uid
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: (userId, token) => dispatch( actions.fetchOrders(userId, token) )
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( withErrorHandler( Orders, axios ) );
