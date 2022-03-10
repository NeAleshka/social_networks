import React from 'react'
import {Countainer} from "../../Countainer";
import styled from "styled-components";
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import {Paper} from "@mui/material";
import {grey} from "@mui/material/colors";


const Wrapper = styled.div`
  display: flex;
  height: 30px;
  padding-top: 8px;
`
const HeaderLogo = styled.img.attrs({
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/VK_Full_Logo_%282021-present%29.svg/2560px-VK_Full_Logo_%282021-present%29.svg.png'
})``


export const Header = () => {
    return (
        <Countainer>
            <Wrapper>
                <HeaderLogo/>
                <Paper
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 500,marginLeft:2,backgroundColor:'#ebecee' }}
                >
                    <SearchIcon htmlColor={'grey'}/>
                    <InputBase sx={{ml: 1, flex: 1}} placeholder="Search"/>
                </Paper>


            </Wrapper>
        </Countainer>
    )
}

