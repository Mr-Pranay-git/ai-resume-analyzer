type ATSProps = {
  score: number;
};

const ATS = ({ score }: ATSProps) => {
  const gradientFrom =
    score > 69 ? 'from-green-100' : score > 49 ? 'from-yellow-100' : 'from-red-100';
  const headerIcon =
    score > 69
      ? '/icons/ats-good.svg'
      : score > 49
      ? '/icons/ats-warning.svg'
      : '/icons/ats-bad.svg';
  const tipIcon = score > 69 ? '/icons/check.svg' : '/icons/warning.svg';

  const tips = [
    'Use standard section headers for ATS parsing.',
    'Keep formatting simple and avoid tables or columns.',
    'Mirror relevant keywords from the job description.',
  ];

  return (
    <div className={`rounded-2xl p-5 bg-linear-to-br ${gradientFrom} to-white shadow-sm`}>
      <div className="flex items-center gap-3">
        <img src={headerIcon} alt="ATS status" className="h-10 w-10" />
        <div>
          <p className="text-lg font-semibold">ATS Score - {score} / 100</p>
          <p className="text-sm text-gray-600">Applicant Tracking System readiness</p>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-sm font-semibold">Suggestions to improve ATS match</p>
        <p className="mt-1 text-sm text-gray-500">
          Small adjustments can increase how often your resume is surfaced by ATS filters.
        </p>
        <ul className="mt-3 space-y-2">
          {tips.map((tip) => (
            <li key={tip} className="flex items-start gap-2">
              <img src={tipIcon} alt="tip" className="mt-0.5 h-4 w-4" />
              <p className="text-sm text-gray-700">{tip}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm font-medium text-gray-700">
          Keep iterating and re-score to track improvements.
        </p>
      </div>
    </div>
  );
};

export default ATS;
