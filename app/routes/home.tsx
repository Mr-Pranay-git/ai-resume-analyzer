import Navebar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "~/constants";


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

  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navebar/>

    <section className="main-section">
      <div className="page-heading">
        <h1>Track Your Applications & Resume Ratings</h1>
        <h2>Review your submissons and check AI- powered feedback</h2>
      </div>
    </section>

    {/* {resumes.map(callbackfn: (resume)=>(
      <div>
        <h1>{resume.jobTitle}</h1>
      </div>
    ))} */}
  </main>;
}
