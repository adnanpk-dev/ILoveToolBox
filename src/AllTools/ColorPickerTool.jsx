import ColorPicker from "./ColorPicker";


export default function ColorPickerTool() {



  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      
      {/* ✅ Tool Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
        Color Picker
      </h1>

      {/* ✅ Tool Main Component */}
      <div className="bg-white shadow-md rounded-xl p-6 border">
        <ColorPicker />
      </div>

     
    </div>
  );
}
