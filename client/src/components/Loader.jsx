import React from "react";

function Loader() {
  return (
    <>
      {" "}
      <div className="loading">
        <span></span>
        <span></span>
        <span></span>
      </div>
      {/* for text area  */}
      <textarea
        row="1"
        className="textarea"
        type="text"
        placeholder="Type Your Text Here..."
        required
      />
    </>
  );
}

export default Loader;
