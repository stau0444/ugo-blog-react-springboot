import { Chip, styled } from "@mui/material";

const ContentChip = styled(Chip)`
  font-family:'Righteous', cursive ;
  margin-right: 4px;
  color: white;
  font-weight: bold;
  background: color;
  height: 28px;
  margin-bottom:20px;
`
export default function ChipsGenerator({values,color}) {
    return values.map((value, index) => <ContentChip key={index} label={value} />);
}