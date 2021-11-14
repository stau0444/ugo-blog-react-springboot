import { Box } from "@mui/material";
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
            display: isOpen ? "none" : "block",
          }}
        ></Box>
      </>
    );
}