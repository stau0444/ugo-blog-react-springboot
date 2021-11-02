import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.core.css';
import './App.scss';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AddContent from './pages/AddContent';
import Detail from './pages/Detail';
import UpdateContent from './pages/UpdateContent';
import Test from './pages/Test';
import AWS from "aws-sdk"
import hljs from 'highlight.js';
import Search from './pages/Search';
import Footer from './components/Footer';
import axios from 'axios';
import EndPoints from './components/Endpoints';
import { CSSTransition } from 'react-transition-group';
import { TransitionGroup } from 'react-transition-group';


hljs.configure({   // optionally configure hljs
  languages: ['javascript' ,'java','python','html']
});


function App() {

  //AWS  config
  AWS.config.update({
    region:'ap-northeast-2',
    credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId:'ap-northeast-2:f4eab593-5f5f-4e47-8b60-a45049ed7a5d',
    })
  })

  return (
    <div className="App">
      <Route render={({location}) => {
          <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={1000}
            classNames="page"
          >
            <Switch>  
              <Header/>
              <Route path="/contents/search/:keyword" exact component={Search}/>
              <Route path="/contents/:category" exact component={Home}/>
              <Route path="/content/update/:contentId" component={UpdateContent}/>
              <Route path="/content/:contentId" exact component={Detail}/>
              <Route path="/add-content"  exact component={AddContent}/>
              <Route path="/test" exact component={Test}/>
              <Route path="/" exact component={Home}/>  
              <Footer/>
              <EndPoints/>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      }}/>
    </div>
  );
}

export default App;
