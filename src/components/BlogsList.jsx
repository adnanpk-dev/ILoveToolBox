
import { useEffect, useState } from "react";
import blogs from "../blogs/blogs";
import BlogCard from "./BlogCard"
import BlogFilters from "./BlogFilters"






function BlogsList() {


    const [searchValue, setSearchValue] = useState('');
    const categories = ["All", "HTML", "CSS"];
    const [fetchedBlogs, setFetchedBlogs] = useState(blogs)

    const [selectedCategory, setSelectedCategory] = useState("All");


    useEffect(() => {
        let filtered = blogs;

        if (searchValue.trim()) {
            filtered = filtered.filter(blog =>
                blog.title.toLowerCase().includes(searchValue.toLowerCase()) || blog.description.toLowerCase().includes(searchValue.toLowerCase()))
        }

        if(selectedCategory !== "All"){
            filtered = filtered.filter(blog => blog.category === selectedCategory);
        }

        setFetchedBlogs(filtered)

    }, [searchValue, selectedCategory])


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

                    <BlogFilters placeholder="Search Blogs..." categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} searchValue={searchValue} setSearchValue={setSearchValue} />

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                        {fetchedBlogs.length > 0 ? (
                            fetchedBlogs.map((blog, index) => (
                                <BlogCard key={index} {...blog} />
                            ))
                        )
                            : (
                                <p className="text-gray-500 col-span-full text-center">
                                    Post Not found
                                </p>
                            )}

                    </div>
                </div>

            </section>

        </>

    )
}

export default BlogsList
