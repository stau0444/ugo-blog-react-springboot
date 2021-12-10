import MenuBar from './MenuBar';
import Links from './Links';
import { Box, Grid, styled, SvgIcon, Tooltip, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import NightModeSwitchButton from './NightModeSwitchButton';

export const Logo = styled(Typography)`
    font-family: 'Righteous', cursive;
    font-size: "60px";
    font-weight: bold;
    z-index: 1;
    padding:0;
    border-bottom: 2px solid bisque;
`

const iconStlye = {
  display: { xs: "inline", sm: "none" },
  marginRight: "10px",
}

export default function Header() { 
  const isOn = useSelector(state=>state.nightMode)
  const [logoColor,setLogoColor] = useState();
  const [logoMidColor,setLogoMidColor] = useState();
  const [iconColor, setIconColor] = useState();

  useEffect(()=>{
    const nightMode = () => {
      setLogoColor("bisque")
      setLogoMidColor("royalblue")
      setIconColor("white")
    }
    const whiteMode = () => {
      setLogoColor("rgb(55, 161, 13)")
      setLogoMidColor("rgb(136, 145, 139)")
      setIconColor("rgb(136, 145, 139)")
    }
    isOn?whiteMode():nightMode();
  },[isOn,setLogoColor,setLogoMidColor])


    return (
      <Grid container>
        <Grid item xs={12}>
          <MenuBar />
        </Grid>
        <Grid item xs={12}>
          <Box
            className="logo"
          >
            <Logo
              className="logo"
              component="span"
              sx={{
                margin: { xs: "70px 0 30px 0px", sm: "70px 0 30px 10px" },
                fontSize: "60px",
                color: logoColor,
                borderBottomColor: logoColor,
              }}
            >
              UGO's {""}
            </Logo>
            <Typography
              component="span"
              sx={{
                display: { xs: "block", sm: "inline" },
                color: logoMidColor,
                fontSize: "60px",
                borderBottom: `3px dashed ${logoMidColor}`,
                fontWeight: "bold",
                fontFamily: "'Righteous', cursive",
              }}
            >
              DEV{" "}
            </Typography>
            <Logo
              component="span"
              sx={{
                margin: "0",
                fontSize: "60px",
                color: logoColor,
                borderBottomColor: logoColor,
              }}
            >
              BLOG
            </Logo>
          </Box>
          <NightModeSwitchButton isOn={isOn} />
          <Grid
            item
            sx={{
              textAlign: "center",
              opacity: { xs: 1, sm: 0 },
              transition: {
                xs: "opacity 0.7s linear",
                sm: "opacity 0s linear",
              },
            }}
          >
            <Link to="/">
              <Tooltip title="Home">
                <HomeIcon
                  fontSize="large"
                  sx={{...iconStlye,color:iconColor}}
                />
              </Tooltip>
            </Link>
            <a
              href="https://github.com/stau0444"
              target="_blank"
              rel="noreferrer"
            >
              <Tooltip title="GitHub 이동">
                <GitHubIcon
                  fontSize="large"
                  sx={{...iconStlye,color:iconColor}}
                  alt="asd"
                />
              </Tooltip>
            </a>
            <a
              href="https://github.com/stau0444"
              target="_blank"
              rel="noreferrer"
            >
              <Tooltip title="이력서 열기">
                <PermContactCalendarIcon
                  fontSize="large"
                  sx={{...iconStlye,color:iconColor}}
                />
              </Tooltip>
            </a>
            <Tooltip  title="티스토리 블로그 이동">
              <a
                href="https://ugo04.tistory.com/"
                alt="티스토리"
                target="_blank"
                rel="noreferrer"
              >
                <SvgIcon
                  xmlns="http://www.w3.org/2000/svg"
                  sx={{
                    ...iconStlye, 
                    marginBottom: "2px",
                    width: "31px",
                    height: "31px",
                    color: iconColor,
                  }}
                  viewBox="0 0 459 459"
                >
                  <g>
                    <path d="M229.5,0C102.75,0,0,102.75,0,229.5S102.75,459,229.5,459,459,356.25,459,229.5,356.25,0,229.5,0ZM130.21,191.45a39.57,39.57,0,1,1,39.56-39.57A39.58,39.58,0,0,1,130.21,191.45ZM229.5,390a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,390Zm0-99.29a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,290.74Zm0-99.29a39.57,39.57,0,1,1,39.56-39.57A39.57,39.57,0,0,1,229.5,191.45Zm99.29,0a39.57,39.57,0,1,1,39.57-39.57A39.57,39.57,0,0,1,328.79,191.45Z" />
                  </g>
                </SvgIcon>
              </a>
            </Tooltip>
          </Grid>
        </Grid>
        <hr className="header-divider" data-ison={isOn} />
        <Grid
          item
          xs={12}
          sx={{
            margin: { xs: "0 auto", sm: "15px 0px" },
            transition: "all 0.5s ease-in-out",
          }}
        >
          <Links />
        </Grid>
      </Grid>
    );  
}