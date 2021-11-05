import { Chip } from "@mui/material";

export default function ChipsGenerator({values,color}) {
    return values.map((value,index) => (
      <Chip
        key={index}
        sx={{
          fontFamily:"'Righteous', cursive" ,
          marginRight: "4px",
          color: "white",
          fontWeight: "bold",
          background: color,
          height: "28px",
          marginBottom:"20px"
        }}
        label={value}
      />
    ));
}