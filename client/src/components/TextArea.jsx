import { useState } from "react";
import { BiSend } from "react-icons/bi";
function TextArea({ sendMessage }) {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (value === "") {
      return;
    }
    sendMessage({ message: value });
    setValue("");
  };
  return (
    <div className="textbox">
      <textarea
        row="5"
        className="textarea"
        type="text"
        value={value}
        placeholder="Type Your Text Here..."
        onChange={(e) => setValue(e.target.value)}
        required
      />
      <BiSend className="send_icon" onClick={handleSubmit} />
    </div>
  );
}

export default TextArea;
