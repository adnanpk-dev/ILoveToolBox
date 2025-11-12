
import tools from "../tools/tools";
import ToolCard from "./ToolCard";



export default function HomeTools() {

    const tool = tools.slice(-9);


    return (
        <>
            {/* ✅ Blog Section */}
            <section className="mb-10 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800">
                        Our Latest Tools
                    </h2>
                    <p className="text-center text-gray-500 mt-2">
                        Work smarter with powerful tools for design, editing, and productivity.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                        {tool.map((tool, index) => (
                            <ToolCard key={index} {...tool} />
                        ))}
                    </div>




                </div>
            </section>
        </>
    );
}
