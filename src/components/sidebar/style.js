import {
   IconButton,
   Typography,
   Accordion,
   AccordionSummary,
   Stack,
} from "@mui/material";

import { ExpandMore } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

export const ToggleButton = styled(IconButton)(({ theme }) => ({
   backgroundColor: theme.palette.primary.main,
   borderRadius: 5,
   margin: 10,
   padding: 4,
   color: theme.palette.common.white,
   "&:hover": {
      border: 2,
      color: theme.palette.primary.main,
   },
}));

export const SideMenuContainer = styled("div")(({ theme }) => ({
   maxWidth: 300,
   background: theme.palette.primary.main,
}));

export const HeadContainer = styled(Stack)(({ theme }) => ({
   flexDirection: "row",
   justifyContent: "space-between",
   alignItems: "center",
   width: "100%",
   height: 100,
}));

export const AppAccordion = styled(Accordion)(({ theme }) => ({
   "&.Mui-expanded": {
      margin: 0,
   },
   background: theme.palette.primary.main,
   boxShadow: "none",
   padding: "10px 0px",
   "&:before": {
      backgroundColor: "transparent",
   },
}));

export const AppAccordionSummary = styled(AccordionSummary)(
   ({ theme, isExpanded }) => ({
      paddingLeft: 10,
      background: isExpanded ? theme.palette.primary.dark : null,
      borderLeft: `5px solid ${
         isExpanded ? theme.palette.secondary.main : theme.palette.primary.main
      }`,
      "&:hover": {
         backgroundColor: theme.palette.primary.dark,
         borderLeft: `5px solid ${theme.palette.secondary.main}`,
      },
   })
);

export const MenuText = styled(Typography)(({ theme }) => ({
   color: theme.palette.common.white,
   paddingLeft: 10,
}));

export const ExpandMoreIcon = styled(ExpandMore)(({ theme, isExpanded }) => ({
   color: isExpanded ? theme.palette.info.main : theme.palette.common.white,
}));
