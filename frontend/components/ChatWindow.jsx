"use client";
import { useSelector } from "react-redux";

export default function ChatWindow() {
  const messages = useSelector((state) => state.messages.items || []);

  return (
    <div className="w-full max-w-2xl mx-auto border rounded shadow p-4 mt-6 bg-gray-50">
      <h2 className="text-lg font-bold mb-3">Chat</h2>

      <div className="space-y-3 max-h-96 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className="p-3 rounded-lg bg-green-100 text-gray-900 shadow-sm"
          >
            {msg}
          </div>
        ))}
      </div>
    </div>
  );
}
