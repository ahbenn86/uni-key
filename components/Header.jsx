import React from 'react'
import { Heading, Image, Text } from '@chakra-ui/react'
import Logo from '../src/assets/unq-you-logo.svg'; 

const Header = () => {
  return (
    <>
    <Image src={Logo} alt='unique you logo' width={100} marginBottom='1rem'/>
    <Heading color='black' marginBottom='1rem'>
        Uni-Key Keyword Extractor
    </Heading>
    <Text fontSize={25} textAlign='center'>
        Paste in your text below and we'll extract the keywords for you.
    </Text>
    </>
  )
}

export default Header