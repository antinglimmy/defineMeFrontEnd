import React, { useEffect, useState } from "react";
import axios from "axios";
import "./pages.css";

let definitions;
let definitionArray = [];

const GetDefinition = ({ isClicked, selectedWord, selectedDiv }) => {
  // let metaDefinition = [];
  const [metaDefinition, setMetaDefinition] = useState([]);
  const [selected, setSelected] = useState(false);
  const [showButton, setShowButton] = useState(true);

  // async function dictionaryRequest() {

  function dictionaryRequest() {
    return axios
      .get(
        `${process.env.REACT_APP_DICTIONARY_URL}/${selectedWord}?key=${process.env.REACT_APP_DICTIONARY_API_KEY}`
      )
      .then((res) => {
        // metaDefinition = res.data;
        setMetaDefinition(res.data);
        console.log(res.data);
        // showDefinition();
        console.log("&&&");
        // console.log("MetaData", res.data);
      })
      .catch((err) => console.log(err));
  }

  // function dictionaryRequest () {
  //   return new Promise(function (resolve, reject) {
  //     resolve(
  //     axios
  //     .get(
  //       `${process.env.REACT_APP_DICTIONARY_URL}/${selectedWord}?key=${process.env.REACT_APP_DICTIONARY_API_KEY}`
  //     )
  //     .then((res) => {
  //       setMetaDefinition(res.data);
  //       // console.log("MetaData", res.data);
  //     })
  //     .catch((err) => console.log(err));
  //     )

  //   });
  // }

  // dictionaryRequest().then(function (showDefinition) {
  //   const metaDefinitionSliced = metaDefinition.slice(0, 2);
  //   // console.log(metaDefinitionSliced);

  //   for (let i = 0; i < metaDefinitionSliced.length; i++) {
  //     const currentDefinition = metaDefinitionSliced[i].shortdef[0];
  //     definitionArray.push(currentDefinition);
  //   }

  //   console.log(definitionArray);
  // });
  async function dictionaryRequest2() {
    const dictionaryRequestOutput = await dictionaryRequest();
    return dictionaryRequestOutput;
  }
  async function showDefinition() {
    const dictionaryRequestOutput2 = await dictionaryRequest2();
    const metaDefinitionSliced = metaDefinition.slice(0, 2);
    for (let i = 0; i < metaDefinitionSliced.length; i++) {
      const currentDefinition = metaDefinitionSliced[i].shortdef[0];
      definitionArray.push(currentDefinition);
    }

    console.log(definitionArray);
    setSelected(true);

    // setShowButton(false);
  }

  // const displayDefinitions = () => {
  //   definitionArray.map((entry) => {
  //     return <div>{entry} </div>;
  //   });
  //   //   setShowButton(false);
  //   //   setSelected(false);
  //   //   console.log(selected, "selected Line 44");
  // };

  const getDefinition = () => {
    // dictionaryRequest();
    // dictionaryRequest2();
    showDefinition();

    console.log(selected, "selected Line 51");
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

      {/* <div>{displayDefinitions()}</div> */}
      {/* <div>{selected} -- selected value here</div>
      {selected && <div>{displayDefinitions()}</div>} */}
      {selected && (
        <div
          className="definitionPopUp"
          style={{
            left: selectedDiv.left - 0,
            top: selectedDiv.top - 40,
          }}
        >
          {definitionArray.map((entry) => {
            return <div>{entry} </div>;
          })}
          {console.log(selected, definitionArray, "selected Line 79")}
        </div>
      )}
    </>
    // )
  );
};

export default GetDefinition;
