import { from, useQuery,useMutation } from "@apollo/client"
import React, { useId, useState } from "react"
import { USER } from "./Query"
import {UPDATE_USER} from '../Mutations/Mutation'

export default function User(){
    const [id,setId] = useState('')
    const [name,setname] = useState('')
    const [email,setEmail] = useState('')
    const [updatedname,setUpdatedName] = useState('')
    const [updatedemail,setUpdatedEmail] = useState('')
    const [updatedPassword,setUpdatedPassword] = useState('')

    const [updateUser] = useMutation(UPDATE_USER)
    const updatedata = () => {
        updateUser({
            variables:{id : id,
                update: {
                    name : updatedname,
                    password : updatedPassword,
                    email: updatedemail
                }
            }
        })
        setname(updatedname)
        setEmail(updatedemail)
    }
    // console.log(updatedata)
   const {loading,error,data} = useQuery(USER,{
    variables: {id}
   })
    if (loading){
     return <h1>Loading .....</h1>
    }
    return (
        <div>
            <input type="text"  value={id} onChange={(e) => setId(e.target.value)}/>
            <button 
            onClick={() => {return (
                setname(data.user.name),
                setEmail(data.user.email)
            )}}>Find User</button>
            <input type="text" value={updatedname} onChange={(e) => setUpdatedName(e.target.value)} placeholder="Enter updated name"/>
            <input type="text" value={updatedemail} onChange={(e) => setUpdatedEmail(e.target.value)} placeholder="Enter undated Email"/>
            <input type="text" value={updatedPassword} onChange={(e) => setUpdatedPassword(e.target.value)} placeholder="Enter updated Password"/>
            <button onClick={updatedata}>Update</button>

                <h2>Id : {id}</h2>
                <h2>Name : {name}</h2>
                <h2>Email : {email}</h2>
        </div>
    )
}