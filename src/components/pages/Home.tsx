import React, {ChangeEvent, useState} from 'react'
import styled from "styled-components";
import {HeaderAvatar} from "../layout/header/Header";
import {TextField} from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../../redux/store";
import {addPost, AddPost} from "../../redux/HomePageSlice";


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
    const posts = useSelector<rootReducerType, AddPost[]>(state => state.homePage)
    console.log(posts)
    const dispatch = useDispatch()
    const [postText, setPostText] = useState<string>('')
    const onChangePostInput = (event: ChangeEvent<HTMLInputElement>) => {
        setPostText(event.target.value)
    }
    const addPostHandler = () => {
        dispatch(addPost({
                content: postText
            })
        )
        setPostText('')
    }

    return (
        <>
            <SubmitPost>
                <Avatar/>
                <TextField
                    value={postText}
                    multiline={true}
                    maxRows={'2'}
                    // label={'What\'s at you new?'}
                    placeholder={'What\'s at you new?'}
                    variant={'outlined'}
                    InputProps={{
                        sx: {borderRadius: '25px', backgroundColor: '#ebecee', width: '390px', height: "10px",}
                    }}
                    onChange={onChangePostInput}
                />
                <AddBoxIcon sx={{
                    marginLeft: '30px',
                    color: '#aab1c0',
                    fontSize: '30px'
                }}
                            onClick={addPostHandler}/>
            </SubmitPost>
            {
                posts.map((post,index) => {
                    return <div key={index}>
                        <img src={post.authorAvatar} alt={'logo'}/>
                        <p>{post.content}</p>
                    </div>
                })
            }
        </>
    )
}

