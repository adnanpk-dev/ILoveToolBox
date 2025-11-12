import { useEffect, useState } from "react";





export default function WordCounter() {

  const [text,setText] = useState('');
  const [words,setWords] = useState(0);
  const [char,setChar] = useState(0);
  const [space,setSpace] = useState(0);
  const [nospace,setNospace] = useState(0);


  useEffect(()=>{
     const count_words = text.trim() === ""
    ? 0
    : text.trim().split(/\s+/).length;

    const count_char = text.trim() === "" ? 0 
    : text.trim().split("").length;

    const count_spaces = text.trim() === "" ? 0
    : text.trim().split(/\s/g).length - 1;

    const count_nspace = text.trim() === "" ? 0
    : count_char - count_spaces;

    

  setWords(count_words);
  setChar(count_char);
  setSpace(count_spaces);
  setNospace(count_nspace)
  },[text])


  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-900 text-center">
        Word Counter
      </h1>
      <p className="text-gray-600 text-center max-w-2xl mx-auto mt-2">
        Count words, characters & spaces instantly.
      </p>

      {/* Input Box */}
      <div className="mt-8">
        <textarea
          className="w-full h-64 border border-gray-300 rounded-lg p-4 text-lg leading-relaxed 
          focus:ring-2 focus:ring-indigo-500 outline-none"
          placeholder="Type or paste your text here..."
          value={text}
          onChange={(e)=>setText(e.target.value)}
        ></textarea>
      </div>

      {/* Result Boxes */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-8">

        {/* Words */}
        <div className="p-4 bg-white border rounded-lg shadow text-center">
          <p className="text-sm text-gray-500">Words</p>
          <p className="text-xl font-bold" id="words-count">{words}</p>
        </div>

        {/* Characters */}
        <div className="p-4 bg-white border rounded-lg shadow text-center">
          <p className="text-sm text-gray-500">Characters</p>
          <p className="text-xl font-bold" id="characters-count">{char}</p>
        </div>

        {/* Spaces */}
        <div className="p-4 bg-white border rounded-lg shadow text-center">
          <p className="text-sm text-gray-500">Spaces</p>
          <p className="text-xl font-bold" id="spaces-count">{space}</p>
        </div>

        {/* Characters Without Spaces */}
        <div className="p-4 bg-white border rounded-lg shadow text-center">
          <p className="text-sm text-gray-500">Chars (no spaces)</p>
          <p className="text-xl font-bold" id="chars-no-spaces">{nospace}</p>
        </div>

      </div>

    </div>
  );
}
