'use client'
import React from 'react'

const Profile = ({params}:any) => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
    <h1>Profile</h1>
    <hr />
    <p className='text-4xl'>Profile Page: {params.userId}</p>
</div>
  )
}

export default Profile