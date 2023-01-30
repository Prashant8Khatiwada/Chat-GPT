import { useState } from "react";
import { BiSend } from "react-icons/bi";
import { fetchResponse } from "../gptapi/FetchFromApi";
function TextArea({ sendMessage }) {
  const [value, setValue] = useState("");

  const handleSubmit = async () => {
    if (value === "") {
      return;
    }
    sendMessage({ user: "me", message: `${value}` });
    setValue("");
  };
  return (
    <div className="textbox">
      <textarea
        row="1"
        className="textarea"
        type="text"
        value={value}
        placeholder="Type Your Text Here..."
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          e.keyCode === 13 && e.shiftKey === false && handleSubmit();
        }}
        required
      />
      <BiSend className="send_icon" onClick={handleSubmit} />
    </div>
  );
}

export default TextArea;
