import { useParams } from "react-router-dom";
import blogs from "../blogs/blogs";


export default function BlogView() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <h2 className="text-center text-red-500 font-semibold mt-20 text-xl">
        Blog Not Found
      </h2>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      
      {/* Blog Image */}
      {blog.image && (
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 object-cover rounded-xl shadow"
        />
      )}

      {/* Date + Category */}
      <div className="flex items-center gap-3 mt-4">
        {blog.category && (
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
            {blog.category}
          </span>
        )}

        {blog.date && (
          <span className="text-sm text-gray-500">
            {new Date(blog.date).toLocaleDateString()}
          </span>
        )}
      </div>

      {/* Blog Title */}
      <h1 className="text-3xl font-extrabold text-gray-900 mt-4">
        {blog.title}
      </h1>

      {/* Blog Content (Dynamic Sections) */}
      <div className="mt-6 space-y-6 text-gray-700 leading-relaxed">
        {blog.sections?.map((section, index) => (
          <div key={index}>
            {section.heading && (
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                {section.heading}
              </h2>
            )}

            {section.paragraph && (
              <p className="text-lg">{section.paragraph}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
