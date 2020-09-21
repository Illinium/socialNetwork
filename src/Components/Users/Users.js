import React, { useEffect } from 'react';
import {connect} from "react-redux";
import {
    followUnfollowUser,
    getAllUsers
} from "../../reducers/users";
import User from "./User";
import styles from './Users.module.css';
import Loader from "../Common/Loader/Loader";
import Paginator from "../Common/Paginator/Paginator";

const Users = ({users, totalCount, count, currentPage, isLoading, blockBtnById, getAllUsers, followUnfollowUser }) => {
    useEffect(() => {
        getAllUsers(currentPage, count);
    }, [currentPage, count, getAllUsers]);

    return (
        <>
            <Paginator totalCount={totalCount} count={count}
                       getAllUsers={getAllUsers} currentPage={currentPage}
                       showNumberOfPages={10}
            />
            {
                isLoading ? <Loader/> : <>
                    <div className={styles.users}>
                        {
                            users.map((user) => {
                                return <User
                                    user={user}
                                    key={user.id}
                                    followUnfollowUser={followUnfollowUser}
                                    blockBtnById={blockBtnById}
                                />
                            })
                        }
                    </div>
                </>
            }
        </>
    )
}

const mapStateToProps = state => ({
    users: state.users.users,
    totalCount: state.users.totalCount,
    count: state.users.count,
    currentPage: state.users.currentPage,
    isLoading: state.users.isLoading,
    blockBtnById: state.users.blockBtnById
});

export default connect(mapStateToProps, {followUnfollowUser, getAllUsers})(Users);