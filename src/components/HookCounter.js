import React, { useState, useEffect } from 'react';

function HookCounter() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // run every render
  // useEffect(() => {
  //   console.log('useEffect - Updating document title')
  //   document.title = `You clicked ${count} times`
  // })

  // run just when count is updated, this avoid unnecessary render
  useEffect(() => {
    console.log('useEffect - Updating document title')
    document.title = `You clicked ${count} times`
  }, [count])

  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Counter {count}</button>
    </div>
  )
}

export default HookCounter;
