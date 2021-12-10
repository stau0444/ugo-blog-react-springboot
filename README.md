#
# UGO's Dev Blog Front-end 

### 목차

[1. 프로젝트 설명](#1프로젝트-설명 )
<br/>
[2. 사용 라이브러리](#2사용-라이브러리)
<br/>
[3. 주요 기능](#3주요-기능)
<br/>
[4. 페이지별 설명](#4페이지별-설명)
<br/>

#
## 1.프로젝트 설명 
#
![로고 이미지](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FEACL2%2FbtrnfBYVtgA%2FL4dVWu9Dv4RddOZrhwxBrK%2Fimg.png)


공부하는 것들을 정리해 놓을 수 있는 저만의 블로그를 만들어 보고 싶어 시작한 프로젝트입니다. 리액트와 리덕스를 기반으로 만들어졌고 현재 프런트엔드 서버는 netlify 를 통해 배포되어있으며 , 아래 링크에서 확인할 수 있습니다. REST API 방식으로 EC2 인스턴스에 배포되어 있는 Spring-boot API 서버에서 데이터를 받아오고 있으며. JWT 토큰 방식을 사용하여 로그인 기능이 구현되었습니다. 

<br/>

> page URL

<br/>

- https://blog.ugosdev.com

<br/>

#
## 2.사용 라이브러리
#

<br/>

Front-end Stack||
--|--  
라이브러리|React.js 17.0.2
상태관리|Redux 4.1.1
라우팅| React-router-dom 5.3.0
HTTP client | Axios 
Component Design | Marterial-Design , Styled Component , SCSS
프로젝트 관리| ESLint , Prettier , Husky , Lint-staged
이미지 저장 | AWS S3
기타| Quill.js(텍스트 에디터) , Highlight.js(텍스트 하이라이팅) , Cropper.js(이미지 편집) , framer-motion(애니메이션)



<br/>

#
## 3.주요 기능
#
- 밝기 변경 (LightMode , DarkMode)기능
- S3 연동 이미지 업로드 (이미지 파일은 S3 업로드되며 생성되는 객체 URL은 DB에 저장)
- 이메일 인증을 통한 회원가입
- JWT 토큰 방식을 이용한 로그인 인증 및 로그인 유지
- Quill.js 이용한 텍스트 에디팅(이미지 , 폰트 스타일 , 코드블럭 입력)
- 반응형 웹디자인

#
## 4.페이지별 설명 
#

> ###   홈 페이지 ( / )
<br/>

- Light-Mode , Dark-Mode 기능
- Marterial-Design `<Grid>`를 활용한 반응형 디자인 
#

<small> - DarkMode</small>
<br/>

![홈페이지 이미지](https://blog.kakaocdn.net/dn/ORuNs/btrniUcEtVb/KvL3dMr3KzQCi6T1Gkmebk/img.png)
<br/>

<small> - LightMode</small>
<br/>

![홈페이지 이미지](https://blog.kakaocdn.net/dn/bycczD/btrnc9905FX/wvLTaMWCwGUfneZ2zqWkWk/img.png)

#

> ### 카테고리별 검색 ( /contents/{category} )
<br/>

- 태그를 통한 카테고리별 검색기능 구현

#

<small> - 카테고리별 검색 결과</small>
<br/>

![홈페이지 이미지](https://blog.kakaocdn.net/dn/bDfsGI/btrnfBkrh2S/l7Q3fu2XEiiv4zE5J055p1/img.png)


#
> ### 검색 페이지 ( /contents/search/{keyword} )
<br/>

- 키워드를 통한 검색 (글 제목 , 글 설명중 키워드를 포함한 글이 검색됨)
- Highlight.js를 통한 keyword Highlight 구현 

#


<small> - 키워드 검색 결과</small>
<br/>

![홈페이지 이미지](https://blog.kakaocdn.net/dn/zpD16/btrnfA6ZOQV/2jD5jAyztuMkD21THpVbFk/img.png)


#

> ### 회원가입 modal
<br/>

- cropper.js  프로필 이미지 편집 구현
- AWS S3를 연동하여 이미지 파일은 S3 버킷에 저장되고 생성되는 객체 URL DB에 저장
- 이메일 인증을 통한 본인인증 구현(하나의 이메일에 하나의 아이디만 가입 가능하도록 구현)

#
<br/>

<small>- Sign Up Form</small>
<br/>

![회원 가입 모달](https://blog.kakaocdn.net/dn/n4X7Z/btrniT54sG0/87bvW4FHWuesJAKF75Afe0/img.png)

<small>- 프로필 이미지 편집</small>
<br/>

![회원 가입 모달](https://blog.kakaocdn.net/dn/8Bv5r/btrnhBLlMSq/yANuUkY5QJu7K9wOhzTWg1/img.png)

<small>- 이메일 인증</small>
<br/>

![이메일 인증](https://blog.kakaocdn.net/dn/wVB8u/btrniUYecvQ/80VsnB1j54oVuku2euG5U0/img.png)

<small>- 인증 메일</small>
<br/>

![인증 메일](https://blog.kakaocdn.net/dn/HThpG/btrnkw3k2Hq/AZnnat9K6OP0Bid4DChtAK/img.png)

#


> ### 로그인 modal
<br/>

- JWT 토큰을 통한 로그인 인증 및 로그인 유지 

1. 로그인 성공시 Access token 과 Refresh token 을 받아옴<br/>
2. Access token은 Axios default header로 지정되고 refresh token은 브라우저 쿠키에 저장됨. <br/>
3. access 토큰의 유효시간은 10분 refresh token은 1시간으로 지정되어있으며 
access 토큰이 만료될시 refresh token을 전달하여 access 토큰을 새로 발급 받음<br/>
4. refresh 토큰이 만료되면 alert 를 띄워 다시 로그인하도록 함.
#

<small>- 로그인 모달</small>
<br/>

![인증 메일](https://blog.kakaocdn.net/dn/q0LT6/btrnoBqviyh/tX06NKIns5XtzcP3bjJ3uk/img.png)

<small>- 로그인 전 메뉴바</small>
<br/>

![인증 메일](https://blog.kakaocdn.net/dn/buGeFK/btrniUE4tFi/DxsvTBTWQ8sWkZFxkF4l3k/img.png)

<small>- 로그인 후 메뉴바</small>
<br/>

![인증 메일](https://blog.kakaocdn.net/dn/m3JAG/btrno3AioxU/gI93XQfQmxJnnF9R0pvp6K/img.png)


#

> ### 글 작성 ,수정 , 삭제 
<br/>

- Quill.js 사용을 통해 텍스트,이미지 , 코드블럭 작성
- 본문 미리보기 기능 <br/>
(현재는 "ROLE_ADMIN" 권한을 갖는 사용자만 글 작성 , 수정이 가능합니다.)

#

<small>- 글 작성 페이지</small>
<br/>
![글 작성](https://blog.kakaocdn.net/dn/pUWud/btrnkwwF3q3/FrB7EsKPwf4BD7fW4rSKu1/img.png)

<small>- 본문 미리보기</small>
<br/>
![본문 미리보기](https://blog.kakaocdn.net/dn/or2qm/btrnji6MatU/q7krDTbpntw5uemPmAU6n0/img.png)


<small>- 추가된 컨텐츠</small>
<br/>
![추가된 컨텐츠](https://blog.kakaocdn.net/dn/3KYgq/btrnjeQFkCp/PZSJUOdE3Sdkpe6h4YCPKK/img.png)


#
#
#
