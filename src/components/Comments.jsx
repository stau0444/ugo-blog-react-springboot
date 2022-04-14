import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import ChatIcon from '@mui/icons-material/Chat';
import RadioButtonCheckedRoundedIcon from '@mui/icons-material/RadioButtonCheckedRounded';
import { Box, Button, Divider, styled } from "@mui/material";
import { useSelector } from "react-redux";
import { useRef, useState } from "react";

const CommentConatiner = styled('div')`
 margin:100px auto;
 width: 90%;
`

const CommentHeader = styled('div')`
font-weight: 700;
padding:5px;
font-size: 20px;
color: ${props => props.theme.nightMode?"#22ad96":"lightgray"};
margin: 0px 0;
border-bottom:1px solid white;
`
const AddCommentBox = styled('div')`
 padding: 15px;
 margin: 20px auto;
 text-align: center;
 border-bottom: 1px solid gray;
`
const CommentInput = styled("input")`
  width: 80%;
  height: 35px;
  color: lightgray;
  font-size: 15px;
  border:1px solid gray;
  border-radius: 10px;
  margin-right: 10px;
  padding-left: 15px;
  outline: none;
  background-color: inherit;
`
const CommentsubmitBtn = styled('button')`
cursor: pointer;
background-color: inherit;
border: 1px solid green;
padding:10px;
border-radius: 15px;
color: #23ca98ef;
transition: all 0.1s linear;
&:hover{
  background-color: #5850505a;
}
`

const CommentList = styled('ul')`
padding: 10px;
`
const CommentListBox = styled('div')`

`
const CommentBox = styled('div')`
width: 100%;
display: flex;
`
const Comment = styled('li')`
width: 100%;
font-size: 13px;
padding: 10px 15px;
border: 1px solid gray;
border-radius: 20px;
background-color: rgba(97, 140, 190, 0.226);
font-family:'Righteous', cursive;
margin: 10px;
box-shadow:inset 2px 2px 4px rgba(0 , 0,  0,  0.39);

`
const CommentUserBox = styled('span')`
color: ${props=>props.isRepliedComment?"royalblue":"#c8d1c0d2"}; 
font-size:${props=>props.isRepliedComment?"14px":"13px"};
width: 100%;
text-align: center;
margin-top: 10px;
`
const CommentUser = styled('p')`
border-radius: 15px;
border:1px solid gray;
padding: 5px 10px;
max-width: 200px;
box-shadow: 1px 1px 1px rgba(0 , 0,  0,  0.39);

`
const CommentBodyBox = styled('div')`
width: 100%;
margin: 5px 0;

text-align: left;
display: flex;
justify-content: start;

`
const CommentBody = styled('span')`
width: 80%;
padding-left: 10px;
margin: 8px 0px;
margin-right: 5px;
text-align: left;
border: 1px solid gray;
box-shadow: 1px 1px 1px rgba(0 , 0,  0,  0.39);
border-radius: 15px;
padding :10px;
color: ${props => props.theme.nightMode?"#8e948e":"lightgray"};
font-family:"IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

`
const CommentCreatedAt = styled('span')`
width: 20%;
font-size: 11px;
color: #ada0a0;
text-align: center;
`
const LoginAlert = styled('p')`
color: lightgrey;
padding:10px;
margin: 40px 0;
text-align: center;
`

const ReplyBtn = styled('button')`
cursor: pointer;
float: right;
background-color: inherit; 
border: 1px solid gray;
color: gray;
padding: 3px;
border-radius: 5px;
transition: all 0.1s linear;
 &:hover{
   background-color: #5850505a;

 }
`
const ReplyBox = styled('div')`
width: 100%;
margin: 15px;
text-align: center;
display:${props=>props.isReplyOpen?"block":"none"};
`
const ReplySubmitBtn = styled('button')`
cursor: pointer;
background-color: inherit;
color: #23ca98ef;
padding: 5px;
border: 1px solid green;
border-radius: 10px;
transition: all 0.1s linear;
height: 30px;
&:hover{
  background-color: #5850505a;
}
`
const ReplyInput =styled('input')`
background-color: inherit;
width: 80%;
margin-right:10px;
color: gray;
outline: none;
border:1px solid gray;
border-radius: 10px;
height: 30px;
padding-left: 10px;
`

const ReplyedSign = styled('span')`
  color:gray;
  margin-left: 8px;
  font-weight: bold;
  font-size:17px;
`
const ReplyBy= styled('span')`
  color:lightcoral;
  margin: 0 3px 0 -3px;
`
const ReplyTo= styled('span')`
  color:#979ec0;
`

