function Features() {
  const features = [
    {
      icon: "👁️",
      title: "Visual Clarity Analysis",
      description: "Advanced AI algorithms analyze visual hierarchy, contrast, and readability to ensure your content is crystal clear.",
      details: ["Color contrast analysis", "Typography assessment", "Visual hierarchy evaluation", "Mobile responsiveness check"]
    },
    {
      icon: "♿",
      title: "Accessibility Intelligence",
      description: "Comprehensive accessibility audits that ensure your website meets WCAG 2.1 AA standards and beyond.",
      details: ["Screen reader compatibility", "Keyboard navigation testing", "Alt text optimization", "Focus management"]
    },
    {
      icon: "🎯",
      title: "Eye-Tracking Heatmaps",
      description: "Predictive eye-tracking technology shows where users look first and how they navigate your content.",
      details: ["Attention mapping", "Scroll behavior analysis", "Click prediction", "User flow optimization"]
    },
    {
      icon: "📊",
      title: "UX Score Analytics",
      description: "Get comprehensive UX scores with actionable insights to improve user experience and conversion rates.",
      details: ["Performance metrics", "User engagement analysis", "Conversion optimization", "A/B testing insights"]
    },
    {
      icon: "🚀",
      title: "Real-time Optimization",
      description: "Instant recommendations and live previews of suggested improvements to boost your site's performance.",
      details: ["Live editing suggestions", "Performance monitoring", "Instant feedback", "Continuous optimization"]
    },
    {
      icon: "🔍",
      title: "Deep Content Analysis",
      description: "AI-powered content analysis that evaluates readability, tone, and effectiveness of your messaging.",
      details: ["Readability scoring", "Tone analysis", "Content structure review", "SEO optimization tips"]
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for <span className="text-indigo-600">Visual Excellence</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how VisiAI's cutting-edge technology transforms your website's visual experience 
            and accessibility with AI-powered insights and recommendations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white rounded-xl p-8 card-shadow feature-card">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.details.map((detail) => (
                  <li key={detail} className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 text-indigo-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-2xl p-12 card-shadow">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Website?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses using VisiAI to create more accessible, 
            visually appealing, and user-friendly websites.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary btn-cta">
              Start Free Analysis
            </button>
            <button className="btn-secondary">
              View Pricing Plans
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
