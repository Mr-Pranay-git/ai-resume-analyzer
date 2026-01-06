import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "~/constants/index";
// \app\constants\index.ts
import ResumeCard from "~/components/ResumeCard";
import { useEffect, type ReactNode } from "react";
import { usePuterStore } from "~/lib/puter";
import { useNavigate } from "react-router";


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
  const {auth} = usePuterStore() 
  const navigate = useNavigate() 

  useEffect(()=>{
    if(!auth.isAuthenticated) navigate('/auth?next/=')
  },[auth.isAuthenticated])

  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar/>

    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Track Your Applications & Resume Ratings</h1>
        <h2>Review your submissons and check AI- powered feedback</h2>
      </div>

    {resumes.length > 0 && (
      <div className="resumes-section">
       {resumes.map((resume)=>(
         <ResumeCard key={resume.id} resume={resume} />
        ))}
    </div>
    )}
    
    </section>
   
    
  </main>;
}
