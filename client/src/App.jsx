import "./App.css";
import { React, useState } from "react";
import Header from "./components/Header";
import ChatBox from "./components/ChatBox";
import TextArea from "./components/TextArea";
import { fetchResponse } from "./gptapi/FetchFromApi";
import { useMutation } from "react-query";
function App() {
  const [chat, setChat] = useState([]);
  const mutation = useMutation({
    mutationFn: () => {
      return fetchResponse(chat);
    },
    onSuccess: (data) => console.log(data),
    onError: () => console.log("error"),
  });

  const sendMessage = async (message) => {
    await Promise.resolve(setChat((prev) => [...prev, message]));
    mutation.mutate();
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
