import React from 'react'
import { Table } from "react-bootstrap"


export default function TableE({header, body}) {

    const tableHeadData = () => {
        return header.map(el => { 
            return (
                    <th> {el.attribute}</th>   
            )
        })
    }

      const tableBodyData = () => {  
          let no = 1           
         return body.map(el => {  
             let deleteLink = "/exercise/delete/" + el._id
             let editLink = "/exercise/edit/" + el._id
            return (
                <tr>
                    <td> {no++}</td>
                   <td> {el.first_name}</td>
                    <td> {el.last_name}</td>  
                    <td> {el.weight}</td>
                     <td> {el.bodyType}</td>  
                    <td> {el.duration}</td> 
                     <td> {el.date}</td>  
                    <td> {el.user}</td> 
                     <td> {el.pics}</td> 
                     <td><a href={editLink}>edit</a></td> 
                     <td><a href={deleteLink}>delete</a></td>
                </tr>
               
            )
        })
    }

    return (
        <div>

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
