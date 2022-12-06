import axios from "axios";

const SaveWord = ({ selectedWord }) => {


  const saveWordOnClick = async (selectedWord) => {

    let wordStatus = {
      userId: userId,
      saved: true,
   
    };

  await axios
      .put(`${process.env.REACT_APP_BACKENDURL}/${userId}`, wordStatus)
      .then((res) => console.log("Posted", res, wordStatus))
      .catch((err) => console.log(err));
    // navigate(`/home`);
    // alert("Item bought! congrats!");

  };


  };

  return <button onClick={saveWordOnClick}>Save Word</button>;
};

export default SaveWord;