

import { Flex, HStack } from '@chakra-ui/react';
import SideDrawer from '../components/Sidebar/SideDrawer';
import './globals.css'
import Header from '../components/items/Header';


export default function Home() {
  return (
  
    <Flex>
      <SideDrawer/>
      <Header/>
    </Flex>
    
   
  );
}
