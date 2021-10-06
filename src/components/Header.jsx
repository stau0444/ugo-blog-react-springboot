import MenuBar from './MenuBar';
import Links from './Links';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledBtn = styled(Button)`
    color: black;
    font-weight: bold;
    border: 1px solid black;
`

export default function Header() {
    return(
    <>  
        <MenuBar/>
        <div style={{textAlign:"center" , backgroundColor:'white'}}>
            <Link to="/"><StyledBtn>/</StyledBtn></Link> 
            <Link to="/content"><StyledBtn>/content</StyledBtn></Link>
            <Link to="/content/add"><StyledBtn>/content/add</StyledBtn></Link>
        </div>
        <img className="logo" src="/logo_transparent.png" alt="logo"  />
        <Links/>
    </>
    );
}