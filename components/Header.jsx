import React from 'react'
import { Heading, Image, Text } from '@chakra-ui/react'
import Logo from '../src/assets/Uni-key.png'; 

const Header = () => {
  return (
    <>
    <Image src={Logo} alt='unique you logo' width={100} marginBottom='1rem'/>
    <Heading color='black' marginBottom='1rem' className='text'>
        Uni-Key Keyword Extractor
    </Heading>
    <Text fontSize={25} textAlign='center' className='text'>
        Paste in your text below and we'll extract the keywords for you.
    </Text>
    </>
  )
}

export default Header