import React from "react";
import {useRoutes} from "react-router-dom";
import {routes, routesMap} from "./MapRouter";

const ConfigRouter = () => {
    //https://www.robinwieruch.de/react-router-private-routes/ - приватный роутинг
    const result = useRoutes(routes);

    return (
        <>
            {result}
        </>)
}

export default ConfigRouter
