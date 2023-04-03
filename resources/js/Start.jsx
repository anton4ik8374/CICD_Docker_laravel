import * as React from 'react';

import HeaderUser from "./Layouts/Header"
import FooterUser from "./Layouts/Footer";
import ProjectSkeleton from "./Skeletons/ProjectSkeleton";
//import Routers from "./Common/Routers/Router";
import ConfigRouter from "./Common/Routers/ConfigRouter";
import {Box} from '@mui/material';
import User from "./Stores/UserStore";
import RoutersApi from "@/Stores/RoutersStore";
import {observer} from "mobx-react";
import {CssBaseline} from "@mui/material";

const Start = observer(() => {

    return (
        <>
            {!(User.startLoad || RoutersApi.loaded) ?
                (<ProjectSkeleton/>) :
                (<Box sx={{ flexGrow: 1 }}>
                    <CssBaseline/>
                    <HeaderUser/>
                    <Box component="main">
                        <ConfigRouter/>
                    </Box>
                    <FooterUser/>
                </Box>)
            }
        </>
    );
});

export default Start;
