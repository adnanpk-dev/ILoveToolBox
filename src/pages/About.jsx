export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">
        About <span className="text-indigo-600">ILoveToolBox</span>
      </h1>

      <p className="text-gray-700 text-lg leading-relaxed text-center mb-10">
        ILoveToolBox is an <span className="font-semibold">all-in-one web toolkit</span> built for
        developers, designers, and creators. You can convert, edit, optimize,
        and generate content — all in one place. Whether you need a color tool, text analyzer, or converter, ILoveToolBox makes your
        workflow faster and easier.
      </p>

      <div className="bg-indigo-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
          🌍 Open Source Mission
        </h2>
        <p className="text-gray-700">
          ILoveToolBox is an <strong>open-source</strong> project created for the
          developer community. Our goal is to make everyday web tasks simple and
          accessible for everyone. You’re free to explore, use, and improve this
          project under open collaboration.
        </p>
      </div>

      <div className="bg-gray-50 p-6 rounded-xl text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          🤝 Contribute
        </h2>
        <p className="text-gray-700 mb-4">
          We welcome developers and contributors! You can report issues, suggest
          new tools, or directly contribute code to our GitHub repository.
        </p>
        <a
          href="https://github.com/yourusername/mytools"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-indigo-600 text-white px-5 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
        >
          ⭐ Contribute on GitHub
        </a>
      </div>

      <div className="mt-12 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} ILoveToolBox — Built with ❤️ by the Open Web
          Community.
        </p>
      </div>
    </div>
  );
}
