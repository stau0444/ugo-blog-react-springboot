import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import {  useState }  from 'react';
import { Login } from '@mui/icons-material';
import LogoutIcon from '@mui/icons-material/Logout';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import LoginForm from './LoginForm';
import { Button, Chip, Modal } from '@mui/material';
import SignUpForm from './SignUpForm';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../Auth';
import { postLogOut } from '../redux/moduels/login';
import UserInfoUpdateForm from './UserInfoUpdateForm';
import UserInfoTable from './UserInfoTable';

const profileModalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius:'20px',
  width: '50%',
  height: '370',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function LoginMenu() {
  
  
  const [openLogin , setOpenLogin] = useState(false);
  const [openSignUp , setOpenSignUp] = useState(false);
  const [openProfile , setOpenProfile] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [openProfileUpdate , setOpenProfileUpdate] = useState(false);
  
  const dispatch = useDispatch();
  const {login, userInfo} = useSelector(state => state.login)
  
  
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

  const handleProfileModal = () =>{
    setOpenProfile(true);
  }
  return (
    <>
      <Box
        onClick={handleClick}
        sx={{
          listStyle: "none",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
            "&:hover":{
              
            }
        }}
      >
        <Tooltip title={login ? "회원 정보" : "로그인"}>
          <IconButton
            size="small"
            sx={{
              background:{xs:"#a4d2ee",sm:"inherit"},
              borderRadius:{xs:"20px"},
              display: { sm: "flex"},
              padding:{xs:"5px",sm:"0"},
              position: { xs: "absolute", sm: "static" },
              right: { xs: "5px", sm: "0px" },
              top: { xs: "60px" ,sm:"0px"},
              ml: 2,
              marginTop:"3px",
              marginBottom: { xs: "5px", sm: "13px" },
              //transition: "all 0.5s ease-in-out",
              "&:hover":{
                cursor: "pointer",
                background: {xs:"whitesmoke",sm:"inherit"},
              },
              
            }}
          >
            {login ? (
              <>
                <Avatar
                  src={userInfo.profileUrl}
                  sx={{
                    boxShadow: "2px 2px 2px  rgba(0, 0, 0, 0.658)",
                    width: 36,
                    height: 36,
                  }}
                />
                <Chip
                  sx={{
                    width: "100%",
                    height:"30px",
                    marginLeft: "10px",
                    fontSize: "13px",
                    background: "#7a7573",
                    fontFamily: "'Fredoka One', cursive",
                    color: "#ebe1cf",
                    cursor: "pointer",
                    boxShadow: "inset 1px 2px 2px rgba(0, 0, 0, 0.658)"
                  }}
                  label={userInfo.username}
                />
              </>
            ) : (
              <Avatar sx={{ boxShadow: "2px 2px 2px  rgba(0, 0, 0, 0.658)",width: 36, height: 36 }} />
            )}
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ position: {xs:"fixed"}, top: {xs:"95px" ,sm:"0px"} }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {login ? (
          <div>
            <MenuItem component="div">
              <Button sx={{ textAlign: "center" }} onClick={handleProfileModal}>
                <Avatar
                  src={userInfo.profileUrl}
                  sx={{
                    marginRight: "10px",
                  }}
                />
                프로필
              </Button>
            </MenuItem>
            <MenuItem component="div">
              <Button
                sx={{ textAlign: "center" }}
                onClick={() => {
                  setOpenProfileUpdate(true);
                }}
              >
                <Settings sx={{ marginRight: "10px" }} size="small" />
                회원 정보 변경
              </Button>
              <Modal
                open={openProfileUpdate}
                onClose={() => {
                  setOpenProfileUpdate(false);
                }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={profileModalStyle}>
                  <UserInfoUpdateForm
                    setOpenProfileUpdate={setOpenProfileUpdate}
                    userInfo={userInfo}
                  />
                </Box>
              </Modal>
              <Modal
                open={openProfile}
                onClose={() => {
                  setOpenProfile(false);
                }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={profileModalStyle}>
                  <UserInfoTable
                    setOpenProfile={setOpenProfile}
                    userInfo={userInfo}
                  />
                </Box>
              </Modal>
            </MenuItem>
            <Divider />
            <MenuItem component="div">
              <Button
                sx={{ textAlign: "center" }}
                onClick={() => {
                  setOpenLogin(false);
                  dispatch(postLogOut());
                  logOut();
                }}
              >
                <LogoutIcon
                  sx={{ marginRight: "10px", fontWeight: "800" }}
                  size="small"
                />
                Log-out
              </Button>
            </MenuItem>
          </div>
        ) : (
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
              <Button onClick={openSignUpForm}>회원가입</Button>
            </MenuItem>
          </div>
        )}
      </Menu>
      {!login && openLogin ? <LoginForm setOpenLogin={setOpenLogin} /> : ""}
      {!login && openSignUp ? <SignUpForm setOpenSignUp={setOpenSignUp} /> : ""}
    </>
  );
}