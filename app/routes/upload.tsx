import React, { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router'
import FileUploader from '~/components/FileUploader'
import Navbar from '~/components/Navbar'
import { usePuterStore } from '~/lib/puter'

const Upload = () => {
    const {auth, isLoading, fs, ai, kv} = usePuterStore()
    const navigate = useNavigate();
    const [isProcessing,setIsProcessing] = useState(false);
    const [statusText, setStatusText] = useState("");
    const [file, setFile] = useState<File | null>(null);

    const handleFileSelect: (file: File|null)=> void = (file:File | null)=> {
        setFile(file)
    }

    const handleAnalyzer = async ({companyName, jobTitle, jobDescription, file}:{companyName:string, jobTitle:string, jobDescription:string, file:File})=>{
        setIsProcessing(true)
        setStatusText("Uploading the file...");

        const uploadedFile:any = await fs.upload([file]);
        if(!uploadedFile) return setStatusText('Error: Failed to upload file');

        setStatusText('Converting to image...');
        // const imageFile = await convertPdfToImage(file);
    }

    const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const form = e.currentTarget.closest('form');
        if(!form) return;
        const formData = new FormData(form);
        
        const companyName = formData.get('company-name');
        const jobTitle = formData.get('job-title');
        const jobDescription = formData.get('job-description');

        // console.log({companyName, jobTitle, jobDescription, file});
        
        if (!file) return;
    }

  return (
     <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar/>

    <section className="main-section">
        <div className="page-header py-16">
            <h1>Smart feedback for your dream job </h1>
            {isProcessing ? (
                <>
                    <h2>{statusText}</h2>
                    <img src="/images/resume-scan.gif" alt="" /> 
                </>
            ):(
                <h2>Drop your resume for ATS Score and improvement tips</h2>
            )}
            {!isProcessing && (
                <form id='upload-form' onSubmit={handleSubmit} className='flex flex-col gap-4 mt-8'>
                    <div className="form-div">
                        <label htmlFor="company-name">Company Name</label>
                        <input type="text" name="company-name" placeholder='Company Name' id='company-name' />
                    </div>
                    <div className="form-div">
                        <label htmlFor="job-title">Job Title</label>
                        <input type='text' name="job-title" placeholder='Job Title' id='job-title' />
                    </div>
                    <div className="form-div">
                        <label htmlFor="job-description">Job Description</label>
                        <textarea rows={5} name="job-description" placeholder='Job Description' id='job-description' />
                    </div>
                    <div className="form-div">
                        <label htmlFor="uploader">Uploader Resume</label>
                        <FileUploader onFileSelect={handleFileSelect}/>
                    </div>
                    
                    <button className='primary-button' type='submit'>
                        Analyzer Resume
                    </button>
                </form>
            )}
        </div>
    </section>
    </main>  
  )
}

export default Upload;

