import { Center } from "@chakra-ui/react";

const Footer=()=>{
    return(
        <>
        <footer>
            <Center marginTop="30px" bgGradient='linear(to-r, lightgray, gray)'>
               © Tamara Williams 2023

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