import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import MyComponent3 from "../../components/MapsForDanger";


const GoogleMapPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  return (
    <Box m="20px" style={{marginLeft:'300px'}}>
      <Header title="GoogleMap" />

      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <MyComponent3/>
      </Box>
    </Box>
  );
};

export default GoogleMapPage;
