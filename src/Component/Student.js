import React, { useState } from 'react'
import Header from './Header'

const Student = () => {
    var [name,setname]=useState("")
    var [admnno,setadmnno]=useState("")
    var [cgpa,setcgpa]=useState("")
    const setData=()=>{
        var data={"name":name,"addmnno":admnno,"cgpa":cgpa}
        console.log(data)
}
  return (
    <div>
        <Header/>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Name</label>
                   <input onChange={(e)=>setname(e.target.value)}  type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Admission Number</label>
                    <input onChange={(e)=>setadmnno(e.target.value)} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">CGPA</label>
                    <input onChange={(e)=>setcgpa(e.target.value)} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={setData} className="btn btn-success">register</button>
                </div>
               
                </div>
                </div>
                </div>
                </div>
    </div>
  )
}

export default Student