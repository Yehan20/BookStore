import { useEffect } from 'react';
import { createRoutesFromElements, Route } from 'react-router'
import { createBrowserRouter ,RouterProvider} from 'react-router-dom';
import NotFound from './components/notfound';
import { useGlobalContext } from './context/context'
import HomeLayout from './layouts/homeLayout';
import RootLayout from './layouts/RootLayout';
import AddBook from './pages/addBook';
import Home from './pages/home';
import Login from './pages/login'
import Register from './pages/register';
import Welcome from './pages/welcome';
import PrivateRoute from './privateroutes/privateHome';
import ProtectedRoute from './privateroutes/protectedRoute';

function App() {
  const {isLogged} = useGlobalContext()

  useEffect(()=>{
      
      isLogged()
  },[])


 const router= createBrowserRouter(
    createRoutesFromElements(
      <Route path="/"  element={<RootLayout />}>

        <Route  index  element={
         <ProtectedRoute>
          <Login/>
        </ProtectedRoute>}/>

        <Route  path='register' element={
         <ProtectedRoute>
          <Register/>
        </ProtectedRoute>}/>

        <Route  path='books' errorElement={<NotFound/>} element={<HomeLayout/>}>
              
             <Route index element={<PrivateRoute > <Welcome/> </PrivateRoute>   }/>
              <Route path='all' element={<PrivateRoute > <Home/> </PrivateRoute>   }/>
              <Route path='new' element={
               <PrivateRoute >
                   <AddBook/>
               </PrivateRoute> 
            } />
        </Route>
         
        <Route path='*' element={<NotFound/>}/>
      </Route>
    )
  );
  return (
    <>  
    <main>
    <RouterProvider router={router}/>
    </main>
    </>
  )
}

export default App
