import react from 'react'
import './App.css'
import MasterLayout from './Components/MasterLayout/MasterLayout'
import { children } from 'react'
import Home from './Components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './Components/NotFound/NotFound'
import AllCars from './Components/AllCars/AllCars'
import CarDetails from './Components/CarDetails/CarDetails'

function App() {

      const routes = createBrowserRouter([
      {
        path: '/', element:<MasterLayout />,
        errorElement : <NotFound />,
        children : [
          {index :true, element: <Home />},
          {path: '/home', element: <Home />},
          {path: '/allcars' , element: <AllCars />},
          {path: '/cardetails/:id', element: <CarDetails />},
        ]
      }
    ])
    
  return (

    <>
    <RouterProvider router={routes}>
      <MasterLayout />
    </RouterProvider>
    
    </>
  )
}

export default App
