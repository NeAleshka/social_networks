import Container from '@mui/material/Container/Container'
import React from 'react'


export const Countainer = ({children}:any) => {
    return (
        <Container sx={{width:'1000px'}} >
            {children}
        </Container>
    )
}

