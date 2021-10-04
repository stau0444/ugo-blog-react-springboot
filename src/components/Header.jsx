import MenuBar from './MenuBar';
import Links from './Links';

export default function Header() {
    return(
    <>
        <MenuBar/>
        <img className="logo" src="logo_transparent.png" alt="logo"  />
        <Links/>
    </>
    );
}