'use client';
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";


useRouter
const SignupPage = () => {
  const[user,setUser]=React.useState({
    email:"",
    password:"",
    username:"",
  })
  const handleSignup=async()=>{

  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Sign Up</h1>
      <hr/>
      <label htmlFor="username">username</label>
      <input id="username" type="text" onChange={(e)=>setUser({...user,username:e.target.value})} placeholder="username" className="p-2 border-none m-2 rounded-md placeholder:p-2 text-2xl text-black"/>
      <label htmlFor="email">email</label>
      <input type="email" onChange={(e)=>setUser({...user,email:e.target.value})} placeholder="email" className="p-2 border-none m-2 rounded-md placeholder:p-2 text-2xl text-black"/>
      <label htmlFor="password">username</label>
      <input type="password" onChange={(e)=>setUser({...user,password:e.target.value})} placeholder="pasword" className="p-2 border-none m-2 rounded-md placeholder:p-2 text-2xl text-black"/>
    <button onClick={handleSignup} className="m-2 py-2 px-3 bg-blue-300 text-black rounded-md text-2xl pointer:scale-105 ease-in-out">Signup here</button>
  <Link href={'/login'} className="m-2 py-2 px-3">login</Link>
   
    </div>
  )
}

export default SignupPage