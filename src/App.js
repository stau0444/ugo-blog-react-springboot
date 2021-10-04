import 'react-quill/dist/quill.snow.css';
import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Detail from './pages/Detail';
import Home from './pages/Home';
import TextEditor from './components/TextEditor';

function App() {
  return (
    <BrowserRouter className="App">
        <div className="App">
          <Header/>
          <TextEditor/>
          <Route path="/content" component={Detail}/>
          <Route path="/" exact component={Home}/>
        </div>
    </BrowserRouter>
  );
}

export default App;
