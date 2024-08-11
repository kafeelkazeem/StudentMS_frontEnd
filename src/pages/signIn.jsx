import axios from 'axios'
import React, { useState } from 'react'
import { url } from '../util/url'
import { useNavigate } from 'react-router-dom'
import { darkBlue, darkerBlue, lightBlue, white } from '../util/colors'

const SignIn = () => {

  const navigate = useNavigate()

  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) =>{
    e.preventDefault()
    setLoading(true)
    axios.post(`${url}/login`, {username: username, password: password})
    .then(res =>{
      const token = res.data.token
      localStorage.setItem('token', token)
      setLoading(false)
      navigate('/dashboard')
    })
    .catch(err => alert(err))
  }
  return (
    <div style={{backgroundColor: white}} className='w-full h-screen flex justify-center items-center'>
       <div className="max-w-md relative flex flex-col p-4 rounded-md text-black bg-slate-200">
            <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">Welcome back to <span style={{color: darkBlue}}>App</span></div>
            <div class="text-sm font-normal mb-4 text-center text-[#1e0e4b]">Sign in to your account</div>
            <form className="flex flex-col gap-3">
                <div className="block relative"> 
                    <label for="username" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Username</label>
                    <input type="text" id="username" onChange={(e) => setUsername(e.target.value)} className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0" />
                </div>
                <div className="block relative"> 
                    <label for="password" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Password</label>
                    <input type="password" id="password" onChange={(e)=> setPassword(e.target.value)} className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0" />
                </div>
                <button onClick={handleSubmit} type="submit" style={{backgroundColor: darkBlue}} className="w-full m-auto px-6 py-2 rounded hover:bg-[#1f3949] text-white text-sm font-normal">{
                  loading ? 'Loading...' : 'Sign in' 
                }
                </button>
            </form>
        </div>
    </div>
  )
}

export default SignIn
 