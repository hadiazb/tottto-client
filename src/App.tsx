import { useEffect, useState } from 'react'
import './App.css'
import { api } from './api/api'

export default () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers()
  }, [])


  const getUsers = async () => {
    const { data } = await api.get('user/findAll');
    setUsers(data.users)
  }

  return (
    <h1>
      {
        JSON.stringify(users)
      }
    </h1>
  )
}

