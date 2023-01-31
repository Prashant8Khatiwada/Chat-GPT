import { useRef, useEffect } from "react";
import autoAnimate from "@formkit/auto-animate";

function ChatBox({ chat }) {
  const parent = useRef(null);
  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);
  return (
    <>
      <div className="chatbox" ref={parent}>
        {chat.map((message, idx) => {
          return (
            <div
              key={idx}
              className={message.sender === "me" ? "user_box" : "ai_box"}
            >
              <div
                className={
                  message.sender === "me"
                    ? "message user_message"
                    : "message ai_message"
                }
              >
                <p>{message.message}</p>
              </div>
            </div>
          );
        })}

        {/* ai box chat  */}
        {/* <div className={`${message.sender === "ai"}` && "ai_box"}>
          <div className="message ai_message">
            <p>message.message </p>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default ChatBox;
