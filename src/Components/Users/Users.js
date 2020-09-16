import React from 'react';
import {connect} from "react-redux";
import {
    followUnfollowUser,
    getAllUsers
} from "../../reducers/users";
import User from "./User";
import styles from './Users.module.css';
import Loader from "../Common/Loader/Loader";
import Paginator from "./Paginator";

class Users extends React.Component {

    componentDidMount() {
        this.props.getAllUsers(this.props.currentPage, this.props.count)
    }

    render() {
        return (
            <>
                {
                    this.props.isLoading ? <Loader/> : <>
                        <Paginator totalCount={this.props.totalCount} count={this.props.count}
                                   getAllUsers={this.props.getAllUsers} currentPage={this.props.currentPage}
                        />
                        <div className={styles.users}>
                            {
                                this.props.users.map((user) => {
                                    return <User
                                        user={user}
                                        key={user.id}
                                        followUnfollowUser={this.props.followUnfollowUser}
                                        blockBtnById={this.props.blockBtnById}
                                    />
                                })
                            }
                        </div>
                    </>
                }
            </>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users.users,
    totalCount: state.users.totalCount,
    count: state.users.count,
    currentPage: state.users.currentPage,
    isLoading: state.users.isLoading,
    blockBtnById: state.users.blockBtnById
});

export default connect(mapStateToProps, { followUnfollowUser, getAllUsers})(Users);