import React from 'react';
import {AppBar, Container, Toolbar, Box,} from '@mui/material';
import {} from "@emotion/styled";
import {observer} from "mobx-react";
import {Link} from "react-router-dom";
import {routes, routesMap} from "@/Common/Routers/MapRouter";
import MenuSkeleton from "@/Skeletons/MenuSkeleton";
import MenuItem from "@/Components/MenuItems"
import UserInfo from "@/Components/UserInfo";
import Menus from "@/Stores/MenuStore";

const HeaderUser = observer(() => {

    let elementMenus = [];

    if (!!Menus.freeMenu.loaded) {
        elementMenus = Menus.freeMenu.menu.map((item, index) => {
            return (
                <MenuItem key={item.id} url={item.url} ind={index}>
                    {item.name}
                </MenuItem>
            );
        });
    }
    return (<>
        {elementMenus ?
            (<>
                <AppBar position="static">

                    <Toolbar>
                        <Box>
                            <Link to={routesMap.home}>
                                <img width={150} src={`/images/logo/new.jpg`}/>
                            </Link>
                        </Box>

                        <Container>
                            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                                {elementMenus}
                            </Box>
                        </Container>
                        <Box>
                            <UserInfo/>
                        </Box>
                    </Toolbar>
                </AppBar>
                </>
            ) : (<MenuSkeleton/>)
        }
    </>);
})

export default HeaderUser;
