import React, { useState } from "react";
import './App.css'
import emojipedia from "./Emojipedia";
import Entry from "./components/Entry";
import NewEmoji from "./components/NewEmoji/NewEmoji";
function App() {
  const [emojis, setEmojis] = useState(emojipedia)
  const addEmojiHandler = (emojiData) =>{
    setEmojis(prevEmojis =>{
      return (
        [emojiData, ...prevEmojis]
      )
    })
  }

  return (
    <div className="container">
      <NewEmoji onAddEmoji = {addEmojiHandler}/>
      <div className="row">
        {
          emojis.map((item) =>(
            <Entry 
              key ={item.id}  
              emoji = {item.emoji}
              name = {item.name}
              meaning = {item.meaning}
            />
          ))
        }
      </div>
        <center><small>copyright@2022</small></center>
    </div>
  );
}

export default App;
