import React from 'react'
import {Box, Image, Text, Flex} from '@chakra-ui/react'
import logo from '../src/assets/openai.png';

const Footer = () => {
  return (
    <Box marginTop={50}>
       <Flex>
            <Image src={logo} marginRight={1}/>
            <Text>Powered By Open AI</Text>
        </Flex> 
    </Box>
  )
}

export default Footer