import { Chip, createTheme, Stack } from '@mui/material';
import {ThemeProvider, styled } from '@mui/material/styles';

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
                    <ColorLink size="small" label="JAVA"/>
                    <ColorLink size="small" label="JAVASCRIPT"/>
                    <ColorLink size="small" label="REACT"/>
                    <ColorLink size="small" label="JPA"/>
                    <ColorLink size="small" label="SPRING"/>
                    <ColorLink size="small" label="SPRING-SEC"/>
                    <ColorLink size="small" label="AWS"/>
                    <ColorLink size="small" label="WEB"/>
                    <ColorLink size="small" label="WEB"/>
                    <ColorLink size="small" label="WEB"/>
                </Stack>
            </ul>
      </ThemeProvider>
    );
}