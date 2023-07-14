import React, { useState } from "react";

function Clicking() {
  const [likes, setLikes] = useState(0);

  function handleLike() {
    setLikes(likes + 1);
    console.log(likes);
  }

  return (
    <div>
      <button onClick={handleLike}>click me pls</button>
    </div>
  );
}

export default Clicking;