export default function Comments({commentList,contentId,login,userInfo,addComment}) {
    const nightMode = useSelector(state => state.nightMode);
    const theme = { 
      nightMode:nightMode
    } 
    const commentRef = useRef("");
    const replyRef = useRef("");
    const [isReplyOpen,setIsReplyOpen] =useState(false);
    const [checkedId,setCheckedId]= useState();

    return (
      <CommentConatiner>
        <CommentHeader theme={theme}>
          댓글 ({commentList.length})
          <ChatIcon
            sx={{
              verticalAlign: "middle",
              marginBottom: "3px",
              marginLeft: "5px",
              height: "23px",
              width: "23px",
            }}
          />
        </CommentHeader>
        <CommentListBox>
          <CommentList>
            {commentList.map((comment, i) => (
              <>
                <CommentBox>
                  {comment.commentId === comment.repliedCommentId ? (
                    ""
                  ) : (
                    <ReplyedSign>↳</ReplyedSign>
                  )}
                  <Comment
                    key={i}
                    style={{
                      color: "white",
                      display: "flex",
                    }}
                  >
                    {comment.commentId === comment.repliedCommentId ? (
                      <RadioButtonCheckedRoundedIcon
                        fontSize="small"
                        sx={{
                          margin: "14px 6px 4px 0px",
                          color: nightMode ? "#978c8c" : "lightgray",
                        }}
                      />
                    ) : (
                      ""
                    )}

                    <CommentUserBox
                      isRepliedComment={
                        comment.commentId === comment.repliedCommentId
                      }
                    >
                      <CommentUser>
                        {comment.commentId === comment.repliedCommentId ? (
                          <>{comment.userName}</>
                        ) : (
                          <Box sx={{ display: "inline", margin: "5px" }}>
                            <ReplyBy>{comment.userName}</ReplyBy>
                            <LabelImportantIcon
                              sx={{
                                color: "gold",
                                fontSize: "10px",
                              }}
                              fontSize="small"
                            />
                            <EmojiPeopleIcon
                              sx={{ fontSize: "10px", color: "white" }}
                            />
                            <ReplyTo> {comment.replyTo}</ReplyTo>
                          </Box>
                        )}
                      </CommentUser>
                      <CommentBodyBox>
                        <CommentBody sx={{}} theme={theme}>
                          {comment.body}
                          {login ? (
                            <ReplyBtn
                              onClick={() => {
                                setIsReplyOpen(isReplyOpen ? false : true);
                                setCheckedId(i);
                              }}
                            >
                              {isReplyOpen && checkedId === i ? "닫기" : "답글"}
                            </ReplyBtn>
                          ) : (
                            ""
                          )}
                        </CommentBody>
                        <CommentCreatedAt>
                          {comment.createdAt}
                          <div>
                            {userInfo.username === comment.userName ? (
                              <>
                                <Button sx={{ bgcolor: "inherit" }}>
                                  <DriveFileRenameOutlineIcon
                                    sx={{
                                      color: "green",
                                      fontSize: "15px",
                                    }}
                                    fontSize="small"
                                  />
                                </Button>
                                <Button>
                                  <DeleteIcon
                                    sx={{
                                      color: "tomato",
                                      fontSize: "15px",
                                    }}
                                  />
                                </Button>
                              </>
                            ) : (
                              ""
                            )}
                          </div>
                        </CommentCreatedAt>
                      </CommentBodyBox>
                    </CommentUserBox>
                  </Comment>
                </CommentBox>
                {checkedId === i ? (
                  <ReplyBox key={i} isReplyOpen={isReplyOpen}>
                    <ReplyInput
                      placeholder="답글을 입력해 주세요"
                      ref={replyRef}
                    />
                    <ReplySubmitBtn
                      onClick={() => {
                        addComment(
                          contentId,
                          userInfo.id,
                          replyRef.current.value,
                          comment.commentId
                        );
                        setIsReplyOpen(false);
                      }}
                    >
                      답글 달기
                    </ReplySubmitBtn>
                  </ReplyBox>
                ) : (
                  ""
                )}
              </>
            ))}
          </CommentList>
        </CommentListBox>
        {login ? (
          <>
            <Divider sx={{ height: "1px", bgcolor: "gray" }} />
            <AddCommentBox>
              <CommentInput
                placeholder="댓글을 입력해 주세요."
                ref={commentRef}
                type="text"
              />
              <CommentsubmitBtn
                onClick={() => {
                  addComment(contentId, userInfo.id, commentRef.current.value);
                }}
              >
                댓글달기
              </CommentsubmitBtn>
            </AddCommentBox>
          </>
        ) : (
          <>
            <hr />
            <LoginAlert>댓글을 작성하려면 로그인이 필요합니다.</LoginAlert>
          </>
        )}
      </CommentConatiner>
    );
}