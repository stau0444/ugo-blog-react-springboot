import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useState }  from 'react';
import { Link } from 'react-router-dom';
import { Login } from '@mui/icons-material';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import LoginForm from './LoginForm';
import { Button } from '@mui/material';
import SignUpForm from './SignUpForm';

export default function LoginMenu() {
  const [isLogin , setIsLogin]  = useState(false);
  const [openLogin , setOpenLogin] = useState(false);
  const [openSignUp , setOpenSignUp] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  
  const openLoginForm = () =>{
    setAnchorEl(null);
    setOpenLogin(true);
  }

  const openSignUpForm = () =>{
    setAnchorEl(null);
    setOpenSignUp(true);
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const checkLogin = () => {
    setIsLogin(true);
  };
  return (
    <>
      <Box sx={{listStyle:"none", display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton onClick={handleClick} size="small" sx={{ ml: 2 ,marginBottom:{xs:'5px',sm:'13px'}}}>
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
      {isLogin?
      <div>
        <MenuItem component="div" sx={{}}>
          <Avatar /> <Link to="/profile">프로필</Link>
        </MenuItem>
        <MenuItem component="div">
          <Avatar /> <Link to="/my-account">회원 정보 변경</Link>
        </MenuItem>
        <Divider />
        <MenuItem component="div">
          <ListItemIcon >
            <Settings fontSize="small" />
          </ListItemIcon>
          <Link to="/logout">Setting</Link>
        </MenuItem>
        <MenuItem component="div">
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <Link to="/logout">Log-out</Link>
        </MenuItem> 
      </div>
      :
      <div>
        <MenuItem component="div">
          <ListItemIcon>
            <Login fontSize="small" />
          </ListItemIcon>
          <Button onClick={openLoginForm}>로그인</Button>
        </MenuItem>
        <MenuItem component="div">
          <ListItemIcon>
            <FiberNewIcon fontSize="small" />
          </ListItemIcon>
          <Button  onClick={openSignUpForm}>회원가입</Button>
        </MenuItem>
      </div>
      }
      </Menu>
      {!isLogin&&openLogin?<LoginForm setOpenLogin={setOpenLogin}/>:""}
      {!isLogin&&openSignUp?<SignUpForm setOpenSignUp={setOpenSignUp}/>:""}
      <Button sx={{display:"none"}} onClick={checkLogin}></Button>
    </>
  );
}