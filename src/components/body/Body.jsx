import { SimpleGrid,Box, Image, Text} from "@chakra-ui/react";
import { Icon } from '@chakra-ui/react'
import { AiOutlineHeart,AiTwotoneHeart } from "react-icons/ai";



const Body =()=>{
    return(
        <>
            <SimpleGrid
                minChildWidth='330px'
                paddingTop={{base: '5px',lg:'50px' }} 
                >
           
                <Box 
                    align='center' 
                    paddingTop={{base:"0px", lg:"20px"}}
                    
                >
                    
                    <Image 
                        src='https://3.bp.blogspot.com/-MOEVQYZK1CA/UTK7svoxbHI/AAAAAAAABn8/e55cnn6l8U4/s1600/DSC_3281.JPG' 
                        alt='Dan Abramov' 
                        height={{base: '300px',lg: '400px'}}
                        boxShadow='dark-lg' 
                        p='2' 
                        rounded='md' 
                        bg='white'
                    />
                   
                </Box>

                <Box
                    height={{base: '170px',lg: '430px' }}
                    borderLeftColor={{base: 'white',lg: 'black' }}
                    borderTopColor={{base: 'lightgrey',lg: 'white' }}
                    borderLeftStyle='solid'
                    borderWidth='1px'
                    borderBottomColor={{base: 'white',lg: 'white' }}
                    align="center"
                    paddingTop={{base: '5px',lg:'125px' }}
                    marginTop={{base:"10px"}}
                    
                >
                    <Text as='i'><b>"Beautiful Title"</b></Text><br/>
                    <br/>
                    <Text>Lorem ipsum dolor sit amet consectetur, adipisicin.</Text>
                    <br/>
                    <Text>$450</Text>
                    <br/>
                    <Icon as={AiOutlineHeart}/>

                </Box>

            </SimpleGrid>

            {/* --------------------Second Image------------------- */}

            <SimpleGrid
                minChildWidth='330px'
                paddingTop={{base: '40px',lg:'50px' }} 
                >
           
                <Box 
                    align='center'
                    margin='0px' 
                    paddingTop={{base:"0px",lg:"20px"}}
                    >
                    
                    <Image 
                        src='https://images.wisegeek.com/landscape-painting.jpg' 
                        alt='Dan Abramov' 
                        height={{base: '270px', md:'400',lg: '350px' }}
                        boxShadow='dark-lg' 
                        p='2' 
                        rounded='md' 
                        bg='white'
                        
                        
                    />
                   
                </Box>

                <Box
                    height={{base: '170px',lg: '390px' }}
                    borderLeftColor={{base: 'white',lg: 'black' }}
                    borderTopColor={{base: 'lightgrey',lg: 'white' }}
                    borderLeftStyle='solid'
                    borderWidth='1px'
                    borderBottomColor={{base: 'white',lg: 'white' }}
                    align="center"
                    paddingTop={{base: '5px',lg:'125px' }}
                    marginTop={{base:"10px"}}
                >
                        
                    <Text as='i'><b>"Beautiful Title"</b></Text><br/>
                    <br/>
                    <Text>Lorem ipsum dolor sit amet consectetur, adipisicin.</Text>
                    <br/>
                    <Text>$450</Text>
                    <br/>
                    <Icon as={AiTwotoneHeart}/>

                </Box>
            
            </SimpleGrid>
        </>
    )
}

export default Body;

