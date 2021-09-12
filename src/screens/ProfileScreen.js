import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import LoadingBox from './../components/LoadingBox';
import MessageBox from './../components/MessageBox';

class ProfileScreen extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getOrderList();
    }

    render() {
    }
}

ProfileScreen.propTypes = {
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


export default connect(mapStateToProps, mapDispatchToProps) (ProfileScreen);

