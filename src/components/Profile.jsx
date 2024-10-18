import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removeUser } from '../userSlice'
import "../App.css"

function Profile() {
    let accessToken = JSON.parse(localStorage.getItem("accessToken"))
    let user = JSON.parse(localStorage.getItem("user"))

    let navigateto = useNavigate()
    let dispatch = useDispatch()

    useEffect(()=>{
        if(!accessToken){
            navigateto("/")
        }
    },[])
    if(!accessToken){
        return 
    }

    function handleLogout(){
        localStorage.removeItem("accessToken")
        localStorage.removeItem("user")
        dispatch(removeUser())
        navigateto("/")
    }

  return (
    <div className='profile'>
        <h2>Profile</h2>
        <div className='container'>
            <h4>Full Name: </h4>
            <p>{user.name}</p>
        </div>
        <div className='container'>
            <h4>Email: </h4>
            <p>{user.email}</p>
        </div>
        <div className='container'>
            <h4>Password: </h4>
            <p>{user.password}</p>
        </div>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Profile