"use client";

import Link from "next/link";

export default function BlogInsightsSection() {
  const articles = [
    {
      id: 1,
      title: "Maximizing ROI with Social Media Ads",
      date: "November 7, 2025",
      image:
        "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80",
      excerpt:
        "Learn how to optimize your social media advertising campaigns to get the best return on investment.",
      content: `
        <h2>Introduction</h2>
        <p>Social media advertising has become one of the most powerful tools for businesses to reach their target audience. With billions of users across platforms like Facebook, Instagram, and LinkedIn, the potential for growth is immense.</p>
        
        <h2>Understanding ROI in Social Media</h2>
        <p>Return on Investment (ROI) measures the profitability of your social media campaigns. To maximize ROI, you need to track metrics like cost per click (CPC), conversion rates, and customer lifetime value.</p>
        
        <h2>Best Practices for Social Media Ads</h2>
        <ul>
          <li><strong>Target the Right Audience:</strong> Use detailed demographic and interest-based targeting to reach potential customers.</li>
          <li><strong>Create Compelling Content:</strong> Eye-catching visuals and persuasive copy are essential for stopping the scroll.</li>
          <li><strong>A/B Testing:</strong> Test different ad variations to find what resonates best with your audience.</li>
          <li><strong>Retargeting Campaigns:</strong> Re-engage users who have previously interacted with your brand.</li>
        </ul>
        
        <h2>Measuring Success</h2>
        <p>Track key performance indicators (KPIs) such as click-through rates, engagement rates, and conversion rates. Use analytics tools to monitor campaign performance and make data-driven decisions.</p>
        
        <h2>Conclusion</h2>
        <p>By implementing these strategies, you can significantly improve your social media advertising ROI and drive meaningful business results.</p>
      `,
    },
    {
      id: 2,
      title: "The Power of SEO in 2025",
      date: "November 7, 2025",
      image:
        "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&q=80",
      excerpt:
        "Discover the latest SEO trends and techniques to boost your website's visibility in search engines.",
      content: `
        <h2>Why SEO Matters More Than Ever</h2>
        <p>In 2025, Search Engine Optimization remains the cornerstone of digital marketing. With increasing competition online, having a strong SEO strategy is essential for business success.</p>
        
        <h2>Core SEO Elements</h2>
        <p>Effective SEO involves multiple components working together:</p>
        <ul>
          <li><strong>Technical SEO:</strong> Ensure your website is crawlable, fast, and mobile-friendly.</li>
          <li><strong>On-Page SEO:</strong> Optimize content, meta tags, and internal linking structure.</li>
          <li><strong>Off-Page SEO:</strong> Build high-quality backlinks and establish domain authority.</li>
          <li><strong>Content Quality:</strong> Create valuable, relevant content that answers user queries.</li>
        </ul>
        
        <h2>2025 SEO Trends</h2>
        <p>AI-powered search, voice search optimization, and user experience signals are shaping the future of SEO. Stay ahead by adapting to these emerging trends.</p>
        
        <h2>Keyword Research</h2>
        <p>Understanding what your audience searches for is crucial. Use tools like Google Keyword Planner and SEMrush to identify high-value keywords with good search volume and manageable competition.</p>
        
        <h2>Conclusion</h2>
        <p>SEO is a long-term investment that delivers sustainable results. Start optimizing today to see improved rankings and organic traffic growth.</p>
      `,
    },
    {
      id: 3,
      title: "Creating a Winning Content Strategy",
      date: "November 7, 2025",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      excerpt:
        "Build a content strategy that engages your audience and drives conversions across all channels.",
      content: `
        <h2>The Foundation of Content Strategy</h2>
        <p>A winning content strategy aligns with your business goals while meeting your audience's needs. It's about creating the right content, for the right people, at the right time.</p>
        
        <h2>Know Your Audience</h2>
        <p>Start by developing detailed buyer personas. Understand their pain points, preferences, and content consumption habits. This knowledge guides your content creation process.</p>
        
        <h2>Content Planning Framework</h2>
        <ul>
          <li><strong>Set Clear Goals:</strong> Define what you want to achieve (brand awareness, lead generation, sales).</li>
          <li><strong>Content Audit:</strong> Evaluate existing content to identify gaps and opportunities.</li>
          <li><strong>Editorial Calendar:</strong> Plan content topics, formats, and publishing schedules.</li>
          <li><strong>Distribution Strategy:</strong> Determine which channels will reach your target audience most effectively.</li>
        </ul>
        
        <h2>Content Types That Work</h2>
        <p>Diversify your content mix with blog posts, videos, infographics, podcasts, and social media content. Each format serves different purposes and audience preferences.</p>
        
        <h2>Measuring Success</h2>
        <p>Track engagement metrics, conversion rates, and ROI to continuously improve your content strategy. Use analytics to understand what resonates with your audience.</p>
        
        <h2>Conclusion</h2>
        <p>A well-executed content strategy builds brand authority, nurtures customer relationships, and drives business growth. Start planning your strategy today!</p>
      `,
    },
  ];

  return (
    <section id="insights" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest Insights in Digital Marketing
          </h2>
          <p className="text-lime-600 text-lg font-medium">
            Stay informed with our expert articles and insights.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/blog/${article.id}`}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 hover:shadow-2xl transition-all duration-300 block"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {article.title}
                </h3>
                <p className="text-lime-600 font-semibold mb-4">
                  {article.date}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
