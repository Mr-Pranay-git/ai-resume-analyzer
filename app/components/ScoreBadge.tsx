type ScoreBadgeProps = {
	score: number;
};

const ScoreBadge = ({ score }: ScoreBadgeProps) => {
	const badgeClasses =
		score > 70
			? 'bg-badge-green text-green-600'
			: score > 49
			? 'bg-badge-yellow text-yellow-600'
			: 'bg-badge-red text-red-600';

	const label = score > 70 ? 'Strong' : score > 49 ? 'Good Start' : 'Needs Work';

	return (
		<div className={`px-2 py-1 rounded-full ${badgeClasses}`}>
			<p className="text-xs font-semibold">{label}</p>
		</div>
	);
};

export default ScoreBadge;
