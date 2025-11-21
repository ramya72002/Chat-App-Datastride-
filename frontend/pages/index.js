// frontend/pages/index.js
import ChatWindow from "../components/ChatWindow";
import MessageInput from "../components/MessageInput";
export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <ChatWindow />
      <MessageInput />
    </div>
  );
}
