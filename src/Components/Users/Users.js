import React from 'react';
import {connect} from "react-redux";
import {
    followUser,
    getAllUsers,
    unfollowUser
} from "../../reducers/users";
import User from "./User";
import styles from './Users.module.css';
import Loader from "../Common/Loader/Loader";

class Users extends React.Component {

    componentDidMount() {
        this.props.getAllUsers(this.props.currentPage, this.props.count)
    }

    render() {
        const pages = Math.ceil(this.props.totalCount / this.props.count);
        const pageNumbers = [];

        for (let i = 1; i <= pages; i++) {
            pageNumbers.push(i);
        }

        return (
            <>
                {
                    this.props.isLoading ? <Loader/> : <>

                    {
                        pageNumbers.map((n, id) => {
                            return <span onClick={() => this.props.getAllUsers(n, this.props.count)}
                                         className={n === this.props.currentPage ? styles.activePage : null}
                                         key={id}>{n}</span>
                        })
                    }
                    <div className={styles.users}>
                        {
                            this.props.users.map((user) => {
                                return <User
                                    user={user}
                                    key={user.id}
                                    followUser={this.props.followUser}
                                    unfollowUser={this.props.unfollowUser}
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

export default connect(mapStateToProps, { followUser, unfollowUser, getAllUsers})(Users);