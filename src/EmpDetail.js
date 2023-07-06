import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const EmpDetail = () => {
  const { empid } = useParams();

  const [empdata, empdatachange] = useState({})

  useEffect(() => {
    fetch("http://192.168.0.48:9000/books/" + empid).then((res) => {
      return res.json();
    }).then((resp) => {
      empdatachange(resp);
    }).catch((err) => {
      console.log(err.message);
    })
  }, []);

  return (

    <div>
      <div className='card' style={{ textAlign: 'left' }}>
        <div className='card-title'>
          <center><h2 style={{ textAlign: 'left' }}>employee create</h2></center>
        </div>
        <div className='card-body'></div>

      {empdata &&
      <div>
        <h2> The Employee name is :{empdata.name} ({empdata.id})</h2>
        <h3>contact detail</h3>
        <h5> Email is : {empdata.email}</h5>
        <h5>Phone is : {empdata.phone}</h5>
        <Link className="btn btn-danger" to="/">Back to Listing</Link>
        </div>
      }
      </div>
    </div>
  )
}

export default EmpDetail