import React, { useState } from 'react'
import axios from 'axios'
import { url } from '../util/url'
import { useNavigate } from 'react-router-dom'

const SearchForm = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const [studentName, setStudentName] = useState('')
  const [loading, setLoading] = useState(false)
  const onSearch = async () =>{
    setLoading(true)
    try {
      const students = await axios.get(`${url}/searchStudent`, {
        headers : {
          'Authorization': `${token}`,
        },
        params : {
          studentName: studentName
        }
      })
      setLoading(false)
      localStorage.setItem('searchResult', JSON.stringify(students.data))
      navigate('/searchResult')
    } catch (error) {
      if(error.status = 404){
        alert('student not found')
      }
      setLoading(false)
      console.log(error)
    }
  }
  return (
    <div className="rounded-lg bg-gray-200 p-1">
      <div className="flex">
        <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-2">
          <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none absolute w-5 fill-gray-500 transition">
            <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
          </svg>
        </div>
        <input type="text" className="w-full max-w-[250px] bg-white pl-2 text-base font-semibold outline-0" value={studentName} onChange={(e)=>setStudentName(e.target.value)} placeholder="" id="" />
        <input type="button" value={loading ? 'Searching...' : 'Search'} onClick={onSearch} style={{backgroundColor: '#1976d2'}} className="p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors" />
      </div>
    </div>
  )
}

export default SearchForm
