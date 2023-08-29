import "./header.css"
import { Text,Box,Center } from "@chakra-ui/react";
import { Icon } from '@chakra-ui/react'
import { PiWaveSineDuotone } from 'react-icons/pi';


const Header = ()=>{
    
    return(
        <>

        <Box id="header" 
            padding='15px'
            marginTop={{base: "20px",lg:"0px"}}>
            <Text fontSize='4xl' as='i' id="header-text" fontFamily="sans-serif">Tamara Williams Gallery</Text>
            {/* <h1 id="header-text">Tamara Williams Gallery</h1> */}
            
        </Box>
        
            <Center>
                <Icon align="center" as={PiWaveSineDuotone}/>
                <Icon align="center" as={PiWaveSineDuotone}/>
                <Icon align="center" as={PiWaveSineDuotone}/>
                <Icon align="center" as={PiWaveSineDuotone}/>
                <Icon align="center" as={PiWaveSineDuotone}/>
                <Icon align="center" as={PiWaveSineDuotone}/>
                <Icon align="center" as={PiWaveSineDuotone}/>
                <Icon align="center" as={PiWaveSineDuotone}/>
                <Icon align="center" as={PiWaveSineDuotone}/>
                <Icon align="center" as={PiWaveSineDuotone}/>
                <Icon align="center" as={PiWaveSineDuotone}/>
                <Icon align="center" as={PiWaveSineDuotone}/>
                <Icon align="center" as={PiWaveSineDuotone}/>
                <Icon align="center" as={PiWaveSineDuotone}/>
                <Icon align="center" as={PiWaveSineDuotone}/>
                <Icon align="center" as={PiWaveSineDuotone}/>
                
            </Center>
            
            
       


        </>
    )
}

export default Header;