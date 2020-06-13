import React from 'react'
import { Table } from "react-bootstrap"


export default function TableU({ header, body, deleteEntry }) {

    let no = 0

    let tableHeadData = header.map(el => {
            no++
            if (el.attribute === 'password') {
                return false
            }
            return <th key={no}> {el.attribute}</th>
        })
    
    let num  = 1
    const tableBodyData = body.map(el => {

            let editLink = "/exercise/edit/" + el._id
            return (
                <tr key ={el._id}>
                    <td> {num++}</td>
                    <td> {el.username}</td>
                    <td> {el.name}</td>
                    
                    <td><a href={editLink}>edit</a></td>
                     <td><button type='button' onClick ={() =>deleteEntry(el._id)}>delete</button></td>
                </tr>

            )
        })


    return (
        <div className ="container">

            <Table striped bordered hover>
                <thead>
                    <tr>{ tableHeadData }</tr>
                </thead>

                <tbody>
               
                      { tableBodyData }  
              
                    
                </tbody>
            </Table>

        </div>
    )
}
