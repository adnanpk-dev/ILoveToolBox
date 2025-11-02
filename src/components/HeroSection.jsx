import { Link } from "react-router-dom";

export default function HeroSection() {
    return (
        <section className="w-full bg-gray-50 pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-6 text-center">

                <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                    All Your Digital Tools. One Powerful Platform.
                </p>


                <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
                  Powerful tools for work, creativity, and productivity — all in one platform. Whether you’re designing graphics, converting files, planning projects, editing media, or building something new, everything you need is right here.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        to="/tools"
                        className="px-6 py-3 rounded-md text-white font-medium bg-indigo-600 hover:bg-indigo-700 transition"
                    >
                        Explore Tools
                    </Link>

                </div>





            </div>
        </section>
    );
}
