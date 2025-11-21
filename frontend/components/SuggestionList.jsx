export default function SuggestionList({ suggestions = [], onSelect }) {
    return (
      <div className="absolute bg-white border rounded shadow-md w-60 mt-1 z-50">
        {suggestions.map((item, idx) => (
          <div
            key={item.id ?? idx}
            className="p-2 hover:bg-gray-100 cursor-pointer"
            onMouseDown={(e) => {
              // onMouseDown prevents textarea blur before click handler runs
              e.preventDefault();
              if (onSelect) onSelect(item);
            }}
          >
            {/* show label (backend provides label) */}
            <div className="font-medium">{item.label}</div>
            {item.trigger && <div className="text-xs text-gray-400">trigger: {item.trigger}</div>}
          </div>
        ))}
  
        {suggestions.length === 0 && (
          <div className="p-2 text-sm text-gray-500">No suggestions</div>
        )}
      </div>
    );
  }
  