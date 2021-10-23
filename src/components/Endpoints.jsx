import { Box, Button, styled } from "@mui/material";
import { Link } from "react-router-dom";
const StyledBtn = styled(Button)`
    color: black;
    font-weight: bold;
    border: 1px solid black;
`
export default function EndPoints({isOpen}) {
    return(
        <Box sx={{textAlign:"center" , backgroundColor:'white'}}>
            <Link to="/"><StyledBtn>/</StyledBtn></Link> 
            <Link to="/content"><StyledBtn>/content</StyledBtn></Link>
            <Link to="/content"><StyledBtn>/content/(id)</StyledBtn></Link>
            <Link to="/contents/{keyowrd}" ><StyledBtn>/contents/(category)</StyledBtn></Link>
            <Link to="/add-content" ><StyledBtn>/content/add</StyledBtn></Link>
            <Link to="/test" ><StyledBtn>/test</StyledBtn></Link>
        </Box>
    );
}