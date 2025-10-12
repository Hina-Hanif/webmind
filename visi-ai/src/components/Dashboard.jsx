// eslint-disable-next-line react/prop-types
import Heatmap from "./Heatmap";

function Dashboard({ analysisData, url, onReset }) {
  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Analysis Results</h2>
            <p className="text-gray-600">URL: {url}</p>
          </div>
          <button 
            onClick={onReset}
            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            New Analysis
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <ScoreCard 
            title="Visual Clarity" 
            score={analysisData.visualClarity.score} 
            insight={analysisData.visualClarity.insight}
            color="indigo"
          />
          <ScoreCard 
            title="Accessibility" 
            score={analysisData.accessibility.score} 
            insight={analysisData.accessibility.insight}
            color="green"
          />
          <ScoreCard 
            title="UX Score" 
            score={analysisData.uxScore.score} 
            insight={analysisData.uxScore.insight}
            color="yellow"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Readability Analysis</h3>
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 text-xl font-bold">
                {analysisData.readability.grade}
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Reading Grade Level</p>
                <p className="text-gray-700">{analysisData.readability.insight}</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${Math.min(100, (12 - analysisData.readability.grade) * 10)}%` }}></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Simple (Grade 5)</span>
                <span>Complex (Grade 12+)</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Focus Accuracy</h3>
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-purple-800 text-xl font-bold">
                {analysisData.focusAccuracy.percentage}%
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Attention Alignment</p>
                <p className="text-gray-700">{analysisData.focusAccuracy.insight}</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: `${analysisData.focusAccuracy.percentage}%` }}></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Poor Focus</span>
                <span>Perfect Focus</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Heatmap 
              screenshot={analysisData.screenshot} 
              heatmapData={analysisData.heatmapData} 
            />
          </div>
          <div>
            <Recommendations suggestions={analysisData.suggestions} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
import PropTypes from 'prop-types';

Dashboard.propTypes = {
  analysisData: PropTypes.shape({
    visualClarity: PropTypes.shape({
      score: PropTypes.number,
      insight: PropTypes.string,
    }),
    accessibility: PropTypes.shape({
      score: PropTypes.number,
      insight: PropTypes.string,
    }),
    readability: PropTypes.shape({
      grade: PropTypes.number,
      insight: PropTypes.string,
    }),
    focusAccuracy: PropTypes.shape({
      percentage: PropTypes.number,
      insight: PropTypes.string,
    }),
    uxScore: PropTypes.shape({
      score: PropTypes.number,
      insight: PropTypes.string,
    }),
    suggestions: PropTypes.arrayOf(PropTypes.string),
  }),
 
  url: PropTypes.string,
  onReset: PropTypes.func,

};

Heatmap.propTypes = {
  screenshot: PropTypes.string.isRequired,
  heatmapData: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
};



