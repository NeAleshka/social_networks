import React from 'react'
import styled from "styled-components";
import {HeaderAvatar} from "../layout/header/Header";
import {TextField} from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';


const SubmitPost = styled.div`
  display: flex;
  background-color: white;
  height: 52px;
  border-radius: 5px;
  align-items: center;
`

const Avatar = styled(HeaderAvatar)`
  height: 30px;
  margin-right: 20px;
  margin-left: 20px;
`


export const Home = () => {
    return (
        <>
            <SubmitPost>
                <Avatar/>
                <TextField
                    multiline={true}
                    maxRows={'2'}
                    // label={'What\'s at you new?'}
                    placeholder={'What\'s at you new?'}
                    variant={'outlined'}
                    InputProps={{
                        sx: {borderRadius: '25px', backgroundColor: '#ebecee',width:'390px',height:"10px",}
                    }}
                />
                <AddBoxIcon sx={{
                    marginLeft:'30px',
                    color:'#aab1c0',
                    fontSize:'30px'
                }}/>
            </SubmitPost>
        </>
    )
}

