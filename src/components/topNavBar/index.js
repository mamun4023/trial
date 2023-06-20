import React, { useState } from "react";
import { useTheme, Stack, Box, IconButton } from "@mui/material";
import {
   TopBarContainer,
   AppDivider,
   BorderColorSharpIcon,
   WifiIcon,
   SmsIcon,
   NotificationsIcon,
   AlartCircle,
} from "./style";
// Components
import ProfiePopover from "../userProfile";
import WorkstationSlider from "../workstationSlider";
import Sidebar from "../sidebar";

export default function TopBar() {
   const { palette } = useTheme();
   const [openProfile, setOpenProfile] = useState(false);

   return (
      <TopBarContainer>
         <Stack>
            <Sidebar />
         </Stack>
         <AppDivider orientation="vertical" />
         <WorkstationSlider />
         <Stack direction="row">
            <Stack direction="row" spacing={1} alignItems="center">
               <IconButton>
                  <BorderColorSharpIcon color={palette.success.main} />
               </IconButton>
               <IconButton>
                  <WifiIcon color="red" />
               </IconButton>
               <IconButton>
                  <SmsIcon color="red" />
               </IconButton>
               <Box sx={{ position: "relative" }}>
                  <IconButton>
                     <NotificationsIcon color="primary.main" />
                  </IconButton>
                  <AlartCircle />
               </Box>
            </Stack>
            <ProfiePopover open={openProfile} setOpen={setOpenProfile} />
         </Stack>
      </TopBarContainer>
   );
}
