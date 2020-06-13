import React from 'react'
import { Table } from "react-bootstrap"


export default function TableU({ header, body }) {

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

            let deleteLink = "/exercise/delete/" + el._id
            let editLink = "/exercise/edit/" + el._id
            return (
                <tr key ={el._id}>
                    <td> {num++}</td>
                    <td> {el.username}</td>
                    <td> {el.name}</td>
                    <td><a href={deleteLink}>delete</a></td>
                    <td><a href={editLink}>edit</a></td>
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
