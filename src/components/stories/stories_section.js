import React from "react"
import Story from "./story"
import pfp from "../../assets/benji_pfp.jpg"

function StoriesSection() {
  const users = [
    { pfp: pfp, user: "user1" },
    { pfp: pfp, user: "user2" },
    { pfp: pfp, user: "user3" },
    { pfp: pfp, user: "user4" },
    { pfp: pfp, user: "user5" },
  ]

  return (
    <div className="flex flex-row">
      <ul className="flex flex-row">
        {users &&
          users.map((user) => {
            return (
              <li className="">
                <Story pfps={user.pfp} user_name={user.user} />
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default StoriesSection
