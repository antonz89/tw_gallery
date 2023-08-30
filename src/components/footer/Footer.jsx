import { Center } from "@chakra-ui/react";

const Footer=()=>{
    return(
        <>
        <footer>
            <Center 
                marginTop={{base:"40px",lg:"160px"}} 
                bgGradient='linear(to-r, lightgray, gray)'>
               © Tamara Williams Gallery 2023

            </Center>
            <Center bgGradient='linear(to-r, green.200, pink.500)'>
                - All Rights reserved -
            </Center>
            <Center bgGradient='linear(to-r, lightgray, gray)'>
            We Will Find You :)
            </Center>
        </footer>
        </>
    )
}

export default Footer;