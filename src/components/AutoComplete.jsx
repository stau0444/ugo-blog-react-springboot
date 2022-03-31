import { useRef, useState } from "react";
import styled from "styled-components";
const Outline = styled("div")`
    width: 100%;
    margin-bottom:10px;
`
const Wrap = styled("div")`
    border:1px solid whitesmoke;
    background-color: whitesmoke;
    border-radius: ${props=>props.isEmpty?"10px":"10px 10px 0 0"};
    height: 20px;
    margin:0px auto;
    padding: 10px 10px;
    padding-left: 18px;
    transition: all 0.2s linear;
    &:hover{
        box-shadow: 0px 2px gray;
    }   
`
const SearchInput = styled("input")`
    border: 0px;
    float: left;
    outline: none;
    background-color: inherit;
`
const CancleBtn = styled("button")`
    float: right;
    border: 0px;
    border-radius: 100%;
    background-color:coral;
    color: white;
    transition: all 0.1s linear;
    &:hover{
        background-color:gray;
        color:white
    }
`
const WhiteList = styled("div")`
    border: 1px solid black;
    font-size: 12px;
    border-top: 0;
    text-align: left;
    padding: 5px ;
    padding-left: 20px;
    /* border-radius: 0px 0px 20px 20px; */
    &:hover{
        background-color: lightgray;
    }
    &:last-child{
        border-radius: 0px 0px 10px 10px;
    }
`
const RecommendedWord = styled("a")`
    text-decoration: none;
    color: gray;
`
export default function AutoComplete() {
    
    const searchRef = useRef("");
    const [isEmpty , setIsEmpty] =useState(true);
    const [keyword,setKeyword] = useState("")
    const keywordList = ["리액트","java","javascript","react","redux","spring","springboot"];
    const handleChange = (e) =>{
        if(e.target.value === ""){
            setIsEmpty(true)
        }else{
            setIsEmpty(false)
        }
        setKeyword(e.target.value)

    }
    const autoComplete = (k)=>{
        searchRef.current.value = k;
        setKeyword(k)
    }
    const cancleSearch = ()=>{
        setIsEmpty(true);
        searchRef.current.value = "";
        setKeyword("")
    }
    
    return(
        <div>
            <Outline>
                <Wrap isEmpty={isEmpty}>
                    <SearchInput  ref={searchRef} onChange={handleChange}/>
                    <CancleBtn onClick={cancleSearch}>x</CancleBtn>
                </Wrap>
                {
                    keywordList.filter((k)=>{
                        return k.startsWith(keyword)
                    }).length === 0 && keyword !== ""? 
                    < WhiteList>
                        <RecommendedWord>
                         추천 검색어 없음
                        </RecommendedWord>
                    </WhiteList>
                    :
                    ""
                }
                {
                    keywordList.filter((k)=>{
                        if(keyword === ""){
                            return ""
                        }else{
                            return k.startsWith(keyword)
                        }
                    }).map((k,i)=>{
                        return < WhiteList onClick={()=>autoComplete(k)} key={i}>
                                <RecommendedWord>
                                    {k}
                                </RecommendedWord>
                               </WhiteList>
                    })
                }
         
            </Outline>
        </div>
    );
}