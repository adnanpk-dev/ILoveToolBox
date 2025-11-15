import { useState } from "react";
import { Copy } from "lucide-react";
import Notification from "../../components/Notification";

export default function ColorGradientPicker() {
  const [mode, setMode] = useState("single");
  const [color, setColor] = useState("#4f46e5");
  const [gradientColors, setGradientColors] = useState(["#4f46e5", "#06b6d4"]);
  const [direction, setDirection] = useState("to right");

  const [notification, setNotification] = useState(null); // ✅ state for toast

  const handleCopy = () => {
    navigator.clipboard
      .writeText(cssOutput)
      .then(() => {
        setNotification({
          message: "CSS Copied Successfully ✅",
          icon: "📋",
          type: "success",
        });
      })
      .catch(() => {
        setNotification({
          message: "Failed to Copy ❌",
          icon: "⚠️",
          type: "error",
        });
      });
  };

  const cssOutput =
    mode === "single"
      ? `${color}`
      : `linear-gradient(${direction}, ${gradientColors.join(", ")})`;

  const handleColorChange = (index, value) => {
    const newColors = [...gradientColors];
    newColors[index] = value;
    setGradientColors(newColors);
  };

  const addColor = () => {
    setGradientColors([...gradientColors, "#ff0000"]);
  };

  const removeColor = (index) => {
    if (gradientColors.length > 2) {
      setGradientColors(gradientColors.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="flex flex-col items-center gap-8">

      {/* ✅ Notification UI */}
      {notification && (
        <Notification
          message={notification.message}
          icon={notification.icon}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}

      {/* ✅ Mode Switch */}
      <div className="flex gap-4">
        <button
          onClick={() => setMode("single")}
          className={`px-4 py-2 rounded-lg text-sm font-semibold border transition ${
            mode === "single"
              ? "bg-indigo-600 text-white border-indigo-600"
              : "border-gray-300 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Single Color
        </button>

        <button
          onClick={() => setMode("gradient")}
          className={`px-4 py-2 rounded-lg text-sm font-semibold border transition ${
            mode === "gradient"
              ? "bg-indigo-600 text-white border-indigo-600"
              : "border-gray-300 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Gradient
        </button>
      </div>

      {/* ✅ Preview Box */}
      <div
        className="w-full max-w-lg h-56 rounded-xl shadow-lg border"
        style={{ background: cssOutput }}
      ></div>

      {/* ✅ Color / Gradient Controls */}
      {mode === "single" ? (
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-24 h-24 cursor-pointer rounded-lg"
        />
      ) : (
        <>
          <select
            value={direction}
            onChange={(e) => setDirection(e.target.value)}
            className="border rounded-lg px-4 py-2"
          >
            <option value="to right">Left → Right</option>
            <option value="to left">Right → Left</option>
            <option value="to bottom">Top → Bottom</option>
            <option value="to top">Bottom → Top</option>
            <option value="to top right">Diag Bottom → Top Right</option>
            <option value="to bottom right">Diag Top → Bottom Right</option>
            <option value="to top left">Diag Bottom → Top Left</option>
            <option value="to bottom left">Diag Top → Bottom Left</option>
          </select>

          <div className="flex flex-wrap gap-4">
            {gradientColors.map((clr, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2">
                <input
                  type="color"
                  value={clr}
                  onChange={(e) => handleColorChange(idx, e.target.value)}
                  className="w-16 h-16 rounded-lg cursor-pointer"
                />
                {gradientColors.length > 2 && (
                  <button
                    onClick={() => removeColor(idx)}
                    className="text-red-500 text-xs font-semibold"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={addColor}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            + Add Color
          </button>
        </>
      )}

      {/* ✅ Output + Copy Button */}
      <div className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-lg shadow w-full max-w-lg justify-between">
        <span className="text-sm truncate">{cssOutput}</span>
        <button onClick={handleCopy} className="text-indigo-600 hover:text-indigo-800">
          <Copy size={20} />
        </button>
      </div>
    </div>
  );
}
