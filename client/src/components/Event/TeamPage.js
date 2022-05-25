import React, { Component } from 'react'
// import { Avatar } from "@material-ui/core";
// import img3 from "./assets/images/man1.jpg"




export  class TeamPage extends Component {
  render() {
    return (
      <div>
        {/* <p>asasaaa</p> */}
        <div className="front1">
          <div className="md:container abd md:mx-auto text-white  grid grid-cols-2 gap-4">
            <div className="left text-white ml-40 mr-10 my-20">
              <h1 className='text-6xl font-bold'>Our Team</h1>
              <p className='text-2xl font-bold my-4'>Organisers</p>
              {/* <Avatar alt="Remy Sharp"  src={img3} />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" /> */}
            
              {/* <img src={img3} alt="Avatar" class="avatar"></img> */}
              <p className='text-2xl font-bold'>Learn More</p>
            </div>

            <div className="right mr-20 ml-20 my-20 text-white">
              bb
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default TeamPage;