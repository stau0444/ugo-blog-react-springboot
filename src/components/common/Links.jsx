import { Chip, Stack } from '@mui/material';
import {styled } from '@mui/material/styles';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import {  NavLink } from 'react-router-dom';


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
    
    let username = useSelector(state=>state.login.userInfo.username);
    
    if(!username){
        username =""
    }
    const [tagList,setTagList] = useState([])
    const tagRef = useRef('');
    useEffect(()=>{
        const getTags = async() =>{
            const resp = await axios.get("/api/tags");
            setTagList([...resp.data]);
        }
        getTags();
    },[])
    const addTag = async() =>{
            await axios.post("/api/tag?name="+tagRef.current.value);
    }
    
    return(
    <>
        {
            username==="stau04"&&username!==undefined?
            <>
                <input ref={tagRef} type="text" />
                <button onClick={addTag}>추가</button>
            </>
            :
            ""
        }
        
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

    </>
    );
}