import { useState } from "react";
import {
   Drawer,
   IconButton,
   Typography,
   Accordion,
   AccordionSummary,
   AccordionDetails,
   useTheme,
   Stack,
   Box,
} from "@mui/material";

import {
   Close,
   ExpandMore,
   Menu,
   Bed,
   MeetingRoom,
   FollowTheSigns,
   Blind,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const ToggleButton = styled(IconButton)(({ theme }) => ({
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

export default function Sidebar() {
   const [open, setOpen] = useState(false);

   return (
      <div>
         <ToggleButton onClick={() => setOpen(true)}>
            <Menu />
         </ToggleButton>
         <Drawer
            anchor="left"
            open={open}
            PaperProps={{
               sx: {
                  backgroundColor: "primary.main",
               },
            }}
         >
            <ControlledAccordions open={open} setOpen={setOpen} />
         </Drawer>
      </div>
   );
}

const SideMenuContainer = styled()(({ theme }) => ({
   maxWidth: 300,
   background: theme.palette.primary.main,
}));

const AppAccordion = styled(Accordion)(({ theme }) => ({
   background: theme.palette.primary.main,
   boxShadow: "none",
   paddingTop: 10,
   margin: 0,
   "&:before": {
      backgroundColor: "transparent",
   },
}));

const MenuText = styled(Typography)(({ theme }) => ({
   color: theme.palette.common.white,
   paddingLeft: 10,
}));

function ControlledAccordions({ open, setOpen }) {
   const theme = useTheme();
   const [expanded, setExpanded] = useState(false);

   const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
   };

   return (
      <SideMenuContainer>
         <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
               width: "100%",
               height: 100,
            }}
         >
            <MenuText
               sx={{
                  fontSize: 30,
                  px: 2,
                  fontWeight: 700,
               }}
            >
               Dashboard
            </MenuText>
            <ToggleButton
               onClick={() => setOpen(false)}
               sx={{
                  border: "1px solid white",
                  "&:hover": {
                     color: "white",
                  },
               }}
            >
               <Close />
            </ToggleButton>
         </Stack>
         <AppAccordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            style={{ margin: 0 }}
         >
            <AccordionSummary
               expandIcon={
                  <ExpandMore
                     sx={
                        expanded === "panel1"
                           ? { color: "info.main" }
                           : { color: "white" }
                     }
                  />
               }
               aria-controls="panel1bh-content"
               id="panel1bh-header"
               sx={
                  expanded === "panel1"
                     ? {
                          background: theme.palette.primary.dark,
                          borderLeft: "5px solid gray",
                       }
                     : null
               }
            >
               <Bed sx={{ color: "white" }} />
               <MenuText>Rooms</MenuText>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>Sub Menu placeholder </Typography>
            </AccordionDetails>
         </AppAccordion>
         <AppAccordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            style={{ margin: 0 }}
         >
            <AccordionSummary
               expandIcon={
                  <ExpandMore
                     sx={
                        expanded === "panel2"
                           ? { color: "info.main" }
                           : { color: "white" }
                     }
                  />
               }
               aria-controls="panel2bh-content"
               id="panel2bh-header"
               sx={
                  expanded === "panel2"
                     ? {
                          background: theme.palette.primary.dark,
                          borderLeft: "5px solid gray",
                       }
                     : null
               }
            >
               <MeetingRoom sx={{ color: "white" }} />
               <MenuText>Conveyors</MenuText>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>Sub Menu placeholder</Typography>
            </AccordionDetails>
         </AppAccordion>
         <AppAccordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            style={{ margin: 0 }}
         >
            <AccordionSummary
               expandIcon={
                  <ExpandMore
                     sx={
                        expanded === "panel3"
                           ? { color: "info.main" }
                           : {
                                color: "white",
                             }
                     }
                  />
               }
               aria-controls="panel3bh-content"
               id="panel3bh-header"
               sx={
                  expanded === "panel3"
                     ? {
                          background: theme.palette.primary.dark,
                          borderLeft: "5px solid gray",
                       }
                     : null
               }
            >
               <FollowTheSigns sx={{ color: "white" }} />
               <MenuText>Carriers</MenuText>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>Sub Menu placeholder</Typography>
            </AccordionDetails>
         </AppAccordion>
         <AppAccordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
            style={{ margin: 0 }}
         >
            <AccordionSummary
               expandIcon={
                  <ExpandMore
                     sx={
                        expanded === "panel4"
                           ? { color: "info.main" }
                           : { color: "white" }
                     }
                  />
               }
               aria-controls="panel4bh-content"
               id="panel4bh-header"
               sx={
                  expanded === "panel4"
                     ? {
                          background: theme.palette.primary.dark,
                          borderLeft: "5px solid gray",
                       }
                     : null
               }
            >
               <Blind sx={{ color: "white" }} />
               <MenuText>Shelf Group</MenuText>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>Sub Menu placeholder</Typography>
            </AccordionDetails>
         </AppAccordion>
      </SideMenuContainer>
   );
}
