import { useParams } from 'react-router';
import tools from '../tools/tools'

export default function ToolPage({ ToolComponent }) {
  const { name } = useParams();
  

  const tool = tools.find((b) => b.link === `/tool/${name}`);

  

  console.log(tool)





  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      
      {/* ✅ Tool Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
        {tool.title}
      </h1>

      {/* ✅ Tool Main Component */}
      <div className="bg-white shadow-md rounded-xl p-6 border">
        {ToolComponent && <ToolComponent />}
      </div>

     
    </div>
  );
}
