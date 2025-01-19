
import {createBrowserRouter, RouterProvider} from "react-router";
import './App.css'
import {RootLayout} from "./components/RootLayout.tsx";

function App() {
    const routes = createBrowserRouter([
        {
            path:'',element:<RootLayout/>,children:[

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
