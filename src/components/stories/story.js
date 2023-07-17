import React from "react"

function Story({ pfps, user_name }) {
  return (
    <div className="flex flex-col relative ">
      <button className="border-none bg-transparent text-center self-center items-center cursor-pointer px-4px">
        <div className=" block relative mt-4px mb-8px">
          <div className="inline-block relative  h-50px w-50px box-border">
            <img className=" h-full w-full rounded-full" src={pfps} alt="pfp" />
          </div>
        </div>
        <div className="username">{user_name}</div>
      </button>
    </div>
  )
}

export default Story
