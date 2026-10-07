import React from 'react'
import EmployeeCard from '../components/EmployeeCard';
import useEmployees from '../hooks/useEmployees'


function Employees() {
    const { employees, setEmployees ,addEmployee,deleteEmployee,saveEmployee } = useEmployees()


    



  return (
    <div>
        {employees.map(employee=>(    <EmployeeCard
          key={employee.id}
          id={employee.id}
          name={employee.name}
          role={employee.role}
          onDelete={() => deleteEmployee(employee.id)}
          onSave={saveEmployee}
        />))}
       <button onClick={addEmployee}>Add Employee</button>
    </div>
  )
}

export default Employees
