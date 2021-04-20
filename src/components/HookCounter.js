import React, { useState, useEffect } from 'react';

function HookCounter() {

  const [count, setCount] = useState(0);

  // run every render
  useEffect(() => {
    document.title = `You clicked ${count} times`
  })

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Counter {count}</button>
    </div>
  )
}

export default HookCounter;
