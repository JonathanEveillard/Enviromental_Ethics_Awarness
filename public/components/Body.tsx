"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { QRCodeSVG } from 'qrcode.react'

const Body = () => {
  const [selectedQRCode, setSelectedQRCode] = useState('feedback')

  const qrCodes = {
    feedback: {
      label: 'Feedback Form',
      description: 'Share your thoughts and feedback with us',
      url: 'https://docs.google.com/forms/d/e/1FAIpQLSf4kd9jhTHJFNDNlJyQeNBB-zSCrYVWaC9S1OcsmlzBfGYm8w/viewform'
    },
    privacy: {
      label: 'Privacy & Security',
      description: 'Learn about our privacy practices',
      url: 'https://ethics.jonathanlab.online/privacy'
    }
  }

  return (
    <div>
        <div className='font-mono'>
            <div className='px-3 py-12 sm:px-6 lg:px-12'>
              {/* Main Container - 50/50 Split */}
              <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 items-start'>
                
                {/* Left Column - Original Content */}
                <div className='flex-1'>
                  {/* Title Section */}
                  <div className='mt-6 sm:mt-30'>
                    <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 max-w-3xl text-[#1A1A1A]'>Ottawa&apos;s Central Experimental Farm</h1>
                  </div>

                  {/* Description Section */}
                  <div>
                    <p className='text-base sm:text-lg md:text-xl max-w-xl text-white'>A student-led project exploring local perspectives on sustainable farming at Ottawa&apos;s Central Experimental Farm, where ethics, environment, and community meet.</p>
                  </div>

                  {/* Buttons Section */}
                  <div className='mt-6 flex flex-col sm:flex-row sm:items-center gap-4'>
                    <Link href="/research" className='inline-block bg-black text-white font-bold px-6 py-3 rounded-lg hover:bg-gray-900 transition duration-300 w-full sm:w-auto text-center text-decoration-none'>Explore Research</Link>
                    <Link href="/privacy" className='inline-block bg-white text-black font-bold px-6 py-3 rounded-lg hover:bg-gray-300 transition duration-300 w-full sm:w-auto text-center text-decoration-none'>Privacy & Data Usage</Link>
                  </div>
                </div>

                {/* Right Column - QR Code */}
                <div className='flex-1'>
                  <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 sticky top-12'>
                    <h3 className='text-xl sm:text-2xl font-bold text-white mb-4'>Quick Access</h3>
                    
                    <div className='mb-6'>
                      <label htmlFor="qr-select" className='block text-sm font-medium text-white mb-2'>
                        Select QR Code:
                      </label>
                      <select
                        id="qr-select"
                        value={selectedQRCode}
                        onChange={(e) => setSelectedQRCode(e.target.value)}
                        className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black text-gray-900 bg-white'
                      >
                        <option value="feedback">Feedback Form</option>
                        <option value="privacy">Privacy & Security</option>
                      </select>
                    </div>

                    <div className='bg-white border-2 border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center min-h-48'>
                      <div className='text-center'>
                        <QRCodeSVG
                          value={qrCodes[selectedQRCode as keyof typeof qrCodes].url}
                          size={256}
                          bgColor='#ffffff'
                          fgColor='#000000'
                          level='H'
                          includeMargin={true}
                        />
                        <p className='text-gray-700 font-medium mt-4 mb-1'>{qrCodes[selectedQRCode as keyof typeof qrCodes].label}</p>
                        <p className='text-xs text-gray-500'>{qrCodes[selectedQRCode as keyof typeof qrCodes].description}</p>
                      </div>
                    </div>

                    <div className='mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md'>
                      <p className='text-xs text-gray-700'>
                        <strong>Current:</strong> {qrCodes[selectedQRCode as keyof typeof qrCodes].label}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Body