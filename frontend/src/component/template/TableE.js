import React from 'react'
import { Table } from "react-bootstrap"


export default function TableE({header, body, deleteEntry}) {
    let no = 0

    const tableHeadData = () => {
        return header.map(el => { 
            return (
                    <th key={no++}> {el.attribute}</th>   
            )
        })
    }

      const tableBodyData = () => {  
          let no = 0          
         return body.map(el => {  
             no++
            //let deleteLink = "/exercise/delete/" + el._id
             let editLink = "/exercise/edit/" + el._id
            return (
                <tr key={no}>
                    <td> {no}</td>
                   <td> {el.first_name}</td>
                    <td> {el.last_name}</td>  
                    <td> {el.weight}</td>
                     <td> {el.bodyType}</td>  
                    <td> {el.duration}</td> 
                     <td> {el.date}</td>  
                    <td> {el.user}</td> 
                     <td> {el.pics}</td> 
                     <td><a href={editLink}>edit</a></td> 
                     <td><button type='button' onClick ={() =>deleteEntry(el._id)}>delete</button></td>
                </tr>
               
            )
        })
    }

    return (
        <div className ="container">

            <Table striped bordered hover>
                      <thead>                      
                        <tr>{tableHeadData()}</tr>
                       
                    </thead>

                    <tbody>
                        {tableBodyData()}
                    </tbody> 
                 </Table>
            
        </div>
    )
}
