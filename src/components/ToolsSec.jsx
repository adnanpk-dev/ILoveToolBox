import BlogFilters from "./BlogFilters";
import ToolCard from "./ToolCard";

export default function ToolsSec() {
  const tools = [
    {
      title: "UI Component Builder",
      description: "Create UI components visually and export HTML, Tailwind & React.",
      icon: "🧩",
      link: "/tools/ui-builder"
    },
    {
      title: "Image Editor",
      description: "Crop, resize and enhance images instantly online.",
      icon: "🖼️",
      link: "/tools/image-editor"
    },
    {
      title: "Video Converter",
      description: "Convert videos to different formats quickly and easily.",
      icon: "🎥",
      link: "/tools/video-converter"
    },
    {
      title: "Roadmap Generator",
      description: "Plan your ideas and build roadmaps with a single click.",
      icon: "🗺️",
      link: "/tools/roadmap-generator"
    },
    {
      title: "PDF Tools",
      description: "Merge, split, compress & edit documents — all online.",
      icon: "📄",
      link: "/tools/pdf-tools"
    },
    {
      title: "Color Picker",
      description: "Pick perfect colors with advanced palette controls.",
      icon: "🎨",
      link: "/tools/color-picker"
    },
  ];

  const categories = [];

  return (
    <>
    
    <section className="max-w-7xl mx-auto px-6 py-16">
      
      <h1 className="text-3xl font-bold text-gray-900 text-center">
        Explore All Tools
      </h1>
      <p className="text-gray-600 text-center max-w-2xl mx-auto mt-2">
        Work smarter with powerful tools for design, editing, and productivity.
      </p>

      <BlogFilters placeholder="Search Tools..." categories={categories} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {tools.map((tool, index) => (
          <ToolCard key={index} {...tool} />
        ))}
      </div>
    </section>
    </>
    
    
  );
}
