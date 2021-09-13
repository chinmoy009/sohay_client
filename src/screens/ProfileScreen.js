import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getUserDetails} from './../actions/userAction';
import UserProfileComponent from './../components/UserProfileComponet';
import { USER_PROFILE_PAGE_NAME } from '../constants/pageConstant';

class ProfileScreen extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUserDetails();
    }

    getPageDetailsInfo() {
        return {
            pageName: USER_PROFILE_PAGE_NAME,
            pageHeader: "User Profile",
            submitButtonText: "Update" 
        }
    }

    submitHandler = (e, userState) => {
        e.preventDefault();
    }

    render() {
        let pageDetails = this.getPageDetailsInfo();
        return(
            <div>
                <UserProfileComponent userDetails={this.props.userDetails ? this.props.userDetails : {}} pageDetails={pageDetails} submitHandler={this.submitHandler}></UserProfileComponent>
            </div>
        )
    }
}

ProfileScreen.propTypes = {
    getUserDetails: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    error: state.userDetails.error,
    loading: state.userDetails.loading,
    userDetails: state.userDetails.userDetails,
})

const mapDispatchToProps = {
    getUserDetails
}


export default connect(mapStateToProps, mapDispatchToProps) (ProfileScreen);

