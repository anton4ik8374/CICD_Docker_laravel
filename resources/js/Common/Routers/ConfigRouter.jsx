import React from "react";
import {useRoutes} from "react-router-dom";
import {routes, routesMap} from "./MapRouter";

export default function ConfigRoute() {
    //https://www.robinwieruch.de/react-router-private-routes/ - приватный роутинг
    return useRoutes(routes);

}
