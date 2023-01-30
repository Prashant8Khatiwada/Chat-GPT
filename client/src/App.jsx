import "./App.css";
import { React, useState } from "react";
import Header from "./components/Header";
import ChatBox from "./components/ChatBox";
import TextArea from "./components/TextArea";
function App() {
  const [chat, setChat] = useState([]);
  const sendMessage = async (message) => {
    await Promise.resolve(setChat((prev) => [...prev, message]));
  };
  return (
    <>
      <Header />
      <ChatBox chat={chat} />
      <TextArea sendMessage={sendMessage} />
    </>
  );
}

export default App;
