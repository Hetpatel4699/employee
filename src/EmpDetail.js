import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const EmpDetail = () => {
  const { empid } = useParams();

  const [empdata, empdatachange] = useState({})

  useEffect(() => {
    fetch("http://192.168.0.48:9000/books/").then((res) => {
      return res.json();
    }).then((resp) => {
      resp.map((item) => {
        if(item.id == empid){
          empdatachange(item)
        }
      })
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
        <h2> The Employee name is :{empdata.title} ({empdata.id})</h2>
        <h3>contact detail</h3>
        <h5> Description is : {empdata.description}</h5>
        <h5>Cover is : {empdata.cover}</h5>
        <Link className="btn btn-danger" to="/">Back to Listing</Link>
        </div>
      }
      </div>
    </div>
  )
}

export default EmpDetail