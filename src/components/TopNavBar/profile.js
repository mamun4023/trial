import React, { useState } from "react";
import {
   Popover,
   Typography,
   Button,
   Stack,
   Avatar,
   List,
   ListItemButton,
   ListItemIcon,
   Divider,
} from "@mui/material";
import {
   KeyboardArrowDown,
   Logout,
   HelpCenter,
   Notifications,
   ManageAccounts,
   DataUsage,
} from "@mui/icons-material";

export default function BasicPopover() {
   const [anchorEl, setAnchorEl] = useState(false);

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };

   const open = Boolean(anchorEl);
   const id = open ? "simple-popover" : undefined;

   return (
      <div>
         <Button
            aria-describedby={id}
            onClick={handleClick}
            sx={{
               minWidth: 180,
            }}
         >
            <Stack direction="row" alignItems="center">
               <Typography>John Doe</Typography>
               <KeyboardArrowDown />
            </Stack>
            <Avatar src="https://pbs.twimg.com/media/EYVxlOSXsAExOpX.jpg" />
         </Button>

         <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
               vertical: "bottom",
               horizontal: "left",
            }}
         >
            <List
               sx={{
                  width: 300,
               }}
            >
               <ListItemButton sx={{ p: 2, px: 4 }}>
                  <ListItemIcon>
                     <DataUsage />
                  </ListItemIcon>
                  <Typography>
                     Status :
                     <Typography
                        sx={{ color: "success.main" }}
                        component="span"
                     >
                        Online
                     </Typography>
                  </Typography>
               </ListItemButton>
               <Divider />
               <ListItemButton sx={{ p: 2, px: 4 }}>
                  <ListItemIcon>
                     <ManageAccounts />
                  </ListItemIcon>
                  <Typography> Account Settings</Typography>
               </ListItemButton>
               <Divider />
               <ListItemButton sx={{ p: 2, px: 4 }}>
                  <ListItemIcon>
                     <Notifications />
                  </ListItemIcon>
                  <Typography> Notification</Typography>
               </ListItemButton>
               <Divider />
               <ListItemButton sx={{ p: 2, px: 4 }}>
                  <ListItemIcon>
                     <HelpCenter />
                  </ListItemIcon>
                  <Typography> Help</Typography>
               </ListItemButton>
               <Divider />
               <ListItemButton sx={{ p: 2, px: 4 }}>
                  <ListItemIcon>
                     <Logout />
                  </ListItemIcon>
                  <Typography> Logout</Typography>
               </ListItemButton>
            </List>
         </Popover>
      </div>
   );
}
