import { styled} from "@mui/material";
import { useRef, useState } from "react";

const HangulType = styled('span')`
    width: 100%;
    color:white;
    font-size: 30px;
    font-family: serif;
`

const Editor = styled('textarea')`
    width: 100%;
    height: 150px;
` 
const PreArea = styled('pre')`
    width: 100%;
    height: 150px;
` 

const options = [
    { value: "'Londrina Outline', cursive", label: 'Londrina Outline' },
    { value: "'Overlock SC', cursive", label: 'Overlock SC' },
    { value: 'vanilla', label: 'Vanilla' },
];

export default function Test() {

    const [selectedOption, setSelectedOption] = useState("'Londrina Outline', cursive")
    const [value,setValue] = useState([]);
    const testInputRef = useRef('');
    const selectRef = useRef('');
    const regEng =new RegExp(/^[a-zA-Z]*$/);
    const preRef = useRef('');
    const printRef = useRef('');


    const EngType = styled('span')`
        width: 100%;
        color:royalblue;
        font-size: 30px;
        font-weight: bold;
        font-family:${selectedOption}
    `


    const fontChangePerLang = () =>{
        printRef.current.innerHTML = preRef.current.innerHTML;
    }
    const handleSelectValue = () =>{
        setSelectedOption(selectRef.current.value)
    }
    
    return (
      <div>
        <Editor
          ref={testInputRef}
          type="text"
          onChange={() => {
            setValue(testInputRef.current.value.split(""));
          }}
        />
        <select ref={selectRef} value = {selectedOption} onChange={()=>{handleSelectValue()}}>
          {options.map((o , index)=>
            <option value={o.value} label={o.label} key={index}/>
          )}
        </select>
        <PreArea ref={preRef}>
            <div>
            {value.map((v, index) =>
                regEng.test(v) ? (
                <EngType key={index}>{v}</EngType>
                ) : (
                <HangulType key={index}>{v}</HangulType>
                )
            )}
           
            </div>
        </PreArea>
      </div>
    );
}