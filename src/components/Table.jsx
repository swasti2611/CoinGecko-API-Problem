import React from 'react'

const Table = (props) => {
  return (
    <div>
       <table class="table table-bordered">
        <thead>
            <tr>
                <th>name</th>
                <th>id</th>
                <th>symbol</th>
                <th>current_price</th>
                <th>total_volume</th>
            </tr>
        </thead>
        <tbody>

          {props.data.map((item ,index)=>(
            <tr key={index}>
             <td>{item.name}</td>
             <td>{item.id}</td>
             <td>{item.symbol}</td>
             <td>{item.current_price}</td>
             <td>{item.total_volume}</td>
            </tr>
          ))} 
        </tbody>
      </table>
    </div>
  )
}

export default Table
