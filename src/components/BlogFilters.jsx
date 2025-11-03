import { useState } from "react";


export default function BlogFilters({ placeholder, categories }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-10 mb-10 space-y-6 
    flex flex-col items-center text-center">

      {/* 🔍 Search Bar */}
      <div className="w-full max-w-md">
        <input
          type="text"
          placeholder={placeholder}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm 
          focus:ring-2 focus:ring-indigo-500 outline-none"
        />
      </div>

      {/* 📂 Category Labels */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 text-sm rounded-full border transition 
            ${
              selectedCategory === cat
                ? "bg-indigo-600 text-white border-indigo-600"
                : "text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

    </div>
  );
}
