
import Navbar from './components/Navbar'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Employees from './pages/Employees'
import EmployeeProvider from './context/EmployeeContext'


function App() {
  
  {/*     const [searchTerm, setSearchTerm] = useState("")
    const[sortOrder,setSortOrder]=useState("asc")
    const filteredEmployees = employees.filter(employee =>
  employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  employee.role.toLowerCase().includes(searchTerm.toLowerCase())
)
 
 const sortedEmployees = [...filteredEmployees].sort(
  (a, b) =>
    sortOrder=== "asc"?
    a.name.localeCompare(b.name)
    :
    b.name.localeCompare(a.name)
)

function handleSort() {
  setSortOrder(
    sortOrder === "asc" ? "desc" : "asc"
  )
}*/} 


   
return (
  <div>


  <EmployeeProvider>
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route path="/employees" element={<Employees/>}/>
        </Routes>
    
    </BrowserRouter>
  </EmployeeProvider>
   


  
  {/*
    <input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search employee"
    />

    <button onClick={handleSort}>
      Sort {sortOrder === "asc" ? "A → Z" : "Z → A"}
    </button>

    <button onClick={addEmployee}>
      Add Employee
    </button>

    {filteredEmployees.length === 0 ? (
      <p>Employee Not Found</p>
    ) : (
      sortedEmployees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          id={employee.id}
          name={employee.name}
          role={employee.role}
          onDelete={() => deleteEmployee(employee.id)}
          onSave={saveEmployee}
        />
      ))
    )}  */}
  </div>
)
}

export default App
