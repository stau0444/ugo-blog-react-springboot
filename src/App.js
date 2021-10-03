import { Grid } from '@mui/material';
import './App.css';
import ContentCard from './components/ContentCard';
import MenuBar from './components/MenuBar';
import  Typography  from '@mui/material/Typography';
import Links from './components/Links';
import { BrowserRouter } from 'react-router-dom';
import ContentList from './components/ContentList';

function App() {
  return (
    <BrowserRouter>
      <>
        <div className="App">
        <MenuBar/>
            <img className="logo" src="logo_transparent.png" alt="logo"  />
            <Links/>
          <ContentList/>
        </div>
      </>
    </BrowserRouter>
  );
}

export default App;
