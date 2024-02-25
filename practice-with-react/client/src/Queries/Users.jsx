import { useQuery,useMutation } from "@apollo/client"
import { GET_USERS } from "./Query"
import { useState } from "react"
import { DELETE_USER } from "../Mutations/Mutation"

export default function Users(){
    const {loading,error,data} = useQuery(GET_USERS) 
    const [id,setId] = useState('')   
    const [DeleteUser] = useMutation(DELETE_USER , {variables:{id}})
    
    if (loading){
        return <h1>Loading .....</h1>
    }
    if (error){
        return <h1>Something went wrong</h1>
    }
    return (
        <div>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)}/>
            <button onClick={DeleteUser}>Delete User</button>
            
            {data.users.map(user => {return(
                <div key={user.id}>
                    <h2>{user.id}</h2>
                    <h2>{user.name}</h2>,
                    <h3>{user.email}</h3>
                </div>
            )})}
        </div>
    )
}