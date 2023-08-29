import {Box} from "@chakra-ui/react"
import { Icon} from '@chakra-ui/react'
import { FaPenFancy} from "react-icons/fa";

const TopNav=()=>{
    return(
        <>
            <Box bg="lighgray" alignContent="right" align="right">
                <Icon 
                    as={FaPenFancy} 
                    boxSize={8} 
                    marginTop={{base:"5px", lg:"20px"}}
                    marginRight={{base:"5px", lg: "20px"}}
                    

                    
                    
                />
            </Box>
            
        </>
    )
}
export default TopNav;