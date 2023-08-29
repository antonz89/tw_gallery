import {Center,Box,Text} from "@chakra-ui/react"


const Contact = ()=>{

    return(
        <>
            <Center>
                <Box
                    width={{lg:"600px"}}
                    height={{lg:"400px"}}
                    bg="lightcoral">


                        <Text 
                            align="center"
                        >Contact Us</Text>
                        <Text>Your Email:</Text>
                        <Text>Your Message:</Text>
                    
                </Box>
            </Center>
        </>
    )
}

export default Contact;