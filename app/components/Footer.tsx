export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">Munifa Aktar</h3>
            <p className="text-gray-400 leading-relaxed">
              Creating beautiful and functional digital experiences. Let's bring your ideas to life.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-indigo-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-indigo-400 transition-colors">About</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-indigo-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-indigo-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">GitHub</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Dribbble</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Munifa Aktar. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
