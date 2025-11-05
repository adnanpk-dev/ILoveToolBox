import { useState } from "react";
import { useParams } from "react-router-dom";
import blogs from "../blogs/blogs";

// Code Highlighter Imports
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function BlogView() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
  };

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
          <span className="text-sm px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 font-medium">
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

      <p className="mt-6 text-lg">{blog.description}</p>

      {/* Blog Content */}
      <div className="mt-6 space-y-8 text-gray-700 leading-relaxed">
        {blog.sections?.map((section, index) => (
          <div key={index}>
            {section.heading && (
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                {section.heading}
              </h2>
            )}

            {section.paragraph && (
              <p className="text-lg whitespace-pre-line">{section.paragraph}</p>
            )}

            {/* ✅ Code Block Support */}
            {section.code && (
              <div className="relative mt-4">
                <button
                  onClick={() => handleCopy(section.code)}
                  className="absolute top-2 right-2 text-xs bg-black/40 text-white px-2 py-1 rounded hover:bg-black/60 transition"
                >
                  Copy
                </button>
                <SyntaxHighlighter language={section.language || "javascript"} style={vscDarkPlus} showLineNumbers>
                  {section.code}
                </SyntaxHighlighter>
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}
