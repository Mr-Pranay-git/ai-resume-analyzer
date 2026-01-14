import React, { useState } from 'react'
import Navbar from '~/components/Navbar'

const Upload = () => {
    const [isProcessing,setIsProcessing] = useState(true)
  return (
     <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar/>

    <section className="main-section">
        <div className="page-header">
            <h1>Smart feedback for your dream job </h1>
            {isProcessing ? (
                <img src="/images/resume-scan.gif" alt="" />
            ):(
                <h2>drop your resume for ATS score and important links</h2>
            )}
        </div>
    </section>
    </main>  
  )
}

export default Upload
