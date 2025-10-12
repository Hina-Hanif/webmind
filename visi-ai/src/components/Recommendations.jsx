function Recommendations({ suggestions }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 h-full">
      <h3 className="text-lg font-medium text-gray-900 mb-4">AI Recommendations</h3>
      <p className="text-sm text-gray-600 mb-4">
        Based on our analysis, here are some suggestions to improve your website:
      </p>
      <div className="space-y-4">
        {suggestions.map((suggestion, index) => (
          <div key={index} className="recommendation-item">
            <p className="text-gray-800">{suggestion}</p>
          </div>
        ))}
      </div>
      <button className="mt-6 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Generate Detailed Report
      </button>
    </div>
  );
}
export default Recommendations;