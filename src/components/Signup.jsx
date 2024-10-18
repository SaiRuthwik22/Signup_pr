import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../userSlice'
import { useNavigate } from 'react-router-dom'
import "../App.css"

function Signup() {

    let navigateto = useNavigate()
    let accessToken = JSON.parse(localStorage.getItem("accessToken"))

    useEffect(()=>{
        if(accessToken){
            navigateto("/profile")
        }
    },[])


    let dispatch = useDispatch()

    const [name,setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm,setConfirm] = useState("")
    const [message,setMessage] = useState(false)
    const [error,SetError] = useState(false)
    function handle(event,para){
        if(para == "name"){
            setName(event.target.value)
        }
        else if(para == "email"){
            setEmail(event.target.value)
        }
        else if(para=="password"){
            setPassword(event.target.value)
        }
        else{
            setConfirm(event.target.value)
        }
    }
    function handleSubmit(event){
        event.preventDefault()
        if(!name || !email || !password || !confirm ){
            setMessage("All Fields are required")
            SetError(true)
        }
        else if(password !== confirm){

            setMessage("Passwords are not same")
            SetError(true)
        }
        else{
            setMessage("Signup Successful")
            SetError(false)
            dispatch(addUser({name,email,password}))
            setTimeout(()=>{
                setMessage("")
                navigateto("/profile")
            },1000)
        }
    }
  return (
    <div id='signup'>
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Full Name' onChange={()=>{handle(event,"name")}} />
            <input type="text" placeholder='Email' onChange={()=>{handle(event,"email")}}  />
            <input type="password" placeholder='Password' autoComplete='false' onChange={()=>{handle(event,"password")}} />
            <input type="password" placeholder='Confirm Password' autoComplete='false' onChange={()=>{handle(event,"confirm")}} />
            {message && <p style={{color:error?"red":"green"}}>{message}</p>}
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default Signup