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
import StartStyle from "@/Styles/StartStyle";

const Start = observer(() => {

    return (
        <>
            {!(User.startLoad || RoutersApi.loaded) ?
                (<ProjectSkeleton/>) :
                (<Box sx={StartStyle.start}>
                    <CssBaseline/>
                    <HeaderUser/>
                    <Box component="main" sx={StartStyle.main}>
                        <ConfigRouter/>
                    </Box>
                    <FooterUser/>
                </Box>)
            }
        </>
    );
});

export default Start;
