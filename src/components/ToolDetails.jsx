

export default function ToolDetails({ details }) {
  return (
    <div className="mt-12 space-y-10">
      {details.map((sec, idx) => (
        <div key={idx}>
          {sec.heading && (
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              {sec.heading}
            </h2>
          )}

          {sec.description && (
            <p className="text-gray-700 leading-relaxed mb-3">
              {sec.description}
            </p>
          )}

          {/* List / Steps */}
          {sec.steps && (
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {sec.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
