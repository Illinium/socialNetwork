import React from "react";
import styles from "./Users.module.css";

const Paginator = ({totalCount, count, getAllUsers, currentPage}) => {
    const pages = Math.ceil(totalCount / count);
    const pageNumbers = [];
    for (let i = 1; i <= pages; i++) {
        pageNumbers.push(i);
    }
    return (
        <>
            {
                pageNumbers.map((n, id) => {
                    return <span onClick={() => getAllUsers(n, count)}
                                 className={n === currentPage ? styles.activePage : null}
                                 key={id}>{n}</span>
                })
            }
        </>
    )
}

export default Paginator;