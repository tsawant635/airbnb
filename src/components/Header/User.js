import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
// react icons
import { BsGlobe } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";

const User = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginLeft:"150px" }}
    >
      <Link href="#" style={{fontWeight:"bold" ,color:"black"}}> Become A Host</Link>
      <Stack>
        <Button>
          <BsGlobe style={{fontWeight:"bold" ,color:"black"}} size={24} />
        </Button>
        <Button
          sx={{
            borderRadius: 10,
            border: "1px solid #ddd",
          }}
        >
          <Stack>
            <AiOutlineMenu  style={{fontWeight:"bold" ,color:"black"}}size={24} />
            <FaRegUserCircle style={{fontWeight:"bold" ,color:"black"}} size={24} />
          </Stack>
        </Button>
      </Stack>
    </Box>
  );
};

export default User;
