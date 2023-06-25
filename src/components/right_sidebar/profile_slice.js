import React from "react";
import pfp from "../../assets/benji_pfp.jpg"
import "./profile_slice.css"


function ProfileSlice ({uname,aname, alink}){
    return(
        <div className="slice">
        <div className="pscontainer">
            <div className="content_image">
                <div className="spacing">
                    <div className="content_image_container">
                        <a className="link" href={alink}>
                            <img className="pfp_image" src={pfp} alt="pfp"/>
                        </a>
                    </div>
                </div>
            </div>

            <div className="account">
                <div className="account_container">
                    <span className="user_name">
                        <div>
                            <a href={alink}>{uname}</a>
                        </div>
                    </span>
                    <span className="account_name">
                        <div>
                            <a href={alink}>{aname}</a>
                        </div>
                    </span>
                </div>
            </div>

            <div className="content_link">
                <button>
                    <span>Cambiar</span>
                </button>
            </div>
        </div>
        </div>
    )
}

export default ProfileSlice