
import { createContext } from 'react'
import { useState } from 'react'
const EmployeeContext = createContext()

function EmployeeProvider({children}){
    
         const[employees,setEmployees]=useState([ {
       id: 1,
       name: "Riyas",
       role: "Frontend Developer"
     },
     {
       id: 2,
       name: "John",
       role: "Backend Developer"
     },
     {
       id: 3,
       name: "Arun",
       role: "Java Developer"
     }])


  function addEmployee(){
       const maxId = Math.max(...employees.map(employee => employee.id));
      const newEmployee={
        id: maxId +1 ,
        name:"sara",
        role:"React Developer"
      };
      setEmployees([...employees,newEmployee])
    }
  
      
    function deleteEmployee(id){
      const updateEmployee = employees.filter(employee => employee.id !== id);
      setEmployees(updateEmployee)
    }
    
           
    function saveEmployee(id,name,role){
            const saveemp= employees.map(employee=>employee.id=== id
              ?{
                ...employee,name,role
              } : employee
            )
            setEmployees(saveemp);
       }


    return (
  <EmployeeContext.Provider value={{ employees, setEmployees ,addEmployee,deleteEmployee,saveEmployee}}>
     {children}
  </EmployeeContext.Provider>
)
}
 


export default EmployeeProvider
export { EmployeeContext }