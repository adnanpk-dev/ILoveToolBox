import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";

export default function HomeBlog() {
  const blogs = [
    {
      image: "https://lh5.googleusercontent.com/NJ7F7DD3MZn7lKqx0z9PEfktyjLj4DG1LyUVry_uJ7wZw4AOQAFmv6shKwF6LnxbAZirlLr5ZVuUhgmXi8zh0YvFx0JnSJ52Wv2CONib6197G3qw029CEautW4bOmQymXHTwmKEzlg14XgMWefAW52s",
      title: "How to Build a Web Tool in 2025",
      description: "Learn how to create web tools using React, Tailwind & more...",
      slug: "build-web-tool",
      category: "Web",
      date: "2/11/2025"
    },
    {
      image: "https://lh5.googleusercontent.com/NJ7F7DD3MZn7lKqx0z9PEfktyjLj4DG1LyUVry_uJ7wZw4AOQAFmv6shKwF6LnxbAZirlLr5ZVuUhgmXi8zh0YvFx0JnSJ52Wv2CONib6197G3qw029CEautW4bOmQymXHTwmKEzlg14XgMWefAW52s",
      title: "Top 10 Tools for Developers",
      description: "The most powerful tools every developer must use...",
      slug: "top-10-dev-tools",
      category: "Web",
      date: "2/11/2025"
    },
    {
      image: "https://lh5.googleusercontent.com/NJ7F7DD3MZn7lKqx0z9PEfktyjLj4DG1LyUVry_uJ7wZw4AOQAFmv6shKwF6LnxbAZirlLr5ZVuUhgmXi8zh0YvFx0JnSJ52Wv2CONib6197G3qw029CEautW4bOmQymXHTwmKEzlg14XgMWefAW52s",
      title: "Monetize Your Tools with AdSense",
      description: "Turn your side projects into profitable products...",
      slug: "monetize-tools-adsense",
      category: "Web",
      date: "2/11/2025"
    }
  ];

  return (
    <>
      {/* ✅ Blog Section */}
      <section className=" bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Latest Blog Posts
          </h2>
          <p className="text-center text-gray-500 mt-2">
            Learn & improve your skills with helpful guides.
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {blogs.map((blog, index) => (
              <BlogCard key={index} {...blog} />
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 text-center">
                    <Link
                        to="/blogs"
                        className="px-6 py-3 rounded-md text-white font-medium bg-indigo-600 hover:bg-indigo-700 transition"
                    >
                        View More Blogs
                    </Link>
          </div>


    
        </div>
      </section>
    </>
  );
}
