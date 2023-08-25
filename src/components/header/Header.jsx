import "./header.css"
import { Text,Box } from "@chakra-ui/react";

const Header = ()=>{
    
    return(
        <Box id="header" padding='15px'>
            <Text fontSize='4xl' as='i' id="header-text">Tamara Williams Gallery</Text>
            {/* <h1 id="header-text">Tamara Williams Gallery</h1> */}
        </Box>
    )
}

export default Header;