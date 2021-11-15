import { Box } from "@mui/material";
import { motion } from "framer-motion";
import spring from "./NightModeSwitchButton";
export default function EmailSubSwitchBtn() {
    return(
        <>
            <Box sx={{position:{xs:"absolute"},top:"100px",right:"10px",margin: "0 20px", float: "right" }}>
                <div className="switch" >
                <motion.div className="handle" layout transition={spring} />
                </div>
            </Box>
        </>
    );
}