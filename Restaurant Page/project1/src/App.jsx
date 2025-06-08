import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {

  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/menu',
        element: <Menu />
      },
      {
        path: '/about',
        element: <About />
      }
    ]
  )

  return (
    <div>
      
      {/* <Home /> */}
      <RouterProvider router={router} />

    </div>
  )
}

export default App