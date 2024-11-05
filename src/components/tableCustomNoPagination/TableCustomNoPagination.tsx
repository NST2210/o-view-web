import React from 'react';

const TableCustomNoPagination = ({ columns, data, rowsPerPage, classTable, classContainer }) => {
  const emptyRows = Math.max(0, rowsPerPage - data.length);
  const heightScroll = rowsPerPage * 45;
  return (
    <div className={`table-container ${classContainer}`}>
      <table className={`base-table ${classTable}`}>
        <thead>
          <tr>
            <th>NO.</th>
            {columns.map((col: any, index: any) => (
              <th key={index} style={{ width: col.width || '' }}>
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
      </table>
      <div className="scrollable-table" style={{ height: `${heightScroll}px` }}>
        <table className={`base-table ${classTable}`}>
          <tbody>
            {data.map((row: any, rowIndex: any) => (
              <tr key={rowIndex}>
                <td>{rowIndex + 1}</td>
                {columns.map((col: any, colIndex: any) => (
                  <td key={colIndex} style={{ width: col.width || '' }}>
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
            {Array.from({ length: emptyRows }).map((_, index) => (
              <tr key={`empty-${index}`} className="empty-row">
                <td colSpan={columns.length + 1}>&nbsp;</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableCustomNoPagination;
