import React, { useState } from "react";
import GetDefinition from "./getDefinition";

let selectedDiv;
let selectedDivObject;

const GetSelectionHandler = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedWord, setSelectedWord] = useState();

  const handleMouseUp = () => {
    console.log(`Selected text: ${document.getSelection().toString()}`);
    setSelectedWord(document.getSelection().toString());
    let selectedWord2 = document.getSelection();
    setIsClicked(true);
    selectedDiv = selectedWord2.getRangeAt(0).getBoundingClientRect();
    console.log(selectedDiv);

    // popUpDiv.style.top = `calc(${selectedDiv.top}px - 48px)`;
    // popUpDiv.style.left = `calc(${selectedDiv.left}px + calc(${selectedDiv.width}px / 2) - 40px)`;
    // popUpDiv["text"] = text;

    const getBoundingClientRect = () => {
      return {
        top: selectedDiv.top,
        right: selectedDiv.right,
        bottom: selectedDiv.bottom,
        left: selectedDiv.left,
        width: selectedDiv.width,
        height: selectedDiv.height,
        x: selectedDiv.x,
        y: selectedDiv.y,
      };
    };

    selectedDivObject = getBoundingClientRect(selectedDiv);
    console.log(selectedDivObject);
  };

  return (
    <>
      <div onMouseUp={handleMouseUp}>Text to test stuff</div>
      <GetDefinition
        isClicked={isClicked}
        selectedWord={selectedWord}
        selectedDiv={selectedDivObject}
      />
    </>
  );
};

export default GetSelectionHandler;
