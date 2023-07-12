import React from "react";
import ProfileSlice from "./profile_slice";


 function Right_side_bar(){

    const sugestedProfiles = [{user:"_deleted__bnjx", account:"benji"}, 
    {user:"_deleted__bnjx", account:"benji"}, 
    {user:"_deleted__bnjx", account:"benji"},
     {user:"_deleted__bnjx", account:"benji"}, 
     {user:"_deleted__bnjx", account:"benji"}]

    return(
        <>
        <div className=" left-984 sticky">
            <div>
                <div>
                    <ProfileSlice width={11} />
                </div>
            </div>
            <div className="suggestions">
                <div className="ssc1">
                    <div className="ssc2">
                        <div className="suggestions_container">
                                { sugestedProfiles && sugestedProfiles.map(( suggestion, index) =>{
                                    return(
                                        <div className="scsc">
                                            <div className="slice_container">
                                                <ProfileSlice uname={suggestion.user} aname={suggestion.account} alink={`https://www.instagram.com/${suggestion.user}`} key={index} />
                                            </div>
                                        </div>
                                    )
                                } )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Right_side_bar