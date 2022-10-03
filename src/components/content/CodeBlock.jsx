
import Box  from "@mui/material/Box";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

export default function CodeBlock({value,isOpen}) {
    const contentRef = useRef();
    const nightMode =  useSelector(state => state.nightMode)

    useEffect(()=>{
        contentRef.current.innerHTML = value;
    });
    return (
      <>
        <Box
          ref={contentRef}
          className="code-block"
          sx={{
            background: nightMode ? "#c9e0dfa4" : "bisque",
            padding:"50px 0",
            display: isOpen ? "none" : "block",
            fontSize:{xs:"12px",sm:"12px",md:"14px" },
            fontFamily:"'NanumSquare' , san-serif",
            lineHeight:"25px",
          }}
        >
        </Box>
      </>
    );
}