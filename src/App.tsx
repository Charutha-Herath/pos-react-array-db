
import {createBrowserRouter, RouterProvider} from "react-router";
import './App.css'
import {RootLayout} from "./components/RootLayout.tsx";
import {Home} from "./pages/Home..tsx";
import {CustomerDash} from "./pages/CustomerDash.tsx";
import {ItemDash} from "./pages/ItemDash.tsx";
import {OrdersDash} from "./pages/OrdersDash.tsx";
import {OrderDetailsDash} from "./pages/OrderDetailsDash.tsx";

function App() {
    const routes = createBrowserRouter([
        {
            path:'',element:<RootLayout/>,children:[
                {path: '/',element:<Home/>},
                {path: '/Customer',element:<CustomerDash/>},
                {path: '/items',element:<ItemDash/>},
                {path: '/orders', element:<OrdersDash/>},
                {path:'/orderDetail',element:<OrderDetailsDash/>},

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
