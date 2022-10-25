import {Box, Flex, Text, Tag, Spacer, Button, Icon, HStack} from '@chakra-ui/react'
import { HiCalendar } from "react-icons/hi";
import { FaYoutube} from "react-icons/fa";
import { Link } from '@chakra-ui/react'


export function MissionBoxes({name,success,date,article,video,patch}){


    return(
        <>
    <Box border = "1px" borderColor = "gray.200" p = {4} m = {4} ml = {{base: 4, md: "50px"}}  mr = {{base: 4, md: "50px"}} borderRadius = "lg"> 
        
        <Flex >

            <Text fontSize = {{base: "md", md: "2xl"}} >
                <strong >{name}</strong> <Link href={patch} color = "transparent" isExternal> <Tag colorScheme = "blackAlpha" mt = {{ base: 0, md: 2 }}
                fontSize = 'xs'>patch</Tag> </Link> 
            </Text>
            <Spacer />
            <Tag p = {2}  colorScheme = {success ? "green" : "red"}  >
                {success ? "Success" : "Failure"} 
            </Tag>

        </Flex>

        <Flex align = "center" >
            
            <Icon as = {HiCalendar} color = "gray.600"></Icon>
            <Text color = 'gray.500'>{date.split('T')[0]}</Text>

        </Flex>
        
        <HStack>

            <Link href={article} color = "transparent" isExternal>
            <Button mt = {4} colorScheme = "blue" size = {{base: "xs", md: "md"}} >More Details</Button>
            </Link>

            <Link href={video} color = "transparent" isExternal>
            <Button mt = {4} colorScheme = "red" size = {{base: "xs", md: "md"}} leftIcon={<FaYoutube />} >Video</Button>
            </Link>

        </HStack>

    </Box>
        
        </>
    )

    
}
