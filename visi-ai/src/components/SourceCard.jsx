function ScoreCard({ title, score, insight, color }) {
  const getColorClass = () => {
    switch(color) {
      case 'green': return 'from-green-500 to-green-600';
      case 'yellow': return 'from-yellow-500 to-yellow-600';
      case 'red': return 'from-red-500 to-red-600';
      default: return 'from-indigo-500 to-indigo-600';
    }
  };

  const getScoreColor = () => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden score-card">
      <div className={`h-2 bg-gradient-to-r ${getColorClass()}`}></div>
      <div className="p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
        <div className="flex items-center mb-4">
          <div className={`text-4xl font-bold ${getScoreColor()}`}>{score}</div>
          <div className="text-gray-400 ml-1">/100</div>
        </div>
        <p className="text-sm text-gray-600">{insight}</p>
      </div>
    </div>
  );
}
export default ScoreCard;