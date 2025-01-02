"use client";

import {
  Box,
  DrawerBody,
  DrawerRoot,
  HStack,
  Icon,
  IconButton,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { SiBrevo } from "react-icons/si";
import { FaSearch } from "react-icons/fa";
import newStyled from "@emotion/styled";
import { List, ListItem } from "@chakra-ui/react";
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

const StyledInput = newStyled(Input)`
border:none;
color:white;
  &:focus {
    outline: none; 
  }
`;

const StyledIcon = newStyled(Icon)`
margin-Right:10px;
`;

const StyledListItem = newStyled(ListItem)`
display: flex;
align-items: center; 
margin-top:6%;
margin-bottom:3%;
`;


function SideDrawer() {
  return (
    <DrawerRoot>
      <Box display={{mdDown:'flex' , md:'none'}} justifyContent={'center'} width={'7%'} bgColor={"blue.700"}  height={"100vh"}
        maxHeight={"100vh"}>
        <Icon fontSize={30}><IoMenu/></Icon>
      </Box>
      <DrawerBody
        display={{mdDown:'none',md:'flex'}}
        width={"18%"}
        height={"100vh"}
        maxHeight={"100vh"}
        overflowY={"auto"}
        bgColor={"blue.700"}
        paddingTop={5}
        color={"white"}
        flexDirection="column"
        alignItems="flex-start"
        pl={3}
        justifyContent="space-between"
      >
        <VStack align={"left"}>
          <HStack>
            <IconButton color={"red.700"} display={{smDown:'none', sm:"none", md:'flex'}}  >
              <SiBrevo />
            </IconButton>
            <Text fontSize={20} flex={1}>
              slothui
            </Text>
          </HStack>

          <Box
            borderRadius={20}
            width={"95%"}
            mt={"5%"}
            bgColor={"whiteAlpha.100"}
            border={"1px solid white"}
            height={"9%"}
            display={"flex"}
            alignContent={"center"}
          >
            <HStack px={2}>
              <FaSearch />
              <StyledInput
                type="text"
                placeholder="Search"
                color={"gray.700"}
              />
            </HStack>
          </Box>

          <Box mt={"3%"}>
            <List.Root variant={"plain"}>
              <StyledListItem>
                <StyledIcon>
                  <RiHomeLine />
                </StyledIcon>
                <Text>Home</Text>
              </StyledListItem>

              <StyledListItem>
                <StyledIcon>
                  <FaTasks />
                </StyledIcon>
                <Text>Tasks</Text>
              </StyledListItem>

              <StyledListItem>
                <StyledIcon>
                  <LuUsers />
                </StyledIcon>
                <Text>Users</Text>
              </StyledListItem>

              <StyledListItem>
                <StyledIcon>
                  <HiOutlineCube />
                </StyledIcon>
                <Text>APIs</Text>
              </StyledListItem>

              <StyledListItem>
                <StyledIcon>
                  <CiCreditCard2 />
                </StyledIcon>
                <Text> Subscription</Text>
              </StyledListItem>

              <StyledListItem>
                <StyledIcon>
                  <CiSettings />
                </StyledIcon>
                <Text>Settings</Text>
              </StyledListItem>

              <StyledListItem>
                <StyledIcon>
                  <IoChatboxEllipsesOutline />
                </StyledIcon>
                <Text>Help & Support</Text>
              </StyledListItem>
            </List.Root>
          </Box>
        </VStack>

        <VStack width={"95%"}>
          <Box
            borderRadius={20}
            width={"95%"}
            bgColor={"whiteAlpha.100"}
            border={"1px solid white"}
            display={"flex"}
            alignItems="center"
            justifyContent="space-between"
            paddingLeft={5}
            paddingRight={5}
            height={"28%"}
          >
            <Text flex={1}>Go Pro</Text>
            <FaRegStar />
          </Box>

          <div
            style={{
              height: "2px",
              width: "95%",
              backgroundColor: "grey",
              marginTop: "20px",
            }}
          ></div>

          <Box
            width={"95%"}
            mt={"15%"}
            height={"6%"}
            display={"flex"}
            alignItems="center"
            justifyContent="space-between"
          >
            <Icon fontSize={40}>
              <SiBrevo />
            </Icon>
            <VStack>
              <Text flex={1}>John Abrahm</Text>
              <Text mt={-2} fontVariant={"all-small-caps"}>
                Basic member
              </Text>
            </VStack>
            <RxExit />
          </Box>
        </VStack>
      </DrawerBody>
    </DrawerRoot>
  );
}

export default SideDrawer;
