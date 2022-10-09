import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import LoginMenu from '../user/LoginMenu';
import { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import { Logo } from './Header';
import ResumeModal from './ResumeModal';
import { Button, Tooltip } from '@mui/material';
import axios from 'axios';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  marginLeft: 0,
  width: '100%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const SearchIconWrapperList = styled('div')(({ theme }) => ({
  pointerEvents: 'none',
  display: 'flex',
}));


const WhiteList= styled("ul")`
  color:white;
  background-color: #FFFFFF20;
  visibility: ${props => props.isselected==="true"?"visible":"hidden"};
  list-style:none;
  padding:0 ;
  border-radius: 0 0 10px 10px;
  font-family:'NanumSquare' , san-serif;
  & > li{
    border-top:1px  solid whitesmoke ;
    padding:5px 10px;
    cursor: pointer;
    font-weight: bold;
    :hover{
      transition: all 0.2s  linear;
      box-shadow: 0px 2px gray;
      background-color: #FFFFFF40;
    }
  }
  & > li:last-child{
    border-radius: 0 0 10px 10px;
  }
`

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '100%',
  },
}));



export default function MenuBar() {
  const history = useHistory();
  const [keyword,setKeyword] = useState("");
  const [whitelist,setWhitelist] =useState([]);
  const [isselected , setIsselected] = useState(false);

  const handleSearch = (e) => {
    
    if(e.key === "Enter"){
      history.push("/contents/search/"+e.target.value);
    }
    if(e.type === "click"){
      history.push("/contents/search/"+keyword);
    }
    setIsselected(false);
    searchKeywordRef.current.value = "";
  }
  const searchKeywordRef = useRef();
  const handleWhitelist= (value) =>{
    async function handleWhitelist(){
       await axios.get("/api/whitelist?keyword="+value).then((resp)=>{
        if(resp.data.length === 0){
          setWhitelist([`${value + "\n 로 검색된 결과가 없습니다."}`])
        }else{
          setWhitelist([...resp.data]);
        }
        setIsselected(true)          
       })
    }
    handleWhitelist();
  }

  const handleSearchKeyword = (ql) =>{
    searchKeywordRef.current.value = ql ;
    setIsselected(false);
    setKeyword(ql);
  }

  
  return (
    <>
      <Box sx={{ flexGrow: 1}}>
        <AppBar
          sx={{
            marginTop:"3px",
            zIndex: 1,
            background: "#1af1b0cc",
            height: "55px",
            width: "94%",
            borderRadius: "20px",
            position: "fixed",
            top: 5,
            left: "3%",
            right: "3%",
            border:"0 solid black",
            boxShadow: "3px 3px 3px #0b0f0ecc"
          }}
        >
          <Toolbar
            sx={{
              justifyContent: "flex-end",
            }}
          >
            <Link
              style={{
                margin: "0 auto",
                cursor: "pointer",
                lineHeight: "100%" ,
                padding: "0 10px 3px 0"
              }}
              to="/"
            >
              <Box
                sx={{
                  display: { xs: "block", sm: "none" },
                  // marginBottom: "5px",
                  // paddingLeft:"12px"
                }}
              >
                <Logo
                  component="span"
                  sx={{
                    fontSize: "3.4vw",
                    color: "white",
                    borderBottom: "2px solid white",
                  }}
                >
                  UGO's {""}
                </Logo>
                <Typography
                  component="span"
                  sx={{
                    fontSize: "3.2vw",
                    color: "royalblue",
                    borderBottom: "3px dashed royalblue",
                    fontWeight: "bold",
                    fontFamily: "'Righteous', cursive",
                  }}
                >
                  DEV{" "}
                </Typography>
                <Logo
                  component="span"
                  sx={{
                    fontSize: "3.2vw",
                    borderBottom: "2px solid white",
                    margin: "0",
                    color: "white",
                  }}
                >
                  BLOG
                </Logo>
              </Box>
            </Link>
            <Box
              sx={{
                display: { xs: "none", sm: "block" },
                marginBottom: "6px",
                position: "absolute",
                left: 40,
                top: 10,
              }}
            >
              <Link to="/">
                <Tooltip title="HOME">
                  <HomeIcon
                    fontSize="large"
                    sx={{
                      color: "white",
                      marginRight: "10px",
                    }}
                  />
                </Tooltip>
              </Link>
              <a href="https://github.com/stau0444" style={{ color: "white" }}>
                <Tooltip title="GITHUB">
                  <GitHubIcon
                    fontSize="large"
                    sx={{
                      marginRight: "10px",
                    }}
                  />
                </Tooltip>
              </a>
              <ResumeModal />
              <a href="https://ugo04.tistory.com/" style={{ color: "white" }}>
                <Tooltip title="티스토리">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      marginBottom: "3px",
                      width: "32px",
                      height: "32px",
                      fill: "white",
                    }}
                    viewBox="0 0 459 459"
                  >
                    <title>티스토리 로고</title>
                    <g>
                      <path d="M229.5,0C102.75,0,0,102.75,0,229.5S102.75,459,229.5,459,459,356.25,459,229.5,356.25,0,229.5,0ZM130.21,191.45a39.57,39.57,0,1,1,39.56-39.57A39.58,39.58,0,0,1,130.21,191.45ZM229.5,390a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,390Zm0-99.29a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,290.74Zm0-99.29a39.57,39.57,0,1,1,39.56-39.57A39.57,39.57,0,0,1,229.5,191.45Zm99.29,0a39.57,39.57,0,1,1,39.57-39.57A39.57,39.57,0,0,1,328.79,191.45Z" />
                    </g>
                  </svg>
                </Tooltip>
              </a>
            </Box>
            <Search
              sx={{
                width: { xs: "60%", sm: "40%" },
                marginBottom: { xs: "1px", sm: "10px" },
                borderRadius:isselected?"13px 13px 0 0":"13px",
                backgroundColor: isselected?'#FFFFFF40':'#ffffff20',
                '&:hover': {
                  backgroundColor: '#FFFFFF40'
                },
              }}
              className="Test-search"
            >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="글 검색"
                inputProps={{
                  onChange: (e) => {
                    setKeyword(e.target.value);
                    handleWhitelist(e.target.value);
                  },
                  ref: searchKeywordRef,
                  "aria-label": "search",
                  onBlur: () => {
                    setIsselected(false);
                  },
                  onKeyDown:(e)=>{
                    if(e.key === "Enter")handleSearch(e);
                  }
                }}
              />
              <Box
                sx={{
                  width: "100%",
                  position: "absolute",
                }}
              >
                <WhiteList isselected={isselected.toString()}>
                  {whitelist.map((wl, i) => (
                    <li
                      className="white-list-jxef"
                      key={i}
                      onClick={() => {
                        handleSearchKeyword(wl);
                      }}
                    >
                      <SearchIconWrapperList>
                        <SearchIcon sx={{marginRight:"5px",marginLeft:"5px"}}/>
                        {wl}
                      </SearchIconWrapperList>
                    </li>
                  ))}
                </WhiteList>
              </Box>
              <Button
                sx={{
                  padding: "3px 3px",
                  borderRadius: "30px",
                  position: "absolute",
                  right: "7px",
                  top: "13%",
                  bottom: "13%",
                  fontWeight: "bold",
                  color: "white",
                  fontFamily: "'Righteous', cursive",
                  fontSize: { xs: "10px", sm: "0.8vw" },
                  background: "linear-gradient(to right, #0ea6e2, #c4ced9)",
                  "&:hover": {
                    background: "#17171736",
                  },
                }}
                onClick={handleSearch}
              >
                Search
              </Button>
            </Search>
            <LoginMenu />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}