import React from 'react'
import propTypes from 'prop-types';
import styles from './SortButton.module.scss'

function SortButton({ onClick, order, column, selectedColumn }: any) {
    let arrow = '↨'
    if (column === selectedColumn && order === 'desc') {
        arrow = '↑'
    } else if (column === selectedColumn && order === 'asc') {
        arrow = '↓'
    }

    return (
        <span
            className={styles.SortButton}
            onClick={onClick}
        >
            {arrow}
        </span>
    )
}

SortButton.propTypes = {
    onClick: propTypes.func,
    order: propTypes.string,
    column: propTypes.string,
    selectedColumn: propTypes.string
}

export default SortButton
