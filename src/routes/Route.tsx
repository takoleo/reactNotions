
import UserComponent from "../pages/UserComponent.tsx";import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import Dashboard from "../pages/Dashboard.tsx";
import DemandComponent from "../Demandes/DemandComponent.tsx";
import UserDetailComponent from "../User-details/UserDetailComponent.tsx";
import DemandDetailComponent from "../DemandDetails/demandDetailComponent.tsx";

const routes = createBrowserRouter([
    {
        path: "/",
        children: [
                {
                    index:true,
                    element: <App />
                },

                {
                    path: "dashboard",
                    element: <Dashboard/>,
                    children:[
                        {
                          path:"users",
                          element:<UserComponent />
                        },
                        {
                            path:"demandes",
                            element:<DemandComponent />
                        },
                        {
                            path:"details/:id",
                            element:<UserDetailComponent />
                        },

                        {
                            path:"detailsDemand/:id",
                            element:<DemandDetailComponent />
                        }

                    ]
                }
             ],
    },
]);


export  {routes}


