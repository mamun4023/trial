import {
   useTheme,
   Avatar,
   Stack,
   Typography,
   Box,
   IconButton,
   Button,
   Divider,
} from "@mui/material";

import Notifications from "@mui/icons-material/Notifications";
import Wifi from "@mui/icons-material/Wifi";
import BorderColorSharpIcon from "@mui/icons-material/BorderColorSharp";

import { useState } from "react";

import ProfiePopover from "./profile";
import Slider from "./slider";
import Sidebar from "./sidebar";
import { Sms } from "@mui/icons-material";

export default function TopBar() {
   const Theme = useTheme();
   const [openProfile, setOpenProfile] = useState(false);

   return (
      <Stack
         sx={{ height: 78, bgcolor: Theme.palette.common.white }}
         direction="row"
         justifyContent="space-between"
         alignItems="center"
      >
         <Stack>
            <Sidebar />
         </Stack>
         <Divider orientation="vertical" sx={{ height: 50 }} />
         <Slider />
         <Stack direction="row">
            <Stack direction="row" spacing={1} alignItems="center">
               <IconButton>
                  <BorderColorSharpIcon
                     sx={{
                        color: "primary.main",
                     }}
                  />
               </IconButton>
               <IconButton>
                  <Wifi
                     sx={{
                        color: "success.main",
                     }}
                  />
               </IconButton>
               <IconButton>
                  <Sms
                     sx={{
                        color: "primary.main",
                     }}
                  />
               </IconButton>
               <Box sx={{ position: "relative" }}>
                  <IconButton>
                     <Notifications
                        sx={{
                           color: "primary.main",
                        }}
                     />
                  </IconButton>
                  <Box
                     sx={{
                        position: "absolute",
                        height: 10,
                        width: 10,
                        bgcolor: Theme.palette.info.main,
                        borderRadius: "50px",
                        left: "40px",
                        left: 20,
                        top: 10,
                     }}
                  ></Box>
               </Box>
            </Stack>

            <ProfiePopover open={openProfile} setOpen={setOpenProfile} />
         </Stack>
      </Stack>
   );
}
