import React from "react";
import Story from "./story";
import pfp from "../../assets/pfp2.jpg"
import "./stories_section.css"



function StoriesSection(){

    const users = [{pfp:pfp, user:"user1"},{pfp:pfp, user:"user2"},{pfp:pfp, user:"user3"},{pfp:pfp, user:"user4"},{pfp:pfp, user:"user5"}]

    return (
        <div className="stories_section">
            {
                users && users.map((user)=>{
                    return(
                        <Story pfps={user.pfp } user_name={user.user}/>
                    )
                })
            }
        </div>
    )
}

export default StoriesSection