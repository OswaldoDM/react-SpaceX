import { useEffect, useState } from "react"
import { getAllLaunches } from "../services/FetchAPI";
import { MissionBoxes } from "./MissionBoxes";
import { Pagination } from "./Pagination";
import {Spinner,Flex} from '@chakra-ui/react'


export function Missions(){       

const [launches, setLaunches] = useState([])
const [currentPage, setCurrentPage] = useState(1)

const postPerPage = 10
const lastPost = currentPage * postPerPage
const firstPost = lastPost - postPerPage
const currentPosts = launches.slice(firstPost,lastPost)


useEffect(() => {
  getAllLaunches() .then(setLaunches) .catch(console.error)
}, [])
    

    return(
        
        <>
        {launches.length === 0 ? 

        <Flex justify = 'center' > <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' mt = {10}/> </Flex>

        :

        <section>
        {currentPosts.map( mission => <MissionBoxes {...mission} key = {mission.name} /> )}
        <Pagination setCurrentPage = {setCurrentPage} />
        </section>

        }      

        </>
    )
}


        

          
          
        
          

                 
         
         












