import React from "react";
import { BiSend } from "react-icons/bi";
function TextArea() {
  return (
    <div className="textbox">
      <textarea
        row="5"
        className="textarea"
        type="text"
        placeholder="Type Your Text Here..."
        required
      />
      <BiSend className="send_icon" />
    </div>
  );
}

export default TextArea;
