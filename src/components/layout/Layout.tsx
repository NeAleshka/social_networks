import React, {FC} from 'react'
import {Outlet} from 'react-router-dom';
import {Header} from "./header/Header";
import {SideBar} from "./sidebar/SideBar";
import {Grid} from "@mui/material";
import {Countainer} from "../Countainer";


export const Layout: FC = () => {
    return (
        <>
            <div style={{backgroundColor: 'white',height:'45px'}}>
                <Header/>
            </div>
            <Countainer>
                <Grid container spacing={3} >
                    <Grid item md={2}>
                        <SideBar/>
                    </Grid>
                    <Grid item md={10}>
                        <Outlet/>
                    </Grid>
                </Grid>
            </Countainer>
        </>
    )
}

