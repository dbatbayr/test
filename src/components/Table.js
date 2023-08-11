import React from 'react'
import "./Table.css"
const Table = ({data}) => {
  return (
    <table>
      <tr>
        <th>
            ner
        </th>
        <th>Email</th>
        <th>utasnii dugaar</th>
        <th>Ustgah</th>
     </tr>
     {data.map((item)=>
     {
        <tr key={(item.id)}>
            <td>{(item.name)}</td>
            <td>{(item.email)}</td>
            <td>{(item.number)}</td>
            <td>
                <button style={{backgroundColor:"coral"}}>Delete</button>
            </td>
            <td>
                <select style={{width:"100%"}}>
                    <option value="tolson">Tolson</option>
                    <option value="toloogui">Toloogui</option>
                </select>
            </td>
        </tr>
     })}
    </table>
  )
}

export default Table
