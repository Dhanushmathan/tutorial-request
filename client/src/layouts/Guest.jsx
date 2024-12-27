import React from 'react'
import TheNavbar from '../components/TheNavbar';
import { Outlet } from 'react-router-dom';

const GuestLayout = () => {
  return (
    <div className='bg-slate-500 min-h-screen'>
      <TheNavbar />

      <main className='p-10'>
        <Outlet />
      </main>
    </div>
  )
}

export default GuestLayout;