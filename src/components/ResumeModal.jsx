import HomeIcon from '@mui/icons-material/Home';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import { Box, Grid, Modal, styled, Typography } from '@mui/material';
import { useState } from 'react';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import GitHubIcon from '@mui/icons-material/GitHub';
const introduceStyle={
    margin:'40px 40px'
}
const modalStyle = {
    margin: "20px auto",
    width: '80%',
    height:'95%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    maxHeight:"700px", 
    overflowY:"auto"   
  };
const ResumeImg = styled('img')`
    width:60%;
    border-radius: 20px;
    max-width: 175px;
`;
const ResumeRibbon = styled(Box)`
    width:95%;
    background: #af43f1;
    height:50px;
    border-radius: 30px;
    margin-left: -46px;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
      &::before{
        content:'';
        top:101px;
        width:14px;
        height: 35px;
        background-color: #8045c6;
        position:absolute;
        border-top-left-radius:20px;
        border-bottom-left-radius:20px;
        z-index:1;
      }
      &::after{
        content:'';
        top:53px;
        width:14px;
        height: 66px;
        border-top-left-radius:20px;
        background-color: #af43f1;
        position:absolute;
      }
`;

export default function ResumeModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
      <>
        <PermContactCalendarIcon
          fontSize="large"
          sx={{ marginRight: "10px" }}
          onClick={handleOpen}
        />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Grid container sx={modalStyle}>
            <Grid item xs={12} className="resume-ribbon">
              <ResumeRibbon>
                <Typography
                  sx={{
                    marginLeft: "50px",
                    fontWeight: "bold",
                    color: "coral",
                    fontFamily: "'Righteous', cursive",
                    fontSize: "30px",
                  }}
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                >
                  ABOUT ME
                </Typography>
              </ResumeRibbon>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ margin: "70px 0 20px 0" }}
              className="resume-header"
            ></Grid>
            <Grid item xs={12} sm={6} sx={{ textAlign: "center" }}>
              <ResumeImg src="/IMG_1708.JPG" alt="" />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ fontFamily: "serif" }}
              sm={6}
              className="resume-info"
            >
              <Typography id="resume" sx={{ mt: 2 }}>
                <EmojiPeopleIcon size="large" sx={{ marginRight: "10px" }} />
                <Typography variant="div" sx={{ marginBottom: "10px" }}>
                  황경욱 1992/07/06
                </Typography>
              </Typography>
              <Typography  sx={{ mt: 2 }}>
                <HomeIcon size="large" sx={{ marginRight: "10px" }} />
                서울특별시 성북구 보국문로8나길 12
              </Typography>
              <Typography  sx={{ mt: 2 }}>
                <AlternateEmailIcon size="large" sx={{ marginRight: "10px" }} />
                stau04@gmail.com
              </Typography>
              <Typography  sx={{ mt: 2 }}>
                <ContactPhoneIcon size="large" sx={{ marginRight: "10px" }} />
                010-9115-0444
              </Typography>
              <Typography  sx={{ mt: 2 }}>
                <GitHubIcon size="large" sx={{ marginRight: "10px" }} />
                <a href="https://github.com/stau0444">https://github.com/stau0444</a>
              </Typography>
            </Grid>
            <Grid item xs={12} sx={introduceStyle} className="resume-introduce">
              <Typography variant="h5" sx={{ margin: "20px 0" }}>
                introduce
                <hr />
              </Typography>
              <Typography variant="p">
                개발자 황경욱입니다. 많이 배우고 발전하고 싶습니다. 개발자
                황경욱입니다. 많이 배우고 발전하고 싶습니다. 개발자
                황경욱입니다. 많이 배우고 발전하고 싶습니다. 개발자
                황경욱입니다. 많이 배우고 발전하고 싶습니다. 개발자
                황경욱입니다. 많이 배우고 발전하고 싶습니다. 개발자
                황경욱입니다. 많이 배우고 발전하고 싶습니다. 개발자
                황경욱입니다. 많이 배우고 발전하고 싶습니다. 개발자
                황경욱입니다. 많이 배우고 발전하고 싶습니다. 개발자
                황경욱입니다. 많이 배우고 발전하고 싶습니다. 개발자
                황경욱입니다. 많이 배우고 발전하고 싶습니다. 개발자
                황경욱입니다. 많이 배우고 발전하고 싶습니다. 개발자
                황경욱입니다. 많이 배우고 발전하고 싶습니다. 개발자
                황경욱입니다. 많이 배우고 발전하고 싶습니다.
              </Typography>
            </Grid>
            <Grid item xs={12} sx={introduceStyle} className="resume-introduce">
              <Typography variant="h5" sx={{ margin: "20px 0" }}>
                Skill Set
                <hr />
              </Typography>
              <Box>
                <Typography variant="h6" sx={{ margin: "20px 0" }}>
                  Language
                </Typography>
                <Typography variant="p">
                  Java , Javascript<br/>
                  <br/>
                  <small>* Java의 기본 개념, 문법에 대해 숙지하고 있음</small><br/>
                  <small>* Javascript의 기본 개념, 문법에 대해 숙지하고 있음</small><br/>
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" sx={{ margin: "20px 0" }}>
                Front-end
                </Typography>
                <Typography variant="p">
                  React
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" sx={{ margin: "20px 0" }}>
                Back-end
                </Typography>
                <Typography variant="p">
                  Spring-Boot , JPA , Spring-Security<br/>
                  <br/>
                  <small>* Spring-boot를 통한 개인프로젝트</small><br/>
                  <small>* Spring-Sequerity를 통한 사용자인증,권한,보안처리 구현 경험</small><br/>
                  <small>* JPA 작동 원리, 사용법 대해 이해하고 있음 </small><br />
                  <small>* Spring-data-JPA , QueryDSL을 활용한 JPA 사용법 숙지</small><br/>
                </Typography>
                <Typography variant="h6" sx={{ margin: "20px 0" }}>
                Version-Control
                </Typography>
                <Typography variant="p">
                Git , GitHub<br/>
                  <br/>
                  <small>* Git / GitHub를 통한 프로젝트 협업 , 버전관리 경험 </small><br/>
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" sx={{ margin: "20px 0" }}>
                Database
                </Typography>
                <Typography variant="p">
                  OracleDB,  MariaDB , Mysql <br/>
                  <br/>
                  <small>* 프로젝트 요구사항에 따른 데이터 모델링과 쿼리 작성 가능</small><br/>
                </Typography>
              </Box>
              <Box>
                  <Typography variant="h6" sx={{ margin: "20px 0" }}>
                    IDE
                  </Typography>
                  <Typography variant="p">
                  INTELLI J , ECLIPSE , VScode<br/>
                    <br/>
                    <small>*해당 IDE로 프로젝트 경험을 갖고 있으며 사용법을 숙지하고 있음 </small><br/>
                  </Typography>
              </Box>

              <Box>
                  <Typography variant="h6" sx={{ margin: "20px 0" }}>
                    Deployment
                  </Typography>
                  <Typography variant="p">
                  AWS EC2 , AWS RDS<br/>
                    <br/>
                    <small>* AWS EC2 와 RDS를 활용하여 스프링 부트 + React + JPA + Spring-Security 애플리케이션 배포 경험 </small><br/>
                  </Typography>
              </Box>
            </Grid>
          </Grid>
        </Modal>
      </>
    );
}