import React from "react";
import TopBarNavigator from "../components/topNavBar";
import { Stack } from "@mui/material";
export default function Layout({ children, title }) {
   document.title = title;
   return (
      <Stack>
         <TopBarNavigator />
         <Stack sx={{ flex: 1 }}>{children}</Stack>
      </Stack>
   );
}
