import React, { useState } from 'react'

function EmployeeCard(props) {

  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState(props.name)
 const [role, setRole] = useState(props.role)
 const[error,setError]=useState("")

 function handleSave(){
    if(name.trim() === "" || role.trim()===""){
        setError("Name and role are required")
        return;
    }
    props.onSave(props.id,name,role)
    setIsEditing(false);
    setError("");
 }

 function handleCancel(){
      setName(props.name)
      setRole(props.role)
      setError("")
      setIsEditing(false)
 }

  return (
    <div>

      {isEditing ? (
        <>
          <input value={name} onChange={(e) => setName(e.target.value)}/>
          <input value={role} onChange={(e) => setRole(e.target.value)}/>
          {error && <p>{error}</p>}
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>
            Cancel
          </button>
          
        </>
      ) : (
        <>
          <h2>{props.name}</h2>
          <h2>{props.role}</h2>

          <button onClick={() => setIsEditing(true)}>
            Edit
          </button>

          <button onClick={props.onDelete}>
            Delete
          </button>
         
        </>
      )}

    </div>
  )
}

export default EmployeeCard