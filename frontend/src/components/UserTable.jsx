import React from 'react'
import DataTable from 'react-data-table-component';

const customStyles = {
    rows: {
        style: {
            minHeight: '52px',
        },
    },
    headCells: {
        style: {
            paddingTop: '5px',
            paddingBottom: '5px',
            fontSize: '15px',
            backgroundColor: '#F2F2F2',
        },
    },
    cells: {
        style: {
            width: '50px',
            paddingTop: '9px',
            paddingBottom: '9px'
        },
    },

};

function UserTable(props) {


    return (
        <div className='mb-2 border-2 border-black rounded-lg '>
            <DataTable
                // title="User List"
                keyField='_id'
                columns={props.columns}
                data={props.data}
                pagination
                paginationPerPage={5}
                highlightOnHover
                customStyles={customStyles}
                theme='light'
            />

        </div>
    )
}

export default UserTable