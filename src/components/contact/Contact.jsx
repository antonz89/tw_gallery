import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {Center,Box,Text,Input,Textarea,Button} from "@chakra-ui/react"
import {Popover,PopoverTrigger,PopoverContent,PopoverHeader,PopoverCloseButton} from '@chakra-ui/react'


const Contact = ()=>{

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_knvm2fd', 'template_drotywi', form.current, 'ZjiIpIqNRolEKtVzm')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

    return(
        <>
            <Center
                marginTop={{base:"150px",lg:"100px"}}>
                <Box
                    width={{lg:"500px"}}
                    height={{lg:"200px"}}
                    // borderStyle="solid"
                    // borderColor="lightgray"
                    // borderWidth="2px"
                    padding={{base:"10px",lg:"20px"}}
                    
                >

                    <form ref={form} onSubmit={sendEmail}>
                        <Text 
                            align="center"
                        ><b>Contact Us</b></Text>

                        <Input 
                            variant='outline' 
                            placeholder='Enter Your Email' 
                            size='sm'
                            marginTop={{base:"10px",lg:"20px"}}
                            type="email" 
                            name="user_email" 
                            />
                        <Textarea 
                            placeholder='Enter Your Message'
                            marginTop={{base:"10px",lg:"10px"}}
                            height={{lg:"200px"}}
                            name="message"
                            />

<Center>

                        <Popover>
                            <PopoverTrigger>
                                <Button 
                                colorScheme='gray'
                                marginTop="5px"
                                type="submit" 
                                value="Send">Send</Button>
                            </PopoverTrigger>

                            <PopoverContent>
                                {/* <PopoverCloseButton/> */}
                                    <PopoverHeader
                                    bg="lightblue"
                                    >Your Message Was Sent</PopoverHeader>
                            </PopoverContent>
                        </Popover>

                        </Center>

                    </form>

                        
                        
                        
                        {/* <Center>

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

                        </Center> */}

                </Box>
            </Center>
        </>
    )
}

export default Contact;