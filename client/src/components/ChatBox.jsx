import React from "react";

function ChatBox({ chat }) {
  return (
    <>
      <div className="chatbox">
        {chat.map((message, idx) => {
          return (
            <div key={idx} className="user_box">
              <div className="message user_message">
                <p>{message.message}</p>
              </div>
            </div>
          );
        })}

        {/* ai box chat  */}
        {/* <div className="ai_box">
          <div className="message ai_message">
            <p>yeah, I can help you with anything </p>
          </div>
        </div>*/}
      </div>
    </>
  );
}

export default ChatBox;
