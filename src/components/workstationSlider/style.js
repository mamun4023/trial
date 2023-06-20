import { IconButton, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ArrowForwardIos, ArrowBackIosNew } from "@mui/icons-material";

export const NavigationButton = styled(IconButton)(({ theme }) => ({
   backgroundColor: theme.palette.background.light,
   borderRadius: 5,
   margin: 10,
   padding: 4,
   color: theme.palette.primary.dark,
   "&:hover": {
      border: 2,
      color: theme.palette.primary.main,
   },
}));

export const WorkStation = styled(Button)(({ theme }) => ({
   width: 146,
   height: 50,
   fontSize: 16,
   color: theme.palette.common.white,
   backgroundColor: theme.palette.primary.main,
   "&:hover": {
      color: theme.palette.primary.main,
   },
   "&:focus": {
      border: `2px solid ${theme.palette.info.main}`,
   },
}));

export const ArrowForwardIosIcon = styled(ArrowForwardIos)(({ theme }) => ({
   color: theme.palette.secondary.dark,
}));

export const ArrowBackIosNewIcon = styled(ArrowBackIosNew)(({ theme }) => ({
   color: theme.palette.secondary.dark,
}));

export const SliderContainer = styled("div")(({ theme }) => ({
   width: "60%",
   display: "flex",
   [theme.breakpoints.down("laptop")]: {
      display: "none",
   },
}));
