import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";
import blogs from "../blogs/blogs";


export default function HomeBlog() {

  const blog = blogs.slice(-3);


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
            {blog.map((blog, index) => (
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
