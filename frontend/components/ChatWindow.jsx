"use client";
import { useSelector } from "react-redux";
import styles from "../styles/ChatWindow.module.css";

export default function ChatWindow() {
  const messages = useSelector((state) => state.messages.items || []);

  return (
    <div className={styles.chatWindow}>
      <h2 className={styles.chatTitle}>Chat</h2>

      <div className={styles.messagesContainer}>
        {messages.map((msg, index) => (
          <div key={index} className={styles.message}>
            {msg}
          </div>
        ))}
      </div>
    </div>
  );
}
