import React, { useState } from 'react'

function HookCounterThree() {

  const [name, setName] = useState({
    firstName: '',
    lastName: ''
  });

  return (
    <div>
      <form>
        <input type="text"
          value={name.firstName}
          // here we are copying the whole object name ad updating just the first name - to merge manually the useState
          onChange={e => setName({ ...name, firstName: e.target.value })} />
        <input type="text"
          value={name.firstNme}
          onChange={e => setName({ ...name,  lastName: e.target.value })} />
        <h2>Your first name is: {name.firstName}</h2>
        <h2>Your last name is: {name.lastName}</h2>
        {/* to check the name state value */}
        <h2>{JSON.stringify(name)}</h2>
      </form>
    </div>
  )
}

export default HookCounterThree;
