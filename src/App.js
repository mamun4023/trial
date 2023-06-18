import { Button } from "@mui/material";
import Home from "./pages/home";
import { useTheme } from "@mui/material";

function App() {
   const theme = useTheme();
   return (
      <div>
         <Home />
      </div>
   );
}

export default App;
