import React from 'react'

let count = 0

const Message2 = () => {
    console.log("Message Called", count);
    
    count++
  return (
    <div>
      Message {count}
    </div>
  )
}

export default Message2
