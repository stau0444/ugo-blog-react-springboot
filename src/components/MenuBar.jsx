import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import LoginMenu from './LoginMenu';
import {useState } from 'react';
import { useHistory } from 'react-router';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import { Logo } from './Header';
import ResumeModal from './ResumeModal';
import { Button, Tooltip } from '@mui/material';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
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

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));



export default function MenuBar() {
  const history = useHistory();
  const [keyword,setKeyword] = useState("");
  const handleSearch = (e) => {
    if(e.key === "Enter"){
      history.push("/contents/search/"+e.target.value);
    }
    if(e.type === "click"){
      history.push("/contents/search/"+keyword);
    }
  }


  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            zIndex: 1,
            background: "#23ca98ef",
            height: "55px",
            width: "94%",
            borderRadius: "20px",
            position: "fixed",
            top: 5,
            left: "3%",
            right: "3%",
          }}
        >
          <Toolbar
            sx={{
              justifyContent: "flex-end",
            }}
          >
            <Box
              sx={{
                display: { xs: "block", sm: "none" },
                margin: "0 auto",
                marginBottom: "7px",
              }}
            >
              <Logo
                component="span"
                sx={{
                  fontSize: "3.2vw",
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
            <Box
              sx={{
                display: { xs: "none", sm: "block" },
                marginBottom: "6px",
                position: "absolute",
                left: 40,
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
                width: { xs: "65%", sm: "45%" },
                marginBottom: { xs: "4px", sm: "10px" },
              }}
            >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="글 검색"
                inputProps={{
                  onChange: (e) => {
                    setKeyword(e.target.value);
                  },
                  "aria-label": "search",
                  onKeyPress: handleSearch,
                }}
              />
              <Button
                sx={{
                  padding: "3px 0",
                  background: "#1fe689f8",
                  borderRadius: "30px",
                  position: "absolute",
                  right: "7px",
                  top: "15%",
                  bottom: "15%",
                  fontWeight: "bold",
                  color: "white",
                  fontFamily: "'Righteous', cursive",
                  fontSize: "1vw",
                  "&:hover": {
                    backgroundColor: "#17171736",
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