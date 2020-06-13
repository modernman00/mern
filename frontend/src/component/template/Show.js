//import{ userData } from './../data/formData'
import React from 'react'
import { Table } from "react-bootstrap"


export default function Show({data}) {
    console.log(data)
 
    return (
         <Table striped bordered hover>
                <thead>                   
                      
                        <tr>
                            <th>username</th>
                             <th>name</th>
                              <th>password</th>
                                                
                        </tr>

                    </thead>

                    <tbody>
                        <tr>
                            <td>{data[0].username}</td>
                            <td>{data[0].name}</td>
                            <td>{data[0].password}</td>
                            <td>edit</td>
                            <td>delete</td>     
                        </tr>
                    </tbody> 
                              
            </Table>
    )
}


