import React, { useState } from "react";
import GetDefinition from "./getDefinition";

let selectedDiv;
let selectedDivObject;

const GetSelectionHandler = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedWord, setSelectedWord] = useState();

  const handleMouseUp = () => {
    // console.log(`Selected text: ${document.getSelection().toString()}`);
    setSelectedWord(document.getSelection().toString());
    let selectedWord2 = document.getSelection();
    setIsClicked(true);
    selectedDiv = selectedWord2.getRangeAt(0).getBoundingClientRect();

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
      <div onMouseUp={handleMouseUp}>
        Electric vehicle battery production is an increasingly big business,
        with China and the United States leading the industry. Still, to not get
        left behind, Europe has been investing in production, and now there’s an
        unlikely hot spot for battery production, according to a report
        published Monday by Financial Times.
      </div>
      <GetDefinition
        isClicked={isClicked}
        selectedWord={selectedWord}
        selectedDiv={selectedDivObject}
      />
    </>
  );
};

export default GetSelectionHandler;
