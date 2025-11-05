import { useState, useEffect } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function HtmlCssToTailwind() {
  const [inputHTML, setInputHTML] = useState(`<style>
.box { width: 200px; height: 200px; background: red; margin: 20px; }
</style>
<div class="box"></div>`);
  const [convertedHTML, setConvertedHTML] = useState("");

  useEffect(() => {
    convertToTailwind();
    // eslint-disable-next-line
  }, [inputHTML]);

  const convertToTailwind = () => {
    const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
    const styleContent = inputHTML.match(styleRegex);

    let htmlOnly = inputHTML.replace(styleRegex, "").trim();

    const styleMap = extractCSS(styleContent?.[0] || "");

    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlOnly, "text/html");
    const allElements = doc.body.querySelectorAll("*");

    allElements.forEach((el) => {
      let classes = [];
      let selector = [];

      if (el.className) selector.push(`.${el.className}`);
      if (el.id) selector.push(`#${el.id}`);
      selector.push(el.tagName.toLowerCase());

      selector.forEach((s) => {
        if (styleMap[s]) {
          classes.push(...cssToTailwind(styleMap[s]));
        }
      });

      if (classes.length > 0) {
        el.setAttribute("class", classes.join(" "));
      }
    });

    setConvertedHTML(doc.body.innerHTML);
  };

  const extractCSS = (styleBlock) => {
    const result = {};
    const clean = styleBlock.replace(/<\/?style>/g, "");
    const rules = clean.match(/[^{]+\{[^}]*\}/g) || [];

    rules.forEach((rule) => {
      const selector = rule.split("{")[0].trim();
      const props = rule.split("{")[1].replace("}", "").trim().split(";");

      result[selector] = {};
      props.forEach((p) => {
        if (p.trim()) {
          const [key, value] = p.split(":");
          result[selector][key.trim()] = value.trim();
        }
      });
    });

    return result;
  };

  const cssToTailwind = (styles) => {
    const map = {
      width: (v) => `w-[${v}]`,
      height: (v) => `h-[${v}]`,
      background: (v) => `bg-[${v}]`,
      "background-color": (v) => `bg-[${v}]`,
      margin: (v) => `m-[${v}]`,
      "margin-top": (v) => `mt-[${v}]`,
      "margin-bottom": (v) => `mb-[${v}]`,
      "margin-left": (v) => `ml-[${v}]`,
      "margin-right": (v) => `mr-[${v}]`
    };

    return Object.keys(styles)
      .map((key) => (map[key] ? map[key](styles[key]) : null))
      .filter(Boolean);
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        HTML + CSS → Tailwind Converter
      </h1>

      {/* HTML+CSS INPUT */}
      <label className="font-semibold text-gray-700">HTML + CSS Input</label>
      <textarea
        className="w-full h-48 border rounded p-3 font-mono mt-1"
        value={inputHTML}
        onChange={(e) => setInputHTML(e.target.value)}
      />

      {/* TAILWIND OUTPUT */}
      <div className="mt-6">
        <label className="font-semibold text-gray-700">Tailwind Output</label>
        <SyntaxHighlighter language="html" style={atomOneDark}>
          {convertedHTML || "<!-- Converted Tailwind Code -->"}
        </SyntaxHighlighter>

        <button
          className="mt-3 py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => navigator.clipboard.writeText(convertedHTML)}
        >
          Copy Code
        </button>
      </div>

      {/* Notes */}
      <p className="text-xs text-gray-500 mt-4">
        ⚠️ Supports basic CSS: width, height, margin, background.<br />
        🔥 More CSS features & cleaning logic will be added later!
      </p>
    </div>
  );
}
