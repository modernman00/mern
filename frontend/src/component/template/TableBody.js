import React from 'react'

export default function TableBody({username, name, password}) {
    console.log(username, password)
    return (
                 <tbody>
                        <tr>
                            <td>{username}</td>
                            <td>{name}</td>
                            <td>{password}</td>
                            <td>edit</td>
                            <td>delete</td>     
                        </tr>
                    </tbody>   
    )
}
