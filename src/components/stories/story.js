import React from "react";
import "./story.css"

function Story({pfps,user_name}){
    return (
        <div className="story">
            <button className="sbc">
                <div className="ssc">
                    <div className="container">
                        <img className="pfp" src={pfps} alt="pfp"/>
                    </div>
                </div>
                <div className="username">{user_name}</div>
            </button>
        </div>
    )
}

export default Story