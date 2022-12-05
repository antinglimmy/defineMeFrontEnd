import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import "./pages.css";

let definitions;
let definitionArray = [];
let metaDefinitionSliced = [];

const GetDefinition = ({ isClicked, selectedWord, selectedDiv }) => {
  // let metaDefinition = [];
  const [metaDefinition, setMetaDefinition] = useState([]);
  const [selected, setSelected] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [savedWords, setSavedWords] = useState([]);

  function dictionaryRequest() {
    axios
      .get(
        `${process.env.REACT_APP_DICTIONARY_URL}/${selectedWord}?key=${process.env.REACT_APP_DICTIONARY_API_KEY}`
      )
      .then((res) => {
        metaDefinitionSliced = res.data.slice(0, 2);
        // metaDefinition = res.data;
        // setMetaDefinition(res.data);
        console.log(metaDefinitionSliced);
        // showDefinition();
        console.log("&&& Line 25 dictionaryRequest");
      })
      .then((res) => {
        showDefinition();
      })

      .catch((err) => console.log(err));
    //callback of setstate, useeffect, trigger something when state is set, then trigger the second .then, useEffect show definition
    // return metaDefinition;
  }

  // async function dictionaryRequest2() {
  //   const dictionaryRequestOutput = await dictionaryRequest();
  //   return dictionaryRequestOutput;
  // }

  function showDefinition() {
    // const dictionaryRequestOutput2 = await dictionaryRequest2();
    // const metaDefinitionSliced = metaDefinition.slice(0, 2);
    for (let i = 0; i < metaDefinitionSliced.length; i++) {
      const currentDefinition = metaDefinitionSliced[i].shortdef[0];
      definitionArray.push(currentDefinition);
    }

    console.log(definitionArray, "Line 49 showDefinition");
    setSelected(true);

    // setShowButton(false);
  }
  // const showDefinition3 = useCallback(async () => {
  //   // send the actual request
  //   const metaDefinition2 = await dictionaryRequest();
  //   if (metaDefinition2) {
  //     showDefinition();
  //   }
  //   console.log(metaDefinition2);
  // }, []); // update the callback if the state changes

  const getDefinition = () => {
    dictionaryRequest();
    // dictionaryRequest2();
    // showDefinition();
    // showDefinition3();

    console.log(selected, "selected Line 69, getDefinition");
  };

  const saveWord = () => {
    setSavedWords([...savedWords, selectedWord]);
    console.log(savedWords);
  };

  return (
    <>
      {isClicked && (
        <button
          onClick={getDefinition}
          className={showButton ? "DefineMe" : "NotDefineMe"}
          style={{
            left: selectedDiv.left - 0,
            top: selectedDiv.top - 40,
          }}
        >
          Define Me
        </button>
      )}

      {selected && (
        <div
          className="definitionPopUp"
          style={{
            left: selectedDiv.left - 0,
            top: selectedDiv.top - 60,
          }}
        >
          {definitionArray.map((entry) => {
            return <div>{entry} </div>;
          })}
          {console.log(selected, definitionArray, "Line 103, return function")}
          <button onClick={saveWord}>Save Word</button>
        </div>
      )}
    </>
    // )
  );
};

export default GetDefinition;
