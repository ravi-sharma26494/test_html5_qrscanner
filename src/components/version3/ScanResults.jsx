import React from 'react'

const ScanResults = ({data}) => {
    console.log(data)
  return (
    <div className="table-responsive mt-5">
    <table className="table  table-bordered">
      <thead className='table-dark'>
        <tr>
          <th>S.NO</th>
          <th>QrData</th>
        </tr>
      </thead>
      <tbody className='table-striped'>
        {data.map((result, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{result}</td>
            {/* <td>{index + 1}</td>
            <td>{result}</td> */}
          </tr>
        ))} 
      </tbody>
    </table>
  </div>
  )
}

export default ScanResults