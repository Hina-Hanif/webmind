function Heatmap({ screenshot, heatmapData }) {
  React.useEffect(() => {
    // In a real implementation, this would use Plotly or another library
    // to render the actual heatmap over the screenshot
    console.log("Heatmap would be initialized here");
  }, []);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">AI Eye Simulation</h3>
      <p className="text-sm text-gray-600 mb-4">
        This heatmap shows where users are likely to look first on your website.
      </p>
      <div className="heatmap-container">
        <img 
          src={heatmapData.url} 
          alt="Website heatmap" 
          className="w-full h-auto rounded"
        />
        <div className="absolute bottom-4 right-4 bg-white bg-opacity-75 rounded-md px-3 py-1 text-xs text-gray-700">
          AI Vision Heatmap
        </div>
      </div>
      <div className="mt-4 flex justify-between text-sm">
        <div className="flex items-center">
          <span className="w-3 h-3 bg-blue-500 rounded-full inline-block mr-1"></span>
          <span className="text-gray-600">Low Attention</span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 bg-red-500 rounded-full inline-block mr-1"></span>
          <span className="text-gray-600">High Attention</span>
        </div>
      </div>
    </div>
  );
}
export default Heatmap;