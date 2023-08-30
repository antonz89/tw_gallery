import { SimpleGrid,Box, Image, Text} from "@chakra-ui/react";
import { Icon } from '@chakra-ui/react'
import { AiOutlineHeart,AiTwotoneHeart } from "react-icons/ai";
import img1 from "../pics/1.png"
import img2 from "../pics/2.png"
import img3 from "../pics/3.png"
import img4 from "../pics/4.png"




const Body =()=>{
    return(
        <>
            <SimpleGrid
                minChildWidth='330px'
                paddingTop={{base: '35px',lg:'50px' }} 
                >
           
                <Box 
                    align='center' 
                    paddingTop={{base:"0px", lg:"20px"}}
                    
                >
                    
                    <Image 
                        src={img1}            
                        alt='one' 
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
                    paddingTop={{base: '5px',lg:'105px' }}
                    marginTop={{base:"10px"}}
                    
                >
                    <Text as='i'><b>"Beautiful Title"</b></Text><br/>
                    <br/>
                    <Text>Artist: Tamara Williams</Text>
                    <br/>
                    <Text>Dallas,USA</Text>
                    <br/>
                    <Text>$450</Text>
                    <br/>
                    <Icon as={AiOutlineHeart}/>

                </Box>

            </SimpleGrid>

            {/* --------------------Second Image------------------- */}

            <SimpleGrid
                minChildWidth='330px'
                paddingTop={{base: '0px',lg:'0px' }} 
                // backgroundColor="lightblue"
                marginTop={{base: '100px', lg:'50px' }} 
                
                >
           
                <Box 
                    align='center'
                    margin='0px' 
                    paddingTop={{base:"30px",lg:"20px"}}
                    
                    >
                    
                    <Image 
                        src={img2} 
                        alt='two' 
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
                    paddingTop={{base: '5px',lg:'75px' }}
                    marginTop={{base:"10px"}}
                >
                        
                    <Text as='i'><b>"Beautiful Title"</b></Text><br/>
                    <br/>
                    <Text>Artist: Tamara Williams</Text>
                    <br/>
                    <Text>Dallas,USA</Text>
                    <br/>
                    <Text>$450</Text>
                    <br/>
                    <Icon as={AiTwotoneHeart}/>

                </Box>
            
            </SimpleGrid>

            {/* ----------------Third IMG---------------- */}

            <SimpleGrid
                minChildWidth='330px'
                paddingTop={{base: '0px',lg:'0px' }} 
                marginTop={{base: '130px',lg:'50px'}} 
                // backgroundColor="lightgray"
                >
           
                <Box 
                    align='center' 
                    paddingTop={{base:"0px", lg:"20px"}}
                    
                >
                    
                    <Image 
                        src={img3}            
                        alt='one' 
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
                    paddingTop={{base: '5px',lg:'105px' }}
                    marginTop={{base:"10px"}}
                    
                >
                    <Text as='i'><b>"Colgada De Ver Corazon"</b></Text><br/>
                    <br/>
                    <Text>Artist: Unknown</Text>
                    <br/>
                    <Text>Quintana Roo, Mexico</Text>
                    <br/>
                    <Text>$350</Text>
                    <br/>
                    <Icon as={AiOutlineHeart}/>

                </Box>

            </SimpleGrid>
            {/* ----------------Fourth IMG---------------- */}

            <SimpleGrid
                minChildWidth='330px'
                paddingTop={{base: '0px',lg:'0px' }}
                marginTop={{base:'130px',lg:'50px'}}   
                >
           
                <Box 
                    align='center' 
                    paddingTop={{base:"0px", lg:"20px"}}
                    
                >
                    
                    <Image 
                        src={img4}            
                        alt='one' 
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
                    paddingTop={{base: '5px',lg:'105px' }}
                    marginTop={{base:"10px"}}
                    
                >
                    <Text as='i'><b>"Beautiful Title"</b></Text><br/>
                    <br/>
                    <Text>Artist: Julia Panchenko</Text>
                    <br/>
                    <Text>Santa Maria Capua Vetere, Italy</Text>
                    <br/>
                    <Text>$300</Text>
                    <br/>
                    <Icon as={AiOutlineHeart}/>

                </Box>

            </SimpleGrid>


        </>
    )
}

export default Body;

