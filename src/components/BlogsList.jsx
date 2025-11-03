import blogs from "../blogs/blogs";
import BlogCard from "./BlogCard"
import BlogFilters from "./BlogFilters"






function BlogsList() {



    const categories = ["All", "HTML", "CSS"]


    return (
        <>
            <section className="pt-10 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800">
                        Discover Helpful Guides & Updates
                    </h2>
                    <p className="text-center text-gray-500 mt-2">
                        Learn & improve your skills with helpful guides.
                    </p>

                    <BlogFilters placeholder="Search Blogs..." categories={categories} />

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                        {blogs.map((blog, index) => (
                            <BlogCard key={index} {...blog} />
                        ))}
                    </div>
                </div>

            </section>

        </>

    )
}

export default BlogsList
