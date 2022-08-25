import React, { useState } from "react";
import './EmojiForm.css'
const EmojiForm = (props) =>{


    const [emojiIcon, setEmojiIcon] = useState('')
    const [emojiName, setEmojiName] = useState('')
    const [emojiMeaning, setEmojiMeaning] = useState('')

    const emojiIconChangeHandler = (event) =>{
        setEmojiIcon(event.target.value)
    }
    const emojiNameChangeHandler = (event) =>{
        setEmojiName(event.target.value)
    }
    const emojiMeaningChangeHandler = (event) =>{
         setEmojiMeaning(event.target.value)
    }
    const submitHandler = (event) =>{
        event.preventDefault()
        const emojiData = {
            'emoji': emojiIcon,
            'name': emojiName,
            'meaning': emojiMeaning
        }
        props.onSaveEmojiData(emojiData)
        setEmojiIcon('')
        setEmojiName('')
        setEmojiMeaning('')
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="row g-3">
                <div className="col-sm-6">
                    <input 
                        required type="text" 
                        className="form-control" 
                        placeholder="Emoji Icon"
                        onChange={emojiIconChangeHandler}
                        value={emojiIcon}
                    />
                </div>
                <div className="col-sm-6">
                    <input 
                        required type="text" 
                        className="form-control" 
                        placeholder="Emoji Name"
                        onChange={emojiNameChangeHandler}
                        value={emojiName}
                    />
                </div>
            </div>
            <div className="mb-3">
                <textarea 
                    required className="form-control" 
                    placeholder="Emoji Meaning"
                    onChange = {emojiMeaningChangeHandler}
                    value ={emojiMeaning}
                />
            </div>
            <button onClick={props.onCancel} type="button" className="btn btn-light">Cancel</button>
            <button type="submit" className="btn btn-success">Add Emoji</button>
        </form>
    )
}
export default EmojiForm