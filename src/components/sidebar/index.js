import React, { useState } from "react";
import { Drawer, Typography, AccordionDetails } from "@mui/material";

import {
   Close,
   Menu,
   Bed,
   MeetingRoom,
   FollowTheSigns,
   Blind,
} from "@mui/icons-material";
import {
   ToggleButton,
   SideMenuContainer,
   HeadContainer,
   MenuText,
   AppAccordion,
   ExpandMoreIcon,
   AppAccordionSummary,
} from "./style";

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

function ControlledAccordions({ open, setOpen }) {
   const [expanded, setExpanded] = useState(false);

   const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
   };

   return (
      <SideMenuContainer>
         <HeadContainer>
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
                     border: "1px solid gray",
                  },
               }}
            >
               <Close />
            </ToggleButton>
         </HeadContainer>
         <AppAccordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
         >
            <AppAccordionSummary
               expandIcon={
                  <ExpandMoreIcon isExpanded={expanded === "panel1"} />
               }
               isExpanded={expanded === "panel1"}
            >
               <Bed sx={{ color: "white" }} />
               <MenuText>Rooms</MenuText>
            </AppAccordionSummary>
            <AccordionDetails>
               <Typography>Sub Menu placeholder </Typography>
            </AccordionDetails>
         </AppAccordion>
         <AppAccordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
         >
            <AppAccordionSummary
               expandIcon={
                  <ExpandMoreIcon isExpanded={expanded === "panel2"} />
               }
               isExpanded={expanded === "panel2"}
            >
               <MeetingRoom sx={{ color: "white" }} />
               <MenuText>Conveyors</MenuText>
            </AppAccordionSummary>
            <AccordionDetails>
               <Typography>Sub Menu placeholder</Typography>
            </AccordionDetails>
         </AppAccordion>
         <AppAccordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
         >
            <AppAccordionSummary
               expandIcon={
                  <ExpandMoreIcon isExpanded={expanded === "panel3"} />
               }
               isExpanded={expanded === "panel3"}
            >
               <FollowTheSigns sx={{ color: "white" }} />
               <MenuText>Carriers</MenuText>
            </AppAccordionSummary>
            <AccordionDetails>
               <Typography>Sub Menu placeholder</Typography>
            </AccordionDetails>
         </AppAccordion>
         <AppAccordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
         >
            <AppAccordionSummary
               expandIcon={
                  <ExpandMoreIcon isExpanded={expanded === "panel4"} />
               }
               isExpanded={expanded === "panel4"}
            >
               <Blind sx={{ color: "white" }} />
               <MenuText>Shelf Group</MenuText>
            </AppAccordionSummary>
            <AccordionDetails>
               <Typography>Sub Menu placeholder</Typography>
            </AccordionDetails>
         </AppAccordion>
      </SideMenuContainer>
   );
}
