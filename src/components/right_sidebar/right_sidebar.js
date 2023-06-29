import React from "react";
import ProfileSlice from "./profile_slice";
import pfp from "../../assets/benji_pfp.jpg"

function Right_side_bar(){

    const sugestedProfiles = [{user:"_deleted__bnjx", account:"benji"}, {user:"_deleted__bnjx", account:"benji"}, {user:"_deleted__bnjx", account:"benji"}, {user:"_deleted__bnjx", account:"benji"}, {user:"_deleted__bnjx", account:"benji"}]

    return(
        <>
        <div>
            <div>
                <div>
                    <ProfileSlice />
                </div>
            </div>
            <div>
                <div>
                    { sugestedProfiles && sugestedProfiles.map(( suggestion, index) =>{
                        return(
                            <li>
                                <ProfileSlice uname={suggestion.user} aname={suggestion.account} alink={`https://www.instagram.com/${suggestion.user}`} key={index} />
                            </li>
                        )
                    } )}
                </div>
            </div>
        </div>
        </>
    )
}

export default Right_side_bar