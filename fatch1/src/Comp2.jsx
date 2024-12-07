import React, { useState } from 'react'
import './Comp2.css'
import { useActionData, useNavigate } from 'react-router-dom'

function Comp2() {

    const navigate=useNavigate


    const [data,setdata] = useState({fname:'',lname:'',pass1:'',mobile:''})

    const handelinput=(event)=>{
        const {name,value}=event.target
        setdata({...data,[name]:value})
    }

    const User_Signup=()=>{
        navigate("/Login")
    }
    const User_Login=()=>{
        navigate("/Comp3")
    }

  return (

    <>

    <h1 className=''>signup</h1>
    <form action="">
        <label htmlFor="fname">
            first name: <input type="text" name='fname' value={data.fname} onChange={handelinput} />
        </label><br></br>
        <label htmlFor="lname">
            last name: <input type="text" name='lname' value={data.lname} onChange={handelinput}/>
        </label><br></br>
        <label htmlFor="pass1">
            password : <input type="text" name='pass1' value={data.pass1} onChange={handelinput} />
        </label><br></br>
        <label htmlFor="email">
            email: <input type="text" name='email' value={data.email} onChange={handelinput}/>
        </label><br></br>
        <label htmlFor="mobile">
            mobile: <input type="text" name='mobile' value={data.mobile} onChange={handelinput}/>
        </label><br></br>

        <button onClick={User_Signup}>signup</button>
        <button onClick={User_Login}>login</button>
    </form>
    
    </>
  )
}

export default Comp2
