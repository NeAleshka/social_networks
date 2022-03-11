import React, {FC} from 'react'
import {Outlet} from 'react-router-dom';
import {Header} from "./header/Header";
import {SideBar} from "./sidebar/SideBar";
import {Grid} from "@mui/material";
import {Countainer} from "../Countainer";


export const Layout: FC = () => {
    return (
        <div style={{display:"flex",flexDirection:'column',justifyContent:'center'}}>
            <div style={{backgroundColor: 'white',height:'45px',marginBottom:'15px'}}>
                <Header/>
            </div>
            <Countainer>
                <Grid container spacing={3} >
                    <Grid item md={2}>
                        <SideBar/>
                    </Grid>
                    <Grid item md={7}>
                        <Outlet/>
                    </Grid>
                </Grid>
            </Countainer>

        </div>
    )
}

