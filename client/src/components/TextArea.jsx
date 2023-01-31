import { useState } from "react";
import { BiSend } from "react-icons/bi";
import Loader from "./Loader";
function TextArea({ sendMessage, loading }) {
  const [value, setValue] = useState("");

  const handleSubmit = async () => {
    if (value === "") {
      return;
    }
    sendMessage({ sender: "me", message: `${value}` });
    setValue("");
  };
  return (
    <div className="textbox">
      {loading ? (
        <Loader />
      ) : (
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
      )}
      <BiSend className="send_icon" onClick={handleSubmit} />
    </div>
  );
}

export default TextArea;
