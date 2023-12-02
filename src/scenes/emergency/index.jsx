import React, { useState } from "react";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

import Header from "../../components/Header";

// import FormControl from "@mui/material";
// import MenuItem from "@mui/material";
import { MenuItem, FormControl, Select } from "@material-ui/core";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ProfileCard from "../../components/ProfileCard";
import UserDetails from "../../components/UserDetails";
import Assignment from "../../components/Assignment";
import MyComponent2 from "../../components/NormalGmaps"

const Emergency = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [country, setInputCountry] = useState("All");
  return (
    <Box m="20px" style={{ marginLeft: '300px' }}>
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Emergency" />

        <Box>
          <Button
            sx={{
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <FormControl className="app__dropdown">
              <Select
                variant="outlined"
                value={country}
                style={{ color: colors.primary[100] }}
              >
                <MenuItem value="All">All</MenuItem>
              </Select>
            </FormControl>
          </Button>
        </Box>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(12 1fr)"
        // gridAutoRows="140px"
        gap="20px"
      >
        <Accordion>
          <AccordionSummary>Neha Sharma</AccordionSummary>
          <AccordionDetails>
            <Box
              display="grid"
              gridTemplateColumns="repeat(12 1fr)"
              gridAutoRows="200px"
              gap="20px"
            >
              <Box
                gridColumn="span 3"
                backgroundColor={colors.primary[400]}
                display="flex"
                // alignItems="center"
                // justifyContent="center"
                gap="20px"
              >
                <ProfileCard />
                <UserDetails />
              </Box>
            </Box>
          </AccordionDetails>
          <AccordionDetails>
            <Box
              display="grid"
              gridTemplateColumns="repeat(12)"
              gridAutoRows="240px"
            >
              <Box
                backgroundColor={colors.primary[400]}
                display="flex"
                gap="20px"
              >
                <Assignment />
                <MyComponent2 />
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default Emergency;
