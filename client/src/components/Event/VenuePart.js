import React, { Component } from 'react'
// import { Wrapper, Status } from "@googlemaps/react-wrapper";
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


export class VenuePart extends Component {
  render() {
    return (
      <div>
        <div className="front1">
          <div className="md:container abd md:mx-auto text-white  grid grid-cols-2 gap-4">
            <div className="left text-white ml-40 mr-10 my-20">
              <h1 className='text-6xl font-bold'>Venue</h1>
              <p className='text-2xl font-bold my-4'>Lorem ipsum dolor</p>
              <p className='text-xl font-bold my-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est at, maiores harum commodi perferendis odio unde animi totam. Suscipit tenetur laborum voluptatum ullam vitae ea? Architecto asperiores eos ad placeat?</p>
              
              <p className='text-2xl font-bold'>Share with your Flags</p>
            </div>

            <div className="right mr-20 ml-20 my-20 text-white">
            {/* <Map google={this.props.google} zoom={14}>
            
            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

            <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                  <h1>{this.state.selectedPlace.name}</h1>
                </div>
            </InfoWindow>
            </Map> */}
             
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default VenuePart;

// export default VenuePart({
//   apiKey: ("YOUR_GOOGLE_API_KEY_GOES_HERE")
// })(MapContainer)