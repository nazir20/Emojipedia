import React from "react";
import './Entry.css'
const Entry = (props) =>{
    return (
        <div className="col-lg-3 col-md-6">
            <div className="term">
                <dt>
                    <span className="emoji" role="img" aria-label="Tense Biceps">{props.emoji}</span>
                    <span>{props.name}</span>
                </dt>
                <dd>{props.meaning}</dd>
            </div>
        </div>
    )
}
export default Entry