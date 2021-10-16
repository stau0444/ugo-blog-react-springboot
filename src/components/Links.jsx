import { Chip, Stack } from '@mui/material';
import {styled } from '@mui/material/styles';
import {  NavLink } from 'react-router-dom';
const linkList = [
    'JAVA',
    "JAVASCRIPT",
    "REACT",
    "JPA",
    "SPRING",
    "SPRING-SEC",
    "AWS",
    "WEB",
    "VUE"
]

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
    return(
        <ul className="menu-links"> 
            <Stack 
            className="menu-link-list"
            direction="row" 
            spacing={0.5}
            >
                {linkList.map((link,index)=>
                    <NavLink key={index} to={"/contents/"+link}  activeClassName="nav-link-active">
                        <ColorLink  size="small" label={link}/>
                    </NavLink>
                )}
            </Stack>
        </ul>
    );
}