import React, {useState} from 'react';

const TableCustomNoPagination = ({ columns, data, rowsPerPage, classTable, classContainer, onClickRow }) => {
  const emptyRows = Math.max(0, rowsPerPage - data.length);
  const heightScroll = rowsPerPage * 45;

    const [activeRow, setActiveRow] = useState(null);

    const handleRowClick = (row, rowIndex) => {
        setActiveRow(rowIndex);
        console.log("row", rowIndex,activeRow, row)
        onClickRow(row);
    };
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
              <tr key={rowIndex}
                  className={activeRow === rowIndex ? 'active-row' : ''}
                  onClick={() => handleRowClick(row, rowIndex)}
              >
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
