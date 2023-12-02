import React from "react";
import { Box } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import CakeIcon from "@mui/icons-material/Cake";
import SecurityIcon from "@mui/icons-material/Security";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const Assignemnt = () => {
  return (
    <Box style={{ display: "flex", flexDirection: "column" }}>
      <Box style={{ fontSize: 20, textAlign: "center" }}>Assignment</Box>
      <Box style={{ alignItems: "center", display: "flex" }}>
        <SecurityIcon style={{ marginRight: 8 }} />
        Ernakulam city
      </Box>
      <Box style={{ display: "flex", alignItems: "center" }}>
        <Box>
          <Box style={{ alignItems: "center", display: "flex" }}>
            <EmailIcon style={{ marginRight: 8 }} />
            mishhradebasish870@gmail.com
          </Box>
          <Box style={{ alignItems: "center", display: "flex" }}>
            <CallIcon style={{ marginRight: 8 }} />
            6969696969
          </Box>
          <Box style={{ alignItems: "center", display: "flex" }}>
            <CakeIcon style={{ marginRight: 8 }} />
            11/01/2000
          </Box>
        </Box>
        <Box>
          <WhatsAppIcon style={{ fontSize: 70 }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Assignemnt;
