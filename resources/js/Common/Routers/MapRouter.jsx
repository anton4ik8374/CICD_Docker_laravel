import Home from "@/Page/Home";
import React from "react";
import ProtectedRoute from "./ProtectedRoute"

import User from "@/Stores/UserStore";
import SignIn from "@/Page/SignIn";
import Registrations from "@/Page/Registrations";
import Private from "@/Page/Private";

let routes = [
    {
        name: 'home',
        path: '/',
        element: <Home/>
    },
    {
        name: 'signIn',
        auth: false,
        path: '/sign-in',
        element: <SignIn/>
    },
    {
        name: 'registrations',
        auth: false,
        path: '/registrations',
        element: <Registrations/>
    },
    {
        name: 'private',
        auth: true,
        path: '/private',
        element: <ProtectedRoute isAllowed={User.user.id}><Private/></ProtectedRoute>
    }

];

let routesMap = {};
routes.forEach((route) => {
    routesMap[route.name] = route.path
});

export {routes, routesMap}



