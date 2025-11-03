import React from 'react'
import Header from '../public/components/Header'
import Body from '../public/components/Body'

const page = () => {
  return (
    <div className="with-bg">
      <div>
        {/* Header Section */}
        <div>
          <Header />
        </div>

        {/*Body Section */}
        <div>
          <Body />
        </div>

        {/* Footer Section */}
        <div>

        </div>
      </div>
    </div>
  )
}

export default page