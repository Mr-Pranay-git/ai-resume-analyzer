import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "~/constants";
import { resume } from "react-dom/server";
import ResumeCard from "~/components/ResumeCard";


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
  console.log(resumes)
  console.log(resumes[0])
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar/>

    <section className="main-section">
      <div className="page-heading">
        <h1>Track Your Applications & Resume Ratings</h1>
        <h2>Review your submissons and check AI- powered feedback</h2>
      </div>
    </section>

    {resumes.length > 0 && (
      <div className="resumes-section">
       {resumes.map((resume)=>(
      <ResumeCard key={resume.id} resume={resume} />
      ))}
    </div>
    )}
    
   
    
  </main>;
}
