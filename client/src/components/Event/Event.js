// import React, { Component } from 'react'
// // icons
// import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

// export class Event extends Component {
//   render() {
//     return (
//       <div>
//         <p className='text-white'>aa</p>
//       </div>
//     )
//   }
// }
// export default Event;




import React, { Component } from "react";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

// icons 
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

// import images
// import img1 from "../images/redbg.jpg";
// import img2 from "./assets/images/Logos/AsperLogoWhite.png"
// card
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export class EventFront extends Component {
  render() {
    return (
      <div>
        {/* <img src={img1} alt="" /> */}

        <div className="front bg-zinc-800">
          {/* <div className="logo mb-20"><img src={img2} alt="" /></div> */}
          <div className="md:container abd md:mx-auto text-white  grid grid-cols-2 gap-4">
            <div className="left ml-40 mr-10 mb-60">
              <a href="/"><p className="back  mb-40"><KeyboardBackspaceOutlinedIcon/>Back</p></a>
              <h3 className="text-4xl mb-4 font-semibold ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
              <p className="mb-4 text-xl">
                Lorem ipsum dolor sit amet consectetur
              </p>
              <p className="text-xl mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate eveniet odio harum sed vitae iste perferendis totam
                illum sit ducimus amet facere placeat{" "}
              </p>
              <a href="#" className="mt-4 text-xl">
              <LocationOnOutlinedIcon/> View Maps
              </a>
              
            </div>

            <div className="right mr-20 ml-20 my-40 text-black">
              <div className="box">
            
                <Card className="card2 " sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Know our Schedule
                    </Typography>
                    <Typography variant="h4" component="div">
                      Date & Time
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      
                    </Typography>
                    <Typography variant="body2">
                    <a href="#"> <AddOutlinedIcon/> Add to Callender</a>
                      <br />
                      <TextField
                        className="bg-red-600 text-center text-white rounded-lg"
                        fullWidth
                        label="fullWidth"
                        id="fullWidth"
                        variant="filled"
                        margin="normal"
                        
                      />
                      <TextField
                        className="bg-red-50 rounded-lg"
                        fullWidth
                        label="fullWidth"
                        id="fullWidth"
                      />
                      {/* {'"a benevolent smile"'} */}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small text-center">Learn More</Button>
                  </CardActions>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EventFront;
