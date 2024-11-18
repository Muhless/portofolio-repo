import CardProject from '@/components/Card'
import React from 'react'

function Project() {
  return (
    <div className='flex justify-center h-screen bg-yellow-300'>
      <div>
        <div className=''>
          <h1 className='text-blue-950 mt-10 text-center text-4xl mb-5'>Project</h1>
          <CardProject />
        </div>
      </div>
    </div>
  )
}

export default Project