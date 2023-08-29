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
           
                <Box align='center' margin='20px'>
                    
                    <Image src='https://3.bp.blogspot.com/-MOEVQYZK1CA/UTK7svoxbHI/AAAAAAAABn8/e55cnn6l8U4/s1600/DSC_3281.JPG' alt='Dan Abramov' height={{base: '300px', md:'450',lg: '450px' }}/>
                   
                </Box>

                <Box
                    height={{base: '170px', md:'500',lg: '500px' }}
                    borderLeftColor={{base: 'white',lg: 'black' }}
                    borderTopColor='white'
                    borderLeftStyle='solid'
                    borderWidth='1px'
                    
                    borderBottomColor={{base: 'white',lg: 'white' }}
                    align="center"
                    paddingTop={{base: '5px',lg:'175px' }}
                    
                 
                    >
                        
                        <Text as='i'><b>"Beautiful Title"</b></Text><br/>
                        <br/>
                        <Text>Lorem ipsum dolor sit amet consectetur, adipisicin.</Text>
                        <br/>
                        <Text>$450</Text>
                        <br/>
                        <Icon as={AiOutlineHeart}/>


                </Box>

                {/* <Center>
                <Icon as={PiWaveTriangleDuotone}/>
                <Icon as={PiWaveTriangleDuotone}/>
                <Icon as={PiWaveTriangleDuotone}/>
                <Icon as={PiWaveTriangleDuotone}/>
                <Icon as={PiWaveTriangleDuotone}/>
                <Icon as={PiWaveTriangleDuotone}/>
                <Icon as={PiWaveTriangleDuotone}/>
                <Icon as={PiWaveTriangleDuotone}/>
                <Icon as={PiWaveTriangleDuotone}/>
                <Icon as={PiWaveTriangleDuotone}/>
                <Icon as={PiWaveTriangleDuotone}/>
                <Icon as={PiWaveTriangleDuotone}/>
                <Icon as={PiWaveTriangleDuotone}/>
                <Icon as={PiWaveTriangleDuotone}/>
                <Icon as={PiWaveTriangleDuotone}/>
                <Icon as={PiWaveTriangleDuotone}/>
                </Center> */}

            
            </SimpleGrid>

            {/* --------------------Second Image------------------- */}

            <SimpleGrid
                minChildWidth='330px'
                paddingTop={{base: '40px',lg:'100px' }} 
                >
           
                <Box align='center' margin='20px'>
                    
                    <Image src='https://images.wisegeek.com/landscape-painting.jpg' alt='Dan Abramov' height={{base: '250px', md:'400',lg: '370px' }}/>
                   
                </Box>

                <Box
                    height={{base: '170px', md:'500',lg: '440px' }}
                    borderLeftColor={{base: 'white',lg: 'black' }}
                    borderTopColor='white'
                    borderLeftStyle='solid'
                    borderWidth='1px'
                    
                    borderBottomColor={{base: 'white',lg: 'white' }}
                    align="center"
                    paddingTop={{base: '5px',lg:'145px' }}
                    
                 
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

 {/* align={{base: 'center', md: 'right', lg: 'right' }} */}