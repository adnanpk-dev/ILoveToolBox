import { Link } from "react-router-dom";

const BlogCard = ({ image, title, description, slug, category, date }) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition">
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>

        {/* Category + Date Labels */}
        <div className="flex items-center gap-3 mt-1">
          {category && (
            <span className="text-xs font-semibold text-indigo-500 uppercase tracking-wide">
              {category}
            </span>
          )}

          {date && (
            <span className="text-xs text-gray-400">
              {new Date(date).toLocaleDateString()}
            </span>
          )}
        </div>

        <p className="text-gray-500 text-sm mt-2 line-clamp-3">
          {description}
        </p>

        <Link
          to={`/blog/${slug}`}
          className="inline-block mt-4 text-primary font-semibold hover:underline"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
