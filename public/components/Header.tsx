import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
        <div className='font-mono'>

            {/* Links Section */}
            <div className='flex justify-between font-bold text-2xl p-12 text-[#1A1A1A]'>
                <span className=''>Local Research </span>
                <ul className='flex gap-6'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/research">Research</Link></li>
                    <li><Link href="/privacy">Privacy</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header