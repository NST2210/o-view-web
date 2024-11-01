import React from 'react';

const TableCustomNoPagination = ({
                                     columns,
                                     data,
                                     rowsPerPage,
                                     classTable,
                                     classContainer
                                 }) => {
    // Calculate the number of empty rows to always show `rowsPerPage` worth of rows
    const emptyRows = Math.max(0, rowsPerPage - data.length);
    return (<div className={`table-container ${classContainer}`}>
            <table className={`base-table ${classTable}`}>
                <thead>
                <tr>
                    <th>NO.</th>
                    {columns.map((col, index) => (<th key={index} style={{width: col.width || ''}}>{col.title}</th>))}
                </tr>
                </thead>
            </table>
            <div className="scrollable-table">
                <table className={`base-table ${classTable}`}>
                    <tbody> {data.map((row, rowIndex) => (<tr key={rowIndex}>
                        <td>{rowIndex + 1}</td>
                        {columns.map((col, colIndex) => (
                            <td key={colIndex} style={{width: col.width || ''}}>{row[col.key]}</td>))}
                    </tr>))} {/* Render empty rows to fill up to rowsPerPage */} {Array.from({length: emptyRows}).map((_, index) => (
                        <tr key={`empty-${index}`} className="empty-row">
                            <td colSpan={columns.length + 1}>&nbsp;</td>
                        </tr>))} </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableCustomNoPagination;
