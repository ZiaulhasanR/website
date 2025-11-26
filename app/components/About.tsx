export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 gradient-bg mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I am a passionate and dedicated professional with a keen eye for design and a love for creating 
              meaningful digital experiences. My journey in the creative field has equipped me with a diverse 
              skill set and a deep understanding of user-centered design principles.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With expertise in modern technologies and frameworks, I strive to bridge the gap between 
              aesthetics and functionality, ensuring every project I work on is both beautiful and practical.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 gradient-bg rounded-full"></div>
                <span className="text-gray-700 font-medium">Creative Problem Solver</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 gradient-bg rounded-full"></div>
                <span className="text-gray-700 font-medium">Detail Oriented</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 gradient-bg rounded-full"></div>
                <span className="text-gray-700 font-medium">Team Player</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="glass rounded-2xl p-8 space-y-6 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  MA
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Munifa Aktar</h3>
                  <p className="text-gray-500">Professional Creative</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-600">
                  <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>munifa.aktar@email.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Location</span>
                </div>
              </div>

              <a 
                href="#contact" 
                className="block w-full text-center px-6 py-3 gradient-bg text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
