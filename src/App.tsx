import React from 'react'
import { useRoutes, Link } from 'react-router-dom'
import routes from './router'
import { Suspense } from 'react'
function App() {
  return (
    <div className="App">
      <div className="nav">
        <Link to="/discover">发现音乐</Link>
      </div>
      <Suspense fallback="">
        <div>{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
