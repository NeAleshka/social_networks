import React from 'react'
import {Countainer} from "../../Countainer";
import styled from "styled-components";
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import {Paper} from "@mui/material";
import {NavLink} from "react-router-dom";


const Wrapper = styled.div`
  display: flex;
  height: 30px;
  padding-top: 8px;
`
const HeaderLogo = styled.img.attrs({
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/VK_Full_Logo_%282021-present%29.svg/2560px-VK_Full_Logo_%282021-present%29.svg.png'
})`
  height: 25px;
`

const HeaderAvatar=styled.img.attrs({src:'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if2/utMxxkkNeLmZOlUIjDvc99o1cLzDX1W6BT-Mtf5c8ebu-9ffm_zEdSQ1IO8LH896SH3zAZTw0uUkBfn3HaPc1ZUT.jpg?size=50x50&quality=96&crop=1021,0,1539,1539&ava=1'})`
  margin-left: 50px;
  border-radius: 20px;
  height: 35px;
`


export const Header = () => {
    return (
        <Countainer>
            <Wrapper>
                <NavLink to={'/'}>
                    <HeaderLogo/>
                </NavLink>
                <Paper sx={{
                        p: '2px 4px',
                        display: 'flex',
                        alignItems: 'center',
                        width: 400,
                        marginLeft: 2,
                        backgroundColor: '#ebecee'
                    }}>
                    <SearchIcon htmlColor={'grey'}/>
                    <InputBase sx={{ml: 1, flex: 1}} placeholder="Search"/>
                </Paper>
                <svg fill="none" height="30" width="24" xmlns="http://www.w3.org/2000/svg" style={{marginLeft:"30px"}}>
                    <path d="M12 2.1c4.02 0 6.9 3.28 6.9 7.53v1.6c0 .23.2.53.72 1.08l.27.27c1.08 1.1 1.51 1.73 1.51 2.75 0 .44-.05.79-.27 1.2-.45.88-1.42 1.37-2.87 1.37h-1.9c-.64 2.33-2.14 3.6-4.36 3.6-2.25 0-3.75-1.3-4.37-3.67l.02.07H5.74c-1.5 0-2.47-.5-2.9-1.41-.2-.4-.24-.72-.24-1.16 0-1.02.43-1.65 1.51-2.75l.27-.27c.53-.55.72-.85.72-1.08v-1.6C5.1 5.38 7.99 2.1 12 2.1zm2.47 15.8H9.53c.46 1.25 1.25 1.8 2.47 1.8s2.01-.55 2.47-1.8zM12 3.9c-2.96 0-5.1 2.43-5.1 5.73v1.6c0 .85-.39 1.46-1.23 2.33l-.28.29c-.75.75-.99 1.11-.99 1.48 0 .19.01.29.06.38.1.22.43.39 1.28.39h12.52c.82 0 1.16-.17 1.28-.4.05-.1.06-.2.06-.37 0-.37-.24-.73-.99-1.48l-.28-.29c-.84-.87-1.23-1.48-1.23-2.33v-1.6c0-3.3-2.13-5.73-5.1-5.73z" fill="currentColor"/></svg>
               <NavLink to={'/profile'}>
                   <HeaderAvatar/>
               </NavLink>
            </Wrapper>
        </Countainer>
    )
}

