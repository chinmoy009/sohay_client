import React, { Component } from 'react'
import {getOrderList} from './../actions/orderAction';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import LoadingBox from './../components/LoadingBox';
import MessageBox from './../components/MessageBox';

class OrderHistoryScreen extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getOrderList();
    }

    render() {
        return(
            <div>
                <h1>Order History</h1>
                {this.props.loading ? <LoadingBox></LoadingBox>
                    : this.props.error ? <MessageBox variant ="danger">{this.props.error}</MessageBox>
                    : this.props.orderList && this.props.orderList.length > 0 ? (<table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>DATE</th>
                                <th>PRICE</th>
                                <th>PAID</th>
                                <th>DELIVERED</th>
                                <th>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.orderList.map(order => (
                                <tr key={order._id}>
                                    <td>{order._id}</td>
                                    <td>{order.createdAt.substring(0, 10)}</td>
                                    <td>{order.totalPrice.toFixed(2)}</td>
                                    <td>{order.isPaid ? order.paidAt.substring(0,10) : 'NO'}</td>
                                    <td>{order.isDelivered ? order.deliveredAt.substring(0,10) : 'NO'}</td>
                                    <td>
                                        <button type="button" className="small" onClick={() => this.props.history.push(`/order/${order._id}`)}>
                                            Details
                                        </button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>)
                    : <h2>No Order has been made yet</h2>
                }
            </div>
        )
    }
}

OrderHistoryScreen.propTypes = {
    getOrderList: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    error: state.orderList.error,
    loading: state.orderList.loading,
    orderList: state.orderList.orderList,
})

const mapDispatchToProps = {
    getOrderList
}


export default connect(mapStateToProps, mapDispatchToProps) (OrderHistoryScreen);

