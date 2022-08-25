import React, { useState } from "react";
import './NewEmoji.css'
import EmojiForm from "./EmojiForm";
const NewEmoji = (props) =>{

    const [isAdding, setIsAdding] = useState(false)
    const startAddingHandler = () =>{
        setIsAdding(true)
    }
    const stopAddingHandler = () =>{
        setIsAdding(false)
    }
    const saveEmojiDataHandler = (newEmojiData) =>{
        const emojiData = {
            ...newEmojiData,
            id: Math.random().toString()
        }
        props.onAddEmoji(emojiData)
        setIsAdding(false)
    }
    return (
        <div className="container new-emoji">
            <div className="text-center">
                { !isAdding && <button onClick={startAddingHandler} className="btn btn-light addBtn">Add New Emoji</button>}
            </div>
            { isAdding && <EmojiForm onSaveEmojiData={saveEmojiDataHandler} onCancel={stopAddingHandler}/>}
        </div>
    )
}
export default NewEmoji