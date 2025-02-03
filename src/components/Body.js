import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        {/* either we should have our main container or watchpage here */}
        <Outlet />
    </div>
  )
}

export default Body