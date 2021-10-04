import { Chip, createTheme, Stack } from '@mui/material';
import {ThemeProvider, styled } from '@mui/material/styles';
const linkList = [
    'JAVA',
    "JAVASCRIPT",
    "REACT",
    "JPA",
    "SPRING",
    "SPRING-SEC",
    "AWS",
    "WEB",
    "VUE.JS"
]
const theme = createTheme({
    palette:{
        danger:{
            main:'#ff8a65'
        }
    },
    font:{
        a:'Noto Sans Display',
    }
});
const ColorLink = styled(Chip)(({theme })=>({
    background:theme.palette.danger.main,
    fontFamily:theme.font.a,
    fontWeight:'bold',
    color: 'white',
    cursor: 'pointer',
    '&:hover':{
        background: 'gray'
    },
}));


export default function Links() {
    return(
        <ThemeProvider theme={theme}>
            <ul className="menu-links"> 
                <Stack 
                className="menu-link-list"
                direction="row" 
                spacing={0.5}
                justifyContent="flex-start"
                alignItems="flex-end"
                >
                    {linkList.map((link,index)=>
                        <ColorLink key={index} size="small" label={link}/>
                    )}
                </Stack>
            </ul>
      </ThemeProvider>
    );
}