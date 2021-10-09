import { Box } from "@mui/material";
import { useEffect, useRef } from "react";

export default function CodeBlock({value}) {
    const contentRef = useRef();
    useEffect(()=>{
        contentRef.current.innerHTML = value;
    });
    return(
        <>
            <Box ref={contentRef} className='code-block' sx={{marginTop:{sm:'40'}}}>
            
            </Box>
        </>
    );
}