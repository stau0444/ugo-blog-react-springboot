import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.core.css';
import './App.scss';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AddContent from './pages/AddContent';
import Detail from './pages/Detail';

function App() {
  return (
    <div className="App">
      <Header/>
        <Route path="/content/add" component={AddContent}/>
        <Route path="/content/:contentId" exact component={Detail}/>
        <Route path="/" exact component={Home}/>
    </div>
  );
}

export default App;
