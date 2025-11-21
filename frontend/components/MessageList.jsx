export default function MessageList({ messages }) {
    return (
      <div className="space-y-2">
        {messages.length === 0 && (
          <p className="text-gray-400 text-sm">No messages yet...</p>
        )}
  
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className="bg-gray-100 p-2 rounded shadow-sm text-gray-800 break-all"
          >
            {msg.text}
          </div>
        ))}
      </div>
    );
  }
  