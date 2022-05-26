import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div> 
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-success">
<div class="container-fluid">
  <Link class="navbar-brand" to='/'>MARK APP</Link>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        
        <Link class="nav-link active" to='/'> Student</Link>
        
      </li>
      
      <li class="nav-item">
        <Link  class="nav-link" to='/view'>View</Link>
      </li>
     
      
    </ul>
  </div>
</div>
</nav></div></div>
  )
}

export default Header