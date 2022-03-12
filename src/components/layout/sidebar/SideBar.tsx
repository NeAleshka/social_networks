import React from 'react'
import styled from "styled-components";
import {NavLink, useNavigate} from "react-router-dom";
import {itemLinksAndTitle, logout} from "./itemLinksAndTitle";

const SideBarWrapper = styled.div`
  width: 164px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`
const SideBarItem = styled.div`
  display: flex;
  height: 30px;
  width: 130px;
  border-radius: 5px;

  :hover {
    background-color: #d5dbe1;
  }
`
const SideBarItemLogo = styled.div`

`

const SideBarItemTitle = styled.span`
  padding-left: 10px;
  font-family: 'Candara', sans-serif;
`

export const SideBar = () => {
    const linkStyle=({isActive}:any)=>({color:isActive?'#74747e':'black',textDecoration:'none'})
    const navigate=useNavigate()

    return (
        <>
            <SideBarWrapper>
                {
                    itemLinksAndTitle.map((item,index)=>{
                        return <NavLink to={item?.link??''} style={linkStyle} key={`${item.title}_${index}`}>
                            <SideBarItem>
                                <SideBarItemLogo>
                                    <svg color={'#5080B7FF'} width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d={item.path} fill="currentColor" fillRule="evenodd"/>
                                    </svg>
                                </SideBarItemLogo>
                                <SideBarItemTitle>{item.title}</SideBarItemTitle>
                            </SideBarItem>
                        </NavLink>
                    })
                }
            </SideBarWrapper>
            <div style={{height:"30px"}}/>
            <SideBarItem onClick={()=>navigate('/sing-in')}>
                <SideBarItemLogo>
                    <svg color={'#5080B7FF'} fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d={logout.path} fill="currentColor" fillRule="evenodd"/></svg>
                </SideBarItemLogo>
                <SideBarItemTitle>
                    {logout.title}
                </SideBarItemTitle>
            </SideBarItem>
        </>

    )
}


