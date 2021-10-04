import { useEffect, useRef } from "react";

export default function CodeBlock({value}) {
    console.log('value' , value)
    const contentRef = useRef('');
    useEffect(()=>{
        contentRef.current.innerHTML = value;
    });
    return(
        <>
            <div ref={contentRef} className='code-block'>
            </div>
        </>
    );
}