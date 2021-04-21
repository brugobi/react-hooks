import axios from 'axios';
import React, { useState, useEffect } from 'react'

function DataFetching() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        console.log(res)
        // this update the posts variable that will be render in the UI
        setPosts(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    // the data will be fatching in a infinite loop if you dont add an empty []
  }, [])


  return (
    <div>
      <ul>
        {
          posts.map(post => <li key={post.id}>{post.title}</li>)
        }
      </ul>
    </div>
  )
}

export default DataFetching;
