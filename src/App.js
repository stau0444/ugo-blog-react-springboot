import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.core.css';
import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Detail from './pages/Detail';
import Home from './pages/Home';
import AddContent from './pages/AddContent';

function App() {
  return (
    <BrowserRouter className="App">
        <div className="App">
          <Header/>
          <Route path="/content/add" component={AddContent}/>
          <Route path="/content" exact component={Detail}/>
          <Route path="/" exact component={Home}/>
        </div>
    </BrowserRouter>
  );
}

export default App;
