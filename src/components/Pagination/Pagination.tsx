import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import React from 'react'
import style from './style.module.scss'

export default function Pagination() {
    return (
        <div className={style.pagination}>
            <ul className={style.pageList}>
                <li className={style.page}>
                    <FaChevronLeft />
                </li>
                <li className={style.page}>1</li>
                <li className={style.page}>2</li>
                <li className={style.page}>...</li>
                <li className={style.page}>10</li>
                <li className={style.page}>
                    <FaChevronRight />
                </li>
            </ul>
        </div>
    )
}
