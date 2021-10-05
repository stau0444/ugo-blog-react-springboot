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
            main:'coral'
        }
    },
    font:{
        a:"'Nunito', sans-serif"
    }
});
const ColorLink = styled(Chip)(({theme })=>({
    background:theme.palette.danger.main,
    fontFamily:theme.font.a,
    fontWeight:'bold',
    fontSize:'14px',
    color: 'bisque',
    boxShadow: 'inset 1px 1px 3px  black',
    cursor: 'pointer',
    '&:hover':{
        background: 'gray',
        color:'white'
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