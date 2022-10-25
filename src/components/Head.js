import {Box,Text, Heading,Image, Center} from '@chakra-ui/react'
import photo from '../assets/photo.jpg'

export function Head() {

    return(
    <>
        <Box textAlign = "center" mt = "60px" mb = "50px">

            <Center>
            <Image
                borderRadius='full'
                boxSize='100px'
                src = {photo}
                alt='Launch'
                mb = {{base: 5, md: 2, lg: 1}}
            />
            </Center>

            <Heading pr = "10px" pl = "10px" fontSize = {{base: "32px", md: "50px"}} fontFamily = "InterEB">
                All the Space X missions in one place.
            </Heading>            

            <Text fontSize = {{base: "sm", md: "xl"}} mt = "5px">
                Check all the Space X missions so far.
            </Text>

        </Box>
    </>
    )
}