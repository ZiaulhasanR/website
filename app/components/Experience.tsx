export default function Experience() {
  const experiences = [
    {
      title: "Senior Designer",
      company: "Creative Agency",
      period: "2022 - Present",
      description: "Leading design projects and mentoring junior designers. Creating user-centered designs for web and mobile applications.",
      achievements: [
        "Led redesign of flagship product",
        "Improved user engagement by 40%",
        "Managed team of 5 designers"
      ],
      certificate: "/certificates/certificate.pdf" // Add your certificate PDF here
    },
    {
      title: "UI/UX Designer",
      company: "Tech Solutions Inc",
      period: "2020 - 2022",
      description: "Designed and implemented user interfaces for various web applications and mobile apps.",
      achievements: [
        "Created design system for consistency",
        "Collaborated with development teams",
        "Conducted user research and testing"
      ]
    },
    {
      title: "Junior Designer",
      company: "Digital Studio",
      period: "2018 - 2020",
      description: "Assisted in creating designs for client projects and learned industry best practices.",
      achievements: [
        "Supported 20+ client projects",
        "Developed strong design fundamentals",
        "Learned modern design tools"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 gradient-bg mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            My professional journey and career milestones
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full gradient-bg"></div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div 
                key={idx}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="w-full md:w-5/12">
                  {idx % 2 === 0 ? (
                    <div className="glass rounded-2xl p-8 hover:shadow-2xl transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 mb-1">{exp.title}</h3>
                          <p className="text-indigo-600 font-semibold">{exp.company}</p>
                        </div>
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{exp.description}</p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <svg className="w-5 h-5 text-indigo-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                      {exp.certificate && (
                        <a
                          href={exp.certificate}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 gradient-bg text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          View Certificate
                        </a>
                      )}
                    </div>
                  ) : null}
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className="w-6 h-6 gradient-bg rounded-full border-4 border-white shadow-lg z-10"></div>
                </div>

                <div className="w-full md:w-5/12">
                  {idx % 2 !== 0 ? (
                    <div className="glass rounded-2xl p-8 hover:shadow-2xl transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 mb-1">{exp.title}</h3>
                          <p className="text-indigo-600 font-semibold">{exp.company}</p>
                        </div>
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{exp.description}</p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <svg className="w-5 h-5 text-indigo-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                      {exp.certificate && (
                        <a
                          href={exp.certificate}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 gradient-bg text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          View Certificate
                        </a>
                      )}
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
