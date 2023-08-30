import {Center,Box,Text,Input,Textarea,Button} from "@chakra-ui/react"
import {Popover,PopoverTrigger,PopoverContent,PopoverHeader,PopoverCloseButton} from '@chakra-ui/react'


const Contact = ()=>{

    return(
        <>
            <Center
                marginTop={{base:"170px",lg:"100px"}}>
                <Box
                    width={{lg:"500px"}}
                    height={{lg:"200px"}}
                    // borderStyle="solid"
                    // borderColor="lightgray"
                    // borderWidth="2px"
                    padding={{base:"10px",lg:"20px"}}
                    
                >


                        <Text 
                            align="center"
                        ><b>Contact Us</b></Text>

                        <Input 
                            variant='outline' 
                            placeholder='Enter Your Email' 
                            size='sm'
                            marginTop={{base:"10px",lg:"20px"}}
                            />
                        <Textarea 
                            placeholder='Enter Your Message'
                            marginTop={{base:"10px",lg:"10px"}}
                            height={{lg:"200px"}}
                            />

                        <Center>

                            <Popover>
                                <PopoverTrigger>
                                    <Button 
                                    colorScheme='gray'
                                    marginTop="5px">Send</Button>
                                </PopoverTrigger>

                                <PopoverContent>
                                    <PopoverCloseButton />
                                        <PopoverHeader
                                        bg="lightblue">Your Message Was Sent</PopoverHeader>
                               </PopoverContent>
                            </Popover>

                        </Center>

                </Box>
            </Center>
        </>
    )
}

export default Contact;