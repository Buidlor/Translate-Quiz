
import Header from "../components/Header";
import Body from "../components/Body";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const showAll = () => {    

  const [words, setWords] = useState([]);
  const [randomWord, setRandomWord] = useState({});
  const [score, setScore] = useState(0);
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem("x-auth-token");
    if (!token) {
      navigate("/login");
    }
    
    axios.get("http://localhost:3000/words/getall").then((res) => {
      setWords(res.data);   
      setRandomWord(res.data[Math.floor(Math.random() * res.data.length)])
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);

  const handleRandomWord = () => {
  
    let newRandomWord = words[Math.floor(Math.random() * words.length)];
    do {
      newRandomWord = words[Math.floor(Math.random() * words.length)];
    } while (newRandomWord === randomWord && words.length > 1);

    setRandomWord(newRandomWord)
    return newRandomWord;
  }
  
  const handleWords = () => {
     const newWords = words.filter(word => word !== randomWord);
      setWords(newWords);
      return newWords;
  }
 
  const handleScore = () => {
    const newScore = score + 1;
    setScore(newScore);
    return newScore;
  }
  
   
  return (
    <div className="App w-screen flex flex-col">
      <Header 
        score={score}
      />
      <Body 
        words={words}
        randomWord={randomWord}
        handleScore={handleScore}
        handleRandomWord={handleRandomWord}
        handleWords = {handleWords}
      />
    </div>
  )
}
export default showAll
    