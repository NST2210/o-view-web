import React, {useState} from 'react';
import '../../design/sass/components/tableCustom.scss';

const TableCustom = ({
                         columns,
                         data,
                         page,
                         totalItems,
                         rowsPerPage,
                         classTable,
                         classPagination,
                         classContainer,
                         onPageChange,
                         onClickRow
                     }) => {
    const totalPages = Math.ceil(totalItems / rowsPerPage);
    const maxPageDisplay = 3; // Số trang tối đa hiển thị trong pagination

    const [activeRow, setActiveRow] = useState(null);

    const handleRowClick = (row, rowIndex) => {
        setActiveRow(rowIndex);
        console.log("row", rowIndex,activeRow, row)
        onClickRow(row);
    };

    // Xác định các trang bắt đầu và kết thúc hiển thị
    const startPage = Math.max(1, page - Math.floor(maxPageDisplay / 2));
    const endPage = Math.min(totalPages, startPage + maxPageDisplay - 1);

    // Điều chỉnh startPage khi đến gần cuối
    const adjustedStartPage = Math.max(1, endPage - maxPageDisplay + 1);

    // Tạo mảng các trang sẽ hiển thị
    const pages = [];
    for (let i = adjustedStartPage; i <= endPage; i++) {
        pages.push(i);
    }

    const handleChangePage = (newPage) => {
        onPageChange(newPage);
    };
    const emptyRows = rowsPerPage - data.length;
    return (
        <div className={`table-container ${classContainer}`}>
            <table className={`base-table ${classTable}`}>
                <thead>
                <tr>
                    <th>NO.</th>
                    {columns.map((col, index) => (
                        <th key={index} style={{ width: col.width || '' }}>{col.title}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}
                        className={activeRow === rowIndex ? 'active-row' : ''}
                        onClick={() => handleRowClick(row, rowIndex)}
                    >
                        <td>{(page - 1) * rowsPerPage + rowIndex + 1}</td>
                        {columns.map((col, colIndex) => (
                            <td key={colIndex} style={{ width: col.width || '' }}>{row[col.key]}</td>
                        ))}
                    </tr>
                ))}

                {/* Render empty rows to fill up to rowsPerPage */}
                {Array.from({ length: emptyRows }).map((_, index) => (
                    <tr key={`empty-${index}`} className="empty-row">
                        <td colSpan={columns.length + 1}>&nbsp;</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <div className={`pagination ${classPagination}`}>
                <button onClick={() => handleChangePage(page - 1)} disabled={page === 1}>
                    &lt;
                </button>

                {pages.map((pageNumber) => (
                    <button
                        key={pageNumber}
                        onClick={() => handleChangePage(pageNumber)}
                        className={pageNumber === page ? 'active' : ''}
                    >
                        {pageNumber}
                    </button>
                ))}

                <button onClick={() => handleChangePage(page + 1)} disabled={page === totalPages}>
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default TableCustom;
