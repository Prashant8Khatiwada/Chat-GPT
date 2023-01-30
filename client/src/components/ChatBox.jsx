import React from "react";

function ChatBox() {
  return (
    <>
      <div className="chatbox">
        <div className="user_box">
          <div className="message user_message">
            <p>Hey Chat GPT, Can you help me?</p>
          </div>
        </div>
        <div className="ai_box">
          <div className="message ai_message">
            <p>yeah, I can help you with anything </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatBox;
