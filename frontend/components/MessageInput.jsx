"use client";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSuggestions, clearSuggestions } from "../store/suggestionsSlice";
import { addMessage } from "../store/messagesSlice";       // ✅ FIXED
import SuggestionList from "./SuggestionList";
import { getCurrentToken } from "../utils/caretUtils";

export default function MessageInput() {
  const [text, setText] = useState("");
  const [caret, setCaret] = useState(0);
  const textareaRef = useRef(null);
  const dispatch = useDispatch();
  const suggestions = useSelector((s) => s.suggestions?.items || []);

  // Update caret
  const updateCaret = (e) => {
    const pos = e.target.selectionStart;
    setCaret(pos);
  };

  // ✅ FIXED handleSend
  const handleSend = () => {
    if (!text.trim()) return;
    console.log("Sending message:", text);

    dispatch(addMessage(text));      // ✅ Works now
    setText("");
    dispatch(setSuggestions([]));    // ✅ Correct Redux way
  };

  // Fetch suggestions
  useEffect(() => {
    try {
      const token = getCurrentToken(text || "", caret || 0);

      if (!token) {
        dispatch(clearSuggestions());
        return;
      }

      const trigger = token[0];
      const query = token.slice(1);

      const url = `http://localhost:7001/api/tags?search=${encodeURIComponent(
        query
      )}`;

      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          dispatch(setSuggestions(Array.isArray(data) ? data : []));
        })
        .catch(() => dispatch(clearSuggestions()));
    } catch (err) {
      dispatch(clearSuggestions());
    }
  }, [text, caret, dispatch]);

  const onSelectSuggestion = (item) => {
    const token = getCurrentToken(text || "", caret || 0) || "";
    const start = caret - token.length;
    const before = text.slice(0, start);
    const after = text.slice(caret);
    const inserted = item.label;
    const newText = before + inserted + " " + after;

    setText(newText);

    const newPos = start + inserted.length + 1;
    setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.focus();
        textareaRef.current.setSelectionRange(newPos, newPos);
      }
      setCaret(newPos);
    }, 0);

    dispatch(clearSuggestions());
  };

  return (
    <div className="relative w-full p-4 border-t bg-white">
      <div className="flex gap-3">
        <textarea
          ref={textareaRef}
          className="flex-1 border p-3 rounded"
          value={text}
          placeholder="Type a message... use @ or # to tag"
          onChange={(e) => {
            setText(e.target.value);
            setCaret(e.target.selectionStart);
          }}
          onClick={updateCaret}
          onKeyUp={updateCaret}
          rows={3}
        />

        {/* SEND BUTTON FIXED */}
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 active:scale-95 transition"
          onClick={handleSend}
        >
          Send
        </button>
      </div>

      {suggestions.length > 0 && (
        <SuggestionList
          suggestions={suggestions}
          onSelect={onSelectSuggestion}
        />
      )}
    </div>
  );
}
