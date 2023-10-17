import React, { Component } from 'react';
import {BootstrapTable, 
       TableHeaderColumn} from 'react-bootstrap-table';
import fetchData from "../api/fetchData";       
// import '../css/Table.css';
import '../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'

const resource = fetchData(
  "http://localhost:8080/payments/"
);

const Table1 = () => {
  const data = resource.read();
  console.log('table',data);

  return (
    <div>
      <BootstrapTable data={data}>
        <TableHeaderColumn isKey dataField='impUid'>
          ID
        </TableHeaderColumn> 
        <TableHeaderColumn dataField='buyerName'>
          Name
        </TableHeaderColumn> 
        <TableHeaderColumn dataField='cardName'>
          카드명
        </TableHeaderColumn> 
      </BootstrapTable> 
    </div> 
  );
}

export default Table1;