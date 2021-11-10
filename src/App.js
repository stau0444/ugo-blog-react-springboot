import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.core.css';
import './App.scss';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AddContent from './pages/AddContent';
import Detail from './pages/Detail';
import UpdateContent from './pages/UpdateContent';
import Test from './pages/Test';
import AWS from "aws-sdk"
import hljs from 'highlight.js';
import Search from './pages/Search';
import { Button} from '@mui/material';
import axios from 'axios';
import { useEffect} from 'react';
import { useSelector } from 'react-redux';


hljs.configure({   // optionally configure hljs
  languages: ['javascript' ,'java','python','html']
});


function App() {

  let isOn = useSelector(state=>state.nightMode)
  useEffect(()=>{
    if(isOn){
      document.querySelector(".App").style.background ="whitesmoke"
    }else{
      document.querySelector(".App").style.background ="rgb(32, 38, 45)"
    }
  },[isOn])
  //AWS  config
  AWS.config.update({
    region:'ap-northeast-2',
    credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId:'ap-northeast-2:f4eab593-5f5f-4e47-8b60-a45049ed7a5d',
    })
  })
  
 

  const loginTest = () => {
    const headers = {
      "Content-type": "application/json; charset=utf-8",
      "Authorization": localStorage.getItem("auth_token"),
      "Cache-Control":"no-cache"
    }
    axios
      .get("/api/user/test", { headers: headers })
      .catch((error) => {
        console.log(error);
      })
      .then((resp) => {
        console.log("auth",localStorage.getItem("auth_token"))
        console.log(resp);
      });
  }
  const logOut = () =>{
    localStorage.clear();
    
  }

  return (
    <div className="App">
            <BrowserRouter>  
                <Header/>
                <Button onClick={logOut} sx={{width:"10%",color:"white",}}>logOutTestBtbn</Button>
                <Button onClick={loginTest} sx={{width:"10%" ,color:"white"}}>loginTestBtn</Button>
                <Route path="/contents/search/:keyword" exact component={Search}/>
                <Route path="/contents/:category" exact component={Home}/>
                <Route path="/content/update/:contentId" component={UpdateContent}/>
                <Route path="/content/:contentId" exact component={Detail}/>
                <Route path="/add-content"  exact component={AddContent}/>
                <Route path="/test" exact component={Test}/>
                <Route path="/" exact component={Home}/>  
            </BrowserRouter>
    </div>
  );
}

export default App;
