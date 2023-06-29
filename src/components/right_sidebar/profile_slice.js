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

            <div className="a1 a2 a3 a4 a5 a6 a7 a8 a9 a10 a11 a12">
                <div className="a1 a2 a3 a4 a5 a7 b6 b11 b13">
                    <div className="a1 a4 a5 a7 b2 b8 b9 b11 b14 b15 c9 "> 
                        <span className="a2 a7 a16  a18 a19 b4 b13 " dir="auto">
                            <span className="a17 a20 a19 b4 b13 b18">
                                <div className="a1 a4 a11 b2 b8 b15 b18 d9">
                                    <div className="c4">
                                        <div className="c4">
                                            <a className="c4" href={alink}>{uname}</a>
                                        </div>
                                    </div>
                                </div>
                            </span>
                        </span>
                        <span className="account_name">
                            <div>
                                <a href={alink}>{aname}</a>
                            </div>
                        </span>
                    </div>
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