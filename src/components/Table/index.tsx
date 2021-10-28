import React from 'react';
import propTypes from 'prop-types';
import styles from './Table.module.scss';
import SortButton from '../SortButton';

function Table({ rows, onClickColumn, order, selectedColumnOrder }: TableType) {

    console.log(selectedColumnOrder)

    const handlerOnClickColumn = (column: string): void => {
        onClickColumn(column)
    }

    return (
        <table className={styles.table}>
            <thead>
                <tr className={styles.tableHeader}>
                    <th>
                        Repository Id
                    </th>
                    <th>Username</th>
                    <th className={styles.RepoDescription}>Repository Description</th>
                    <th>
                        Stars
                        <SortButton selectedColumn={selectedColumnOrder} column='stars' order={order} onClick={() => handlerOnClickColumn('stargazers_count')} />
                    </th>
                    <th>
                        Forks
                        <SortButton selectedColumn={selectedColumnOrder} column='forks' order={order} onClick={() => handlerOnClickColumn('forks_count')} />
                    </th>
                    <th>
                        Last Update
                        <SortButton selectedColumn={selectedColumnOrder} column='updated' order={order} onClick={() => handlerOnClickColumn('updated_at')} />    
                    </th>
                </tr>
            </thead>
            <tbody>
                {rows.map((item: any) => {
                    const updateDate = new Date(item.updated_at)
                    const options: any = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                    updateDate.toLocaleDateString(undefined, options)
                    return (
                        <tr key={item.id}>
                            <td >{item.id}</td>
                            <td>{item.owner.login}</td>
                            <td>{item.description}</td>
                            <td>{item.stargazers_count}</td>
                            <td>{item.forks_count}</td>
                            <td>{`${updateDate.toLocaleDateString("en-US")} - ${updateDate.getHours()}:${updateDate.getMinutes()}`}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

Table.propTypes = {
    rows: propTypes.array,
    onClickColumn: propTypes.func,
    order: propTypes.string,
    selectedColumnOrder: propTypes.string
}

export default Table
