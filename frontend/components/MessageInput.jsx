"use client";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSuggestions, clearSuggestions } from "../store/suggestionsSlice";
import { addMessage } from "../store/messagesSlice";
import SuggestionList from "./SuggestionList";
import { getCurrentToken } from "../utils/caretUtils";
import styles from "../styles/MessageInput.module.css";

export default function MessageInput() {
  const [text, setText] = useState("");
  const [caret, setCaret] = useState(0);
  const textareaRef = useRef(null);
  const dispatch = useDispatch();
  const suggestions = useSelector((s) => s.suggestions?.items || []);

  const updateCaret = (e) => {
    const pos = e.target.selectionStart;
    setCaret(pos);
  };

  const handleSend = () => {
    if (!text.trim()) return;
    console.log("Sending message:", text);

    dispatch(addMessage(text));      // ✅ Works now
    setText("");
    dispatch(setSuggestions([]));    // ✅ Correct Redux way
  };

  useEffect(() => {
    try {
      const token = getCurrentToken(text || "", caret || 0);

      if (!token) {
        dispatch(clearSuggestions());
        return;
      }

      const trigger = token[0];
      const query = token.slice(1);
      const url = `http://localhost:7001/api/tags?search=${encodeURIComponent(query)}`;

      fetch(url)
        .then((res) => res.json())
        .then((data) => dispatch(setSuggestions(Array.isArray(data) ? data : [])))
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
    const newText = before + item.label + " " + after;
    setText(newText);

    const newPos = start + item.label.length + 1;
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
    <div className={styles.messageInputContainer}>
      <div className={styles.inputRow}>
        <textarea
          ref={textareaRef}
          className={styles.textarea}
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
        <button className={styles.sendButton} onClick={handleSend}>
          Send
        </button>
      </div>

      {suggestions.length > 0 && (
        <div className={styles.suggestionsDropdown}>
          <SuggestionList suggestions={suggestions} onSelect={onSelectSuggestion} />
        </div>
      )}
    </div>
  );
}
