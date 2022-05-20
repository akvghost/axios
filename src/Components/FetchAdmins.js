import React, { useState } from 'react'
import axios from 'axios'

import '../../node_modules/bootstrap/dist/css//bootstrap.min.css';

function FetchAdmins() {
  const [name,setName] = useState([])
  const FetchAdmin = () =>
  {
    console.log("clicked");
    axios.get("https://localhost:5001/api/admins").then((response)=>{
      console.log(response)
      setName(response.data)
  })

  }
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-4">
          <button type='button' className='btn btn-primary' onClick={FetchAdmin}>Fetch AAdmins</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {
            name.map((value)=>{
              return <div className="col-4">
              <div className="card" style={{width: '18rem'}}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{value.name}</h5>
                  <p className="card-text">{value.email}.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
           </div>
            })
          }
       </div>
      </div>
    </>
  )
}

export default FetchAdmins