import { Box, Button, HStack,  Icon,  IconButton, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { CiMenuKebab } from "react-icons/ci";
import VisaCard from './VisaCard';
import { SiVisa } from "react-icons/si";

function PaymentMethodCard() {
  return (
    <Box  padding={5} border={"1px solid grey"} borderRadius={30}>

      <HStack mb={10} display={'flex'} justifyContent={{sm:'space-between',smDown:'normal'}} alignItems={'flex-start'}>
          <VStack align={'left'}>
            <Text fontWeight={'bold'} fontSize={'xl'}>Payment Method</Text>
            <Text mt={-2}>Active until 25 Jan 2027</Text>
          </VStack>
          <IconButton>
          <CiMenuKebab />
          </IconButton>
      </HStack>

      <Box mb={10}><VisaCard/></Box>
      

      <HStack mb={6} border={'1px solid grey'} padding={2} borderRadius={13} mt={'10px'} display={'flex'} justifyContent={{sm:'space-between',smDown:'normal'}}>
        <HStack>
            <Icon fontSize={30} padding={1} border={'1px solid grey'} borderRadius={10}>
            <SiVisa />
            </Icon>
            <VStack>
                <Text fontSize={'sm'} fontWeight={'bold'}>Visa ending in 2022</Text>
                <Text>Expired in 08/2028</Text>
            </VStack>
        </HStack>
        <Button border={'1px solid grey'} borderRadius={20}>
            Edit
        </Button>
      </HStack>

    

    </Box>
  )
}

export default PaymentMethodCard
