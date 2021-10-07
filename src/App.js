import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.core.css';
import './App.scss';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AddContent from './pages/AddContent';
import Detail from './pages/Detail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>  
          <Header/>
          <Route path="/contents/:keyword" exact={true} component={Home}/>
          <Route path="/content/:contentId" exact={true} component={Detail}/>
          <Route path="/add-content"  exact={true} component={AddContent}/>
          <Route path="/" exact={true} component={Home}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
