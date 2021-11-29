import { Chip, Stack } from '@mui/material';
import {styled } from '@mui/material/styles';
import { useEffect } from 'react';
import {  NavLink } from 'react-router-dom';
import { tagList } from '../sampleData';


export const ColorLink = styled(Chip)(()=>({
    background:'tomato',
    fontFamily:"'Righteous', cursive;",
    fontWeight:'bold',
    fontSize:'14px',
    color: 'bisque',
    boxShadow: 'inset 0px 1px 3px 0px  black',
    cursor: 'pointer',
    '&:hover':{
        background: 'gray',
        color:'yellowgreen'
    },
    '&.active':{
         background: 'gray',
        color:'yellowgreen'
    },
}));


export default function Links() {
    useEffect(()=>{
        
    })
    return(
        <ul className="menu-links"> 
            <Stack 
            className="menu-link-list"
            direction="row" 
            spacing={0.5}
            >
                {tagList.map((category,index)=>
                    <NavLink key={index} to={"/contents/"+category}  activeClassName="nav-link-active">
                        <ColorLink  size="small" label={category}/>
                    </NavLink>
                )}
            </Stack>
        </ul>
    );
}