import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [textLength, setTextLength] = useState(0);

  const clickUpHandler = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to uppercase.', "success");
  };

  const clickLowerHandler = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to lowercase.', "warning");
  };

  const onChangeHandler = (e) => {
    setText(e.target.value);
    console.log(e.target.value);
    wordCount(e.target.value);
  };

  const clickClearHandler = () => {
    let newText = "";
    setText(newText);
  };

  const clickCaptalizeWordsHandler = () => {
    let newTextArray = text.split(" ");
    newTextArray = newTextArray.map((element) => {
      return element.charAt(0).toUpperCase() + element.slice(1);
    });
    var newValue = newTextArray.join(" ");
    setText(newValue);
  };

  const reverseTextHandler = () => {
    var splitString = text.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    setText(joinArray);
  };

  const copyHandler = () => {
    const text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const wordCount = (str) => {
   setTextLength(str.trim().split(/\s+/).length);
  }

  const removeExtraSpacesHandler = () => {
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  //text = "1" //wrong way
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === "light" ? "white" : "gray",
              color: props.mode === "dark" ? "white" : "black",
            }}
            className="form-control"
            onChange={onChangeHandler}
            value={text}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={clickUpHandler}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={clickLowerHandler}>
          Convert To lowecase
        </button>
        <button className="btn btn-primary mx-1" onClick={clickClearHandler}>
          Clear
        </button>
        <button className="btn btn-primary mx-1" onClick={reverseTextHandler}>
          Reverse Words
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={clickCaptalizeWordsHandler}
        >
          Capitalize Words
        </button>
        <button className="btn btn-primary mx-1" onClick={copyHandler}>
          Copy Text
        </button>

        <button
          className="btn btn-primary mx-1 my-2"
          onClick={removeExtraSpacesHandler}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          {textLength} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes</p>
        <h2>Preview</h2>
        {text.length > 0
          ? text
          : "Enter something in the textbox above to preview it here"}
      </div>
    </>
  );
}
