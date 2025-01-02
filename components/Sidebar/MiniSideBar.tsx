import { Box, Icon, VStack } from "@chakra-ui/react";
import React from "react";

import { FaSearch } from "react-icons/fa";
import { RiHomeLine } from "react-icons/ri";
import { FaTasks } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { HiOutlineCube } from "react-icons/hi2";
import { CiCreditCard2 } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { RxExit } from "react-icons/rx";
import { IoMenu } from "react-icons/io5";

function MiniSideBar() {
  return (
    <Box
      display={{ mdDown: "flex", md: "none" }}
      justifyContent={"space-between"}
      width={'10%'}
      bgColor={"blue.700"}
      height={"100vh"}
      maxHeight={"100vh"}
      color={"white"}
      flexDirection="column"
    >
     
        <VStack height="70%" display={'flex'} justifyContent={"space-around"}>
        
          <Icon fontSize={30}>
            <IoMenu />
          </Icon>
        
          <Icon fontSize={20}>
            <FaSearch />
          </Icon>
          <Icon fontSize={20}>
            <RiHomeLine />
          </Icon>
          <Icon fontSize={20}>
            <FaTasks />
          </Icon>
          <Icon fontSize={20}>
            <LuUsers />
          </Icon>
          <Icon fontSize={20}>
            <HiOutlineCube />
          </Icon>
          <Icon fontSize={20}>
            <CiCreditCard2 />
          </Icon>
          <Icon fontSize={20}>
            <CiSettings />
          </Icon>
          <Icon fontSize={20}>
            <IoChatboxEllipsesOutline />
          </Icon>
        </VStack>

        <VStack height={'15%'}>
          <Icon fontSize={20}>
            <FaRegStar />
          </Icon>
          <Icon fontSize={20} my={'20%'}>
            <RxExit />
          </Icon>
        </VStack>
    </Box>
  );
}

export default MiniSideBar;
