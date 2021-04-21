import axios from 'axios';
import React, { useState, useEffect } from 'react'

function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        console.log(res)
        // this update the posts variable that will be render in the UI
        setPost(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    // the data will be fatching in a infinite loop if you dont add an empty []
  }, [id])


  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <div>{post.title}</div>
      {/* <ul>
        {
          posts.map(post => <li key={post.id}>{post.title}</li>)
        }
      </ul> */}
    </div>
  )
}

export default DataFetching;
