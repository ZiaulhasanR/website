export default function Skills() {
  const skillCategories = [
    {
      title: "Design",
      skills: [
        { name: "UI/UX Design", level: 90 },
        { name: "Graphic Design", level: 85 },
        { name: "Adobe Creative Suite", level: 88 },
        { name: "Figma", level: 92 },
      ]
    },
    {
      title: "Development",
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 85 },
        { name: "React/Next.js", level: 80 },
        { name: "Responsive Design", level: 90 },
      ]
    },
    {
      title: "Professional",
      skills: [
        { name: "Project Management", level: 88 },
        { name: "Communication", level: 92 },
        { name: "Problem Solving", level: 90 },
        { name: "Team Collaboration", level: 95 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 gradient-bg mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            A comprehensive overview of my technical and professional capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx}
              className="glass rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold mb-6 gradient-text">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-indigo-600 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="gradient-bg h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
