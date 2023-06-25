import React from "react";
import Story from "./story";
import pfp from "../../assets/meica_pfp.jpg"
import "./stories_section.css"



function StoriesSection(){

    const users = [{pfp:pfp, user:"user1"},{pfp:pfp, user:"user2"},{pfp:pfp, user:"user3"},{pfp:pfp, user:"user4"},{pfp:pfp, user:"user5"}]

    return (
        <div className="stories_section">
            <ul>
                {
                    users && users.map((user)=>{
                        return(
                            <li>
                                <Story pfps={user.pfp } user_name={user.user}/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default StoriesSection