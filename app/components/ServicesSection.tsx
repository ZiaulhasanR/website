"use client";

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Social Media Ads",
      description: "Our social media ads service helps you reach your target audience across platforms like Facebook, Instagram, and others. We design high-converting creatives, write compelling ad copy, and manage optimized campaigns that boost brand visibility, drive engagement, and increase conversions.",
      buttonText: "Start Social Ads",
      buttonColor: "bg-lime-500 hover:bg-lime-600",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80",
      imageAlt: "Social Media Ads"
    },
    {
      id: 2,
      title: "Lead Generation Strategies",
      description: "We implement innovative lead generation strategies to capture and nurture potential customers. By utilizing targeted marketing techniques and compelling calls to action, we help you convert leads into loyal customers who engage with your brand.",
      buttonText: "Boost Leads",
      buttonColor: "bg-lime-500 hover:bg-lime-600",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80",
      imageAlt: "Lead Generation Marketing"
    },
    {
      id: 3,
      title: "SEO Optimization",
      description: "Boost your online visibility with our comprehensive SEO services. We optimize your website to rank higher in search results, drive organic traffic, and increase your digital presence. Our data-driven approach ensures sustainable growth for your business.",
      buttonText: "Improve SEO",
      buttonColor: "bg-lime-500 hover:bg-lime-600",
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600&q=80",
      imageAlt: "SEO Optimization"
    },
    {
      id: 4,
      title: "Email Marketing Campaigns",
      description: "Create powerful email campaigns that convert. We design personalized email strategies that nurture leads, build customer relationships, and drive sales. Our campaigns are optimized for maximum open rates and engagement.",
      buttonText: "Launch Campaign",
      buttonColor: "bg-lime-500 hover:bg-lime-600",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&q=80",
      imageAlt: "Email Marketing"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Core Services
          </h2>
          <p className="text-lime-600 text-lg font-medium">
            Tailored solutions for your digital marketing needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                index % 2 === 1 ? 'md:grid-flow-dense' : ''
              }`}
            >
              {/* Image */}
              <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {service.description}
                </p>
                <button
                  className={`${service.buttonColor} text-white px-8 py-3 rounded-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300`}
                >
                  {service.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center bg-gradient-to-r from-lime-400 to-emerald-500 rounded-2xl p-12 shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Grow Your Business?
          </h3>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Let's create a customized digital marketing strategy that delivers real results for your brand.
          </p>
          <button className="bg-white text-gray-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 shadow-xl transform hover:scale-105 transition-all duration-300">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}