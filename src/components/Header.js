
import {Flex,Image,Spacer,Button,Link} from '@chakra-ui/react'
import logo from './images/logo.png'
import { MdCall } from "react-icons/md"

export function Header() {

    return(

        <>
        <Flex w = "100%" h = "60px" align = "center" justify = "center" mb = "40px" mt = "10px">           
            
            
            <Flex  >
                <Link href = "https://www.spacex.com/" target = "_blank"><Image src = {logo} width = {{base: "300px", md: "400px"}} ml = {4}></Image></Link>
            </Flex>

            <Spacer />

            <Flex justify = "flex-end"  mr = {{base: 3, md: 6 }} mt = "10px" >
                
                <Link href = "#footer" color = "transparent">
                    <Button rightIcon={<MdCall />} colorScheme = "blue" variant ="solid" size = {{base: "xs", md: "md"}}>
                        Contact
                    </Button>
                </Link>
            </Flex>
                
        </Flex>
        </>
    )
}

               
