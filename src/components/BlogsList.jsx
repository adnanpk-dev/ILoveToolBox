import BlogCard from "./BlogCard"





function BlogsList() {

    const blogs = [
        {
            image: "https://lh5.googleusercontent.com/NJ7F7DD3MZn7lKqx0z9PEfktyjLj4DG1LyUVry_uJ7wZw4AOQAFmv6shKwF6LnxbAZirlLr5ZVuUhgmXi8zh0YvFx0JnSJ52Wv2CONib6197G3qw029CEautW4bOmQymXHTwmKEzlg14XgMWefAW52s",
            title: "How to Build a Web Tool in 2025",
            description: "Learn how to create web tools using React, Tailwind & more...",
            slug: "build-web-tool",
            category: "Web",
            date: "2/11/2025"
        },
        {
            image: "https://lh5.googleusercontent.com/NJ7F7DD3MZn7lKqx0z9PEfktyjLj4DG1LyUVry_uJ7wZw4AOQAFmv6shKwF6LnxbAZirlLr5ZVuUhgmXi8zh0YvFx0JnSJ52Wv2CONib6197G3qw029CEautW4bOmQymXHTwmKEzlg14XgMWefAW52s",
            title: "How to Build a Web Tool in 2025",
            description: "Learn how to create web tools using React, Tailwind & more...",
            slug: "build-web-tool",
            category: "Web",
            date: "2/11/2025"
        },
        {
            image: "https://lh5.googleusercontent.com/NJ7F7DD3MZn7lKqx0z9PEfktyjLj4DG1LyUVry_uJ7wZw4AOQAFmv6shKwF6LnxbAZirlLr5ZVuUhgmXi8zh0YvFx0JnSJ52Wv2CONib6197G3qw029CEautW4bOmQymXHTwmKEzlg14XgMWefAW52s",
            title: "How to Build a Web Tool in 2025",
            description: "Learn how to create web tools using React, Tailwind & more...",
            slug: "build-web-tool",
            category: "Web",
            date: "2/11/2025"
        },
        {
            image: "https://lh5.googleusercontent.com/NJ7F7DD3MZn7lKqx0z9PEfktyjLj4DG1LyUVry_uJ7wZw4AOQAFmv6shKwF6LnxbAZirlLr5ZVuUhgmXi8zh0YvFx0JnSJ52Wv2CONib6197G3qw029CEautW4bOmQymXHTwmKEzlg14XgMWefAW52s",
            title: "How to Build a Web Tool in 2025",
            description: "Learn how to create web tools using React, Tailwind & more...",
            slug: "build-web-tool",
            category: "Web",
            date: "2/11/2025"
        }
    ]


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
