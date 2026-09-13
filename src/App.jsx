import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './component/Home/Home'
import LAYOUT from './component/layout/LAYOUT'
import Blog from './component/Blog/Blog'
import BlogDetails from './component/Blog/BlogDetails'
import NotFound from './component/NotFound/NotFound'


function App() {
let routes =createBrowserRouter([
  {
    path:"",
    element:<LAYOUT/>, children:[
      {
    index:true,

    element:<Home/>
  },
{ path: "blog", element: <Blog/> },
{ path: "blog/:slug", element: <BlogDetails/> },
{ path: "*", element: <NotFound/> },
]
 
  }])
  return (<>
<RouterProvider router={routes} />
  
  </>

  )
}

export default App