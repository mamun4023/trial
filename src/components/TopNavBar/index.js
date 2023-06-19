import React, { useState } from "react";

// MUI component
import { useTheme, Stack, Box, IconButton, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";

// Icon
import {
   Wifi,
   BorderColorSharp,
   Notifications,
   Sms,
} from "@mui/icons-material";

// Components
import ProfiePopover from "./profile";
import Slider from "./slider";
import Sidebar from "./sidebar";

// Styled Components
const TopBarContainer = styled(Stack)(({ theme }) => ({
   height: 78,
   width: "100%",
   backgroundColor: theme.palette.common.white,
   flexDirection: "row",
   justifyContent: "space-between",
   alignItems: "center",
}));

const AppDivider = styled(Divider)(({ theme }) => ({
   height: 50,
   marginLeft: 100,
   marginRight: 100,
   [theme.breakpoints.down("desktop")]: {
      display: "none",
   },
}));

const AlartCircle = styled(Box)(({ theme }) => ({
   position: "absolute",
   height: 10,
   width: 10,
   backgroundColor: theme.palette.info.main,
   borderRadius: 50,
   left: 40,
   left: 20,
   top: 10,
}));

const WifiIcon = styled(Wifi)(({ theme }) => ({
   color: theme.palette.success.main,
}));

const BorderColorSharpIcon = styled(BorderColorSharp)(({ theme }) => ({
   color: theme.palette.primary.main,
}));

const NotificationsIcon = styled(Notifications)(({ theme }) => ({
   color: theme.palette.primary.main,
}));

const SmsIcon = styled(Sms)(({ theme }) => ({
   color: theme.palette.primary.main,
}));

export default function TopBar() {
   const { palette } = useTheme();
   const [openProfile, setOpenProfile] = useState(false);

   return (
      <TopBarContainer>
         <Stack>
            <Sidebar />
         </Stack>
         <AppDivider orientation="vertical" />

         <Slider />
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
