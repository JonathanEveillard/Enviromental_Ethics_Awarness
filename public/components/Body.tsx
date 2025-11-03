import React from 'react'
import Link from 'next/link'

const Body = () => {
  return (
    <div>
        <div className='font-mono'>
            <div className='px-4 py-12 sm:px-6 lg:px-12'>

                {/* Title Section */}
               <div className='mt-6 sm:mt-30'>
                 <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 max-w-3xl text-[#1A1A1A]'>Ottawa&apos;s Central Experimental Farm</h1>
               </div>

               {/* Description Section */}
               <div>
                    <p className='text-base sm:text-lg md:text-xl max-w-xl text-white'>A student-led project exploring local perspectives on sustainable farming at Ottawa’s Central Experimental Farm, where ethics, environment, and community meet.</p>
               </div>

               {/*Buttons Section */}
               <div className='mt-6 flex flex-col sm:flex-row sm:items-center gap-4'>
                    <Link href="/research" className='inline-block bg-black text-white font-bold px-6 py-3 rounded-lg hover:bg-gray-900 transition duration-300 w-full sm:w-auto text-center text-decoration-none'>Explore Research</Link>

                    <Link href="/privacy" className='inline-block bg-white text-black font-bold px-6 py-3 rounded-lg hover:bg-gray-300 transition duration-300 w-full sm:w-auto text-center text-decoration-none'>Privacy & Data Usage</Link>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Body