import { Button, Typography } from "@mui/material";
import { Add, Settings } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

function App() {

  const BlueButton = styled(Button)(({theme}) => ({
    backgroundColor: theme.palette.otherColor.main,
    color: "#888",
    margin: 5,
    "&:hover": {
      backgroundColor: "lightblue"
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white"
    }
  }));


  return (
    <div className="App">
      <Button
        variant="text"
      >
        Text
      </Button>
      <Button
        startIcon={<Settings />}
        variant="contained"
        color="otherColor"
      >Settings</Button>
      <Button
        startIcon={<Add />}
        variant="contained"
        color="success"
        size="small"
      >Add New Post</Button>
      <Button
        variant="outlined"
        disabled
      >Outlined</Button>
      <Typography
        variant="h1"
        component="p"
      >
        It uses h1 style but it's a p tag
      </Typography>
      <BlueButton>My Blue Button</BlueButton>
      <BlueButton>Another Button</BlueButton>
    </div>
  );
}

export default App;
