import { SimpleGrid,Box, Image, Text, Icon} from "@chakra-ui/react";


const Body =()=>{
    return(
        <div id="gallery-body">
            <SimpleGrid
                minChildWidth='330px'
                paddingTop={{base: '5px',lg:'50px' }} 
                >
           
                <Box align='center' margin='20px'>
                    
                    <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' height={{base: '300px', md:'450',lg: '450px' }}/>
                   
                </Box>

                <Box
                    height={{base: '170px', md:'500',lg: '500px' }}
                    borderLeftColor={{base: 'white',lg: 'black' }}
                    borderTopColor='white'
                    // borderBottom='white'
                    borderLeftStyle='solid'
                    borderWidth='1px'
                    
                    borderBottomColor={{base: 'black',lg: 'white' }}
                    align="center"
                    paddingTop={{base: '5px',lg:'175px' }}
                    
                 
                    >
                    
                        <Text>Beautiful Title</Text>
                        <br/>
                        <Text>Lorem ipsum dolor sit amet consectetur, adipisicin.</Text>
                        <br/>
                        <Text>$450</Text>
                        

                </Box>
            
            </SimpleGrid>

        </div>
    )
}

export default Body;

 {/* align={{base: 'center', md: 'right', lg: 'right' }} */}