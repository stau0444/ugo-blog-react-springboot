import { Box } from "@mui/material";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { handleTheme } from "../redux/moduels/nightMode";

export const spring = {
    type: "spring",
    stiffness: 900,
    damping: 50
};

export default function NightModeSwitchButton({isOn}) {
    const dispatch = useDispatch();
    const changeTheme = () =>{
        dispatch(handleTheme())
    }
    return(
        <>
            <Box sx={{position:{xs:"absolute"},top:"100px",right:"10px",margin: "0 20px", float: "right" }}>
                <NightsStayIcon
                fontSize="small"
                sx={{ marginLeft: "4px", color: "black" }}
                />
                <WbSunnyIcon
                fontSize="small"
                sx={{ marginLeft: "20px", color: "white" }}
                />
                <div className="switch" data-ison={isOn} onClick={changeTheme}>
                <motion.div className="handle" layout transition={spring} />
                </div>
            </Box>
        </>
    );
}