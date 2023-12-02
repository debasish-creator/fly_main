import React from "react";
import { Box } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from '@mui/icons-material/Call';
import CakeIcon from '@mui/icons-material/Cake';
const UserDetails = () => {
  return (
    <Box style={{display:"flex", flexDirection:"column"}}>
      <Box style={{fontSize:20, textAlign:'center'}}>Contact details</Box>
      <Box >
        <Box style={{alignItems:"center",display:"flex"}}>
          <EmailIcon style={{marginRight:8}}/>
          mishhradebasish870@gmail.com
        </Box>
        <Box style={{alignItems:"center",display:"flex"}}>
          <CallIcon style={{marginRight:8}}/>
          9861997719
        </Box>
        <Box style={{alignItems:"center",display:"flex"}}>
          <CakeIcon style={{marginRight:8}}/>
          11/01/2000
        </Box>
      </Box>
    </Box>
  );
};

export default UserDetails;
