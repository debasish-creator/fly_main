import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const ProfileCard = () => {
  const theme = useTheme();
  return (
    <Box style={{display:"flex", flexDirection:"column", margin:2}}>
      <Typography style={{fontSize:20, textAlign:'center'}}>
      Neha Sharma

      </Typography>
      <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex" }}>
          <CardMedia
            component="img"
            sx={{ width: 100 }}
            image="https://media.istockphoto.com/id/491520707/photo/sample-red-grunge-round-stamp-on-white-background.jpg?s=612x612&w=0&k=20&c=FW80kR5ilPkiJtXZEauGTghNBOgQviVPxAbhLWwnKZk="
            alt="Live from space album cover"
            style={{ borderRadius: 12 }}
          />
          <CardContent sx={{ flex: "1" }}>
            <Typography component="div" variant="h5">
              18 hours ago
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              18/08/2021
            </Typography>
          </CardContent>
        </Box>
      </Card>
      <Button style={{width:"100%",borderRadius:"10rem", marginTop:"1rem"}} variant="contained" color="success">Closed</Button>
    </Box>
  );
};

export default ProfileCard;
