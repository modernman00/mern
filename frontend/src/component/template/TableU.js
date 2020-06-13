import React from 'react'
import { Table } from "react-bootstrap"


export default function TableE({header, body}) {

    const tableHeadData = () => {
    
        let heading = header.map(el => {
            if(el.attribute !== 'password') {                
              return <th> {el.attribute}</th>
            }                  
        })
        return heading
    }

      const tableBodyData = () => {  
          let no = 1           
         return body.map(el => {  
             let deleteLink = "/exercise/delete/" + el._id
             let editLink = "/exercise/edit/" + el._id
            return (
                <tr>
                    <td> {no++}</td>
                   <td> {el.username}</td>
                    <td> {el.name}</td>  
                     <td><a href={deleteLink}>delete</a></td>
                     <td><a href={editLink}>edit</a></td>
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
