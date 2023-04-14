import React from 'react'

const ScanResults = ({data}) => {
    console.log(data)
    let total = 0;
  return (
    <div className="table-responsive mt-5">
    <table className="table  table-bordered">
      <thead className='table-dark'>
        <tr>
          <th>S.NO</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody className='table-striped'>
        {
        data.map((result, index) =>{ 
            total += result.price;
        return (
        <tr key={index}>
            <td>{index+1}</td>
            <td>{result.name}</td>
            <td>{result.description}</td>
            <td>{result.price}</td>
            
          </tr>
        )}
        )
        } 
      </tbody>
      <tfoot className='table-secondary'>
          <tr>
            <th colSpan="3" className='text-start'> Grand Total</th>
            <td>{total}</td>
          </tr>
        </tfoot>
    </table>
  </div>
  )
}

export default ScanResults