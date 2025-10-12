function UrlInput({ url, setUrl, onAnalyze, loading }) {
  return (
    <div id="analyze" className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Analyze Your Website</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            See Your Website Through AI Eyes
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Enter your website URL below and let VisiAI analyze its visual clarity, accessibility, and user experience.
          </p>
        </div>

        <div className="mt-10 max-w-xl mx-auto">
          <div className="flex flex-col md:flex-row shadow-sm rounded-md">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com"
              className="flex-1 min-w-0 block w-full px-3 py-4 rounded-md rounded-r-md sm:text-sm border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <button
              onClick={onAnalyze}
              disabled={loading || !url}
              className={`mt-3 md:mt-0 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white ${loading || !url ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Analyzing...
                </>
              ) : (
                'Analyze Now'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UrlInput;