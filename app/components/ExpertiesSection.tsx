"use client";

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Combining expertise with results-driven strategies to elevate your brand
          </p>
        </div>

        {/* Expertise Cards */}
        <div className="space-y-12">
          {/* Card 1 - Passionate Expertise */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80"
                alt="SEO Browser Window"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2 text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Passionate Expertise
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                With over three years of experience, we bring passion and dedication to help brands achieve their online marketing goals.
              </p>
            </div>
          </div>

          {/* Card 2 - Results-Driven Approach */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Results-Driven Approach
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our strategies are built on data and insights, ensuring that every campaign is tailored to deliver tangible results for your business.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                alt="SEO Analytics"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}