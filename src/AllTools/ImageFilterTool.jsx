import { useState } from "react";
import { Copy } from "lucide-react";
import Notification from "../components/Notification";

export default function ImageFilterTool() {
  const [filters, setFilters] = useState([
    { type: "brightness", value: 100, unit: "%" },
  ]);
  const [notification, setNotification] = useState(null);

  const filterDefaults = {
    brightness: { value: 100, unit: "%" },
    contrast: { value: 100, unit: "%" },
    grayscale: { value: 0, unit: "%" },
    blur: { value: 0, unit: "px" },
    sepia: { value: 0, unit: "%" },
    saturate: { value: 100, unit: "%" },
    invert: { value: 0, unit: "%" },
    "hue-rotate": { value: 0, unit: "deg" },
  };

  const handleFilterChange = (index, field, value) => {
    const updated = [...filters];
    updated[index][field] = value;
    setFilters(updated);
  };

  const addFilter = () => {
    setFilters([
      ...filters,
      { type: "brightness", value: 100, unit: "%" },
    ]);
  };

  const removeFilter = (index) => {
    const updated = filters.filter((_, i) => i !== index);
    setFilters(updated);
  };

  const handleTypeChange = (index, newType) => {
    const updated = [...filters];
    const defaults = filterDefaults[newType];
    updated[index] = { type: newType, ...defaults };
    setFilters(updated);
  };

  const filterCSS = filters
    .map((f) => `${f.type}(${f.value}${f.unit})`)
    .join(" ");

  const handleCopy = () => {
    navigator.clipboard
      .writeText(`filter: ${filterCSS};`)
      .then(() =>
        setNotification({
          message: "CSS Copied ✅",
          icon: "📋",
          type: "success",
        })
      )
      .catch(() =>
        setNotification({
          message: "Copy Failed ❌",
          icon: "⚠️",
          type: "error",
        })
      );
  };

  return (
    <div className="flex mt-8 flex-col items-center gap-8">
      {notification && (
        <Notification
          message={notification.message}
          icon={notification.icon}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">
        CSS Filters
      </h1>

      {/* ✅ Preview Box */}
      <div
        className="w-full max-w-lg h-64 rounded-xl shadow-lg border overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: filterCSS,
        }}
      ></div>

      {/* ✅ Filters Section */}
      <div className="flex flex-col gap-4 w-full max-w-lg">
        {filters.map((f, i) => (
          <div
            key={i}
            className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg shadow-sm border"
          >
            <select
              value={f.type}
              onChange={(e) => handleTypeChange(i, e.target.value)}
              className="border rounded-lg px-3 py-1"
            >
              {Object.keys(filterDefaults).map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </select>

            <input
              type="range"
              min={f.unit === "px" ? 0 : 0}
              max={f.type === "blur" ? 20 : 200}
              value={f.value}
              onChange={(e) => handleFilterChange(i, "value", e.target.value)}
              className="flex-1"
            />

            <span className="text-sm w-12 text-center">
              {f.value}
              {f.unit}
            </span>

            <button
              onClick={() => removeFilter(i)}
              className="text-red-500 text-xs font-semibold"
            >
              ❌
            </button>
          </div>
        ))}

        <button
          onClick={addFilter}
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
        >
          + Add Filter
        </button>
      </div>

      {/* ✅ CSS Output */}
      <div className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-lg shadow w-full max-w-lg justify-between">
        <span className="text-sm truncate">{`filter: ${filterCSS};`}</span>
        <button onClick={handleCopy} className="text-indigo-600 hover:text-indigo-800">
          <Copy size={20} />
        </button>
      </div>
    </div>
  );
}
