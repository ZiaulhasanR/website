export default function Projects() {
  const projects = [
    { 
      title: "E-Commerce Platform Redesign", 
      desc: "Complete UI/UX overhaul of a major e-commerce platform, improving user flow and increasing conversions by 35%",
      tags: ["UI/UX", "Figma", "User Research"],
      color: "from-indigo-500 to-purple-500"
    },
    { 
      title: "Mobile Banking App", 
      desc: "Designed an intuitive mobile banking application with focus on security and ease of use for all age groups",
      tags: ["Mobile Design", "Prototyping", "iOS/Android"],
      color: "from-purple-500 to-pink-500"
    },
    { 
      title: "Healthcare Dashboard", 
      desc: "Created a comprehensive dashboard for healthcare professionals to manage patient data and appointments",
      tags: ["Dashboard", "Data Viz", "Web App"],
      color: "from-pink-500 to-rose-500"
    },
    { 
      title: "Social Media Platform", 
      desc: "Designed a modern social networking platform with emphasis on user engagement and community building",
      tags: ["Social", "UI Design", "Branding"],
      color: "from-indigo-500 to-blue-500"
    },
    { 
      title: "Food Delivery Service", 
      desc: "End-to-end design of a food delivery app with seamless ordering experience and real-time tracking",
      tags: ["Mobile", "UX", "Animation"],
      color: "from-orange-500 to-red-500"
    },
    { 
      title: "Educational Learning Platform", 
      desc: "Interactive learning platform design with gamification elements to enhance student engagement",
      tags: ["EdTech", "Interactive", "Web"],
      color: "from-green-500 to-teal-500"
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 gradient-bg mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Showcasing my best work and creative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div 
              key={i} 
              className="group glass rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <div className="text-white text-6xl font-bold opacity-20">
                  {i + 1}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all">
                  View Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
