import React from 'react'
import Header from './Header'
const View = () => {
    var viewmark=[
        { 
            "name":"anju",
            "admnno":"1000",
            "cgpa":"8.3",
            

        },
        {"name":"anila",
        "admnno":"1002",
        "cgpa":"8.5",
       
    },
    {"name":"kavya",
    "admnno":"1003",
    "cgpa":"8.4",
   

    }
    ]

  return (
    <div>
        <Header/>
<div>
    <div>
        <div class="container">
            <div class="row ">
                 <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <table class="table table-success table-striped" >
                         <thead>
                             <tr>
                                 <th scope="col">NAME</th>
                                 <th scope="col">ADMN NO</th>
                                 <th scope="col">CGPA</th>
                                 
                                                                         
                                 </tr>
                                 </thead>
                                 <tbody>
                                          {
                                           viewmark.map((value,key)=>{
                                                return <tr>
                                                <th><p class="card-text">{value.name}</p></th>
                                                <td><p class="card-text">{value.admnno}</p></td>
                                                <td><p class="card-text">{value.cgpa}</p></td>
                                                

                                                </tr>
                                            })}
                                            </tbody>
                                            </table>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
    </div>
  )
}

export default View