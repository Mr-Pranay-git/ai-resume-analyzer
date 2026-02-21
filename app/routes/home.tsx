import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import ResumeCard from "~/components/ResumeCard";
import { useEffect, useState, type ReactNode } from "react";
import { usePuterStore } from "~/lib/puter";
import { Link, useNavigate } from "react-router";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resume Analyzer" },
    { name: "description", content: "Get actual feedback of our Resume" },
  ];
}

export default function Home() {
  function callbackfn(value: Resume, index: number, array: Resume[]): ReactNode {
    throw new Error("Function not implemented.");
  }
  const {auth, kv} = usePuterStore(); 
  const navigate = useNavigate();
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loadingResumes, setLodingResumes] = useState(false);
  
  useEffect(()=>{
    if(!auth.isAuthenticated) navigate('/auth?next=/')
  },[auth.isAuthenticated])

  useEffect(()=>{
    const loadResumes = async ()=>{
      setLodingResumes(true);

      const resumeItems = (await kv.list('resumes:*', true)) as KVItem[];
      const parsedResumes = resumeItems?.map((resume)=>(
        JSON.parse(resume.value) as Resume 
      ))
      console.log("parsedResumes", parsedResumes);
      setResumes(parsedResumes || []);
      setLodingResumes(false)
    }
    loadResumes()
  },[])

  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar/>

    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Track Your Applications & Resume Ratings</h1>
        {!loadingResumes && resumes?.length === 0 ? (
          <h2>No resume found. Upload your first resume to get feedback.</h2>
        ):(
          <h2>Review your submissons and check AI- powered feedback</h2>
        )}
      </div>
      {loadingResumes && (
        <div className="flex flex-col items-center justify-center">
           <img src="/images/resume-scan-2.gif" className="w-50" />
        </div>
      )}

    {!loadingResumes && resumes.length > 0 && (
      <div className="resumes-section">
       {resumes.map((resume)=>(
         <ResumeCard key={resume.id} resume={resume} />
        ))}
    </div>
    )}
    
    {!loadingResumes && resumes ?.length === 0 && (
      <div className="flex flex-col items-center justify-center mt-10 gap-4">
        <Link to="/upload" className="primary-button wofull text-xl font-semibold">
         Upload Resume
        </Link>
      </div>
    ) }
    </section>
  </main>;
}
