import { Box, HStack, Icon, Text, VStack, } from "@chakra-ui/react";
import React from "react";
import { FaWifi } from "react-icons/fa";
import { SiVisa } from "react-icons/si";


function VisaCard() {
  return (
    <Box width={{smDown:'100%', sm:'80%'}} border={'1px solid grey'} borderRadius={10} padding={2}>
      
          <HStack>
            <Text flex={1}>slothui</Text>
            <Icon fontSize={20} transform="rotate(90deg)">
              <FaWifi />
            </Icon>
          </HStack>

          <HStack  mt={35}   display={'flex'} >
              <VStack align={'left'}>
                  <HStack>
                    <Text flex={1}>AZUNYAN U WU</Text>
                    <Text>08/11</Text>
                  </HStack>
                  <Text>0087 1157 0587 6187</Text>
              </VStack>
              <Icon fontSize={30}>
                <SiVisa/>
              </Icon>
          </HStack>
    </Box>
  );
}

export default VisaCard;
