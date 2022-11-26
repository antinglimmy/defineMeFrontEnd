import React, { useEffect, useState } from "react";
import axios from "axios";
import "./pages.css";
// import DefinitionPopUp from "./definitionPopUp";
let definitions;
const definitionArray = [];

const GetDefinition = ({ isClicked, selectedWord, selectedDivObject }) => {
  const [metaDefinition, setMetaDefinition] = useState([]);
  const [definition, setDefinition] = useState();
  const [selected, setSelected] = useState();

  const dictionaryRequest = () => {
    // isClicked = false;
    // useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_DICTIONARY_URL}/${selectedWord}?key=${process.env.REACT_APP_DICTIONARY_API_KEY}`
      )
      .then((res) => {
        setMetaDefinition(res.data);
        console.log("MetaData", res.data);
        // isClicked = false;
      })
      .catch((err) => console.log(err));
  };
  // }, []);

  const showDefinition = () => {
    // console.log("MetaDefinition", metaDefinition);
    const metaDefinitionSliced = metaDefinition.slice(0, 2);
    console.log(metaDefinitionSliced);
    // console.log(metaDefinitionSliced[0]);
    // console.log(metaDefinitionSliced[0].shortdef[0]);
    // console.log(metaDefinitionSliced[1].shortdef[0]);

    for (let i = 0; i < metaDefinitionSliced.length; i++) {
      const currentDefinition = metaDefinitionSliced[i].shortdef[0];
      definitionArray.push(currentDefinition);
    }

    console.log(definitionArray);

    // metaDefinitionSliced.map((entry) => {
    //   const definitionsSeparate = entry.shortdef;
    //   definitionArray.push(definitionsSeparate);
    //   const definitionArray2 = definitionArray.flat(1);
    //   console.log(definitionArray2);
    //   // console.log("definitions", definitions);
    //   // const definitionCompiled = definitionsSeparate.flatMap((num) => num);
    //   // console.log("definitionCompiled", definitionCompiled);
    // });
  };
  // hawkerNames = hawkerDetails.map((hawkerName) => {
  //   const hawkerNameList = hawkerName.Name;
  //   return hawkerNameList;
  // });
  const displayDefinitions = definitionArray.map((entry) => {
    // return <div key="entry">{entry} </div>;
    return <div>{entry} </div>;
  });

  const getDefinition = () => {
    dictionaryRequest();
    showDefinition();
    setSelected(true);
  };

  return (
    // isClicked && (
    <>
      {isClicked && <button onClick={getDefinition}>Define Me</button>}
      <div>Definition here</div>
      {selected && (
        <div
          className="definitionPopUp"
          style={{
            selectedDivObject: selectedDivObject.left + 50,
            top: selectedDivObject.left + 50,
          }}
        >
          {displayDefinitions}
        </div>
      )}
      {/* {displayDefinitions} */}
      {/* <DefinitionPopUp definitions={definitions} /> */}
    </>
    // )
  );
};

export default GetDefinition;
