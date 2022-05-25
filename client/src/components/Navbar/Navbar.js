import React from "react";

// icons
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

// Images
import Logo from "../../assets/images/Logos/AsperLogoWhite.png";

const Navbar = () => {
  return (
    <navbar>
      <div className="flex container mx-auto items-center">
        <div>
          <img src={Logo} alt="logo" className="h-24" />
        </div>
        <div className="ml-auto">
            <MenuOutlinedIcon/>
        </div>
      </div>
    </navbar>
  );
};

export default Navbar;
