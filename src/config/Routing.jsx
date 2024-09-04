import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import DashboardComponent from '../components/dashboard/DashboardComponent'
import UsersComponent from '../components/admin/users/UsersComponent'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to="/main/dashboard" replace />}/>
        <Route path='/main/dashboard' Component={DashboardComponent}/>
        <Route path='/main/admin/languages' Component={DashboardComponent}/>
        <Route path='/main/admin/user' Component={UsersComponent}/>
    </Routes>
  )
}

export default Routing
