import { Box, HStack, Icon, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { MdAddIcCall } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";

const Header = () => {
  return (
    <Box width={"100%"} px={10} py={7}>
      <HStack>
        <Icon>
          <IoIosArrowBack />
        </Icon>
        <Text>Back to Settings</Text>
      </HStack>
      <HStack width="100%">
        <Text flex={1} fontSize={"2xl"} my={4} fontWeight={'bold'} as={'h1'}>My Billing Settings</Text>

        <IconButton border={'1px solid black'} borderRadius={50}>
          <MdAddIcCall />
        </IconButton>
        <IconButton  border={'1px solid black'} borderRadius={50}>
          <FaRegQuestionCircle />
        </IconButton>
      </HStack>

      <div
        style={{
          height: "2px",
          backgroundColor: "grey",
        }}
      ></div>


    </Box>
  );
};

export default Header;
