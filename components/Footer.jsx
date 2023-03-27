import React from 'react'
import {Box, Image, Text, Flex} from '@chakra-ui/react'
import Logo from '../src/assets/openai.png';

const Footer = () => {
  return (
    <Box marginTop={50}>
       <Flex>
            <Image src={Logo} marginRight={1}/>
            <Text>Powered By Open AI</Text>
        </Flex> 
        <Box marginTop={50}>
          Developed by <a href='https://unique-you.us' style={{color: 'blue'}} target="_blank">Unique-You</a>
        </Box>
    </Box>
  )
}

export default Footer