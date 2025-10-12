function About() {
  const team = [
    {
      name: "Ayesha Ali",
      role: "Backend Developer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "Passionate about building scalable AI-driven applications and efficient data pipelines.Currently studying computer science and focused on backend architecture and API design."
    },
    {
      name: "Hina Hanif",
      role: "Frontend Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Enthusiastic about crafting clean, responsive, and accessible web interfaces.Focused on turning complex ideas into elegant user experiences through React and Tailwind CSS."
    },
    {
      name: "Marwa Amjad",
      role: "Backend Developer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Full-stack enthusiast skilled in building robust APIs and dynamic web apps with the MERN stack.Passionate about integrating AI and data-driven features into real-world solutions."
    },
    {
      name: "Zara Shahid",
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Creative designer passionate about usability, color theory, and inclusive design.Dedicated to making technology intuitive and visually engaging for every user."
    }
  ];

  const stats = [
    { number: "50K+", label: "Websites Analyzed" },
    { number: "95%", label: "Accuracy Rate" },
    { number: "2M+", label: "Issues Detected" },
    { number: "500+", label: "Happy Customers" }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Making the Web <span className="text-indigo-600">Accessible for Everyone</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            VisiAI was born from a simple belief: every person deserves equal access to digital content. 
            We're on a mission to eliminate visual and accessibility barriers on the web through 
            cutting-edge AI technology.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-2xl p-12 card-shadow mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2021, VisiAI emerged from the frustration of watching talented designers 
                  and developers struggle with accessibility compliance and visual optimization. 
                  Our founders, having worked at major tech companies, saw firsthand how manual 
                  audits were time-consuming, expensive, and often incomplete.
                </p>
                <p>
                  We envisioned a world where AI could instantly analyze any website and provide 
                  actionable insights to improve both visual appeal and accessibility. Today, 
                  VisiAI serves thousands of businesses worldwide, from startups to Fortune 500 companies.
                </p>
                <p>
                  Our technology has helped identify and fix over 2 million accessibility issues, 
                  making the web a more inclusive place for everyone.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
                alt="Team collaboration" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 card-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To democratize web accessibility and visual excellence through AI-powered tools 
              that make it easy for anyone to create inclusive, beautiful digital experiences.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 card-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• <strong>Inclusivity:</strong> Technology should work for everyone</li>
              <li>• <strong>Innovation:</strong> Pushing the boundaries of what's possible</li>
              <li>• <strong>Simplicity:</strong> Making complex problems easy to solve</li>
              <li>• <strong>Impact:</strong> Creating meaningful change in the digital world</li>
            </ul>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600">
            Passionate experts dedicated to making the web accessible for everyone
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-xl p-8 card-shadow text-center team-card">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-indigo-600 font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-2xl p-12 card-shadow">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join Us in Building a Better Web
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're a developer, designer, or business owner, VisiAI helps you create 
            more accessible and visually appealing websites.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary btn-cta">
              Start Your Free Analysis
            </button>
            <button className="btn-secondary">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
