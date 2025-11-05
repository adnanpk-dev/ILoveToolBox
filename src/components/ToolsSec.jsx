import { useEffect, useState } from "react";
import tools from "../tools/tools";
import BlogFilters from "./BlogFilters";
import ToolCard from "./ToolCard";

export default function ToolsSec() {

  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredTools, setFilteredTools] = useState(tools);

  const categories = [];

  useEffect(() => {
    let filtered = tools;

    // ✅ Search Filter
    if (searchValue.trim()) {
      filtered = filtered.filter(tool =>
        tool.title.toLowerCase().includes(searchValue.toLowerCase()) || tool.description.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    // ✅ Category Filter
    if (selectedCategory !== "All") {
      filtered = filtered.filter(tool => tool.category === selectedCategory);
    }

    setFilteredTools(filtered);
  }, [searchValue, selectedCategory]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <h1 className="text-3xl font-bold text-gray-900 text-center">
        Explore All Tools
      </h1>
      <p className="text-gray-600 text-center max-w-2xl mx-auto mt-2">
        Work smarter with powerful tools for design, editing, and productivity.
      </p>

      <BlogFilters
        placeholder="Search Tools..."
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {filteredTools.length > 0 ? (
          filteredTools.map((tool, index) => (
            <ToolCard key={index} {...tool} />
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No tools found
          </p>
        )}
      </div>

    </section>
  );
}
