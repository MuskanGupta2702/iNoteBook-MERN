import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'

const Home = () => {
    const a = useContext(noteContext)
    useEffect(()=> {
        a.update()
        // eslint-disable-next-line
    }, []);
  return (
    <div>
      {a.state.name} is {a.state.class}
    </div>
  )
}

export default Home
