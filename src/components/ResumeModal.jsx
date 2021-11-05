import HomeIcon from '@mui/icons-material/Home';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import { Box, Grid, Modal, styled, Typography } from '@mui/material';
import { useState } from 'react';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import GitHubIcon from '@mui/icons-material/GitHub';
import ChipsGenerator from './ChipsGenerator';


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
    overflowY:"auto" ,
  
  };
const ResumeImg = styled('img')`
    width:60%;
    padding:3px;
    border-radius: 20px;
    max-width: 175px;
`;
const ResumeRibbon = styled("div")`
    width:0px;
    background: #af43f1;
    height:50px;
    border-radius: 30px;
    margin-left: -46px;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    transition: width 1500ms;
      &.active{
        width: 600px;       
      }
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
    
    const handleScroll = (e) => {
      console.log(e.target.scrollTop);
      if(e.target.scrollTop <= 10){
         document.querySelector(".resume-ribbon").classList.add("active")
      }else{
        document.querySelector(".resume-ribbon").classList.remove("active")
      }
      if(e.target.scrollTop >= 300){
        document.querySelector(".resume-skills").classList.add("active")
      }else{
        document.querySelector(".resume-skills").classList.remove("active")
      }
      console.log(document.querySelector(".resume-ribbon").classList)
    };

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
          <Grid container onScroll={handleScroll} sx={modalStyle}>
            <Grid item xs={12}>
              <ResumeRibbon className="resume-ribbon active">
                <Typography
                  sx={{
                    width: "200px",
                    marginLeft: "50px",
                    fontWeight: "bold",
                    color: "coral",
                    fontFamily: "'Righteous', cursive",
                    fontSize: "30px",
                  }}
                  variant="h6"
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
            <Grid item xs={12} sx={introduceStyle} className="resume-skills">
              <Typography variant="h5" sx={{ margin: "20px 0" }}>
                Skills
                <hr />
              </Typography>
              <Grid item xs={12} sx={{border:"1px solid black" ,padding:"20px"}}>
                <Box>
                  <Typography variant="h6" sx={{ margin: "20px 0" }}>
                    Language
                    <hr/>
                  </Typography>
                  <Typography variant="p">
                    <ChipsGenerator values={["Java" , "Javascript"]} color="gold"/>
                    <br/>
                    <small>* Java의 기본 개념, 문법에 대해 숙지하고 있음</small><br/>
                    <small>* Javascript의 기본 개념, 문법에 대해 숙지하고 있음</small><br/>
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ margin: "20px 0" }}>
                  Front-end
                  <hr/>
                  </Typography>
                  <Typography variant="p">
                    <ChipsGenerator values={["React","Redux"]} color="coral"/>
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ margin: "20px 0" }}>
                  Back-end
                  <hr/>
                  </Typography>
                  <Typography variant="p">
                    <ChipsGenerator values={["Spring-Boot" , "JPA" , "Spring-Security"]} color="royalblue"/>
                    <br/>
                    <small>* Spring-boot를 통한 개인프로젝트 경험</small><br/>
                    <small>* Spring-Sequerity를 통한 사용자인증,권한,보안처리 구현 경험</small><br/>
                    <small>* JPA 작동 원리, 사용법 대해 이해하고 있음 </small><br />
                    <small>* Spring-data-JPA , QueryDSL을 활용한 JPA 사용법 숙지</small><br/>
                  </Typography>
                  <Typography variant="h6" sx={{ margin: "20px 0" }}>
                  Version-Control
                  <hr/>
                  </Typography>
                  <Typography variant="p">
                    <ChipsGenerator values={["Git","GitHub"]} color="green"/>
                    <br/>
                    <small>* Git / GitHub를 통한 프로젝트 협업 , 버전관리 경험 </small><br/>
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ margin: "20px 0" }}>
                  Database
                  <hr/>
                  </Typography>
                  <Typography variant="p">
                    <ChipsGenerator values={["OracleDB",  "MariaDB" , "Mysql"]}  color="skyblue"/>
                    <br/>
                    <small>* 프로젝트 요구사항에 따른 데이터 모델링과 쿼리 작성 가능</small><br/>
                  </Typography>
                </Box>
                <Box>
                    <Typography variant="h6" sx={{ margin: "20px 0" }}>
                      IDE
                      <hr/>
                    </Typography>
                    <Typography variant="p">
                      <ChipsGenerator values={["INTELLIJ","ECLIPSE" ,"VScode"]} color="gray"/>
                      <br/>
                      <small>*해당 IDE로 프로젝트 경험을 갖고 있으며 사용법을 숙지하고 있음 </small><br/>
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h6" sx={{ margin: "20px 0" }}>
                      Deployment
                      <hr/>
                    </Typography>
                    <Typography variant="p">
                    <ChipsGenerator values={["AWS EC2" , "AWS RDS"]} color="navy"/>
                      <br/>
                      <small>* AWS EC2 와 RDS를 활용하여 스프링 부트 + React + JPA + Spring-Security 애플리케이션 배포 경험 </small><br/>
                    </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Modal>
      </>
    );
}