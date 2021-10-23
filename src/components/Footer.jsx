import { styled, Typography } from "@mui/material";


const StyledFooter = styled("div")`
text-align: center;
margin: 40px 0 0 20px;
color:#777;
`

export default function Footer() {
    return(
        <StyledFooter>
            <Typography variat="p" sx={{fontWeight:'bold'}}>Copyright &copy; 2021 UGO.</Typography>
        </StyledFooter>
        
    );
}