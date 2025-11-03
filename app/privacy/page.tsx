import React from 'react'
import Header from '../../public/components/Header'
import { Privacy } from '../../public/components/Privacy'

const page = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <Privacy />
    </div>
  )
}

export default page