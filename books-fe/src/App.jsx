import {useEffect} from 'react';
import {createRoutesFromElements, Route} from 'react-router'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import NotFound from './components/notfound';
import {useGlobalContext} from './context/context'
import HomeLayout from './layouts/homeLayout';
import RootLayout from './layouts/RootLayout';
import AddBook from './pages/addBook';
import Home from './pages/home';
import Login from './pages/login'
import Register from './pages/register';
import Welcome from './pages/welcome';

import ProtectedRoute from './privateroutes/protectedRoute';

function App() {
    const {isLogged} = useGlobalContext()

    useEffect(() => {

        isLogged()
    }, [])


    const router = createBrowserRouter(createRoutesFromElements (
        <Route path="/"
            element={<RootLayout/>}>

            <Route index
                element={<Login/>}/>

            <Route path='register'
                element={<Register/>}/>

            <Route path='books'
                errorElement={<NotFound/>}
                element={<HomeLayout/>}>

                <Route index
                    element={
                        <ProtectedRoute><Welcome/></ProtectedRoute>
                    }/>
                <Route path='all'
                    element={
                        <ProtectedRoute><Home/></ProtectedRoute>
                    }/>
                <Route path='new'
                    element={
                        <ProtectedRoute><AddBook/></ProtectedRoute>
                    }/>
            </Route>

            <Route path='*'
                element={<NotFound/>}/>
        </Route>
    ));
    return (
        <>
            <main>
                <RouterProvider router={router}/>
            </main>
        </>
    )
}

export default App
