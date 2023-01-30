import React from "react";

function ChatBox({ chat }) {
  return (
    <>
      <div className="chatbox">
        {chat.map((message, idx) => {
          return (
            <div
              key={idx}
              className={`${message.sender === "me"}` ? "user_box" : "ai_box"}
            >
              <div
                className={
                  `"message" ${message.sender === "me"}`
                    ? "user_message"
                    : "ai_message"
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
