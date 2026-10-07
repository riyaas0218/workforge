import React from 'react'
import { Link } from 'react-router-dom'
import useEmployees from '../hooks/useEmployees'


function Navbar() {
  const { employees } = useEmployees()

  return (
    <div>

    <h1>WorkForge</h1>
     <p>Employees: {employees.length}</p>
    <nav>
        <ul>
            <li> <Link to="/">Home</Link></li>
            <li><Link to="/employees">Employee</Link></li>
            <li>Project</li>
        </ul>
    </nav>
   
   
   
    </div>
  )
}

export default Navbar
