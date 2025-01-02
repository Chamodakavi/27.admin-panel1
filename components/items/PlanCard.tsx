import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Icon,
  Span,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { ProgressBar, ProgressRoot } from "../ui/progress";
import { FiAlertCircle } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";
import PaymentMethodCard from "./PaymentMethodCard";
function PlanCard() {
  return (
    <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={5}  mt={10}>
      <GridItem>
        <Box padding={4} border={"1px solid grey"} borderRadius={30}>
          <HStack display={"flex"} justifyContent={"space-between"} mb={5}>
            <VStack align={"left"}>
              <HStack>
                <Text fontSize={"xl"} fontWeight={"bold"}>
                  Current Plan(Basic)
                </Text>
                <Button
                  padding={1}
                  height={"10%"}
                  border={"1px solid"}
                  borderRadius={20}
                  bgColor={"blue.200"}
                  color={"#4F4A8E"}
                >
                  Yearly
                </Button>
              </HStack>
              <Text mt={-3}>Active until 25 Jan 2027</Text>
            </VStack>
            <Text>
              <Span fontWeight={"bold"} fontSize={"5xl"}>
                $18
              </Span>
              /mo
            </Text>
          </HStack>

          <Box mb={5}>
            <HStack>
              <Text flex={1}>2.5gb out of 10gb remaining</Text>
              <Text>87%</Text>
            </HStack>
            <ProgressRoot
              width="100%"
              value={87}
              colorPalette={"blue"}
              variant="outline"
              shape={"full"}
              bgColor={"white"}
            >
              <ProgressBar />
            </ProgressRoot>
          </Box>

          <Box mb={8}>
            <HStack>
              <Text flex={1}>10 out of 20 team members remaining</Text>
              <Text>32%</Text>
            </HStack>
            <ProgressRoot
              width="100%"
              value={32}
              colorPalette={"blue"}
              variant="outline"
              shape={"full"}
              bgColor={"white"}
            >
              <ProgressBar />
            </ProgressRoot>
          </Box>

          <Box
            mb={7}
            bgColor={"red.200"}
            padding={3}
            borderRadius={20}
            border={"1px solid red"}
          >
            <HStack>
              <Icon color={"red.700"} mt={-8}>
                <FiAlertCircle />
              </Icon>
              <VStack flex={1} align={"left"}>
                <Text fontWeight={"bold"}>Plan Almost Expired</Text>
                <Text>Your plan almost expired.Please renew.</Text>
              </VStack>
              <Button bgColor={"#F64D68"} borderRadius={30} color={"white"}>
                Renew
              </Button>
            </HStack>
          </Box>

          <Box borderBottom={'2px solid grey'}/>

          <HStack
            mt={4}
            color={"blue.800"}
            display={"flex"}
            justifyContent={"end"}
          >
            <Text>Go pro Today</Text>
            <MdArrowOutward />
          </HStack>

        </Box>
      </GridItem>
      <GridItem>
        <PaymentMethodCard/>
      </GridItem>
    </Grid>
  );
}

export default PlanCard;
