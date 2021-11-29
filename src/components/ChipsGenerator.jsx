
import styled from "@mui/material/styles/styled";
import Chip from "@mui/material/Chip";

const ContentChip = styled(Chip)`
  font-family:'Righteous', cursive ;
  margin-right: 4px;
  color: white;
  font-weight: bold;
  background: ${props => props.bgcolor?props.bgcolor:'#04AA6D'};
  height: 28px;
  margin-bottom:20px;
`
export default function ChipsGenerator({values,color}) {
    return values.map((value, index) => <ContentChip bgcolor={color} key={index} label={value} />);
}