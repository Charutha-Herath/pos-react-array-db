
import {createBrowserRouter, RouterProvider} from "react-router";
import './App.css'
import {RootLayout} from "./components/RootLayout.tsx";
import {Home} from "./pages/Home..tsx";

function App() {
    const routes = createBrowserRouter([
        {
            path:'',element:<RootLayout/>,children:[
                {path: '/',element:<Home/>}
            ]
        }
    ])
    return (
        <>
        <RouterProvider router={routes}/>
        </>
    )
}

export default App
