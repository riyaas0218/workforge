import { useContext } from 'react'
import { EmployeeContext } from '../context/EmployeeContext'

function useEmployees(){
  const context = useContext(EmployeeContext);

  return context;
}

export default useEmployees;