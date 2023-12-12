import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import React from "react";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Card>
        <CardHeader
          avatar={
            <Avatar
              sx={{
                bgcolor: "red",
              }}
            >
              R
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quo
            consequatur assumenda rem tempore non, quos beatae sunt a?
            Laboriosam omnis vero necessitatibus voluptas neque nam ducimus qui
            inventore animi.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton>
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: "red"}}/>} />
          </IconButton>
          <IconButton>
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Feed;
