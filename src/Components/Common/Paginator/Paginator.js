import React, {useEffect, useState} from "react";
import styles from "./Paginator.module.css";

const Paginator = ({totalCount, count, getAllUsers, currentPage = 1, showNumberOfPages = 5}) => {
    useEffect(() => {
        let arr = [];
        for(let i = 1; i <= showNumberOfPages; i++) {
            arr.push(i);
        }
        setVisiblePages([...arr])
    }, [showNumberOfPages])
    const pages = Math.ceil(totalCount / count);
    const [visiblePages, setVisiblePages] = useState([1, 2, 3]);
    const stepShowPages = Math.trunc(showNumberOfPages / 2);

    const onPageClicked = (n) => {
        if( n <= 0) {
            n = 1
        }
        getAllUsers(n, count);
        if ( n > stepShowPages + 1) {
            let arr = []
            for(let p = n - stepShowPages; p <= n + stepShowPages && p <= pages; p++ ) {
                arr.push(p)
            }
            setVisiblePages([...arr])
        } else {
            let arr = [];
            for(let i = 1; i <= showNumberOfPages; i++) {
                arr.push(i);
            }
            setVisiblePages([...arr])
        }

    }
    return (
        <>
            <button disabled={(currentPage - showNumberOfPages) <= 0 } onClick={() => onPageClicked(currentPage - Math.ceil(showNumberOfPages / 2))}>{`<<`}</button>
            {
                visiblePages.map((n, id) => {
                    return <span onClick={() => onPageClicked(n)}
                                 className={n === currentPage ? styles.activePage : null}
                                 key={id}>{n}</span>
                })
            }
            <button disabled={(currentPage + showNumberOfPages) >= pages } onClick={() => onPageClicked(currentPage + Math.ceil(showNumberOfPages / 2))}> >> </button>
        </>
    )
}

export default Paginator;