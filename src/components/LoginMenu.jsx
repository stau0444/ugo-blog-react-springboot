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
import { Button, Modal } from '@mui/material';
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
        }}
      >
        <Tooltip title={login ? "회원 정보" : "로그인"}>
          <IconButton
            size="small"
            sx={{
              left: "7px",
              top: "2px",
              ml: 2,
              marginBottom: { xs: "5px", sm: "13px" },
            }}
          >
            {login ? (
              <Avatar
                src={userInfo.profileUrl}
                sx={{
                  boxShadow: "2px 2px 2px  rgba(0, 0, 0, 0.658)",
                  width: 39,
                  height: 39,
                }}
              />
            ) : (
              <Avatar sx={{ width: 39, height: 39 }} />
            )}
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
              zIndex: 0,
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
              <Button sx={{ textAlign: "center" }} onClick={()=>{setOpenProfileUpdate(true)}}>
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