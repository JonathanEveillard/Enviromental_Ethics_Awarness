import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
        <div className='font-mono'>

            {/* Links Section */}
            <div className='flex flex-col sm:flex-row sm:justify-between items-start sm:items-center font-bold text-lg sm:text-2xl px-4 py-6 sm:px-6 lg:px-12 text-[#1A1A1A]'>
                <span className='mb-3 sm:mb-0'>Local Research</span>
                <nav>
                  <ul className='flex flex-col sm:flex-row gap-3 sm:gap-6'>
                      <li><Link href="/">Home</Link></li>
                      <li><Link href="/research">Research</Link></li>
                      <li><Link href="/privacy">Privacy</Link></li>
                  </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Header