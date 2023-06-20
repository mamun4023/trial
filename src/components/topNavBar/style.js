import { Stack, Box, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
   Wifi,
   BorderColorSharp,
   Notifications,
   Sms,
} from "@mui/icons-material";

export const TopBarContainer = styled(Stack)(({ theme }) => ({
   height: 78,
   width: "100%",
   backgroundColor: theme.palette.common.white,
   flexDirection: "row",
   justifyContent: "space-between",
   alignItems: "center",
}));

export const AppDivider = styled(Divider)(({ theme }) => ({
   height: 50,
   marginLeft: 100,
   marginRight: 100,
   [theme.breakpoints.down("desktop")]: {
      display: "none",
   },
}));

export const AlartCircle = styled(Box)(({ theme }) => ({
   position: "absolute",
   height: 10,
   width: 10,
   backgroundColor: theme.palette.info.main,
   borderRadius: 50,
   left: 20,
   top: 10,
}));

export const WifiIcon = styled(Wifi)(({ theme }) => ({
   color: theme.palette.success.main,
}));

export const BorderColorSharpIcon = styled(BorderColorSharp)(({ theme }) => ({
   color: theme.palette.primary.main,
}));

export const NotificationsIcon = styled(Notifications)(({ theme }) => ({
   color: theme.palette.primary.main,
}));

export const SmsIcon = styled(Sms)(({ theme }) => ({
   color: theme.palette.primary.main,
}));
